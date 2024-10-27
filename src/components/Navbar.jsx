"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaArrowRightFromBracket, FaChevronDown } from "react-icons/fa6";
import {
  IoChatboxEllipsesOutline,
  IoDocumentTextOutline,
  IoMoonOutline,
} from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosSunny } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(
  //   typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  // );

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  //! Toggle the theme
  const toggleTheme = () => {
    // if (isDarkMode) {
    //   document.documentElement.classList.remove("dark");
    //   localStorage.setItem("theme", "light");
    // } else {
    //   document.documentElement.classList.add("dark");
    //   localStorage.setItem("theme", "dark");
    // }
    // setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/*//! Header for mobile */}
      <div className="flex items-center justify-between z-50 md:hidden text-zinc-700  dark:bg-zinc-700 px-5 h-16">
        <div
          onClick={() => setIsNavOpen(true)}
          className="dark:text-white cursor-pointer"
        >
          <FaBars className="w-6 h-6" />
        </div>

        {/* Nav Menu */}
        {isNavOpen && (
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-zinc-700 p-5 z-20">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-white/10 pb-5">
              <div className="flex items-center gap-x-3.5 text-orange-300">
                <Image
                  src="/images/app-logo.png"
                  width={41}
                  height={40}
                  alt="hotCoffee"
                />
              </div>
              <div
                onClick={() => setIsNavOpen(false)}
                className="cursor-pointer dark:text-white"
              >
                X
              </div>
            </div>

            {/* Nav Menu Items */}
            <ul className="space-y-6 text-zinc-600 dark:text-white">
              <li className="flex items-center rounded-md mb-4 pr-0 h-10 bg-orange-200/20 text-orange-300">
                <Link href="#" className="flex items-center gap-x-2">
                  <TiHomeOutline className="w-5 h-5" />
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <Link href="#" className="flex items-center gap-x-2">
                    <HiOutlineShoppingBag className="w-5 h-5" />
                    Shop
                  </Link>
                  <FaChevronDown
                    onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>

                {/* Submenu */}
                {isSubmenuOpen && (
                  <div className="submenu ml-5 mt-2 space-y-2">
                    <Link
                      href="#"
                      className="hover:text-orange-300 transition-colors block"
                    >
                      Special Coffee
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-orange-300 transition-colors block"
                    >
                      Global Special
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-orange-300 transition-colors block"
                    >
                      Premium Coffee
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-orange-300 transition-colors block"
                    >
                      Commercial Blends
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-orange-300 transition-colors block"
                    >
                      Zino Brazilian Coffee
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-orange-300 transition-colors block"
                    >
                      Coffee Capsules
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link href="#" className="flex items-center gap-x-2">
                  <IoChatboxEllipsesOutline className="w-5 h-5" />
                  Dictionary
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-x-2">
                  <IoDocumentTextOutline className="w-5 h-5" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-x-2">
                  <AiOutlineShoppingCart className="w-5 h-5" />
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-x-2">
                  <FiPhoneCall className="w-5 h-5" />
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Nav Footer */}
            <div className="mt-8 border-t border-gray-100 dark:border-white/10 pt-5 space-y-6">
              <Link
                href="#"
                className="flex gap-1 items-center text-orange-300"
              >
                Login | Sign Up
                <FaArrowRightFromBracket className="w-5 h-5 transform" />
              </Link>
              <div
                onClick={toggleTheme}
                className="flex items-center cursor-pointer text-orange-300"
              >
                {isDarkMode ? (
                  <div
                    className="flex items-center gap-1"
                    onClick={toggleTheme}
                  >
                    Light Mode
                    <IoIosSunny className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    Dark Mode
                    <IoMoonOutline className="w-5 h-5" />
                  </div>
                )}
              </div>
              <Link
                href="#"
                className="flex items-center gap-1 text-orange-300"
              >
                Cart
                <AiOutlineShoppingCart className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}

        {/* Cart Icon */}
        <div
          onClick={() => setIsCartOpen(true)}
          className="dark:text-white cursor-pointer"
        >
          <AiOutlineShoppingCart className="w-6 h-6" />
        </div>

        {/* Cart Menu */}
        {isCartOpen && (
          <div className="fixed top-0 left-0 bottom-0 w-64 bg-white dark:bg-zinc-700 p-5 z-20">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-white/10 pb-5">
              <span
                onClick={() => setIsCartOpen(false)}
                className="w-5 h-5 text-zinc-600 dark:text-white cursor-pointer"
              >
                X
              </span>
              <span className="text-zinc-600 dark:text-white">Basket</span>
            </div>

            <div class="child:pb-5 child:mb-5">
              {/* <!--//! Cart-Item --> */}
              <div class="flex gap-x-1 py-5 border-b border-b-gray-100 dark:border-b-white/10">
                <Image
                  width={90}
                  height={90}
                  class="w-[90px] h-[90px]"
                  src="/images/products/p1.png"
                  alt="logo"
                />

                <div>
                  <h4 class="text-sm text-zinc-700 dark:text-white font-DanaMedium line-clamp-2">
                    Bonmano Espresso Coffee, Prisca Model, 250g
                  </h4>
                  <div class="mt-4">
                    <span class="text-xs text-teal-600 font-Dana dark:text-emerald-500 tracking-tighter leading-6">
                      23.2 $ discount
                    </span>
                    <div class="text-base text-zinc-700 dark:text-white font-DanaDemiBold">
                      28.6
                      <span class="text-xs font-Dana">$</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex gap-x-1 py-5 border-b border-b-gray-100 dark:border-b-white/10">
                <Image
                  width={90}
                  height={90}
                  class="w-[90px] h-[90px]"
                  src="/images/products/p2.png"
                  alt="product"
                />

                <div>
                  <h4 class="text-sm text-zinc-700 dark:text-white font-DanaMedium line-clamp-2">
                    Bonmano Espresso Coffee, Prisca Model, 250g
                  </h4>
                  <div class="mt-4">
                    <span class="text-xs text-teal-600 font-Dana dark:text-emerald-500 tracking-tighter leading-6">
                      23.2 $ discount
                    </span>
                    <div class="text-base text-zinc-700 dark:text-white font-DanaDemiBold">
                      28.6
                      <span class="text-xs font-Dana">$</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--//! !Cart-Footer --> */}
            <div class="py-8 mt-auto absolute bottom-0 flex justify-between items-end gap-x-4">
              <Link
                href="#"
                class="flex items-center justify-center w-28 h-11 rounded-xl bg-teal-600 dark:bg-emerald-500 dark:hover:bg-teal-500 hover:bg-emerald-600 text-white font-Dana tracking-tightest text-lg"
              >
                Place Order
              </Link>

              <div>
                <div class="text-xs text-gray-300 font-DanaMedium dark:text-white tracking-tighter leading-6">
                  Payable Amount
                </div>
                <div class="flex items-center gap-x-1.5 text-base text-zinc-700 dark:text-white font-DanaDemiBold">
                  85.3
                  <span class="text-xs font-Dana">$</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* //!{headers for desktop} */}
      <header className="fixed top-9 left-0 right-0 z-50 hidden md:flex items-center bg-black/50 p-5 lg:px-10 h-24 w-[98%] lg:w-[90%] mx-auto rounded-3xl backdrop-blur-[6px]">
        <div className="flex justify-between w-full">
          {/* <!-- !logo & menu --> */}
          <nav className="flex md:gap-9 items-center h-14">
            <div className="shrink-0">
              <Image
                src="/images/app-logo.png"
                alt="logo"
                width={60}
                height={60}
              />
            </div>
            {/* <!-- !menu --> */}
            <ul className="flex gap-x-3 lg:gap-x-9 items-center text-xl text-gray-300 tracking-tightest h-full">
              <li>
                <Link href="#" className="font-DanaMedium text-orange-200">
                  Home
                </Link>
              </li>
              <li className="relative group py-4">
                <Link
                  href="#"
                  className="group-hover:text-orange-300 transition-colors"
                >
                  shop
                </Link>
                {/* <!--//! submenu --> */}
                <div className="absolute top-full shadow-normal w-52 space-y-4 bg-white dark:bg-zinc-700 p-6 rounded-2xl text-zinc-700 dark:text-white border-t-[3px] border-t-orange-300 tracking-normal transition-all delay-75 opacity-0 invisible group-hover:opacity-100 group-hover:visible child:inline-block child:transition-colors child-hover:text-orange-300 child:leading-[20px]">
                  <Link
                    href="#"
                    className="hover:text-orange-300 transition-colors block"
                  >
                    Special Coffee
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-orange-300 transition-colors block"
                  >
                    Global Special
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-orange-300 transition-colors block"
                  >
                    Premium Coffee
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-orange-300 transition-colors block"
                  >
                    Commercial Blends
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-orange-300 transition-colors block"
                  >
                    Zino Brazilian Coffee
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-orange-300 transition-colors block"
                  >
                    Coffee Capsules
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-300  transition-colors"
                >
                  dictionary
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-300  transition-colors"
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-300  transition-colors"
                >
                  about me
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-300  transition-colors"
                >
                  contact us
                </Link>
              </li>
            </ul>
          </nav>

          {/* <!-- !cart & theme toggle & loggin link --> */}
          <div className="flex items-center gap-x-5 xl:gap-x-10">
            {/* <!--  sweech btn and cart icon --> */}
            <div className="flex items-center gap-x-3 lg:gap-x-5 text-orange-200">
              <div className="relative group">
                {/* <!-- cart icon hover --> */}
                <div
                  onClick={() => setIsCartOpen(true)}
                  className="py-3 cursor-pointer"
                >
                  <AiOutlineShoppingCart className="inline-block  w-8 h-8" />
                </div>
                {/* <!-- cart box --> */}
                <div className="absolute top-full left-0 w-[400px] shadow-normal bg-white dark:bg-zinc-700 p-5 rounded-2xl text-zinc-700 dark:text-white border-t-[3px] border-t-orange-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible delay-75">
                  {/* <!-- Cart Header --> */}
                  <div className="flex items-center justify-between text-xs font-DanaMedium">
                    <span className="text-gray-300"> 1 مورد</span>
                    <Link
                      href="#"
                      className="flex items-center h-5 text-orange-300"
                    >
                      View shopping cart
                      <svg className="w-5 h-5">
                        <use href="#chevron-left"></use>
                      </svg>
                    </Link>
                  </div>

                  {/* <!-- Cart body --> */}
                  <div className="pb-1 scrollbar dark:scrollbarDark border-b max-h-82 overflow-y-auto border-b-gray-300 dark:border-white/10 divide-y divide-gray-100 dark:divide-white/5 child:pt-5">
                    {/* <!-- item cart --> */}
                    <div className="flex gap-x-2.5 py-5">
                      <div>
                        <Image
                          width={90}
                          height={90}
                          className="w-30 h-30"
                          src="/images/products/p1.png"
                          alt="logo"
                        />
                      </div>
                      <div>
                        <h4 className="text-base text-zinc-700 dark:text-white font-DanaMedium line-clamp-2">
                          Espresso Coffee Bonmano Model Prisca 250g
                        </h4>
                        <div className="mt-5">
                          <span className="text-xs text-teal-600 font-DanaMedium dark:text-emerald-500 tracking-tighter leading-6">
                            14.3 $ Discount
                          </span>
                          <div className="text-xl text-zinc-700 dark:text-white font-DanaDemiBold">
                            28.3
                            <span className="text-sm font-Dana">$</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-x-2.5 py-5">
                      <div>
                        <Image
                          width={90}
                          height={90}
                          className="w-30 h-30"
                          src="/images/products/p1.png"
                          alt="logo"
                        />
                      </div>
                      <div>
                        <h4 className="text-base text-zinc-700 dark:text-white font-DanaMedium line-clamp-2">
                          Espresso Coffee Bonmano Model Prisca 250g
                        </h4>
                        <div className="mt-5">
                          <span className="text-xs text-teal-600 font-DanaMedium dark:text-emerald-500 tracking-tighter leading-6">
                            14.3 $ Discount
                          </span>
                          <div className="text-xl text-zinc-700 dark:text-white font-DanaDemiBold">
                            28.3
                            <span className="text-sm font-Dana">$</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-x-2.5 py-5">
                      <div>
                        <Image
                          width={90}
                          height={90}
                          className="w-30 h-30"
                          src="/images/products/p1.png"
                          alt="logo"
                        />
                      </div>
                      <div>
                        <h4 className="text-base text-zinc-700 dark:text-white font-DanaMedium line-clamp-2">
                          Espresso Coffee Bonmano Model Prisca 250g
                        </h4>
                        <div className="mt-5">
                          <span className="text-xs text-teal-600 font-DanaMedium dark:text-emerald-500 tracking-tighter leading-6">
                            14.3 $ Discount
                          </span>
                          <div className="text-xl text-zinc-700 dark:text-white font-DanaDemiBold">
                            28.3
                            <span className="text-sm font-Dana">$</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Cart Footer --> */}
                  <div className="flex justify-between p-5 pb-0">
                    <div>
                      <span className="text-xs text-gray-300 font-DanaMedium dark:text-white tracking-tighter leading-6">
                        total price :
                      </span>
                      <div className="text-xl text-zinc-700 dark:text-white font-DanaDemiBold">
                        25.3
                        <span className="text-sm font-Dana">$</span>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="flex items-center justify-center w-36 h-14 rounded-xl bg-teal-600 dark:bg-emerald-500 dark:hover:bg-teal-500 hover:bg-emerald-600 text-white font-Dana tracking-tightest text-lg"
                    >
                      order
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--! theme sweech btn --> */}
              <div
                onClick={toggleTheme}
                className="cursor-pointer toggle-theme"
              >
                {isDarkMode ? (
                  <IoIosSunny className="inline-block  w-8 h-8" />
                ) : (
                  <IoMoonOutline className="inline-block dark:hidden w-8 h-8" />
                )}
              </div>
            </div>
            {/* <!-- devide border --> */}
            <span className="block w-[1px] h-14 bg-orange-200"></span>
            {/* !<!-- login & sign up --> */}
            <Link
              href="#"
              className="flex gap-x-2.5 items-center text-xl text-orange-200 tracking-tightest"
            >
              <span className="hidden xl:inline-block">Login | Sign Up </span>
              <FaArrowRightFromBracket className="w-8 h-8 transform " />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
