import { ThreeDCardDemo } from "@/components/3dcard";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/moving-border";

import React from "react";

const Home = () => {
  return (
    <div className="bg-[#000000]">
      <Navbar />

      <HeroSection />
      <ThreeDCardDemo />
      <ThreeDCardDemo />
      {/* <HeroParallaxDemo /> */}

      <div className="fixed bottom-0 w-full flex items-end justify-end right-4">
        <Button>Apply Now</Button>
      </div>
    </div>
  );
};

export default Home;
