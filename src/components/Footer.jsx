import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";

export default function Footer() {
  return (
    <>
      <div className="bg-zinc-700 text-gray-300">
        <div className="flex flex-wrap gap-x-[50px] justify-between w-[98%] lg:w-[90%] mx-auto px-4 md:px-[96px] pt-8 md:pt-[62px] pb-[40px] md:pb-[54px]">
          <div className="">
            <div className="flex items-center gap-x-5 text-gray-300">
              <Image
                src="/images/app-logo.png"
                alt="logo"
                width={57}
                height={54}
              />
              <Image
                width={138}
                height={54}
                src="/images/svgs/app-logo-type.svg"
                className="w-[138px] h-[54px] text-white"
              />
            </div>
            <p className=" text-base/[28px] md:text-xl/[48px] font-Dana w-[308px] md:w-[500px] mt-6 md:mt-[18px]">
              At HotCoffee, we are dedicated to bringing you the finest quality
              in the preparation and serving of various coffees, creating
              moments filled with pleasure and energy. Our goal is to elevate
              the culture and art of coffee drinking in Iran and the region,
              providing a unique and memorable experience for coffee
              enthusiasts.
            </p>
          </div>
          <div className="pt-10 md:pt-[26px]">
            <h4 className="text-2xl/[28px] md:text-[28px] font-DanaDemiBold">
              Quick Access
            </h4>
            <div className="grid grid-cols-2 gap-y-[10px] md:gap-y-5 gap-x-10 md:gap-x-[69px] mt-6 md:mt-7">
              <Link
                href="#"
                className="flex items-center gap-x-3 group hover:text-orange-300 transition-colors"
              >
                <span className="block w-[10px] rounded-3xl h-1 bg-gray-300 group-hover:bg-orange-300 transition-colors"></span>
                <span className="text-base/[28px] md:text-xl/[28px]">
                  Privacy Policy
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center group gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span className="block w-[10px] rounded-3xl h-1 bg-gray-300 group-hover:bg-orange-300 transition-colors"></span>
                <span className="text-base/[28px] md:text-xl/[28px]">
                  Returns
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center group gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span className="block w-[10px] rounded-3xl h-1 bg-gray-300 group-hover:bg-orange-300 transition-colors"></span>
                <span className="text-base/[28px] md:text-xl/[28px]">
                  Careers
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center group gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span className="block w-[10px] rounded-3xl h-1 bg-gray-300 group-hover:bg-orange-300 transition-colors"></span>
                <span className="text-base/[28px] md:text-xl/[28px]">
                  Terms of Use
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center group gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span className="block w-[10px] rounded-3xl h-1 bg-gray-300 group-hover:bg-orange-300 transition-colors"></span>
                <span className="text-base/[28px] md:text-xl/[28px]">
                  Warranty
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center group gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span className="block w-[10px] rounded-3xl h-1 bg-gray-300 group-hover:bg-orange-300 transition-colors"></span>
                <span className="text-base/[28px] md:text-xl/[28px]">
                  Order Placement
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center group gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span className="block w-[10px] rounded-3xl h-1 bg-gray-300 group-hover:bg-orange-300 transition-colors"></span>
                <span className="text-base/[28px] md:text-xl/[28px]">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
          <div className="pt-10 md:pt-[26px]">
            <h4 className="text-2xl/[28px] md:text-[28px] font-DanaDemiBold">
              Stay in Touch
            </h4>
            <div className="grid grid-cols-1 gap-y-4 md:gap-y-5 gap-x-[69px] mt-6 md:mt-7">
              <p className="flex items-center gap-x-3 text-xl/[28px] hover:text-orange-300 transition-colors">
                <LuMapPin className="w-6 h-6" />
                <span className="text-base/[22px]">
                  Mir-Damad Boulevard, Alborz Street, East Qabadian Alley, No.
                  33
                </span>
              </p>
              <span className="text-base/[22px] md:text-xl/[28px] flex gap-x-3 items-center text-orange-100">
                <FaRegEnvelope className="w-6 h-6" />
                <Link href="mailto:info@hotCoffee.com">info@hotCoffee.com</Link>
              </span>
              <p className="flex gap-x-[10px] md:gap-x-3 items-center ">
                <HiOutlinePhone className="w-6 h-6" />
                <span
                  dir="ltr"
                  className="text-base/[22px] md:text-xl/[28px] hover:text-orange-300 transition-colors flex gap-x-3 items-center"
                >
                  <Link href="tel:+989036439883" className="cursor-pointer">
                    09036439883
                  </Link>
                </span>
                <span
                  dir="ltr"
                  className="text-base/[22px] hover:text-orange-300 md:text-xl/[28px] transition-colors text-left"
                >
                  <Link href="tel:0216789012" className="cursor-pointer">
                    0216789012
                  </Link>
                </span>
              </p>
              <div className="flex items-end gap-x-[6px] md:gap-x-6">
                <Link
                  href="#"
                  className="flex-center gap-x-[6px] rounded-xl py-3 px-[14px] border border-orange-200 w-[176px] md:w-[248px]"
                >
                  <Image
                    src="/images/icons8-instagram-50.png"
                    className="h-[26px] w-[26px] md:w-[38px] md:h-[38px]"
                    alt="hotCoffee"
                    width={26}
                    height={26}
                  />
                  <span>
                    <Link
                      href="https://instagram.com/hot_coffee"
                      dir="ltr"
                      className="text-base/[22px] md:text-xl font-Dana text-orange-200"
                    >
                      @hot_coffee
                    </Link>
                  </span>
                </Link>
                <Link
                  href="#"
                  className="flex-center gap-x-[6px] rounded-xl border border-orange-200 py-3 px-[14px] bg-gradient-to-tr from-orange-300 to-orange-200 w-[176px] md:w-[248px]"
                >
                  <Image
                    className="h-[26px] w-[26px] md:w-[38px] md:h-[38px]"
                    src="/images/telegram.png"
                    alt="hotcoffee"
                    width={26}
                    height={26}
                  />
                  <span>
                    <Link
                      href="https://t.me/hot_coffee"
                      dir="ltr"
                      className="text-base/[22px] md:text-xl font-Dana text-orange-200"
                    >
                      @hot_coffee
                    </Link>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[98%] lg:w-[90%] mx-auto px-4 md:px-[96px] pt-8 md:pt-[62px]">
          <div className="flex flex-wrap items-center justify-between gap-y-4 py-[47px] bg-transparent border-t border-white/10">
            <div className="flex items-center gap-x-[10px] md:max-w-[650px]">
              <div className="flex-center w-[30px] h-[30px] rounded-full border border-white/10">
                <div className="flex-center w-[20px] h-[20px] rounded-full border border-white/10">
                  <div className="w-[10px] h-[10px] rounded-full bg-gradient-to-b from-orange-200 to-orange-300"></div>
                </div>
              </div>
              <p className="text-xs/[20px] font-DanaMedium md:text-base/[22px]">
                All rights reserved for my brand
              </p>
            </div>
            <p
              dir="ltr"
              className="text-left w-full lg:w-auto text-xs/[20px] font-DanaMedium md:text-base/[22px]"
            >
              Copyright © 2024 HotCoffee. All rights reserved.
            </p>
            <p
              dir="ltr"
              className="text-left w-full lg:w-auto text-xs/[20px] font-DanaMedium md:text-base/[22px]"
            >
              developer:
              <Link href="https://alirezatalebizadeh.ir/">
                Alireza talebizadeh
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
