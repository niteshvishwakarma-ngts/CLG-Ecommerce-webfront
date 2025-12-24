"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white text-sm">
              C
            </span>
            CricketGear
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/products?brand=Bats" className="hover:text-green-500">
              Bats
            </Link>
            <Link href="/products?brand=Balls" className="hover:text-green-500">
              Balls
            </Link>
            <Link href="/products?brand=Pads" className="hover:text-green-500">
              Pads
            </Link>
            <Link href="/products?brand=Gloves" className="hover:text-green-500">
              Gloves
            </Link>
            <Link href="/products?brand=Helmets" className="hover:text-green-500">
              Helmets
            </Link>
          </nav>

          {/* SEARCH + ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-9 pr-3 py-1.5 bg-green-50 rounded-full text-sm w-56 focus:outline-none"
              />
            </div>

            {/* Auth */}
            <Link
              href="/login"
              className="text-sm font-medium px-4 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              Log In
            </Link>

            <Link
              href="/signup"
              className="text-sm font-medium px-4 py-1.5 rounded-full bg-green-500 text-white hover:bg-green-600"
            >
              Sign Up
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative">
              <FiShoppingCart size={18} />
            </Link>
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

            <Link href="/products?brand=Bats" onClick={() => setOpen(false)}>
              Bats
            </Link>
            <Link href="/products?brand=Balls" onClick={() => setOpen(false)}>
              Balls
            </Link>
            <Link href="/products?brand=Pads" onClick={() => setOpen(false)}>
              Pads
            </Link>
            <Link href="/products?brand=Gloves" onClick={() => setOpen(false)}>
              Gloves
            </Link>
            <Link href="/products?brand=Helmets" onClick={() => setOpen(false)}>
              Helmets
            </Link>

            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-9 pr-3 py-2 bg-green-50 rounded-full text-sm w-full"
              />
            </div>

            {/* Auth buttons */}
            <div className="flex gap-3 pt-2">
              <Link
                href="/login"
                className="flex-1 text-center py-2 rounded-full bg-gray-100"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="flex-1 text-center py-2 rounded-full bg-green-500 text-white"
              >
                Sign Up
              </Link>
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center gap-2 pt-2"
            >
              <FiShoppingCart />
              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
