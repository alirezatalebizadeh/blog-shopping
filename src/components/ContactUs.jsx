import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";

export default function ContactUs() {
  return (
    <div className="mb-[76px] md:mb-[118px]">
      <div className="container">
        <div>
          <div className="flex flex-col gap-y-8 sm:flex-row gap-x-[10px] items-start">
            <Image
              src="/images/contact.png"
              width={295}
              height={305}
              loading="lazy"
              className="w-[296px] h-305px mx-auto"
              alt="contact us"
            />

            {/* <!--//! Left Contact Section --> */}
            <div className="flex flex-col gap-y-5 md:gap-y-7 h-full text-left text-zinc-700 dark:text-white">
              <h2 className="text-2xl/8 md:text-5xl/8 font-MorabbaMedium">
                One of the Best Coffees!
              </h2>
              <p className="text-lg/8 md:text-3xl/[48px] font-MorabbaLight -mt-5 md:-mt-[18px]">
                Ask us for quality coffee...
              </p>
              <div className="flex items-center gap-x-[10px]">
                <span className="block w-1 h-1 bg-zinc-700 rounded-full dark:bg-gray-400"></span>
                <span className="block w-1 h-1 bg-zinc-700 rounded-full dark:bg-gray-400"></span>
                <span className="block w-1 h-1 bg-zinc-700 rounded-full dark:bg-gray-400"></span>
              </div>
              <p className="text-justify text-lg/7 md:text-2xl font-Dana">
                Feel our warm and cozy atmosphere, where everyone can find
                aromatic coffee and enjoy our delicious desserts, perfectly
                paired with hot coffee. Our stylish interior and friendly staff
                will make your day!
              </p>

              <Link
                href="tel:+989036439883"
                className=" h-[50px] md:w-[216px] flex-center text-sm/normal gap-x-2 rounded-[100px] border-[2px] border-orange-300 dark:border-orange-300 text-orange-300 px-2 md:px-6 md:py-4 transition  hover:bg-orange-300 hover:text-white hover:border-white dark:hover:border-black"
              >
                <FiPhone className="w-[22px] h-[22px] md:w-8 md:h-8 text-black/70 dark:text-white" />
                <span>Place an Order by Phone</span>
              </Link>
            </div>
          </div>

          {/* <!-- //!Services Section --> */}
          <div className="relative mt-[76px] md:mt-[118px] gap-10 flex items-start justify-between flex-wrap overflow-hidden">
            {/* <!--//! Service 1 --> */}
            <div className="md:flex items-center text-center gap-x-4">
              <Image
                loading="lazy"
                className="dark:hidden w-[76px] h-[73px]"
                src="/images/servise1.svg"
                alt="services"
                width={76}
                height={73}
              />
              <Image
                loading="lazy"
                className="hidden dark:inline-block w-[76px] h-[73px]"
                src="/images/serviseNight.svg"
                alt="services"
                width={73}
                height={76}
              />

              <div className="text-zinc-700 dark:text-white text-center">
                <h3 className="font-DanaDemiBold text-sm/6">24/7 Support</h3>
                <p className="text-xs md:text-sm/7 font-Dana">Available 24/7</p>
              </div>
            </div>

            {/* <!--//! Service 2 --> */}
            <div className="md:flex items-center text-center gap-x-4">
              <Image
                className="dark:hidden w-[76px] h-[73px]"
                src="/images/services2Night.svg"
                alt="services"
                width={73}
                height={76}
                loading="lazy"
              />
              <Image
                className="hidden dark:inline-block w-[76px] h-[73px]"
                src="/images/services2.svg"
                alt="services"
                width={76}
                loading="lazy"
                height={73}
              />
              <div className="text-zinc-700 dark:text-white text-center">
                <h3 className="font-DanaDemiBold text-sm/6">
                  Express Delivery
                </h3>
                <p className="text-xs md:text-sm/7 font-Dana">
                  Fast delivery service
                </p>
              </div>
            </div>

            {/* <!--//! Center Cross Decoration (for large screens) --> */}
            <div className="xxs:hidden absolute top-1/2 right-1/2 translate-x-1/2">
              <div className="w-[450px] h-px bg-gray-300"></div>
              <div className="w-[450px] h-px bg-gray-300 rotate-90"></div>
            </div>

            {/* <!--//! Service 3 --> */}
            <div className="md:flex items-center text-center gap-x-4">
              <Image
                className="hidden dark:inline-block w-[76px] h-[73px]"
                src="/images/servises3.svg"
                alt="services"
                width={73}
                loading="lazy"
                height={76}
              />
              <Image
                className="dark:hidden w-[76px] h-[73px]"
                src="/images/servises3Night.svg"
                alt="services"
                loading="lazy"
                width={76}
                height={73}
              />
              <div className="text-zinc-700 dark:text-white text-center">
                <h3 className="font-DanaDemiBold text-sm/6">
                  Express Delivery
                </h3>
                <p className="text-xs md:text-sm/7 font-Dana">
                  Fast delivery service
                </p>
              </div>
            </div>

            {/* <!--//! Service 4 --> */}
            <div className="md:flex items-center text-center gap-x-4">
              <Image
                className="dark:hidden w-[76px] h-[73px]"
                src="/images/servises4.svg"
                alt="services"
                loading="lazy"
                width={73}
                height={76}
              />
              <Image
                className="hidden dark:inline-block w-[76px] h-[73px]"
                src="/images/services4Night.svg"
                alt="services"
                width={76}
                loading="lazy"
                height={73}
              />

              <div className="text-zinc-700 dark:text-white text-center">
                <h3 className="font-DanaDemiBold text-sm/6">
                  Express Delivery
                </h3>
                <p className="text-xs md:text-sm/7 font-Dana">
                  Fast delivery service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
