import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-7xl">404</h1>
      <h2 className="message">Page Not Found</h2>
      <p className="description">
        Unfortunately, the page you're looking for is not available.
      </p>
      <Link href="/" className="link">
        Go Back to Home
      </Link>
    </div>
  );
}
