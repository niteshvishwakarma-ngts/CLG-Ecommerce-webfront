
  "use client";

import Image from "next/image";

export default function ProfileForm() {
  return (
    <div className="bg-white rounded-xl p-6">
      {/* HEADER */}
      <h2 className="text-lg font-semibold mb-6">My Profile</h2>

      {/* USER INFO */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-[#F2D2BE] flex items-center justify-center overflow-hidden">
            {/* Replace with user image later */}
            <Image
              src="/profile-placeholder.png"
              alt="Profile"
              width={48}
              height={48}
            />
          </div>

          <div>
            <p className="text-base font-medium">Rohit Sharma</p>
            <p className="text-sm text-gray-500">
              rohit.sharma@email.com
            </p>
          </div>
        </div>

        <button className="bg-gray-100 text-sm px-4 py-2 rounded-md hover:bg-gray-200">
          Upload Photo
        </button>
      </div>

      {/* FORM */}
      <div className="space-y-5">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium mb-1 block">
              First Name
            </label>
            <input
              type="text"
              defaultValue="Rohit"
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">
              Last Name
            </label>
            <input
              type="text"
              defaultValue="Sharma"
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium mb-1 block">
            Email Address
          </label>
          <input
            type="email"
            defaultValue="rohit.sharma@email.com"
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium mb-1 block">
            Phone Number
          </label>
          <input
            type="text"
            defaultValue="+91 98765 43210"
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex justify-end gap-3 mt-8">
        <button className="px-5 py-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200">
          Cancel
        </button>
        <button className="px-5 py-2 text-sm rounded-md bg-green-500 text-white hover:bg-green-600">
          Save Changes
        </button>
      </div>
    </div>
  );
}

