import React from "react";
import HeaderSection from "./HeaderSection";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="mt-8 mb-8 md:mb-28 md:mt-20">
      <div className="container">
        <HeaderSection
          title="Reading  material"
          subTitle=""
          titleLeft="View all Blogs"
        />

        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {/* <!-- //!Blog-item --> */}

          <div className="bg-white flex gap-x-3 sm:w-full justify-between sm:flex-col dark:bg-zinc-700 rounded-2xl overflow-hidden sm:max-w-[358px] sm:h-[285px] shadow-normal p-[10px] group cursor-pointer">
            <div className="relative max-w-[129px] h-[129px] sm:max-w-full sm:min-w-full sm:h-50 rounded-2xl rounded-bl-4xl overflow-hidden transition-all sm:ml-0">
              <Image
                width={1000}
                height={1000}
                src="/images/blogs/blog-1.png"
                className="w-full h-full object-cover"
                alt="Blog-1"
                loading="lazy"
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-200/80 to-orange-300/80 hidden md:flex-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75">
                <Image
                  width={500}
                  height={500}
                  alt="logo"
                  loading="lazy"
                  src="/images/big-logo.png"
                  className="text-amber-900 w-[84px] h-[32px] md:w-[138px] md:h-[54px]"
                />
              </div>
            </div>

            <div className="sm:mt-[10px]">
              {/* Tablet Template */}
              <div className="hidden sm:flex items-center sm:mr-2 xl:mr-5 sm:ml-[10px]">
                <h2 className="text-zinc-700 dark:text-white font-Dana sm:text-base/[20px] md:text-lg/7 line-clamp-2">
                  How to Brew Pour-Over Coffee with an AeroPress
                </h2>
                <span className="block w-px h-[61px] bg-gray-100 dark:bg-white/10"></span>
                <div className="hidden sm:flex flex-col text-right text-teal-600 md:text-2xl/normal sm:pr-3 sm:mr-4 md:mr-2 lg:pr-4">
                  <span className="font-DanaDemiBold md:text-2xl/normal">
                    21
                  </span>
                  <span className="md:text-sm/normal font-Dana">August</span>
                  <span className="md:text-sm/normal font-Dana">2023</span>
                </div>
              </div>

              {/* Mobile Template */}
              <div className="flex min-w-[191px] sm:hidden flex-col justify-between text-teal-600 h-full">
                <h2 className="text-zinc-700 dark:text-white text-sm/7 font-Dana line-clamp-2 mt-[10px]">
                  How to Brew Pour-Over Coffee with an AeroPress Long Second
                  Line
                </h2>
                <span className="block sm:hidden w-full h-px bg-gray-100 dark:bg-white/10 mx-2"></span>
                <div className="w-full flex justify-between items-end px-[6px]">
                  <span className="font-Dana text-xs/normal">
                    21 August 2023
                  </span>
                  <Link
                    href="#"
                    className="flex items-center gap-x-[6px] py-0.5 px-2 bg-orange-200/20 rounded-md text-xs/normal font-DanaMedium text-orange-300"
                  >
                    Read
                    <svg className="h-4 w-4">
                      <use href="#arrow-left-blog"></use>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white flex gap-x-3 sm:w-full justify-between sm:flex-col dark:bg-zinc-700 rounded-2xl overflow-hidden sm:max-w-[358px] sm:h-[285px] shadow-normal p-[10px] group cursor-pointer">
            <div className="relative max-w-[129px] h-[129px] sm:max-w-full sm:h-50 rounded-2xl rounded-bl-4xl overflow-hidden transition-all sm:ml-0">
              <Image
                width={1000}
                height={1000}
                src="/images/blogs/blog-2.png"
                className="w-full h-full object-cover"
                alt="Blog-1"
                loading="lazy"
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-200/80 to-orange-300/80 hidden md:flex-center opacity-0 invisible  -hover:opacity-100  -hover:visible transition-all delay-75">
                <Image
                  width={500}
                  height={500}
                  alt="logo"
                  loading="lazy"
                  src="/images/big-logo.png"
                  className="text-amber-900 w-[84px] h-[32px] md:w-[138px] md:h-[54px]"
                />
              </div>
            </div>

            <div className="sm:mt-[10px]">
              {/* <!-- !Tablet template --> */}
              <div className="hidden sm:flex items-center sm:mr-2 xl:mr-5 sm:ml-[10px]">
                <h2 className="text-zinc-700 dark:text-white font-Dana sm:text-base/[20px] md:text-lg/7 line-clamp-2">
                  An exciting and high-calorie drink to start the day
                </h2>
                <span className="block w-px h-[61px] bg-gray-100 dark:bg-white/10 mx-2"></span>
                <div className="hidden sm:flex flex-col text-right text-teal-600 md:text-2xl/normal sm:pr-3 sm:mr-4 md:mr-2 lg:pr-4">
                  <span className="font-DanaDemiBold md:text-2xl/normal">
                    21
                  </span>
                  <span className="md:text-sm/normal font-Dana">Mordad</span>
                  <span className="md:text-sm/normal font-Dana">1402</span>
                </div>
              </div>

              {/* <!-- !Mobile template --> */}
              <div className="flex min-w-[191px] sm:hidden flex-col justify-between text-teal-600 h-full">
                <h2 className="text-zinc-700 dark:text-white text-sm/7 font-Dana line-clamp-2 mt-[10px]">
                  An exciting and high-calorie drink to start the day
                </h2>
                <span className="block sm:hidden w-full h-px bg-gray-100 dark:bg-white/10 mx-2"></span>
                <div className="w-full flex justify-between items-end px-[6px]">
                  <span className="font-Dana text-xs/normal">
                    21 Mordad 1402
                  </span>
                  <Link
                    href="#"
                    className="flex items-center gap-x-[6px] py-0.5 px-2 bg-orange-200/20 rounded-md text-xs/normal font-DanaMedium text-orange-300"
                  >
                    Read
                    <svg className="h-4 w-4">
                      <use href="#arrow-left-blog"></use>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white flex gap-x-3 sm:w-full justify-between sm:flex-col dark:bg-zinc-700 rounded-2xl overflow-hidden sm:max-w-[358px] sm:h-[285px] shadow-normal p-[10px] group cursor-pointer">
            <div className="relative max-w-[129px] h-[129px] sm:max-w-full sm:h-50 rounded-2xl rounded-bl-4xl overflow-hidden transition-all sm:ml-0">
              <Image
                width={1000}
                height={1000}
                src="/images/blogs/blog-3.png"
                className="w-full h-full object-cover"
                alt="Blog-1"
                loading="lazy"
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-200/80 to-orange-300/80 hidden md:flex-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75">
                <Image
                  width={500}
                  height={500}
                  alt="logo"
                  loading="lazy"
                  src="/images/big-logo.png"
                  className="text-amber-900 w-[84px] h-[32px] md:w-[138px] md:h-[54px]"
                />
              </div>
            </div>

            <div className="sm:mt-[10px]">
              {/* <!-- !Tablet template --> */}
              <div className="hidden sm:flex items-center sm:mr-2 xl:mr-5 sm:ml-[10px]">
                <h2 className="text-zinc-700 dark:text-white font-Dana sm:text-base/[20px] md:text-lg/7 line-clamp-2">
                  An exciting and high-calorie drink to start the day
                </h2>
                <span className="block w-px h-[61px] bg-gray-100 dark:bg-white/10 mx-2"></span>
                <div className="hidden sm:flex flex-col text-right text-teal-600 md:text-2xl/normal sm:pr-3 sm:mr-4 md:mr-2 lg:pr-4">
                  <span className="font-DanaDemiBold md:text-2xl/normal">
                    21
                  </span>
                  <span className="md:text-sm/normal font-Dana">Mordad</span>
                  <span className="md:text-sm/normal font-Dana">1402</span>
                </div>
              </div>

              {/* <!-- !Mobile template --> */}
              <div className="flex min-w-[191px] sm:hidden flex-col justify-between text-teal-600 h-full">
                <h2 className="text-zinc-700 dark:text-white text-sm/7 font-Dana line-clamp-2 mt-[10px]">
                  An exciting and high-calorie drink to start the day
                </h2>
                <span className="block sm:hidden w-full h-px bg-gray-100 dark:bg-white/10 mx-2"></span>
                <div className="w-full flex justify-between items-end px-[6px]">
                  <span className="font-Dana text-xs/normal">
                    21 Mordad 1402
                  </span>
                  <Link
                    href="#"
                    className="flex items-center gap-x-[6px] py-0.5 px-2 bg-orange-200/20 rounded-md text-xs/normal font-DanaMedium text-orange-300"
                  >
                    Read
                    <svg className="h-4 w-4">
                      <use href="#arrow-left-blog"></use>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white flex gap-x-3 sm:w-full justify-between sm:flex-col dark:bg-zinc-700 rounded-2xl overflow-hidden sm:max-w-[358px] sm:h-[285px] shadow-normal p-[10px] group cursor-pointer">
            <div className="relative max-w-[129px] h-[129px] sm:max-w-full sm:h-50 rounded-2xl rounded-bl-4xl overflow-hidden transition-all sm:ml-0">
              <Image
                src="/images/blogs/blog-4.png"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                alt="Blog-1"
                loading="lazy"
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-200/80 to-orange-300/80 hidden md:flex-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75">
                <Image
                  width={500}
                  height={500}
                  alt="logo"
                  loading="lazy"
                  src="/images/big-logo.png"
                  className="text-amber-900 w-[84px] h-[32px] md:w-[138px] md:h-[54px]"
                />
              </div>
            </div>

            <div className="sm:mt-[10px]">
              {/* <!-- !Tablet template --> */}
              <div className="hidden sm:flex items-center sm:mr-2 xl:mr-5 sm:ml-[10px]">
                <h2 className="text-zinc-700 dark:text-white font-Dana sm:text-base/[20px] md:text-lg/7 line-clamp-2">
                  An exciting and high-calorie drink to start the day
                </h2>
                <span className="block w-px h-[61px] bg-gray-100 dark:bg-white/10 mx-2"></span>
                <div className="hidden sm:flex flex-col  text-teal-600 md:text-2xl/normal sm:pr-3 sm:mr-4 md:mr-2 lg:pr-4 text-right">
                  <span className="font-DanaDemiBold md:text-2xl/normal">
                    21
                  </span>
                  <span className="md:text-sm/normal font-Dana">Mordad</span>
                  <span className="md:text-sm/normal font-Dana">1402</span>
                </div>
              </div>

              {/* <!-- !Mobile template --> */}
              <div className="flex min-w-[191px] sm:hidden flex-col justify-between text-teal-600 h-full">
                <h2 className="text-zinc-700 dark:text-white text-sm/7 font-Dana line-clamp-2 mt-[10px]">
                  An exciting and high-calorie drink to start the day
                </h2>
                <span className="block sm:hidden w-full h-px bg-gray-100 dark:bg-white/10 mx-2"></span>
                <div className="w-full flex justify-between items-end px-[6px]">
                  <span className="font-Dana text-xs/normal">
                    21 Mordad 1402
                  </span>
                  <Link
                    href="#"
                    className="flex items-center gap-x-[6px] py-0.5 px-2 bg-orange-200/20 rounded-md text-xs/normal font-DanaMedium text-orange-300"
                  >
                    Read
                    <svg className="h-4 w-4">
                      <use href="#arrow-left-blog"></use>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
