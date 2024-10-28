import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col  items-center justify-center  bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        Unfortunately, the page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
