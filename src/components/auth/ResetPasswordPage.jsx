

  "use client";

import { EyeOff } from "lucide-react";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7f6] px-4">
      <div className="w-full max-w-md bg-white rounded-xl p-6 sm:p-8 shadow-sm">

        {/* HEADING */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Reset Your Password
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Create a new, strong password. Make sure it’s one you
          don’t use anywhere else.
        </p>

        {/* NEW PASSWORD */}
        <label className="text-sm font-medium block mb-1">
          New Password
        </label>
        <div className="relative mb-4">
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full px-4 py-2 border rounded-md outline-none
              focus:ring-2 focus:ring-[#18f24e]"
          />
          <EyeOff
            size={18}
            className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <label className="text-sm font-medium block mb-1">
          Confirm New Password
        </label>
        <div className="relative mb-4">
          <input
            type="password"
            placeholder="Re-enter new password"
            className="w-full px-4 py-2 border rounded-md outline-none
              focus:ring-2 focus:ring-[#18f24e]"
          />
          <EyeOff
            size={18}
            className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
          />
        </div>

        {/* PASSWORD STRENGTH */}
        <p className="text-sm font-medium mb-2">
          Password Strength
        </p>

        <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
          <div className="h-2 bg-[#18f24e] rounded-full w-3/4" />
        </div>

        {/* RULES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mb-6">
          <Rule text="At least 8 characters" active />
          <Rule text="One uppercase letter" active />
          <Rule text="One number" active />
          <Rule text="One special character" />
        </div>

        {/* BUTTON */}
        <button className="w-full bg-[#18f24e] hover:bg-[#14d843]
          text-black py-2 rounded-md font-medium transition mb-6">
          Reset Password & Log In
        </button>

        {/* SECURITY TIPS */}
        <div className="bg-[#eafff2] rounded-lg p-4 text-sm">
          <p className="font-medium mb-2 flex items-center gap-2">
            <span className="w-4 h-4 bg-[#18f24e] rounded-full" />
            Security Tips
          </p>
          <ul className="list-disc ml-6 space-y-1 text-gray-600">
            <li>
              Combine words, numbers, and symbols to create a
              unique passphrase.
            </li>
            <li>
              Avoid using personal information like your name
              or birthday.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

/* RULE ITEM */
function Rule({ text, active }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`w-4 h-4 rounded-full border flex items-center justify-center
          ${active
            ? "bg-[#18f24e] border-[#18f24e]"
            : "border-gray-300"}`}
      >
        {active && (
          <span className="w-2 h-2 bg-white rounded-full" />
        )}
      </span>
      <span className={active ? "text-gray-800" : "text-gray-400"}>
        {text}
      </span>
    </div>
  );
}
