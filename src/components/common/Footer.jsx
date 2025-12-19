"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f9fafb] border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-600">

          {/* BRAND */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              Cricket Store
            </h3>
            <p className="max-w-xs leading-6">
              Your one-stop shop for the highest quality cricket equipment.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/shipping-returns">Shipping & Returns</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Follow Us</h4>
            <div className="flex gap-4 text-gray-600">
              <Link href="#"><FaFacebookF /></Link>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaInstagram /></Link>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className=" my-8"></div>

        {/* BOTTOM */}
        <p className="text-center text-xs text-gray-500">
          © 2024 Cricket Store. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
