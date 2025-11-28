"use client";
import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { VideoItem } from "./sections/reviews";

export function ScrollBarReviews({ Videos }: { Videos: VideoItem[] }) {
  const videoRefs = React.useRef<HTMLVideoElement[]>([]);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((vid, idx) => {
      if (vid && idx !== index) vid.pause();
    });
  };

  return (
    <ScrollArea className="w-full rounded-md border whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {Videos.map((video, index) => (
          <figure
            key={video.id}
            className="shrink-0 w-54 h-96 rounded-lg overflow-hidden bg-black"
          >
            <video
              ref={(el) => {
                if (el) videoRefs.current[index] = el;
              }}
              src={video.src}
              controls
              className="w-full h-full object-cover"
              title={video.alt}
              onPlay={() => handlePlay(index)}
            />
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
