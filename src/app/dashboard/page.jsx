
"use client";


import Notifications from "@/components/dashboard/Notifications";
import OrderHistory from "@/components/dashboard/OrderHistory";
import PaymentMethods from "@/components/dashboard/PaymentMethods";
import ProfileForm from "@/components/dashboard/ProfileForm";
import SavedAddresses from "@/components/dashboard/SavedAddresses";
import Sidebar from "@/components/dashboard/Sidebar";
import { useState } from "react";

// Dashboard components

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("profile");

  // Right side content switcher
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileForm />;
      case "orders":
        return <OrderHistory />;
      case "addresses":
        return <SavedAddresses />;
      case "payments":
        return <PaymentMethods />;
      case "notifications":
        return <Notifications />;
      default:
        return <ProfileForm />;
    }
  };

  return (
    <section className="min-h-screen bg-[#f6f7f6] px-4 md:px-8 py-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">

        {/* 👈 LEFT SIDEBAR */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* 👉 RIGHT CONTENT */}
        <div className="bg-white rounded-xl p-6">
          {renderContent()}
        </div>

      </div>
    </section>
  );
}
