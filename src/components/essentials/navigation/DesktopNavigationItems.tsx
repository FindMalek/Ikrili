import React from "react";
import Link from "next/link";

export default function DesktopNavigationItems() {
  return (
    <div className="hidden ml-auto sm:flex sm:space-x-8">
      {/* Current: "border-ikrili-primary text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
      <Link
        href="#"
        className="inline-flex items-center border-b-2 border-ikrili-secondary px-1 pt-1 text-sm font-medium text-gray-900"
      >
        About Us
      </Link>
      <Link
        href="#"
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        How It Works
      </Link>
      <Link
        href="#"
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        Services
      </Link>
      <Link
        href="#"
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        FAQs
      </Link>
      <Link
        href="#"
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        Contact Us
      </Link>
    </div>
  );
}
