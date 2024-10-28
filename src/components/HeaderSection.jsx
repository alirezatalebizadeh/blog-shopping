import Link from "next/link";
import React from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

export default function HeaderSection() {
  return (
    <>
      <section className="overflow-hidden relative h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-home-mobile md:bg-home-desktop bg-cover bg-no-repeat bg-[item-top]">
        <div className="container relative overflow-y-hidden h-[100%] md:min-h-screen flex items-center justify-start md:ml-20">
          <div className="bg-gray-100 py-10 h-[250px]">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Our Blog
              </h1>
              <nav className="container mx-auto px-4 mb-6">
                <ol className="flex justify-center text-gray-600 space-x-2">
                  <li>
                    <a href="/" className="text-blue-500 hover:text-blue-700">
                      Home
                    </a>
                  </li>
                  <li>/</li>
                  <li>
                    <a
                      href="/blog"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Blog
                    </a>
                  </li>
                  <li>/</li>
                  <li className="text-gray-800">Current Article</li>
                </ol>
              </nav>

              <Link
                href="#"
                className="bg-blue-500 text-white px-6 py-3 rounded-md shadow hover:bg-blue-600 transition duration-300"
              >
                Read Our Latest Posts
              </Link>
            </div>
          </div>
        </div>
        <svg className="w-[100px] h-11 absolute left-0 right-0 bottom-2 mx-auto translate-y-1/2 hidden md:inline-block text-gray-100 dark:text-zinc-800">
          <use href="#curve"></use>
        </svg>

        <div className="hidden md:flex items-center justify-center bg-white w-[30px] h-[30px] absolute left-0 right-0 bottom-0 mx-auto translate-y-1/2 dark:text-white border-2 border-orange-300 rounded-full">
          <GoChevronDown className="w-5 h-5 text-gray-700 dark:text-white" />
        </div>
      </section>
    </>
  );
}
