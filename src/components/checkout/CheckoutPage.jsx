
  "use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const router = useRouter();
  const [payment, setPayment] = useState("card");

  return (
    <section className="w-full bg-[#f6f7f6] px-4 md:px-6 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">

        {/* LEFT FORM */}
        <div className="bg-white rounded-xl p-6">
          <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

          {/* TOGGLE */}
          <div className="flex bg-gray-100 rounded-md mb-6 text-sm">
            <button className="flex-1 py-2 rounded-md bg-white font-medium">
              Checkout as Guest
            </button>
            <button className="flex-1 py-2 text-gray-500">
              Returning Customer? Login
            </button>
          </div>

          {/* BILLING */}
          <h2 className="font-medium mb-4">Billing Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input className="input" placeholder="Enter first name" />
            <input className="input" placeholder="Enter last name" />
          </div>

          <input className="input mb-4" placeholder="Enter email address" />
          <input className="input mb-4" placeholder="123 Cricket Lane" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input className="input" placeholder="Enter city" />
            <input className="input" placeholder="Enter postal code" />
          </div>

          <label className="flex items-center gap-2 text-sm mb-6">
            <input type="checkbox" checked readOnly className="accent-green-500" />
            My shipping address is the same as my billing address.
          </label>

          {/* PAYMENT */}
          <h2 className="font-medium mb-4">Payment Method</h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <button
              onClick={() => setPayment("card")}
              className={`border rounded-md p-3 text-sm text-left
                ${payment === "card" ? "border-green-500 bg-green-50" : ""}
              `}
            >
              Credit / Debit Card
            </button>

            <button
              onClick={() => setPayment("paypal")}
              className={`border rounded-md p-3 text-sm text-left
                ${payment === "paypal" ? "border-green-500 bg-green-50" : ""}
              `}
            >
              PayPal
            </button>
          </div>

          {/* CARD DETAILS */}
          <input className="input mb-4" placeholder="0000 0000 0000 0000" />

          <div className="grid grid-cols-2 gap-4 mb-6">
            <input className="input" placeholder="MM / YY" />
            <input className="input" placeholder="CVC" />
          </div>

          {/* CTA */}
          <button
  // onClick={() => router.push("/orders")}
  className="w-full bg-[#18f24e] hover:bg-[#14d843] text-black py-3 rounded-md font-medium transition"
>
  Place Order Securely
</button>

        </div>

        {/* RIGHT SUMMARY */}
        <div className="bg-white rounded-xl p-6 h-fit">
          <h2 className="font-medium mb-4">Your Order</h2>

          {/* ITEMS */}
          <div className="space-y-4 mb-4">
            <OrderItem
              name="Pro Grade Cricket Bat"
              qty={1}
              price="$250.00"
              image="/download.jpeg"
            />
            <OrderItem
              name="Leather Cricket Ball"
              qty={2}
              price="$40.00"
              image="/download.jpeg"
            />
          </div>

          {/* DISCOUNT */}
          <div className="flex gap-2 mb-4">
            <input className="input flex-1" placeholder="Discount Code" />
            <button className="border px-4 rounded-md text-sm">
              Apply
            </button>
          </div>

          {/* TOTALS */}
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$290.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$15.00</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>$24.50</span>
            </div>
          </div>

          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total</span>
            <span>$329.50</span>
          </div>

          <p className="text-xs text-gray-500">
            Need help? <span className="text-green-600 cursor-pointer">Contact Support</span>
          </p>
        </div>
      </div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #e5e7eb;
          padding: 10px 12px;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
        }
        .input:focus {
          border-color: #18f24e;
        }
      `}</style>
    </section>
  );
}

/* ORDER ITEM */
function OrderItem({ name, qty, price, image }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
          <Image src={image} alt={name} width={32} height={32} />
        </div>
        <div>
          <p className="text-sm">{name}</p>
          <p className="text-xs text-gray-500">Qty: {qty}</p>
        </div>
      </div>
      <p className="text-sm font-medium">{price}</p>
    </div>
  );
}

