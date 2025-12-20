"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PromoBannersPage() {
  const [loading, setLoading] = useState(true);

  // simulate loading (remove when using real API)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT BANNER */}
        {loading ? (
          <div className="h-[180px] md:h-[220px] rounded-xl bg-gray-200 animate-pulse" />
        ) : (
          <div
            className="
              relative rounded-xl overflow-hidden
              h-[180px] md:h-[220px]
              bg-gradient-to-r from-[#cfe3a2] to-[#9bb06d]
              transition transform duration-300
              hover:-translate-y-1 hover:shadow-lg
            "
          >
            {/* Image */}
            <div className="absolute bottom-0 right-4">
              <Image
                src="/promo/helmets.png"
                alt="Cricket Helmets"
                width={220}
                height={160}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-semibold text-lg md:text-xl">
                20% Off All Helmets
              </p>
            </div>
          </div>
        )}

        {/* RIGHT BANNER */}
        {loading ? (
          <div className="h-[180px] md:h-[220px] rounded-xl bg-gray-200 animate-pulse" />
        ) : (
          <div
            className="
              relative rounded-xl overflow-hidden
              h-[180px] md:h-[220px]
              bg-gradient-to-r from-[#7fd1d1] to-[#4faeb0]
              transition transform duration-300
              hover:-translate-y-1 hover:shadow-lg
            "
          >
            {/* Image */}
            <div className="absolute bottom-0 right-6">
              <Image
                src="/promo/box.png"
                alt="Free Shipping"
                width={140}
                height={160}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-semibold text-lg md:text-xl leading-tight">
                Free Shipping on Orders Over <br />
                <span className="text-xl md:text-2xl">$100</span>
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
