"use client";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function SignupPage() {
  return (
    <div>
      <h1>Signup</h1>
      <Input label="Name" />
      <Input label="Email" />
      <Input label="Password" />
      <Button text="Create Account" />
    </div>
  );
}
