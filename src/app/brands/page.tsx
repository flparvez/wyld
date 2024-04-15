import { BackgroundGradientAnimations } from "@/components/Bgradinet";
import { CardHoverEffect } from "@/components/Card";

import { InfiniteMovingCard } from "@/components/MovieCard";

import React from "react";

function page() {
  return (
    <div className="bg-black text-white">
      <h2 className="text-6xl py-4 text-center">
        <p>GET your customers</p>
        <p>to get you</p>
        <p>MORE customers!</p>
      </h2>

      <div className="text-center">
        <BackgroundGradientAnimations />

        <CardHoverEffect />
      </div>

      <div className="bg-[#2c2584] py-4 shadow-black">
        <h2 className="text-4xl text-center">Earn first, Pay Later!</h2>

        <p className="text-center">
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

      <InfiniteMovingCard />
    </div>
  );
}

export default page;
