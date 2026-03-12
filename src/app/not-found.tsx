"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-md">
        <p className="text-sm font-medium text-orange-500 uppercase tracking-wider mb-4">
          404 Error
        </p>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-lg text-white/70 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 font-semibold tracking-wide"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
