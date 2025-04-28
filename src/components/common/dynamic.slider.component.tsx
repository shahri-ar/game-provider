"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { forwardRef } from "react";
import Slider, { Settings } from "react-slick";


interface DynamicSliderProps {
  sliderSettings: Settings;
  slides: React.ReactNode[];
  className?: string;
}

/* Forwarding Ref to Support External Controls */
const DynamicSlider = forwardRef<Slider, DynamicSliderProps>(
  ({ sliderSettings, slides, className }, ref) => {
    return (
      <div className={`dynamic-slider overflow-hidden ${className || ""}`}>
        <Slider
          {...sliderSettings}
          infinite={slides?.length < 2 ? false : true}
          ref={ref}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide-container flex items-center justify-center w-full h-full"
            >
              {slide}
            </div>
          ))}
        </Slider>

        
      </div>
    );
  }
);

DynamicSlider.displayName = "DynamicSlider";

export default DynamicSlider;