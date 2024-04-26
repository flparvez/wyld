"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-feather";

import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/button";
function CardSlider({ items }) {
  return (
    <div className="  w-full h-full text-white  bg-[#02101d] rounded-md items-center justify-center relative overflow-hidden mx-auto py-10 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        {items.map((item, id) => (
          <div
            key={id}
            className="flex py-12 items-center justify-center antialiased"
          >
            <SwiperSlide>
              <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 uppercase text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  {item.text1}
                </h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                  {item.text2}
                </p>
              </div>
              <h2></h2>
              <div className="mt-4"></div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default CardSlider;
