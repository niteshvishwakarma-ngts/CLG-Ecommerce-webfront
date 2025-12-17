"use client";
import React, { useState, useEffect } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

export const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  error = "",
  className = "",
  showStrength = false, // NEW PROP
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState("");
  const isPassword = type === "password";

  // Password strength checker
  useEffect(() => {
    if (!showStrength || !isPassword) return;

    const pass = value || "";

    if (pass.length < 6) {
      setStrength("weak");
    } else if (
      /[A-Z]/.test(pass) &&
      /[0-9]/.test(pass) &&
      /[@$!%*?&#]/.test(pass)
    ) {
      setStrength("strong");
    } else {
      setStrength("medium");
    }
  }, [value, showStrength, isPassword]);

  return (
    <div className="w-full mb-4">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {/* Input Field */}
        <input
          id={name}
          name={name}
          type={isPassword && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-2 rounded-lg outline-none input-field 
            ${error ? "input-error" : ""} 
            ${className}`}
          {...props}
        />

        {/* Eye Icon */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
          >
            {showPassword ? <BiSolidHide size={22} /> : <BiSolidShow size={22} />}
          </button>
        )}
      </div>

      {/* Error message */}
      {error && <p className="text-sm error-text mt-1">{error}</p>}

      {/* Password Strength Meter */}
      {isPassword && showStrength && value && (
        <>
          <div className="mt-2 h-2 w-full bg-gray-300 rounded">
            <div
              className={`h-full rounded transition-all duration-300 ${
                strength === "weak"
                  ? "bg-red-500 w-1/4"
                  : strength === "medium"
                  ? "bg-yellow-500 w-2/4"
                  : "bg-green-500 w-4/4"
              }`}
            ></div>
          </div>

          <p
            className="text-xs mt-1 font-medium"
            style={{
              color:
                strength === "weak"
                  ? "var(--error)"
                  : strength === "medium"
                  ? "orange"
                  : "green",
            }}
          >
            {strength === "weak"
              ? "Weak Password"
              : strength === "medium"
              ? "Medium Password"
              : "Strong Password"}
          </p>
        </>
      )}
    </div>
  );
};
