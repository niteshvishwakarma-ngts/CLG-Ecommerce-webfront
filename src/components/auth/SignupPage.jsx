
  "use client";

import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT IMAGE SECTION */}
      <div className="relative hidden lg:block">
        <Image
          src="/signup-cricket.jpg" // ← your image
          alt="Cricket Player"
          fill
          className="object-cover"
          priority
        />

        {/* DARK GREEN OVERLAY */}
        <div className="absolute inset-0 bg-[#0b3d2e]/80" />

        {/* TEXT CONTENT */}
        <div className="absolute bottom-10 left-10 right-10 text-white">
          <h2 className="text-3xl font-semibold leading-snug mb-3">
            Your One-Stop Shop for <br /> Cricket Gear.
          </h2>
          <p className="text-sm text-gray-200 max-w-md">
            Join a community of champions and get access to the best
            equipment in the game.
          </p>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="flex items-center justify-center px-6 sm:px-8">
        <div className="w-full max-w-md">

          {/* LOGO */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-6 bg-[#18f24e] rounded-sm" />
            <span className="font-semibold text-sm">
              CricketPlatform
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-2xl font-bold mb-1">
            Create an Account
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Join our community of cricket lovers.
          </p>

          {/* FULL NAME */}
          <label className="text-sm font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full mt-1 mb-4 px-4 py-2 border rounded-md outline-none
              focus:ring-2 focus:ring-[#18f24e]"
          />

          {/* EMAIL */}
          <label className="text-sm font-medium">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full mt-1 mb-4 px-4 py-2 border rounded-md outline-none
              focus:ring-2 focus:ring-[#18f24e]"
          />

          {/* PASSWORD */}
          <label className="text-sm font-medium">Password</label>
          <div className="relative mt-1 mb-6">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md outline-none
                focus:ring-2 focus:ring-[#18f24e]"
            />
            <Eye
              size={18}
              className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
            />
          </div>

          {/* CREATE ACCOUNT */}
          <button className="w-full bg-[#18f24e] hover:bg-[#14d843]
            text-black py-2 rounded-md font-medium transition">
            Create Account
          </button>

          {/* DIVIDER */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-3 text-xs text-gray-400">
              OR
            </span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* GOOGLE */}
          <button className="w-full border py-2 rounded-md flex items-center
            justify-center gap-2 hover:bg-gray-50 transition mb-3">
            <Image src="/google.svg" alt="Google" width={18} height={18} />
            <span className="text-sm font-medium">
              Sign up with Google
            </span>
          </button>

          {/* FACEBOOK */}
          <button className="w-full border py-2 rounded-md flex items-center
            justify-center gap-2 hover:bg-gray-50 transition">
            <Image src="/facebook.svg" alt="Facebook" width={18} height={18} />
            <span className="text-sm font-medium">
              Sign up with Facebook
            </span>
          </button>

          {/* LOGIN */}
          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#18f24e] font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
