import { BackgroundGradientAnimations } from "@/components/Bgradinet";
import BrandsSlider from "@/components/BrandsSlider";
import { CardHoverEffect } from "@/components/Card";

import { InfiniteMovingCard } from "@/components/MovieCard";

import React from "react";

function page() {
  return (
    <div className="bg-black text-white">
      <div className="text-6xl py-4 text-center font-medium">
        <p>GET your customers</p>
        <br />
        <p>to get you</p>

        <p>MORE customers!</p>
      </div>

      <div className="text-center">
        <h2 className="text-5xl font-medium mb-4">HOW IT WORKS?</h2>
        <p className="text-xl font-serif">
          <span>WYLD TURNS YOUR</span> <br />
          <span>CUSTOMERS,</span> <br />
          <span>INTO YOUR BRAND</span> <br />
          <span>MARKETEERS</span>
        </p>
      </div>

      <div className="text-center">
        <CardHoverEffect />
      </div>

      <div className="text-center">
        <h2 className="text-6xl font-medium">WHY BRANDS LOVE WYLD</h2>

        <BrandsSlider />
      </div>

      <div className="bg-[#2c2584] py-4 shadow-black">
        <h2 className="text-5xl text-center">Earn first, Pay Later!</h2>

        <div className="text-center">
          <p className="text-xl font-serif">
            <span>With WYLD, customers pay</span>
            <br />
            <span>full price upfront, directly</span>
            <br />
            <span>boosting your top line and</span>
            <br />
            <span>you only give back a small</span>
            <br />
            <span>portion as cashback</span>
          </p>
        </div>
      </div>

      <InfiniteMovingCard />
    </div>
  );
}

export default page;
