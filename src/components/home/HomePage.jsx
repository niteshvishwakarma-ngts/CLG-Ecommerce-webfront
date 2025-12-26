
  "use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CategoryStripPage from "../categorystrip/page";

const slides = [
  {
    title: "Unleash Your Power",
    subtitle: "Shop the Latest 2024 Cricket Bats",
    image: "/strip.webp",
  },
  {
    title: "Play Like a Pro",
    subtitle: "Premium Bats for Every Player",
    image: "/heroimage.png",
  },
  {
    title: "Dominate the Pitch",
    subtitle: "Engineered for Maximum Performance",
    image: "/heroimage.png",  
  },
];

export default function HomePage() {
  const [loadedSlides, setLoadedSlides] = useState({});

  return (
    <>
    <CategoryStripPage />
    <section className="w-full px-4 md:px-6 lg:px-8 mt-4">
      <div className="max-w-[1400px] mx-auto  overflow-hidden relative">

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Pause on hover
          }}
          // pagination={{ type: "progressbar" }}
          navigation
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-[240px] sm:h-[330px] md:h-[460px] lg:h-[330px]"
              >
                {/* Skeleton Loader */}
                {!loadedSlides[index] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                )}

                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className={`object-full transition-opacity duration-700 ${
                    loadedSlides[index] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoadingComplete={() =>
                    setLoadedSlides((prev) => ({
                      ...prev,
                      [index]: true,
                    }))
                  }
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center md:justify-start">
                  <div className="px-4 sm:px-8 md:px-12 max-w-xl text-center md:text-left">

                    <motion.h1
                      key={slide.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      className="text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white/90 text-sm sm:text-base md:text-lg mb-5"
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="bg-[#00FF6A] hover:bg-[#00e05f] text-black font-semibold px-6 py-2.5 rounded-md text-sm sm:text-base transition"
                    >
                      Shop Bats Now
                    </motion.button>

                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
    </>
  );
}
