import React from "react";

export default function Banner() {
  return (
    <>
      <div class="">
        <div class="container mt-8 mb-10 md:my-20">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <a
              href="#"
              class="category-banner-item1 flex flex-col justify-center items-start rounded-2xl bg-zinc-700 h-[142px] sm:h-[200px] md:h-[248px] pr-7 md:pr-12"
            >
              <span class="text-white font-DanaDemiBold text-2xl/[24px] md:text-4xl/[24px]">
                Types of Coffee
              </span>
              <span class="text-white font-Dana text-base md:text-2xl/[24px] mt-4 md:mt-7">
                Blended and Single-Origin
              </span>
            </a>
            <a
              href="#"
              class="category-banner-item2 flex flex-col justify-center items-start rounded-2xl bg-zinc-700 h-[142px] sm:h-[200px] md:h-[248px] pr-7 md:pr-12"
            >
              <span class="text-white font-DanaDemiBold text-2xl/[24px] md:text-4xl/[24px]">
                Accessories and Equipment
              </span>
              <span class="text-white font-Dana text-base md:text-2xl/[24px] mt-4 md:mt-7">
                Nescafe, Hot Chocolate, Masala
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
