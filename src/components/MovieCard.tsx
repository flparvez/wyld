"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCard() {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-white text-3xl text-center font-bold">
        some brands that love us
      </h2>
      <InfiniteMovingCards items={brands} direction="left" speed="fast" />
    </div>
  );
}

const brands = [
  {
    id: 1,
    name: "Hitesh Choudhury",
    img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/64660fd0c1057995951c2213_Wow-p-500.png",
  },
  {
    id: 2,
    name: "King Kohli",
    img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/64660fce02c0e95bc80348da_Open_Secret-p-500.png",
  },
  {
    id: 3,
    name: "Md Parvez",
    img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/65b3ffe0eaabb4ec1d4936b5_brewdog.white-p-500.png",
  },
  {
    id: 4,
    name: "Himel Choudhury",
    img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/64660fce02c0e95bc80348da_Open_Secret-p-500.png",
  },
];
