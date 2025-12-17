"use client";
import { Input } from "@/shared/ui/input";
import React, { useState } from "react";
import Image from "next/image";
import { logoimg } from "@/shared/image";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* Card */}
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image 
            src={logoimg.boilerplateLogo}   
            width={180}
            height={100}
            alt="App Logo"
            className=""
          />
        </div>

        {/* Header */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Login 
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          {/* Password */}
          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?
          <a href="/signup" className="text-blue-600 font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
  
}
