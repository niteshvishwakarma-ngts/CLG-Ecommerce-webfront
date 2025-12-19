"use client";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import AuthLayout from "@/components/common/AuthLayout";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout title="Forgot Password">
      <Input
        label="Email Address"
        type="email"
        placeholder="Enter your registered email"
      />

      <Button text="Send Reset Link" />
    </AuthLayout>
  );
}
