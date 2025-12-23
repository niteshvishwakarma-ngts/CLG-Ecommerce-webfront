"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
  const [loading, setLoading] = useState(true);

  // simulate loading (remove when API added)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-14 bg-[#f9faf9]">
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-10">
          What Our Champions Say
        </h2>

        {/* ================= MOBILE ================= */}
        <div className="block md:hidden">
          {loading ? (
            <SkeletonCard />
          ) : (
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* ================= TABLET + DESKTOP ================= */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : testimonials.map((item, index) => (
                <TestimonialCard key={index} item={item} />
              ))}
        </div>

      </div>
    </section>
  );
}

/* ================= CARD ================= */
function TestimonialCard({ item }) {
  return (
    <div
      className="
        bg-white rounded-xl text-center
        p-5 md:p-4 lg:p-6
        shadow-sm
        transition transform duration-300
        hover:-translate-y-1 hover:shadow-md
      "
    >
      {/* Stars */}
      <div className="flex justify-center gap-1 mb-3 md:mb-2 lg:mb-4">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-green-500 text-green-500"
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 text-sm md:text-[13px] lg:text-sm leading-relaxed mb-3">
        “{item.text}”
      </p>

      {/* Name */}
      <p className="text-sm font-medium text-gray-900">
        – {item.name}
      </p>
    </div>
  );
}

/* ================= SKELETON ================= */
function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl p-5 md:p-4 lg:p-6 shadow-sm animate-pulse">
      <div className="flex justify-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
        ))}
      </div>
      <div className="h-3 bg-gray-200 rounded mb-2" />
      <div className="h-3 bg-gray-200 rounded mb-2" />
      <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto mb-4" />
      <div className="h-3 bg-gray-300 rounded w-1/3 mx-auto" />
    </div>
  );
}
