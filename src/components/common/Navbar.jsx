"use client";

import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Cricket Store
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/products?category=bats">Bats</Link>
            <Link href="/products?category=balls">Balls</Link>
            <Link href="/products?category=gear">Gear</Link>
            <Link href="/products?category=apparel">Apparel</Link>
          </nav>

          {/* SEARCH + ICONS */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-3 py-1.5 border rounded-full text-sm w-48 focus:outline-none"
              />
            </div>

            <Link href="/profile"><FiUser size={18} /></Link>
            <Link href="/wishlist"><FiHeart size={18} /></Link>
            <Link href="/cart"><FiShoppingCart size={18} /></Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-4 text-sm">

            <Link href="/products?category=bats" onClick={() => setOpen(false)}>Bats</Link>
            <Link href="/products?category=balls" onClick={() => setOpen(false)}>Balls</Link>
            <Link href="/products?category=gear" onClick={() => setOpen(false)}>Gear</Link>
            <Link href="/products?category=apparel" onClick={() => setOpen(false)}>Apparel</Link>

            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-3 py-2 border rounded-full text-sm w-full"
              />
            </div>

            {/* Icons */}
            <div className="flex gap-6 pt-2">
              <Link href="/profile"><FiUser size={18} /></Link>
              <Link href="/wishlist"><FiHeart size={18} /></Link>
              <Link href="/cart"><FiShoppingCart size={18} /></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
