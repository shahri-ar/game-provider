'use client';

import { useEffect, useRef, useState } from 'react';
import { productCardItems } from '@/utils/constants/dynamic.cards.data';
import { ArrowRight, CircleCheck, Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel } from 'swiper/modules';
import SwiperCore from 'swiper';

export  function Product() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind 'lg' = 1024px
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: .80 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isInView || !isLargeScreen) return; // Only handle wheel if large screen

      const swiper = swiperRef.current;
      if (!swiper) return;

      const delta = e.deltaY;
      const isAtTop = swiper.isBeginning;
      const isAtBottom = swiper.isEnd;

      const goingUp = delta < 0;
      const goingDown = delta > 0;

      if ((goingUp && isAtTop) || (goingDown && isAtBottom)) {
        return;
      }

      e.preventDefault();
      swiper.slideTo(swiper.activeIndex + (delta > 0 ? 1 : -1), 1300);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isInView, isLargeScreen]);

  return (
    <section  ref={sectionRef}>
      <div className="container mx-auto 2xl:w-[67%] px-5">
        <div className="navbar section">
          <div></div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-10 pt-20">
            <div className="text-center lg:text-start">
              <h1 className="text-3xl xl:text-[90px] font-sofiya mb-6 leading-none">
                iGaming Products
              </h1>
              <p className="text-lg font-sofiya font-thin text-gray-600">
                SOFTSWISS develops innovative iGaming software products for online casino, 
                sports betting, and beyond. Our products can be delivered as standalone 
                solutions or combined into a single iGaming Platform.
                <br /><br />
                If you are looking to buy online casino software, SOFTSWISS offerings 
                include everything from player account management to game content 
                aggregation, all created to boost performance for your online casino 
                or sportsbook.
              </p>
            </div>
          </div>

          {/* Right Side: Swiper Vertical Slider */}
          <div className="lg:w-1/2 h-screen overflow-hidden">
          <Swiper
              direction="vertical"
              slidesPerView={3}
              spaceBetween={0}
              mousewheel={false} // mousewheel handled manually
              allowTouchMove={isLargeScreen} // <-- disable swipe on mobile
              simulateTouch={isLargeScreen}   // <-- disable touch swipe on mobile
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Mousewheel]}
              className="mySwiper h-full"
            >
              {productCardItems.map((item, index) => (
                <SwiperSlide key={index} className="py-4">
                  <div
                    className={`${item.bgcolor} relative group p-8 shadow-lg rounded-3xl overflow-hidden h-full`}
                  >
                    <div className="absolute -bottom-6 -right-20 z-10 transition-all duration-500 group-hover:scale-90 hidden sm:block">
                      <Image
                        src={item.imgUrl}
                        alt="card image cube box"
                        height={100}
                        width={230}
                      />
                    </div>
                    <div className="bg-white absolute bottom-0 left-0 h-0 w-full transition-all duration-500 group-hover:h-[65%] rounded-b-smg z-[9]">
                      <ul className="flex flex-col gap-2 p-10">
                        {item.points.map((itemsPoint,index)=>(
                          <li key={index} className="flex"><CircleCheck className="mr-2 p-1" /> {itemsPoint.point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between mb-8">
                      <h1 className="text-3xl sm:text-[42px] text-white font-sofiya leading-none w-full">
                        {item.title}
                      </h1>
                      <a className="sm:flex justify-center items-center h-11 w-11 relative border-2 rounded-lg px-2 overflow-hidden hidden">
                        <ArrowRight className="p-[5px] text-white absolute top-0 -left-[30px] h-full transition-all duration-500 group-hover:left-[8px]" />
                        <ArrowRight className="p-[5px] text-white absolute top-0 left-[8px] h-full transition-all duration-500 group-hover:left-[45px]" />
                      </a>
                    </div>
                    <div className="pr-[40%]">
                      <p className="text-sm font-sofia_Lite text-white line-clamp-3 sm:line-clamp-none lg:line-clamp-4 xl:line-clamp-none">
                        {item.text}
                      </p>
                    </div>
                    <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center mt-8 absolute bottom-5 right-5 sm:bottom-5 sm:left-7 z-[8]">
                      <Plus />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
