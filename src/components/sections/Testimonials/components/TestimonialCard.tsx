"use client";

import { useState } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa6";
import { testimonialsData } from "../testimonialsData";

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonialsData)[0];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl flex flex-col">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${testimonial.video}`}
        title={testimonial.name}
        allowFullScreen
      />

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-bold">{testimonial.name}</h3>

          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>

        <FaQuoteRight className="mb-3 text-2xl text-primary/30" />

        <p
          className={`leading-7 text-gray-600 ${
            isExpanded ? "" : "line-clamp-5"
          }`}
        >
          {testimonial.text}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 w-fit text-sm font-bold text-primary"
        >
          {isExpanded ? "عرض أقل" : "قراءة المزيد"}
        </button>
      </div>
    </article>
  );
};

export default TestimonialCard;
