import Image from "next/image";
import React from "react";
import { GoChevronRight } from "react-icons/go";

export default function CoffeeBanner() {
  return (
    <div className="md:my-20 overflow-hidden">
      <div className="container">
        <div className="coffee-banner-container">
          <div className="flex items-center gap-x-3 md:gap-x-6 text-white">
            <Image
              src="/images/club/diamond.png"
              className="w-[87px] h-78px sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-98px"
              alt="coffee club"
              width={110}
              height={100}
            />
            <div>
              <h2 className="font-MorabbaBold text-2xl/7 sm:text-3xl/[35px] md:text-5xl/[48px] mb-[2px] md:mb-2">
                Coffee Club
              </h2>
              <p className="font-MorabbaLight text-lg sm:text-xl/[30px] lg:leading-8 xl:text-2xl/[48px]">
                Did you know you can get coffee with your points?
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 sm:flex-row gap-x-[19px] sm:gap-[50px] xl:gap-x-[120px] text-center sm:items-end">
            <div className="flex gap-x-2 md:gap-x-5 text-center sm:gap-x-4">
              <div className="coffee-banner-item-box">
                <Image
                  src="/images/banner1.svg"
                  width={48}
                  height={48}
                  loading="lazy"
                  alt="banner"
                  className="h-10 w-10 md:h-[48px] md:w-[48px] mx-auto mt-[6px] md:mt-5"
                />
                <span className="font-Dana text-sm/normal mt-[3px] md:mt-[6px]">
                  Wheel of Fortune
                </span>
              </div>
              <div className="coffee-banner-item-box">
                <Image
                  src="/images/banner2.svg"
                  width={48}
                  height={48}
                  loading="lazy"
                  alt="banner"
                  className="h-10 w-10 md:h-[48px] md:w-[48px] mx-auto mt-[6px] md:mt-5"
                />
                <span className="font-Dana text-sm/normal mt-[3px] md:mt-[6px]">
                  Missions
                </span>
              </div>
              <div className="coffee-banner-item-box">
                <Image
                  src="/images/banner3.svg"
                  width={48}
                  height={48}
                  loading="lazy"
                  alt="banner"
                  className="h-10 w-10 md:h-[48px] md:w-[48px] mx-auto mt-[6px] md:mt-5"
                />
                <span className="font-Dana text-sm/normal mt-[3px] md:mt-[6px]">
                  Rewards
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start text-white">
              <span className="text-2xl/[20px] md:text-3xl/normal lg:leading-6 font-DanaMedium">
                542
              </span>
              <span className="text-xs/normal md:text-sm/normal font-DanaDemiBold">
                Your Points
              </span>
              <a href="#" className="coffee-banner-btn pl-1">
                <span>Claim Reward</span>
                <GoChevronRight className="w-5 h-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
