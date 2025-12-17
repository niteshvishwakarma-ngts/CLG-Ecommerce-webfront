"use client";
import { Input } from "@/shared/ui/input";
import React, { useState } from "react";
import Image from "next/image";
import { logoimg } from "@/shared/image";
import { toast } from "react-toastify";


export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Reset link sent to:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image 
            src={logoimg.boilerplateLogo}
            width={180}
            height={100}
            alt="App Logo"
          />
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your registered email"
          />

          <button
            type="submit"
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Back to{" "}
          <a href="/login" className="text-blue-600 font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
