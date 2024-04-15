import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function BackgroundGradientAnimations() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          <h2 className="text-5xl text-center">HOW IT WORKS?</h2>
          <p className="text-xl font-sans">WYLD TURNS YOUR CUSTOMERS,</p>
          <p className="text-xl font-sans">INTO YOUR BRAND MARKETEERS</p>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
