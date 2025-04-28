"use client";

import { homeCarditems } from "@/utils/constants/dynamic.cards.data";

import { CircleChevronRight } from "lucide-react";
import DynamicButton from "@/components/common/dynamic.button.component";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const TOTAL_SLIDES = homeCarditems.length;
const AUTOPLAY_DELAY = 3000;

export function Home() {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressWidths, setProgressWidths] = useState(
    Array(TOTAL_SLIDES).fill(0)
  );

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
    setProgressWidths((prev) => {
      return prev.map((_, i) => {
        if (i < swiper.realIndex) return 100;
        if (i === swiper.realIndex) return 0;
        return 0;
      });
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressWidths((prevWidths) => {
        const newWidths = [...prevWidths];
        newWidths[activeIndex] = Math.min(
          newWidths[activeIndex] + 100 / (AUTOPLAY_DELAY / 100),
          100
        );
  
        if (newWidths[activeIndex] >= 100) {
          // Delay slide change to avoid conflict with render
          setTimeout(() => {
            if (swiperRef.current) {
              swiperRef.current.slideNext();
            }
          }, 0);
        }
  
        return newWidths;
      });
    }, 100);
  
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  

  return (
    <section>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/asset/home-bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full z-10 text-white ">
          <div className="container mx-auto 2xl:w-[67%] place-content-end lg:flex lg:items-end h-full py-16 gap-16 px-5">
            <div className="pb-5">
              <h1 className="text-lg py-2 font-sofia_Lite ">
                Software for online casinos and bookmaking websites
              </h1>
              <div className=" text-5xl sm:text-7xl xl:text-[103px] font-sofiya leading-none">
                <h1>WINNING COMBINATION</h1>
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:w-1/3">
              <div className="relative ring-2 ring-white/50 p-5 rounded-xl hidden md:block">
                <div className="flex gap-2 px-4 py-3 absolute top-0 left-0 w-full z-50">
                  {progressWidths.map((width, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-white/30 h-1 rounded overflow-hidden"
                    >
                      <div
                        className="h-full bg-white transition-all duration-100 ease-linear"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  ))}
                </div>
                <Swiper
                   spaceBetween={30}
                   centeredSlides
                   loop
                   autoplay={false} // 🚫 Turn off Swiper's internal autoplay
                   modules={[Autoplay]}
                   onSlideChange={handleSlideChange}
                   onSwiper={(swiper) => {
                     swiperRef.current = swiper;
                     setActiveIndex(swiper.realIndex); // set initial
                   }}
                  className="mySwiper"
                >
                  {homeCarditems.map((cardItem, index) => (
                    <SwiperSlide key={index}>
                      <div className="pt-5">
                        <h1 className="text-2xl font-bold">{cardItem.title}</h1>
                        <p className="text-white pt-10">{cardItem.text}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <DynamicButton
                buttonText=""
                buttonType="ternary"
                customClass="py-10 px-5 bg-white"
              >
                <span className="z-10 flex justify-between items-center h-10 w-full">
                  <span> CONTACT US </span>
                  <CircleChevronRight className="text-red-700 " />
                </span>
              </DynamicButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
