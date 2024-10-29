"use client";
import React, { useRef, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function BestSelling() {
  const [products, setProducts] = useState([]);
  const swiperRef = useRef(null);

  // Fetch coffee products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fake-coffee-api.vercel.app/api", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch coffee products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-8 mb-10 md:my-20">
      <div className="flex items-end justify-between mb-5 md:mb-12">
        <div>
          <h3 className="section_title">Best-Selling Products</h3>
          <span className="section_subTitle">Recommended </span>
        </div>
        <div className="flex items-center gap-x-3 md:gap-x-[27px]">
          <span
            className="swiper-button-prev-custom cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <GoChevronRight className="w-5 h-5 md:w-[26px] md:h-[26px] text-zinc-700 dark:hover:bg-white dark:hover:text-zinc-700 dark:text-white rotate-180" />
          </span>
          <span
            className="swiper-button-next-custom cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <GoChevronLeft className="w-5 h-5 md:w-[26px] md:h-[26px] text-zinc-700 dark:hover:bg-white dark:hover:text-zinc-700 dark:text-white rotate-180" />
          </span>
        </div>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={12}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1560: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {products.slice(0, 10).map((product, index) => (
          <SwiperSlide key={index}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
