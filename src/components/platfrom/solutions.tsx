"use client";

import Image from "next/image";
import { ArrowRight, Plus, CircleCheck } from "lucide-react";
import { solutionCardItems } from "@/utils/constants/dynamic.cards.data";

export function Solutions() {
  return (
    <section className="pt-24">
      <div className="container mx-auto 2xl:w-[67%] px-5">
        <div className="text-center mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-[90px] font-sofiya mb-8 leading-none">
            iGaming Solutions
          </h1>
          <p className="lg:mx-40 font-sofia_Lite text-gray-500 text-lg">
            The core online casino and betting software products can be
            delivered in a number of formats and combinations, ideal for those
            looking to buy an online casino platform or a sportsbook at
            different scales. These packages are supplemented by licensing,
            payments, and operational services.
          </p>
        </div>

        <div className="my-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {solutionCardItems.map((item, index) => (
            <div
              key={index}
              className="relative  flex flex-col justify-between overflow-hidden group "
            >
              <div
                className={` ${item.bgcolor} relative rounded-[15px] before:content-[''] before:absolute before:h-[20px] before:w-[20px] before:top-[16%] before:right-0 before:rounded-full before:[box-shadow:10px_-10px_0_white] `}
              >
                <div className="h-[370px] sm:h-[400px] pt-5">
                  <Image
                    src={item.imgUrl}
                    alt="solution card image"
                    height={400}
                    width={400}
                  />
                </div>

                <div className="absolute  w-full h-[45%] bottom-0 rounded-b-xl overflow-hidden group-hover:h-[75%] transition-all duration-300">
                  <div className="relative ">
                    <div
                      className={`${item.sliderBG} w-full p-7 absolute transfrom transition-all duration-700 group-hover:-translate-y-[85px]
                    `}
                    >
                      <div className="bg-white w-10 h-10 text-black place-content-center place-items-center rounded-full">
                        <Plus />
                      </div>
                      <div className="pt-7 sm:mb-12 mb-10">
                        <h1 className="text-[32px] font-sofiya text-black leading-none">
                          {item.title}
                        </h1>
                      </div>
                      <p className="text-black overflow-hidden text-sm ">
                        {item.text}
                      </p>

                      <ul className="flex flex-col gap-2 text-black sm:mt-11 mt-7 text-sm ">
                        <li className="flex items-center">
                          <CircleCheck className="mr-2 p-1" /> {item.point1}
                        </li>
                        <li className="flex items-center">
                          <CircleCheck className="mr-2 p-1" />
                          {item.point2}
                        </li>
                        <li className="flex items-center">
                          <CircleCheck className="mr-2 p-1" />
                          {item.point3}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex absolute top-0 right-0 ">
                  <div className="relative w-10 after:content-[''] after:absolute after:h-[20px] after:w-[20px] after:right-0 after:top-0  after:rounded-[50%] after:[box-shadow:10px_-10px_0_white]"></div>
                  <div className="overflow-hidden relative top-0 right-0  h-16 w-16  border-b-[10px] border-l-[10px] border-white rounded-tr-xl rounded-bl-3xl before:absolute before:content-[''] before:h-[25px] before:w-[25px] before:rounded-xl before:[box-shadow:-10px_-10px_0_white] after:content-[''] after:absolute after:h-[25px] after:w-[25px] after:bottom-0 after:right-0 after:rounded-xl  after:[box-shadow:10px_10px_0_white]">
                    <ArrowRight className="p-[3px] text-black absolute top-0 -left-[40px] h-full transition-all duration-500 group-hover:left-[14px]" />
                    <ArrowRight className="p-[3px] text-black absolute top-0 left-[14px] h-full transition-all duration-500 group-hover:left-[55px]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
