import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryProducts() {
  return (
    <div className="mb-[118px] mt-20">
      <div className="container">
        <div className="flex items-start justify-center flex-wrap gap-y-[36px] gap-x-[21px] md:gap-[65px] text-center">
          <div className="w-25 md:w-50">
            <Link href="#">
              <Image
                className="w-25 h-25 md:w-50 md:h-50"
                loading="lazy"
                width={200}
                height={200}
                src="/images/categories/category1.png"
                alt="p1"
              />
              <span className="text-zinc-700 md:mt-2.5 dark:text-white font-DanaDemiBold text-sm md:text-xl">
                Brewed Coffee and Espresso
              </span>
            </Link>
          </div>

          <div className="w-25 md:w-50">
            <Link href="#">
              <Image
                className="w-25 h-25 md:w-50 md:h-50"
                loading="lazy"
                width={200}
                height={200}
                src="/images/categories/category2.png"
                alt="p1"
              />
              <span className="text-zinc-700 md:mt-2.5 dark:text-white font-DanaDemiBold text-sm md:text-xl">
                Accessories and Equipment
              </span>
            </Link>
          </div>

          <div>
            <Link href="#">
              <Image
                className="w-25 h-25 md:w-50 md:h-50"
                loading="lazy"
                width={200}
                height={200}
                src="/images/categories/category3.png"
                alt="p1"
              />
              <span className="text-zinc-700 md:mt-2.5 dark:text-white font-DanaDemiBold text-sm md:text-xl">
                Espresso Machines
              </span>
            </Link>
          </div>

          <div className="w-25 md:w-50">
            <Link href="#">
              <Image
                className="w-25 h-25 md:w-50 md:h-50"
                loading="lazy"
                width={200}
                height={200}
                src="/images/categories/category4.png"
                alt="p1"
              />
              <span className="text-zinc-700 md:mt-2.5 dark:text-white font-DanaDemiBold text-sm md:text-xl">
                Coffee Taster Pack
              </span>
            </Link>
          </div>

          <div className="w-25 md:w-50">
            <Link href="#">
              <Image
                className="w-25 h-25 md:w-50 md:h-50"
                loading="lazy"
                src="/images/categories/category5.png"
                alt="p1"
                width={200}
                height={200}
              />
              <span className="text-zinc-700 md:mt-2.5 dark:text-white font-DanaDemiBold text-sm md:text-xl">
                Turkish Coffee
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
