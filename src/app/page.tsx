import { CardHoverEffect } from "@/components/Card";
import HeroSection from "@/components/Hero";
import Marquee from "../components/Marquee";
import Navbar from "@/components/Navbar";

import { MacbookScrollDemo } from "@/components/macbook";

import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import About from "@/components/About";
import { InfiniteMovingCard } from "@/components/MovieCard";
// import brand1 from "../../public/brand1.png";
// import brand2 from "../../public/brand2.png";
// import brand3 from "../../public/brand3.png";

const Home = () => {
  // const items = [
  //   {
  //     id: 1,
  //     img: brand1,
  //   },
  //   {
  //     id: 2,
  //     img: brand2,
  //   },
  //   {
  //     id: 3,
  //     img: brand3,
  //   },
  // ];
  return (
    <div className="bg-[#000000]">
      <Navbar />

      <HeroSection />

      <MacbookScrollDemo />

      <CardHoverEffect />
      <Marquee />
      <div className="mt-28 flex justify-center">
        <About />
      </div>

      <InfiniteMovingCard />
      <div className="fixed py-4  w-full flex items-end justify-end right-5 bottom-0">
        <Button className="bg-[#d460d6]">
          <Link href="/join">Apply Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
