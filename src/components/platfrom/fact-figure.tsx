"use client"; 

import Image from "next/image";
import React, { useState } from "react";
import { CircleChevronRight } from "lucide-react";
import {
  factCardItems,
  factsFigures,
} from "@/utils/constants/dynamic.cards.data";
import DynamicSlider from "../common/dynamic.slider.component";
import { factSliderSettings } from "@/utils/slider.setting";
import DynamicButton from "../common/dynamic.button.component";

export function Facts() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = factCardItems.length;

  const factCardSlide = factCardItems.map((item, index) => (
    <div key={index}>
      <h1 className="my-3 font-sofiya text-2xl">{item.title}</h1>
      <p className="text-md font-sofia_Lite text-gray-400 mb-4">{item.text}</p>
      <div className="bg-gray-100 place-items-center rounded-lg py-16">
        <Image
          src={item.imgUrl}
          alt="security image"
          height={100}
          width={100}
        />
      </div>
    </div>
  ));

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto 2xl:w-[67%] px-5">
        <h2 className="text-4xl sm:text-6xl font-sofiya text-center">
          Facts & Figures
        </h2>
        <p className="font-sofia_Lite text-center mx-auto py-10 max-w-[640px]">
          SOFTSWISS is a leading iGaming supplier providing powerful software
          solutions for managing online casino and betting businesses.
        </p>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="bg-[url('/asset/about_section_x3.webp')] bg-cover grid grid-cols-2 sm:grid-cols-3 gap-5 rounded-xl p-3 text-white text-center pt-40 lg:w-2/3">
            {factsFigures.map((fact, index) => (
              <div
                key={index}
                className={`${fact.style} border-[1px] border-gray-300/40 rounded-lg bg-white/10 backdrop-blur p-5 `}
              >
                <h1 className="mb-10 text-4xl font-sofiya">{fact.heading}</h1>
                <p className="font-sofia_Lite text-xs">{fact.text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl lg:w-1/3">
            <div className="text-center px-3 py-6 bg-white rounded-xl transition-all duration-300 hover:shadow-lg mb-5 shadow-sm ">
              <h1 className="font-sofiya text-lg">{currentSlide+1} {" - "} {totalSlides}</h1>
              <DynamicSlider
                sliderSettings={factSliderSettings(setCurrentSlide)}
                slides={factCardSlide}
              />
            </div>

            <DynamicButton buttonText="" buttonType="ternary" customClass="py-10 px-5 bg-white transition-all duration-300 shadow-sm  hover:shadow-lg">
                <span className="z-10 flex justify-between items-center h-10 w-full">
                  <span> CONTACT US </span>
                  <CircleChevronRight className="text-red-700 h-full w-full" />
                </span>
              </DynamicButton>
          </div>
        </div>
      </div>
    </section>
  );
}
