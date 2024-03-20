import { CardHoverEffect } from "@/components/Card";
import HeroSection from "@/components/Hero";

import Navbar from "@/components/Navbar";

import { MacbookScrollDemo } from "@/components/macbook";

import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

import React from "react";

const Home = () => {
  return (
    <div className="bg-[#000000]">
      <Navbar />

      <HeroSection />

      <MacbookScrollDemo />

      <CardHoverEffect />

      {/* <HeroParallaxDemo /> */}

      <div className="fixed py-4  w-full flex items-end justify-end right-5 bottom-0">
        <Button>
          <Link href="/join">Apply Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
