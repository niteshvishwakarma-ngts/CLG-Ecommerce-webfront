"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  { label: "Bats", icon: "/cricketImage.png", badge: "NEW", href: "/minutes" },
  { label: "Balls", icon: "/cricketImage.png", href: "/mobiles" },
  { label: "Gloves", icon: "/cricketImage.png", href: "/fashion", dropdown: true },
  { label: "Tshirts", icon: "/cricketImage.png", href: "/electronics", dropdown: true },
  { label: "Pads", icon: "/cricketImage.png", href: "/tv-appliances" },
  { label: "Lower", icon: "/cricketImage.png", href: "/home", dropdown: true },
  { label: "Helmets", icon: "/cricketImage.png", href: "/flights" },
  
];

export default function CategoryStripPage() {
  return (
    <section className="w-full bg-white ">
      <div className="max-w-[1400px] mx-auto px-4  ">
        <div className="flex gap-20 py-2 overflow-x-auto scrollbar-hide justify-center">

          {categories.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center min-w-[80px] group"
            >
              {/* ICON */}
              <div className="relative w-24 h-24 rounded-xl flex items-center justify-center bg-gray-50 group-hover:scale-105 transition">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={80}
                  height={80}
                  className="object-contain"
                />

                {/* NEW BADGE */}
                {item.badge && (
                  <span className="absolute -top-1 -right-2 text-[10px] bg-blue-600 text-white px-1.5 rounded">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* LABEL */}
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs font-medium text-gray-800 group-hover:text-green-600">
                  {item.label}
                </span>
                {item.dropdown && (
                  <span className="text-xs text-gray-400">▼</span>
                )}
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
