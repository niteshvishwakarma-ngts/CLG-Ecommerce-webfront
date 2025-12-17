"use client";

export default function Pagination({ page, totalPages, onChange }) {
  return (
    <div className="flex gap-2 items-center justify-center mt-4">
      <button
        className="px-3 py-1 border rounded disabled:opacity-40"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Prev
      </button>

      <span className="text-sm">
        Page {page} of {totalPages}
      </span>

      <button
        className="px-3 py-1 border rounded disabled:opacity-40"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
