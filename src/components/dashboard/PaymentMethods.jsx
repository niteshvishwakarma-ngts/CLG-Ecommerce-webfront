"use client";

export default function PaymentMethods() {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-6">Payment Methods</h2>

      <div className="space-y-4">
        <div className="border rounded-lg p-4 flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">Visa •••• 4242</p>
            <p className="text-xs text-gray-500">Expires 12/26</p>
          </div>
          <button className="text-sm text-red-500">Remove</button>
        </div>
      </div>

      <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600">
        Add New Card
      </button>
    </div>
  );
}
