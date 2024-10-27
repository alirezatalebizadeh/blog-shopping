import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="container mt-8 mb-10 md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Link
          href="#"
          className="category-banner-item1 flex flex-col justify-center items-start rounded-2xl bg-zinc-700 h-[142px] sm:h-[200px] md:h-[248px] pl-7 md:pl-12"
        >
          <span className="text-white font-DanaDemiBold text-2xl/[24px] md:text-4xl/[24px]">
            Types of Coffee
          </span>
          <span className="text-white font-Dana text-base md:text-2xl/[24px] mt-4 md:mt-7">
            Blended and Single-Origin
          </span>
        </Link>
        <Link
          href="#"
          className="category-banner-item2 flex flex-col justify-center items-start rounded-2xl bg-zinc-700 h-[142px] sm:h-[200px] md:h-[248px] pl-7 md:pl-12"
        >
          <span className="text-white font-DanaDemiBold text-2xl/[24px] md:text-4xl/[24px]">
            Accessories and Equipment
          </span>
          <span className="text-white font-Dana text-base md:text-2xl/[24px] mt-4 md:mt-7">
            Nescafe, Hot Chocolate, Masala
          </span>
        </Link>
      </div>
    </div>
  );
}
