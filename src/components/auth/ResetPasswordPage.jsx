"use client";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import AuthLayout from "@/components/common/AuthLayout";

export default function ResetPasswordPage() {
  return (
    <AuthLayout title="Reset Password">
      <Input
        label="New Password"
        type="password"
        placeholder="Enter new password"
      />

      <Input
        label="Confirm Password"
        type="password"
        placeholder="Confirm new password"
      />

      <Button text="Reset Password" />
    </AuthLayout>
  );
}
