
  "use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7f6] px-4">

      <div className="w-full max-w-md">

        {/* TOP BAR */}
        <div className="bg-white rounded-xl px-5 py-3 flex items-center justify-between mb-6 shadow-sm">
          <div className="flex items-center gap-2 font-semibold">
            <span className="w-6 h-6 bg-[#18f24e] rounded-md" />
            CricShop
          </div>

          <Link
            href="/login"
            className="text-sm font-medium bg-[#dfffea] text-black px-4 py-1.5 rounded-md hover:bg-[#c9ffd9] transition"
          >
            Log In
          </Link>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">

          {/* HEADING */}
          <h1 className="text-2xl font-bold text-center mb-2">
            Forgot Your Password?
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            No problem. Enter the email address associated with your
            account and we will send you a link to reset your password.
          </p>

          {/* EMAIL */}
          <label className="text-sm font-medium block mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="your.email@example.com"
            className="w-full px-4 py-2 border rounded-md outline-none
              focus:ring-2 focus:ring-[#18f24e] mb-5"
          />

          {/* BUTTON */}
          <button
            className="w-full bg-[#18f24e] hover:bg-[#14d843]
              text-black py-2 rounded-md font-medium transition"
          >
            Send Reset Link
          </button>

          {/* FOOTER */}
          <p className="text-sm text-center mt-6">
            Remember your password?{" "}
            <Link
              href="/login"
              className="text-[#18f24e] font-medium hover:underline"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
