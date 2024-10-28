import Image from "next/image";
import React, { Suspense } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";

export default function productItem({ product }) {
  console.log("product", product);

  return (
    <div className="bg-white dark:bg-zinc-700 shadow-normal rounded-2xl p-2 md:p-5">
      <div className="relative overflow-hidden">
        <Image
          src={product.image_url || "/images/products/p1.png"}
          className="w-32 h-32 md:w-[260px] md:h-[260px] mx-auto"
          alt="product"
          width={260}
          height={260}
          quality={100}
          loading="lazy"
        />
        <span className="flex items-center justify-center absolute top-0 right-0 md:top-1 md:right-1 text-xs/normal md:text-base text-white bg-orange-300 rounded-[100px] w-[54px] h-[30px] font-DanaMedium">
          {product.weight || "250gr"}
        </span>
      </div>
      <h2 className="text-zinc-700 dark:text-white font-DanaMedium text-sm/[28px] md:h-14 md:text-xl/[28px] mt-2 mb-1.5 md:mt-5 md:mb-2.5 line-clamp-2">
        {product.name}
      </h2>
      <div className="flex items-center gap-x-2.5 md:justify-center">
        <div className="text-teal-600 text-right">
          <span className="text-base/normal md:text-xl/normal font-DanaDemiBold">
            {product.price || "Free"}
          </span>
          <span className="text-xs/noraml md:text-sm/normal font-Dana -tracking-wider">
            $
          </span>
        </div>
        <div className="hidden md:inline-block text-gray-400 offer">
          <span className="text-xl/normal font-Dana">
            ${(product.price + 8).toFixed(2)}
          </span>
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
  );
}

//
// {
//   _id: '642d3d8719341833719cd68c',
//   id: 20,
//   name: 'Chilean Charm',
//   description: 'This coffee boasts a smooth and balanced flavor, with notes of chocolate, caramel, and a hint of fruit. It has a medium body and a subtle acidity that will leave you feeling refreshed and energized.',
//   price: 12.99,
//   region: 'South America',
//   weight: 500,
//   flavor_profile: [ 'Chocolate', 'Caramel', 'Fruit' ],
//   grind_option: [ 'Whole Bean', 'Cafetiere', 'Filter', 'Espresso' ],
//   roast_level: 2,
//   image_url: 'https://iili.io/H8Y7EhP.webp'
// }
