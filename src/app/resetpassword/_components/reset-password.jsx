"use client";
import { Input } from "@/shared/ui/input";
import React, { useState } from "react";
import Image from "next/image";
import { logoimg } from "@/shared/image";
import { toast } from "react-toastify";
import Button from "@/shared/ui/button";
import Skeleton from "@/shared/ui/loading";

export default function ResetPassword() {
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === "confirmPassword") {
      if (e.target.value !== form.password) {
        setError("Passwords do not match");
      } else {
        setError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true); // show skeleton

    setTimeout(() => {
      toast("Password reset:", form);
      setLoading(false); // hide skeleton
    }, 2000);
  };

  // Show Skeleton UI when loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

          <Skeleton className="h-10 w-40 mx-auto mb-6" />
          <Skeleton className="h-6 w-48 mx-auto mb-6" />

          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-12 w-full mb-4" />

        </div>
      </div>
    );
  }

  // 🔥 Main UI
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        
        <div className="flex justify-center mb-6">
          <Image 
            src={logoimg.boilerplateLogo}
            width={180}
            height={100}
            alt="App Logo"
          />
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit}>
          <Input
            label="New Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter new password"
            showStrength={true}
          />

          <Input
            label="Confirm New Password"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter new password"
            error={error}
          />

          <Button
            type="submit"
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            Reset Password
          </Button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Back to
          <a href="/login" className="text-blue-600 font-medium"> Login </a>
        </p>
      </div>
    </div>
  );
}
