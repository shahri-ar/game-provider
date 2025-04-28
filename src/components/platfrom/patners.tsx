"use client";

import Image from "next/image";
import DynamicButton from "../common/dynamic.button.component";

export  function Patners() {
  return (
    <section className="bg-black">
      <div className="container mx-auto 2xl:w-[67%] px-5 place-items-center ">
        <div className="text-white text-center py-20 place-items-center ">
          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-sofiya leading-none">
            Hundreds of Partners <br /> and Counting
          </h2>
          <p className="my-10 text-xs sm:text-lg sm:my-16 lg:w-1/2 ">
            Over the years, SOFTSWISS has helped power hundreds of iGaming
            brands. SOFTSWISS clients get great software and exceptional service
            from our different departments and service teams. But don't just
            take our word for it.
          </p>

          <DynamicButton buttonText="ALL PATNERS" buttonType="primary" customClass="bg-transparent text-white"/>
        </div>
      </div>
      <div className="w-full overflow-hidden ">
        <div className="scrolling-image">
          <Image
            src="/asset/partner-app.webp"
            alt="Scrolling Image"
            height={900}
            width={1500}
            className=" md:h-72 "
          />
          <Image
            src="/asset/partner-app.webp"
            alt="Scrolling Image"
            height={900}
            width={1500}
            className=" md:h-72"
          />
          <Image
            src="/asset/partner-app.webp"
            alt="Scrolling Image"
            height={900}
            width={1500}
            className=" md:h-72"
          />
        </div>
      </div>
    </section>
  );
}


