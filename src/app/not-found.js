import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        Unfortunately, the page you are looking for doesnot exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-4 py-2 text-white bg-blue-600 rounded transition hover:bg-blue-900"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
