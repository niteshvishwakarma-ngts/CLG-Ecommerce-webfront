
  "use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const cartItems = [
  {
    id: 1,
    name: "SG Player’s Edition Bat",
    price: 250,
    qty: 1,
    image: "/download.jpeg",
    meta: "Size: SH",
  },
  {
    id: 2,
    name: "Kookaburra Ball (6 pack)",
    price: 50,
    qty: 1,
    image: "/download.jpeg",
    meta: "Color: Red",
  },
  {
    id: 3,
    name: "Gray-Nicolls Gloves",
    price: 120,
    qty: 1,
    image: "/download.jpeg",
    meta: "Hand: Right",
  },
];

export default function CartPage() {
  const router = useRouter();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <section className="w-full bg-[#f6f7f6] px-4 md:px-6 lg:px-8 py-10">
      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <h1 className="text-2xl font-semibold mb-1">
          My Cart (3 Items)
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Review your items before proceeding to checkout.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">

          {/* CART TABLE */}
          <div className="bg-white rounded-xl p-6">

            {/* TABLE HEAD */}
            <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_auto] text-xs text-gray-500 border-b pb-3 mb-4">
              <span>PRODUCT</span>
              <span className="text-center">QUANTITY</span>
              <span>PRICE</span>
              <span>TOTAL</span>
              <span></span>
            </div>

            {/* ITEMS */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center gap-4 border-b pb-6 last:border-b-0"
                >
                  {/* PRODUCT */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#eef0ee] rounded-md flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.meta}
                      </p>
                    </div>
                  </div>

                  {/* QUANTITY */}
                  <div className="flex items-center justify-center gap-3">
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                      <Minus size={14} />
                    </button>
                    <span className="text-sm">{item.qty}</span>
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* PRICE */}
                  <span className="text-sm">${item.price.toFixed(2)}</span>

                  {/* TOTAL */}
                  <span className="text-sm font-medium">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>

                  {/* DELETE */}
                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* CONTINUE SHOPPING */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm mt-6 text-gray-600 hover:underline"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-white rounded-xl p-6 h-fit">
            <h3 className="font-semibold mb-4">
              Order Summary
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t my-4" />

            <div className="flex justify-between font-semibold mb-6">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
  onClick={() => router.push("/checkout")}
  className="w-full bg-[#18f24e] hover:bg-[#14d843] text-black py-2 rounded-md font-medium transition"
>
  Proceed to Checkout
</button>

          </div>

        </div>
      </div>
    </section>
  );
}
