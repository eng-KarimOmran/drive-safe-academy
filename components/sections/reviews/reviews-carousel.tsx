"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { IVideo } from "@/type/type";
import GetIcon from "@/components/get-icon";

export function ReviewsCarousel({ videos }: { videos: IVideo[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const videoRefs = React.useRef<HTMLVideoElement[]>([]);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  React.useEffect(() => {
    videos.forEach((v, i) => {
      videoRefs.current[i].pause();
      if (i + 1 === current) {
        videoRefs.current[i].preload = "auto";
      }
    });
  }, [current]);

  return (
    <div className="space-y-2 my-4 p-4 bg-accent rounded-2xl">
      <Carousel dir="ltr" setApi={setApi} className="w-9/12 mx-auto max-w-xl">
        <CarouselContent>
          {videos.map((video) => (
            <CarouselItem key={video.id}>
              <div className="md:grid md:grid-cols-2">
                <video
                  src={video.src}
                  ref={(el) => {
                    videoRefs.current[video.id] = el!;
                  }}
                  controls
                  className="mx-auto max-h-96 object-contain rounded-lg"
                  title={video.alt}
                  preload="metadata"
                  playsInline={true}
                />
                <div dir="rtl" className="hidden md:flex flex-col">
                  <div className="flex items-center gap-2 py-2">
                    <span className="text-4xl">{GetIcon("PiStudentFill")}</span>
                    <div>
                      <span>ا / {video.name}</span>
                      <div className="flex items-center gap-1 text-yellow-500 text-xs">
                        {Array.from({ length: 5 }).map((_, i) =>
                          GetIcon("IoIosStar")
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="max-w-11/12">{video.rate}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-muted-foreground text-center text-sm">
        Reviews {current} of {count}
      </div>
    </div>
  );
}
