"use client";

import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { footerImages, footerList } from "@/utils/constants/dynamic.cards.data";

export function Footer() {
  const [openMenu, setOpenMenu] = useState<{ [key: number]: boolean }>({});

  const handlePlus = (index: number) => {
    setOpenMenu((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section className="bg-[#1d1d1b] py-20">
      <div className="container mx-auto 2xl:w-[67%] px-5">
        <div className="flex justify-between">
          <div className="xl:w-1/2 w-full">
            <div className="text-white flex justify-between text-5xl items-end font-sofiya ">
              <h1 className="pb-3 md:text-8xl">Let's talk</h1>
              <ArrowRight className="w-16 h-16 md:w-24 md:h-24" />
            </div>
            <div className="h-1 w-full rounded bg-white "></div>
          </div>
          <div className="hidden xl:flex justify-center items-center">
            <Image
              src="/asset/logo-white.png"
              alt="logo"
              height={10}
              width={300}
            />
          </div>
        </div>
        <div className="border-[1px] border-white/10 mt-20 rounded-lg ">
          <ul className="text-white xl:grid xl:grid-cols-4 ">
            {footerList.map((list, index) => (
              <li
                key={index}
                className={`p-7 border-b xl:border-b-0 border-white/10 transition-all duration-500 ease-in-out xl:border-l-[1px]  ${list.style}`}
              >
                <div className="flex items-center justify-between xl:border-b-[1px] border-white/10 xl:pb-7">
                  <h1 className="text-2xl font-sofiya">{list.listHeading}</h1>
                  <div
                    className={`h-12 w-12 rounded-full bg-[#333331] place-items-center content-center cursor-pointer transition-all duration-500 ease-in-out xl:hidden ${
                      openMenu[index] ? "rotate-45" : "rotate-0"
                    }`}
                    onClick={() => handlePlus(index)}
                  >
                    <Plus />
                  </div>
                </div>

                <ul
                  className={`flex flex-col gap-3 overflow-hidden transition-all duration-500 ease-in-out xl:max-h-96 xl:opacity-100 xl:mt-4 ${
                    openMenu[index]
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {list.listItems.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="xl:border-t-[1px] text-[25px] text-white font-sofiya border-white/10 xl:flex items-center">
            <h1 className="p-7 xl:w-1/2 w-full flex justify-center xl:justify-start">
              Email: order@digitalZet.com
            </h1>
            <div className="p-7 flex xl:w-1/2 w-full  items-center border-l-[1px] border-white/10">
              <h1 className="hidden xl:block ">Social:</h1>
              <div className="flex xl:gap-2 justify-between xl:justify-end w-full ">
                {footerImages.map((image, index) => (
                  <div
                    key={index}
                    className="xl:h-10 xl:w-10 h-12 w-12 rounded-full bg-[#333331] place-items-center content-center hover:bg-white transition duration-300"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      height={100}
                      width={100}
                      className="p-2 hover:invert transition duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
