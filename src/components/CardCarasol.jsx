"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

const CardCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const contentWidth = useRef(0); // To store content width

  useEffect(() => {
    contentWidth.current = carouselRef.current.offsetWidth;
  }, [items]); // Recalculate width on item change

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
    carouselRef.current.style.transform = `translateX(-${
      nextIndex * contentWidth.current
    }px)`;
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    carouselRef.current.style.transform = `translateX(-${
      prevIndex * contentWidth.current
    }px)`;
  };

  const renderCarouselItem = (item) => (
    <div className="p-4 relative z-10 w-full text-center">
      <h1 className="mt-20 md:mt-0 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        {item.text1}
      </h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        {item.text2}
      </p>

      <div className="mt-4">
        <Link href={"/join"}>
          <Button
            borderRadius="1rem"
            className=" bg-[#c760dd]  text-white border-neutral-200 dark:border-slate-800"
          >
            Apply Now
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="h-auto md:h-[40rem] w-full bg-[#02101d] rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        {items.map(renderCarouselItem)}
      </div>
      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-1/2 left-0 p-2 text-white bg-gray-800 hover:bg-opacity-70 focus:outline- none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-full md:left-[-20px]"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute top-1/2 right-0 p-2 text-white bg-gray-800 hover:bg-opacity-70 focus:outline- none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-full md:right-[-20px]"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CardCarousel;
