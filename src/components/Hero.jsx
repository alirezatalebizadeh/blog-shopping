import React from "react";
import { GoChevronDown } from "react-icons/go";

export default function Hero() {
  return (
    <>
      <section className="overflow-hidden relative h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-home-mobile md:bg-home-desktop bg-cover bg-no-repeat bg-[item-top]">
        <div className="container relative overflow-y-hidden h-[100%] md:min-h-screen flex items-center justify-start md:ml-20">
          <div className="text-white mt-[15px]">
            <h2 className="font-MorabbaBold text-2xl/[20px] leading-8 md:text-6xl mb-0.5 md:mb-2 md:leading-[62px]">
              hotCoffee
            </h2>
            <span className="font-MorabbaLight text-xl leading-8 mb-3 md:text-5xl md:mb-[66px] md:leading-[64px]">
              A Balanced Cup!
            </span>
            <span className="block w-[100px] h-px md:h-0.5 my-2 md:my-5 text-orange-300"></span>
            <p className="max-w-[201px] text-sm/[20px] md:max-w-[460px] md:text-2xl font-Dana">
              You’ve likely heard the name Arabica. Arabica is one of the coffee
              varieties cultivated in various coffee belt regions.
            </p>
          </div>
          <div className="circle circle-main circle-lg">
            <div className="circle circle_md">
              <div className="circle circle_sm"></div>
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
