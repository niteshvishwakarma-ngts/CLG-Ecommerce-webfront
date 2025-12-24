"use client";

import Button from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";



export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>

      <Input label="Email" type="email" />
      <Input label="Password" type="password" />

      <Button text="Login" />
    </div>
  );
}
