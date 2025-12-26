"use client";

export default function SavedAddresses() {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-6">Saved Addresses</h2>

      <div className="space-y-4">
        <AddressCard
          name="Home"
          address="123 Cricket Lane, Sportsville, India"
        />
        <AddressCard
          name="Office"
          address="456 Stadium Road, Delhi, India"
        />
      </div>

      <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600">
        Add New Address
      </button>
    </div>
  );
}

function AddressCard({ name, address }) {
  return (
    <div className="border rounded-lg p-4">
      <p className="text-sm font-medium">{name}</p>
      <p className="text-sm text-gray-600">{address}</p>
    </div>
  );
}
