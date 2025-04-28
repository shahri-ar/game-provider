"use client";

import { clientReviews } from "@/utils/constants/dynamic.cards.data";
import Image from "next/image";

import React, {  useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function Review() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto 2xl:w-[67%] px-5 place-items-center">
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-sofiya">
            What Our Clients Say
          </h3>
          <p className="py-6">
            Hear directly from people who trust SOFTSWISS with their business
            every day.
          </p>
        </div>
        <div className="bg-gray-100 w-full rounded-2xl p-6 flex">
          <div className="w-2/3 mx-auto place-content-center">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction="vertical"
              loop={true}
              spaceBetween={0}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className=" gap-10 "
            >
              {clientReviews.map((review, index) => (
                <SwiperSlide key={index} className="place-items-center client-swiper-img ">
                  <Image
                    src={review.imgUrl}
                    alt="person"
                    height={100}
                    width={150}
                    className=" p-1 h-36   "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 client-swiper-content"
          >
            {clientReviews.map((review, index) => (
              <SwiperSlide key={index} className="place-items-center ">
                <div className="sm:w-2/3  sm:text-2xl text-black/70 text-center ">
                  <p className="line-clamp-[11] mb-14">{review.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
