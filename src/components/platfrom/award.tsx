"use client";

import React, { useRef} from "react";
import Image from "next/image";
import { CircleChevronRight } from "lucide-react";

import {
  AwardCardItem,
  awardCardItems,
} from "@/utils/constants/dynamic.cards.data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


export function Award() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="pt-14">
      <div className="px-4 container mx-auto 2xl:w-[67%] ">
        <div className="flex justify-between mb-4">
          <div className="text-sm font-sofia_Lite">
            <h3>Our latest awards</h3>
          </div>
          <div className="text-sm font-sofia_medium text-red-600">
            {awardCardItems.length - 1}+
          </div>
        </div>
        <div
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination, Autoplay]}
            className=""
          >
            {awardCardItems.map((item: AwardCardItem, index: number) => (
              <SwiperSlide key={index} className="">
                <div className=" w-full">
                  <div className="group flex relative justify-center overflow-hidden rounded-xl border-2 ">
                    <a className="rounded-xl ">
                      <div className="h-32 place-content-center place-items-center">
                        <Image
                          src={item.imgUrl}
                          alt="card img"
                          width={100}
                          height={100}
                          objectFit="cover"
                        />
                      </div>
                    </a>
                    <div className="flex flex-col items-center justify-center  absolute bottom-0 left-0 h-0 w-full group-hover:h-full z-50 rounded-xl bg-white  text-sm font-sofiya place-items-center transition-all ease-in-out duration-300">
                      <p className="text-center font-sofiya text-gray-600 hidden group-hover:block ">
                        {item.text}
                      </p>
                      <CircleChevronRight className="mt-3 text-red-600" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
