"use client";

import {
  User,
  Package,
  MapPin,
  CreditCard,
  Bell,
  LogOut,
} from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const menu = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "orders", label: "Order History", icon: Package },
    { id: "addresses", label: "Saved Addresses", icon: MapPin },
    { id: "payments", label: "Payment Methods", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <aside className="bg-white rounded-xl p-5 h-fit w-full">
      {/* 👤 USER INFO */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold">
          R
        </div>
        <div>
          <p className="text-sm font-medium">Rohit Sharma</p>
          <p className="text-xs text-gray-500">
            rohit.sharma@email.com
          </p>
        </div>
      </div>

      {/* 📂 MENU */}
      <div className="space-y-1">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition
                ${
                  isActive
                    ? "bg-green-100 text-green-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <Icon size={16} />
              {item.label}
            </button>
          );
        })}
      </div>

      {/* 🚪 LOGOUT */}
      <button
        onClick={() => console.log("Logout")}
        className="flex items-center gap-3 text-sm mt-8 text-gray-600 hover:text-black"
      >
        {/* <LogOut size={16} /> */}
        Logout
      </button>
    </aside>
  );
}
