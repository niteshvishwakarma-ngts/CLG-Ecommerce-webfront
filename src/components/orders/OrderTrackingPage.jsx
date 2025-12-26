
  "use client";

import Image from "next/image";

export default function OrderTrackingPage() {
  return (
    <section className="w-full bg-[#f6f7f6] px-4 md:px-6 py-8">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* TITLE */}
        <h1 className="text-2xl font-semibold">Track Your Order</h1>

        {/* ORDER SUMMARY */}
        <div className="bg-white rounded-xl p-5 flex justify-between items-center">
          <div className="space-y-1 text-sm">
            <p className="font-medium">
              Order Summary
            </p>
            <p>
              Order ID: <span className="font-medium">#C123456789</span>
            </p>
            <p>Placed On: August 15, 2024</p>
            <p>Total Amount: $259.99</p>
          </div>

          <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600">
            View Invoice
          </button>
        </div>

        {/* ORDER STATUS */}
        <div className="bg-white rounded-xl p-5">
          <div className="flex justify-between mb-4">
            <p className="font-medium">Order Status</p>
            <p className="text-sm text-green-600">
              Estimated Delivery: Aug 22, 2024
            </p>
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
            <div className="bg-green-500 h-2 rounded-full w-[75%]" />
          </div>

          {/* STEPS */}
          <div className="grid grid-cols-4 text-center text-xs">
            {[
              "Order Placed",
              "Processing",
              "Shipped",
              "Delivered",
            ].map((step, i) => (
              <div key={step} className="space-y-2">
                <div
                  className={`w-6 h-6 mx-auto rounded-full flex items-center justify-center
                    ${
                      i < 3
                        ? "bg-green-500 text-white"
                        : "border border-gray-300"
                    }`}
                >
                  {i < 3 && "✓"}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SHIPPING + HELP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* SHIPPING DETAILS */}
          <div className="bg-white rounded-xl p-5 space-y-2 text-sm">
            <p className="font-medium mb-2">
              Shipping Details
            </p>
            <p>John Doe</p>
            <p>123 Cricket Lane</p>
            <p>Sportsville, ST 12345</p>
            <p>United States</p>
            <p className="text-gray-500">
              Standard Shipping
            </p>
          </div>

          {/* HELP */}
          <div className="bg-white rounded-xl p-5">
            <p className="font-medium mb-2">
              Need Help?
            </p>
            <p className="text-sm text-gray-600 mb-4">
              If you have any questions about your order,
              feel free to contact our support team.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600">
              Contact Support
            </button>
          </div>
        </div>

        {/* ITEMS */}
        <div className="bg-white rounded-xl p-5">
          <p className="font-medium mb-4">
            Items in this Order
          </p>

          <div className="space-y-4">
            <OrderItem
              name="Pro Grade Cricket Bat"
              price="$199.99"
              image="/download.jpeg"
            />
            <OrderItem
              name="Leather Match Ball (Pack of 2)"
              price="$60.00"
              image="/download.jpeg"
            />
          </div>
        </div>

        {/* SHIPMENT PROGRESS */}
        <div className="bg-white rounded-xl p-5">
          <p className="font-medium mb-4">
            Shipment Progress
          </p>

          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-1" />
              Package has been shipped – Los Angeles, CA
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-1" />
              Order is being processed – Warehouse
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-1" />
              Order placed successfully – Online Store
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

/* ITEM ROW */
function OrderItem({ name, price, image }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
          <Image
            src={image}
            alt={name}
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <p className="text-sm">{name}</p>
      </div>
      <p className="text-sm font-medium">{price}</p>
    </div>
  );
}
