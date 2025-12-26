
  "use client";

import Image from "next/image";
import { Heart, Share2 } from "lucide-react";

const wishlist = [
  {
    id: 1,
    name: "Kookaburra Ghost Pro Bat",
    price: 450.0,
    image: "/wishlist/bat1.jpg",
  },
  {
    id: 2,
    name: "Gray-Nicolls Legend Bat",
    price: 599.99,
    image: "/wishlist/bat2.jpg",
  },
  {
    id: 3,
    name: "SG Test Cricket Ball",
    price: 25.0,
    image: "/wishlist/ball.jpg",
  },
  {
    id: 4,
    name: "Masuri Vision Series Helmet",
    price: 150.0,
    image: "/wishlist/helmet.jpg",
  },
];

export default function WishlistPage() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-10 bg-[#f6f7f6] min-h-screen">
      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-1">
              My Wishlist
            </h1>
            <p className="text-sm text-gray-500">
              Your saved cricket products are waiting for you.
            </p>
          </div>

          <button className="flex items-center gap-2 bg-white border rounded-md px-4 py-2 text-sm hover:bg-gray-50">
            <Share2 size={16} />
            Share Wishlist
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              {/* IMAGE */}
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

                {/* HEART */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  <Heart
                    size={18}
                    className="fill-[#18f24e] text-[#18f24e]"
                  />
                </button>
              </div>

              {/* INFO */}
              <p className="text-sm font-medium mb-1">
                {item.name}
              </p>
              <p className="text-sm text-gray-700 mb-3">
                ${item.price.toFixed(2)}
              </p>

              {/* CTA */}
              <button className="w-full bg-[#18f24e] hover:bg-[#14d843]
                text-black py-2 rounded-md text-sm font-medium transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
