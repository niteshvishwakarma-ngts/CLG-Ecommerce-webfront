"use client";

import Link from "next/link";
import { Eye } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT SIDE – IMAGE / BRAND */}
      <div className="hidden md:flex items-center justify-center bg-[#f2f3f2]">
        <div className="bg-gray-700 rounded-xl px-10 py-8 flex items-center gap-4 shadow-lg">

          {/* LOGO IMAGE */}
          <div className="w-12 h-12 relative">
            <Image
              src="/cricketImage.png"
              alt="CricketPlatform Logo"
              fill
              className="object-contain rounded-md"
              priority
            />
          </div>

          {/* BRAND TEXT */}
          <div>
            <p className="text-white font-semibold text-xl">
              CricketPlatform
            </p>
            <p className="text-gray-300 text-sm">
              Your one-stop shop for all things cricket.
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE – LOGIN FORM */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="flex items-center gap-2 mb-6 md:hidden">
            <Image
              src="/cricketImage.png"
              alt="logo"
              width={28}
              height={28}
            />
            <span className="font-semibold">CricketPlatform</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold mb-1">Welcome Back</h1>
          <p className="text-sm text-gray-500 mb-6">
            Log in to your account to continue shopping.
          </p>

          {/* Email */}
          <label className="text-sm font-medium">Email or Username</label>
          <input
            type="text"
            placeholder="you@example.com"
            className="w-full mt-1 mb-4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          />

          {/* Password */}
          <label className="text-sm font-medium">Password</label>
          <div className="relative mt-1 mb-3">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
            <Eye
              size={18}
              className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center mb-6 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>
            <Link
              href="/forgetpassword"
              className="text-green-600 font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-medium transition">
            Log In
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="px-3 text-sm text-gray-400">
              Or continue with
            </span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Google Login */}
          <button className="w-full border py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <Image src="/google.svg" alt="Google" width={18} height={18} />
            Sign in with Google
          </button>

          {/* Signup */}
          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-green-600 font-medium">
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
