import { CardHoverEffect } from "@/components/Card";
import HeroSection from "@/components/Hero";
import Marquee from "../components/Marquee";
import { MacbookScrollDemo } from "@/components/macbook";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import CardSlider from "@/components/CardSlider";
import React from "react";
import About from "@/components/About";
import { InfiniteMovingCard } from "@/components/MovieCard";
import TextReveal from "../components/TextReveal";

const Home = () => {
  const sliders = [
    {
      id: 1,
      name: "Hitesh Choudhury",
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/6210d93edcfe4947204a1964_61fd17e773e51611eb4c6e83_1-p-500.jpeg",
    },
    {
      id: 2,
      name: "King Kohli",
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/6210d8d2016b5b39b48fad79_61fd17e773e51611eb4c6e83_1%20(3)-p-500.jpeg",
    },
    {
      id: 3,
      name: "Md Parvez",
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/63694b972bbd7ecf216e6428_Yash-3-p-500.png",
    },
    {
      id: 4,
      name: "Himel Choudhury",
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/620abf040f953d808e983cf0_61fd17e773e51611eb4c6e83_1%20(1)-p-500.jpeg",
    },
  ];

  return (
    <div className="bg-[#000000]">
      <HeroSection />
      <div className="flex justify-center text-center bg-[#000000]">
        <h1 className="font-bold text-white uppercase py-12 shadow text-9xl">
          <span className="mr-10">Buy</span> <br />{" "}
          <span className="ml-20">Post</span> <br /> earn
        </h1>
      </div>
      <MacbookScrollDemo />

      <CardHoverEffect />
      <TextReveal />

      <Marquee />

      <div className="mt-28 flex justify-center">
        <About />
      </div>

      <InfiniteMovingCard />
      <CardSlider items={sliders} />

      <Footer />

      <div className="fixed py-4  w-full flex items-end justify-end right-5 bottom-0">
        <Button className="bg-[#d460d6]">
          <Link href="/join">Apply Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
