"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import authInstance from "@/api/auth/auth.api"; // using your existing setup

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // simple email validation
  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      // 🔹 API call
      await authInstance.newsletterSubscribe({ email });

      toast.success("🎉 Successfully subscribed!");
      setEmail("");
    } catch (error) {
      toast.error(
        error?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-14 bg-[#f7f8f7]">
      <div className="max-w-3xl mx-auto bg-white rounded-xl px-6 py-10 text-center shadow-sm">

        {/* Heading */}
        <h2 className="text-lg md:text-xl font-semibold mb-2">
          Get Exclusive Offers
        </h2>

        {/* Sub text */}
        <p className="text-sm text-gray-500 mb-6">
          Sign up for our newsletter and get 10% off your first order.
        </p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={loading}
            className="
              w-full sm:w-[260px]
              border border-gray-300
              rounded-md px-4 py-2.5
              text-sm
              transition
              focus:outline-none focus:ring-2 focus:ring-green-500
              hover:border-green-400
              disabled:bg-gray-100
            "
          />

          {/* Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
              bg-[#00ff66]
              hover:bg-[#00e65c]
              active:scale-95
              text-black font-medium
              px-6 py-2.5
              rounded-md
              text-sm
              transition
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>

        </div>

      </div>
    </section>
  );
}
