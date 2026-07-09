import { testimonials } from "./DataReviews";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute right-1/2 top-0 h-125 w-125 translate-x-1/2 -translate-y-1/3 rounded-full bg-green-500/10 blur-[120px]" />

      <header className="relative mx-auto max-w-2xl px-6 text-center">
        <span className="text-sm font-semibold tracking-wide text-green-400">
          آراء المتدربين
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          اسمع من طلاب DriveSafe
        </h2>
        <p className="mt-4 text-base text-neutral-400 sm:text-lg">
          تجارب طلابنا الناجحة في تعلم القيادة
        </p>
      </header>

      <Carousel
        dir="rtl"
        opts={{ direction: "rtl", loop: true }}
        className="relative mx-auto mt-14 w-full max-w-6xl"
      >
        <CarouselContent>
          {testimonials.map((item) => (
            <CarouselItem key={item.video}>
              <div className="flex flex-col items-center gap-10 px-6 lg:flex-row lg:items-stretch lg:gap-12">
                <div className="w-full max-w-75 shrink-0">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/40">
                    <div className="aspect-9/16 w-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${item.video}`}
                        title={`تقييم ${item.name}`}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>

                <div className="hidden flex-1 flex-col justify-center md:flex">
                  <div className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md sm:p-9">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/15 text-sm font-bold text-green-400">
                        {item.name.charAt(0)}
                      </span>

                      <span className="text-sm font-semibold text-white">
                        {item.name}
                      </span>
                    </div>

                    <p className="mt-5 flex-1 text-base leading-relaxed text-neutral-300 sm:text-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-8 flex items-center justify-center gap-4">
          <CarouselPrevious className="static translate-y-0 border-white/10 bg-white/5 text-white hover:border-green-500 hover:text-green-400" />
          <CarouselNext className="static translate-y-0 border-white/10 bg-white/5 text-white hover:border-green-500 hover:text-green-400" />
        </div>
      </Carousel>
    </section>
  );
}
