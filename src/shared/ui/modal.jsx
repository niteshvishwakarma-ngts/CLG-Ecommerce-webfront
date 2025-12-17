"use client";

import Skeleton from "./loading";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-xl min-w-[300px] relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          ✕
        </button>
        <div>
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <h1 className="text-2xl font-bold mb-2">Hello Nitesh 👋</h1>
                    <p className="text-gray-700 mb-4">
                      This is your reusable modal. You can put any content here.
                    </p>

                    <Skeleton className="h-6 w-full mb-2" />
        </div>

        {children}
      </div>
    </div>
  );
}
