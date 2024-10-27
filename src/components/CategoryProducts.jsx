import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryProducts() {
  return (
    <div class="mb-[118px] mt-20">
      <div class="container">
        <div class="flex items-start justify-center flex-wrap gap-y-[36px] gap-x-[21px] md:gap-[65px] text-center">
          <div class="w-25 md:w-50">
            <Link href="#">
              <Image
                class="w-25 h-25 md:w-50 md:h-50"
                loading="lazy"
                width={200}
                height={200}
                src="/images/categories/category1.png"
                alt="p1"
              />
              <span class="text-zinc-700 md:mt-2.5 dark:text-white font-DanaDemiBold text-sm md:text-xl">
                Brewed Coffee and Espresso
              </span>
            </Link>
          </div>

          <div class="w-25 md:w-50">
            <Link href="#">
              <Image
                class="w-25 h-25 md:w-50 md:h-50"
                loading="lazy"
                width={200}
                height={200}
                src="/images/categories/category2.png"
                alt="p1"
              />
              <span class="text-zinc-700 md:mt-2.5 dark:text-white font-DanaDemiBold text-sm md:text-xl">
                Accessories and Equipment
              </span>
            </Link>
          </div>

          <div>
            <Link href="#">
              <Image
                class="w-25 h-25 md:w-50 md:h-50"
                loading="lazy"
                width={200}
                height={200}
                src="/images/categories/category3.png"
                alt="p1"
              />
              <span class="text-zinc-700 md:mt-2.5 dark:text-white font-DanaDemiBold text-sm md:text-xl">
                Espresso Machines
              </span>
            </Link>
          </div>

          <div class="w-25 md:w-50">
            <Link href="#">
              <Image
                class="w-25 h-25 md:w-50 md:h-50"
                loading="lazy"
                width={200}
                height={200}
                src="/images/categories/category4.png"
                alt="p1"
              />
              <span class="text-zinc-700 md:mt-2.5 dark:text-white font-DanaDemiBold text-sm md:text-xl">
                Coffee Taster Pack
              </span>
            </Link>
          </div>

          <div class="w-25 md:w-50">
            <Link href="#">
              <Image
                class="w-25 h-25 md:w-50 md:h-50"
                loading="lazy"
                src="/images/categories/category5.png"
                alt="p1"
                width={200}
                height={200}
              />
              <span class="text-zinc-700 md:mt-2.5 dark:text-white font-DanaDemiBold text-sm md:text-xl">
                Turkish Coffee
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
