"use client";

export default function Button({
  children,
  className = "",
  loading = false,
  ...props
}) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`bg-green-600 text-white px-4 py-2 rounded w-full disabled:bg-gray-400 ${className}`}
    >
      {loading ? "Loading..." : children}
      
    </button>
  );
}
