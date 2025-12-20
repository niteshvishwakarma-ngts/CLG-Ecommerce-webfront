"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    name: "Alex Hales",
    text:
      "The best gear I’ve ever used. The quality is unmatched and the delivery was incredibly fast. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Taylor",
    text:
      "A fantastic range of products. I found exactly the bat I was looking for. The customer service was also very helpful.",
    rating: 5,
  },
  {
    name: "Ben Stokes",
    text:
      "Great prices and easy-to-use website. My order arrived well-packaged and on time. Will definitely shop here again.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-14 bg-[#f9faf9]">
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-10">
          What Our Champions Say
        </h2>

        {/* MOBILE SLIDER */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ item }) {
  return (
    <div
      className="
        bg-white rounded-xl p-6 text-center
        shadow-sm
        transition transform duration-300
        hover:-translate-y-1 hover:shadow-md
      "
    >
      {/* Stars */}
      <div className="flex justify-center gap-1 mb-4">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-green-500 text-green-500"
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        “{item.text}”
      </p>

      {/* Name */}
      <p className="text-sm font-medium text-gray-900">
        – {item.name}
      </p>
    </div>
  );
}
