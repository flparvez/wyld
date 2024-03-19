import { ThreeDCardDemo } from "@/components/3dcard";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { TextRevealCardPreview } from "@/components/TextReveal";
import { MacbookScrollDemo } from "@/components/macbook";

import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

import React from "react";

const Home = () => {
  return (
    <div className="bg-[#000000]">
      <Navbar />

      <HeroSection />
      <TextRevealCardPreview />
      <MacbookScrollDemo />
      <ThreeDCardDemo />
      <ThreeDCardDemo />
      {/* <HeroParallaxDemo /> */}

      <div className="fixed bottom-0  w-full flex items-end justify-end right-4 bottom-3">
        <Button>
          <Link href="/join">Apply Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
