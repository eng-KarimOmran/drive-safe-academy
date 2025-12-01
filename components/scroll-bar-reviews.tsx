"use client";
import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { VideoItem } from "./sections/reviews/reviews";

export function ScrollBarReviews({ Videos }: { Videos: VideoItem[] }) {
  const videoRefs = React.useRef<HTMLVideoElement[]>([]);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((vid, idx) => {
      if (vid && idx !== index) vid.pause();
    });
  };

  return (

  );
}
