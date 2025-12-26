
  "use client";

export default function Notifications() {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-6">Notifications</h2>

      <div className="space-y-4">
        <NotificationItem text="Your order #ORD12345 has been delivered." />
        <NotificationItem text="New offers available on cricket bats." />
        <NotificationItem text="Password changed successfully." />
      </div>
    </div>
  );
}

function NotificationItem({ text }) {
  return (
    <div className="border rounded-lg p-4 text-sm text-gray-700">
      {text}
    </div>
  );
}
