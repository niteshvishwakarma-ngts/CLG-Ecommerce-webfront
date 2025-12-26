"use client";

export default function OrderHistory() {
  const orders = [
    {
      id: "#ORD12345",
      date: "Aug 15, 2024",
      total: "$329.50",
      status: "Delivered",
    },
    {
      id: "#ORD12346",
      date: "Sep 02, 2024",
      total: "$120.00",
      status: "Shipped",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-6">Order History</h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex justify-between items-center border rounded-lg p-4"
          >
            <div>
              <p className="text-sm font-medium">{order.id}</p>
              <p className="text-xs text-gray-500">{order.date}</p>
            </div>

            <div className="text-right">
              <p className="text-sm font-medium">{order.total}</p>
              <span
                className={`text-xs px-2 py-1 rounded-full
                  ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
