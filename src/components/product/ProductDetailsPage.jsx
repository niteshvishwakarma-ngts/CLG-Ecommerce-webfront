  "use client";

import Image from "next/image";
import { Star, Heart } from "lucide-react";
import { useRouter } from "next/navigation";


export default function ProductDetailsPage({ id }) {
  const router = useRouter();
  return (
    <section className="w-full bg-[#f6f7f6] px-4 md:px-6 lg:px-8 py-8">
      <div className="max-w-[1400px] mx-auto">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-6">
          Home <span className="mx-1">›</span> Bats{" "}
          <span className="mx-1">›</span> English Willow{" "}
          <span className="mx-1">›</span>
          <span className="text-gray-700">
            Kookaburra Ghost Pro 4.0
          </span>
        </p>

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">

          {/* LEFT: IMAGES */}
          <div>
            <div className="bg-[#0f6c66] rounded-xl p-10 flex justify-center mb-4">
              <Image
                src="/download.jpeg"
                alt="Bat"
                width={320}
                height={520}
                className="object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {["download", "download", "download", "download"].map((img) => (
                <div
                  key={img}
                  className="w-20 h-20 bg-white rounded-lg border flex items-center justify-center cursor-pointer"
                >
                  <Image
                    src={`/${img}.jpeg`}
                    alt="thumbnail"
                    width={60}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: INFO */}
          <div>
            <p className="text-xs text-green-500 font-medium mb-1">
              KOOKABURRA
            </p>

            <h1 className="text-2xl font-semibold mb-2">
              Kookaburra Ghost Pro 4.0 Cricket Bat
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-green-500 text-green-500"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                120 reviews
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <p className="text-2xl font-semibold text-green-500">
                $299.99
              </p>
              <p className="text-sm line-through text-gray-400">
                $349.99
              </p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <select className="border rounded-md px-3 py-2 text-sm">
                <option>Short Handle (SH)</option>
              </select>
              <select className="border rounded-md px-3 py-2 text-sm">
                <option>2lb 8oz</option>
              </select>
            </div>

            {/* Quantity + Cart */}
            <div className="flex items-center gap-4 mb-6">
              <input
                type="number"
                defaultValue={1}
                className="w-16 border rounded-md text-center py-2"
              />
              <button className="flex-1 bg-green-500 text-white rounded-md py-2 text-sm">
                Add to Cart
              </button>
              <button className="p-2 border rounded-md">
                <Heart size={18} />
              </button>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-sm font-medium mb-1">
                Description
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Kookaburra Ghost Pro 4.0 is expertly crafted
                for the modern-day cricketer. Made from premium
                Grade A unbleached English Willow, it boasts a
                massive profile with high spine and big edges,
                providing an exceptional sweet spot for
                powerful stroke play.
              </p>
            </div>
          </div>
        </div>

        {/* SPECIFICATIONS */}
        <div className="mb-14">
          <h3 className="text-lg font-semibold mb-4">
            Specifications
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 text-sm text-gray-600">
            <p>Willow Type: <span className="text-gray-800">English Willow (Grade A)</span></p>
            <p>Handle Type: <span className="text-gray-800">12 Piece Sarawak Cane</span></p>
            <p>Sweet Spot: <span className="text-gray-800">Mid-High</span></p>
            <p>Edge Profile: <span className="text-gray-800">Big Edge Square</span></p>
            <p>Face Profile: <span className="text-gray-800">Flat Power Face</span></p>
            <p>Grip: <span className="text-gray-800">Zig Zag Grip</span></p>
          </div>
        </div>

        {/* CUSTOMER REVIEWS */}
        <div className="mb-16 w-full md:max-w-lg">
          <h3 className="text-lg font-semibold mb-4">
            Customer Reviews
          </h3>

          <div className="flex gap-10 items-start">
            <div>
              <p className="text-3xl font-semibold">4.5</p>
              <div className="flex gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-green-500 text-green-500"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Based on 120 reviews
              </p>
            </div>

            <div className="flex-1 space-y-2">
              {[75, 15, 5, 3, 2].map((val, i) => (
                <div key={i} className="flex items-center gap-2">
                  <p className="text-sm w-6">{5 - i}</p>
                  <div className="flex-1 bg-gray-200 h-2 rounded">
                    <div
                      className="bg-green-500 h-2 rounded "
                      style={{ width: `${val}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 w-8">
                    {val}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        <div>
          <h3 className="text-lg font-semibold mb-6">
            You Might Also Like
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              "download",
              "download",
              "download",
              "download",
            ].map((item) => (
              <div
                key={item.id}
                    onClick={() => router.push(`/products/${item.id}`)}

                className="bg-white rounded-xl p-4 hover:shadow-md transition"
              >
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <Image
                    src={`/${item}.jpeg`}
                    alt={item}
                    width={120}
                    height={120}
                  />
                </div>
                <p className="text-sm font-medium">
                  Kookaburra Pro {item.name}
                </p>
                <p className="text-sm text-gray-600">$89.99</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

