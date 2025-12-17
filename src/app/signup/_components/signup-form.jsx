"use client";
import { Input } from "@/shared/ui/input";
import React, { useState } from "react";
import Image from "next/image";
import { logoimg } from "@/shared/image";
import { toast } from "react-toastify";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Real-time validation for confirm password
    if (e.target.name === "confirmPassword") {
      if (e.target.value !== form.password) {
        setErrors({ ...errors, confirmPassword: "Passwords do not match" });
      } else {
        setErrors({ ...errors, confirmPassword: "" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Passwords do not match" });
      return;
    }

    toast("Signup Data:", form);
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
          />
        </div>

        {/* Header */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <Input
            label="Full Name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

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
            placeholder="Create a password"
            showStrength={true} // PASSWORD STRENGTH
          />

          {/* Confirm Password */}
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter password"
            error={errors.confirmPassword}    // ❗ERROR ADDED
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            Sign Up
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?
          <a href="/login" className="text-blue-600 font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
