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

import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import Link from "next/link";

function CustomerBrandCarasol({ items }) {
  return (
    <div>
      <div className="  w-full h-full text-white  bg-[#02101d] rounded-md items-center justify-center relative overflow-hidden mx-auto  ">
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
          {items &&
            items.map((item, id) => (
              <div
                key={id}
                className="flex py-12 items-center justify-center antialiased"
              >
                <SwiperSlide>
                  <Link href="/" className="group relative block bg-black">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                      alt=""
                      width={50}
                      height={60}
                      src={item.logo}
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                      <p className="text-sm font-medium uppercase tracking-tighter text-white">
                        {item.discount}% Discount
                      </p>

                      <p className="text-xl uppercase font-bold text-white sm:text-2xl">
                        {item.name}
                      </p>

                      <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                          <p className="text-sm bg-black text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Omnis perferendis hic asperiores quibusdam
                            quidem voluptates doloremque reiciendis nostrum
                            harum. Repudiandae?
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </div>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CustomerBrandCarasol;
