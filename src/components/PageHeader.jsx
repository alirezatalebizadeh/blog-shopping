import Link from "next/link";
import React from "react";

export default function PageHeader({ array, title }) {
  return (
    <div className="bg-gray-200 p-4 h-[25vh]   md:h-[70vh] flex flex-col items-center justify-center bg-home-mobile md:bg-home-desktop bg-cover bg-no-repeat bg-[item-top]">
      {/* //! title */}
      <h1 className="text-2xl font-semibold text-white md:text-3xl">{title}</h1>
      {/* //! bread crumb */}
      <nav className="text-gray-600 text-sm mt-2">
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="text-white">
              Home /
            </Link>
          </li>
          {array.map((item) => (
            <li>
              <Link href={item} className="text-white">
                {item} /
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
