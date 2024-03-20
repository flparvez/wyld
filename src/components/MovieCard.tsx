"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCard() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/6210d93edcfe4947204a1964_61fd17e773e51611eb4c6e83_1-p-500.jpeg",
  },
  {
    id: 2,
    img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/6210d8d2016b5b39b48fad79_61fd17e773e51611eb4c6e83_1%20(3)-p-500.jpeg",
  },
  {
    id: 3,
    img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/63694b972bbd7ecf216e6428_Yash-3-p-500.png",
  },
  {
    id: 4,
    img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/620abf040f953d808e983cf0_61fd17e773e51611eb4c6e83_1%20(1)-p-500.jpeg",
  },
];
