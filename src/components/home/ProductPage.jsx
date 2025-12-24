"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import productInstance from "@/api/products/product.api";

export default function ProductPage() {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState({});

  // ================= FETCH PRODUCTS =================
  useEffect(() => {
    const load = async () => {
      try {
        const res = await productInstance.getTopPicks();
                console.log("Fetching top picks...",res);


        let list = [];

        if (Array.isArray(res)) {
          list = res;
        } else if (Array.isArray(res?.data)) {
          list = res.data;
        } else if (Array.isArray(res?.data?.data)) {
          list = res.data.data;
        }

        setProducts(list);
      } catch (error) {
        console.error("Product fetch error:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  // ================= WISHLIST =================
  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-10">
      <div className="max-w-[1400px] mx-auto">

        <h2 className="text-lg md:text-xl font-semibold mb-6">
          Top Picks For You
        </h2>

        {/* Grid / Horizontal Scroll */}
        <div
          className="
            flex gap-6 overflow-x-auto
            md:grid md:grid-cols-3 lg:grid-cols-4
            md:overflow-visible
          "
        >
          {/* Skeleton Loader */}
          {loading &&
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-xl aspect-square" />
                <div className="h-4 bg-gray-200 rounded mt-3" />
                <div className="h-4 bg-gray-200 rounded mt-2 w-1/2" />
              </div>
            ))}

          {/* Products */}
          {!loading &&
            Array.isArray(products) &&
            products.map((product) => (
              <div
                key={product._id}
                className="
                  group relative cursor-pointer
                  min-w-[220px] sm:min-w-[240px]
                  md:min-w-0 shrink-0
                "
onClick={() =>
  router.push(
    `/products?category=${product.category}`
  )
}
              >
                {/* Wishlist */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product._id);
                  }}
                  className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow"
                >
                  <Heart
                    size={18}
                    className={
                      wishlist[product._id]
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }
                  />
                </button>

                {/* Image */}
                <div className="bg-[#F6F6F6] rounded-xl p-4 aspect-square flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain group-hover:scale-105 transition"
                  />
                </div>

                {/* Info */}
                <div className="mt-3">
                  <p className="text-sm font-medium">
                    {product.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    ${product.price}
                  </p>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Add to cart", product._id);
                  }}
                  className="
                    absolute bottom-16 left-1/2 -translate-x-1/2
                    opacity-0 group-hover:opacity-100
                    bg-black text-white text-sm
                    px-4 py-2 rounded-md
                    transition
                  "
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
