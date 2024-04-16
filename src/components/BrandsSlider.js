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
function BrandsSlider() {
  const sliders = [
    {
      name: "NO INTEGRATION REQUIRED",
      content: "Say Yes And NO INTEGRATION REQUIRED",
    },
    {
      name: "MARKETING THAT'S INFINITELY SCALABLE",
      content: "Earn more, market more, grow more",
    },
    {
      name: "MARKET TO A LOOK-ALIKE AUDIENCE",
      content:
        "Followers of your customer have similar demographics and spending power",
    },
    {
      name: "WORD OF MOUTH ON STEROIDS",
      content:
        "Your brand story, your customers, their voice (UGC)- User Generated Content.",
    },

    {
      name: "WE TURN CUSTOMERS INTO MARKETERS",
      content:
        "Cos there’s no better evangelist for your brand than your own customers",
    },
  ];
  return (
    <div>
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
        {sliders.map((item, id) => (
          <div
            key={id}
            className="flex py-12 items-center justify-center antialiased"
          >
            <SwiperSlide>
              <GlowingStarsBackgroundCard>
                <GlowingStarsTitle>{item.name}</GlowingStarsTitle>
                <div className="flex  text-center justify-center">
                  <GlowingStarsDescription>
                    {item.content}
                  </GlowingStarsDescription>
                </div>
              </GlowingStarsBackgroundCard>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default BrandsSlider;
