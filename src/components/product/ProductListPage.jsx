
  "use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";


const products = [
  {
    id: "1",
    brand: "Kookaburra",
    name: "Kahuna Pro Bat",
    price: "$450.00",
    image: "/download.jpeg",
  },
  {
    id: "2",
    brand: "Gray-Nicolls",
    name: "Hypernova 1.0",
    price: "$399.00",
    image: "/download.jpeg",
  },
  {
    id: "3",
    brand: "New Balance",
    name: "DC 1080",
    price: "$520.00",
    image: "/download.jpeg",
  },
  {
    id: "4",
    brand: "SG",
    name: "Sunny Tonny Icon",
    price: "$350.00",
    image: "/download.jpeg",
  },
  {
    id: "5",
    brand: "Kookaburra",
    name: "Ghost Pro 4.0",
    price: "$290.00",
    image: "/download.jpeg",
  },
  {
    id: "6",
    brand: "New Balance",
    name: "TC 560",
    price: "$250.00",
    image: "/download.jpeg",
  },
];


export default function ProductListPage() {
  const router = useRouter();

    return (
    <section className="w-full bg-[#f6f7f6] px-4 md:px-6 lg:px-8 py-8">
      <div className="max-w-[1400px] mx-auto">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-3">
          Home <span className="mx-1">›</span> Bats{" "}
          <span className="mx-1">›</span>
          <span className="text-gray-700">English Willow</span>
        </p>

        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-1">
              Cricket Bats
            </h1>
            <p className="text-sm text-gray-500">
              Showing 1–12 of 86 products
            </p>
          </div>

          <button className="flex items-center gap-2 bg-white border rounded-md px-4 py-2 text-sm">
            Sort by: Newest
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">

          {/* FILTERS */}
          <aside className="bg-white rounded-xl p-5 h-fit">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Filters</h3>
              <button className="text-sm text-green-500">
                Clear All
              </button>
            </div>

            {/* Brand */}
            <div className="mb-5">
              <button className="flex justify-between w-full text-sm font-medium mb-3">
                Brand <ChevronDown size={14} />
              </button>

              <div className="space-y-2 text-sm">
                {[
                  "Kookaburra",
                  "Gray-Nicolls",
                  "SG",
                  "New Balance",
                ].map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      className="accent-green-500"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-5">
              <button className="flex justify-between w-full text-sm font-medium">
                Price Range <ChevronDown size={14} />
              </button>
            </div>

            {/* Product Type */}
            <div className="mb-6">
              <button className="flex justify-between w-full text-sm font-medium">
                Product Type <ChevronDown size={14} />
              </button>
            </div>

            <button className="w-full bg-green-500 text-white rounded-md py-2 text-sm">
              Apply Filters
            </button>
          </aside>

          {/* PRODUCTS */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((item) => (
  <div
    key={item.id}
    onClick={() => router.push(`/products/${item.id}`)}
    className="bg-white rounded-xl p-4 hover:shadow-md transition cursor-pointer"
  >

                  <div className="aspect-square bg-[#eef0ee] rounded-lg flex items-center justify-center mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={220}
                      height={220}
                      className="object-contain"
                    />
                  </div>

                  <p className="text-xs text-gray-500">
                    {item.brand}
                  </p>
                  <p className="text-sm font-medium">
                    {item.name}
                  </p>
                  <p className="text-green-500 font-semibold mt-1">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-10">
              <button className="px-3 py-1 rounded-md border">‹</button>
              <button className="px-3 py-1 rounded-md bg-green-500 text-white">
                1
              </button>
              <button className="px-3 py-1 rounded-md border">2</button>
              <button className="px-3 py-1 rounded-md border">3</button>
              <span className="px-2">…</span>
              <button className="px-3 py-1 rounded-md border">8</button>
              <button className="px-3 py-1 rounded-md border">›</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
