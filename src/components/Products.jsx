import React from "react";
import HeaderSection from "./HeaderSection";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoArrowSwitch } from "react-icons/go";
import { FaRegStar } from "react-icons/fa6";

export default function Products() {
  return (
    <section className="products pt-8 md:pt-24 lg:pt-48">
      <div className="container">
        {/* <!--//! Section-Header --> */}
        <HeaderSection title="New products" subTitle="Made from coffee beans" />

        {/* //!products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 pb-8 md:pb-20">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
            <div key={index} className="bg-white dark:bg-zinc-700 shadow-normal rounded-2xl p-2 md:p-5">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/products/p1.png"
                  className="w-32 h-32 md:w-[260px] md:h-[260px] mx-auto"
                  alt="product"
                  width={260}
                  height={260}
                  quality={100}
                  loading="lazy"
                />
                <span className="flex items-center justify-center absolute top-0 right-0 md:top-1 md:right-1 text-xs/normal md:text-base text-white bg-orange-300 rounded-[100px] w-[54px] h-[30px] font-DanaMedium">
                  12%
                </span>
              </div>
              <h2 className="text-zinc-700 dark:text-white font-DanaMedium text-sm/[28px] md:h-14 md:text-xl/[28px] mt-2 mb-1.5 md:mt-5 md:mb-2.5 line-clamp-2">
                Ben Mano Turkish coffee, 250 grams, second line
              </h2>
              <div className="flex items-center gap-x-2.5 md:justify-center">
                <div className="text-teal-600 text-right">
                  <span className="text-base/normal md:text-xl/normal font-DanaDemiBold">
                    23.3
                  </span>
                  <span className="text-xs/noraml md:text-sm/normal font-Dana -tracking-wider">
                    $
                  </span>
                </div>
                <div className="hidden md:inline-block text-gray-400 offer">
                  <span className="text-xl/normal font-Dana">18.4</span>
                  <span className="hidden 2xl:inline text-sm/normal font-Dana -tracking-tighter">
                    $
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between overflow-hidden">
                <div className="flex items-center gap-x-2.5 md:gap-x-3">
                  <span className="flex-center w-9 h-9 rounded-full text-gray-300 dark:bg-zinc-800 dark:hover:bg-emerald-500 transition-colors hover:bg-teal-600 dark:hover:bg-teal p-[7px]">
                    <AiOutlineShoppingCart className="w-[22px] h-[22px]" />
                  </span>
                  <span className="flex-center text-gray-400">
                    <GoArrowSwitch className="h-6 w-6" />
                  </span>
                </div>

                <div className="flex items-center text-yellow-400 w-20 lg:w-30">
                  <span className="flex-center">
                    <FaRegStar className="w-4 h-4 md:w-[24px] md:h-[24px]" />
                  </span>
                  <span className="flex-center">
                    <FaRegStar className="w-4 h-4 md:w-[24px] md:h-[24px]" />
                  </span>
                  <span className="flex-center">
                    <FaRegStar className="w-4 h-4 md:w-[24px] md:h-[24px]" />
                  </span>
                  <span className="flex-center">
                    <FaRegStar className="w-4 h-4 md:w-[24px] md:h-[24px]" />
                  </span>
                  <span className="flex-center">
                    <FaRegStar className="w-4 h-4 md:w-[24px] md:h-[24px]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
