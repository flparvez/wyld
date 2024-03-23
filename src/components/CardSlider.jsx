"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const CardSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    const totalCount = items.length;
    const nextIndex = (currentIndex + 1) % totalCount;
    setCurrentIndex(nextIndex);
    carouselRef.current.scroll({
      left: nextIndex * carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const totalCount = items.length;
    const prevIndex = (totalCount + currentIndex - 1) % totalCount;
    setCurrentIndex(prevIndex);
    carouselRef.current.scroll({
      left: prevIndex * carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative overflow-x-hidden w-full">
      <div
        ref={carouselRef}
        className="flex transition duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full px-4  bg-black my-4">
            <h3 className="text-3xl font-bold mb-2 animate-bounce text-white font-sans text-center">
              {item.name}
            </h3>
            <div className="flex justify-center text-center">
              <Image
                width={200}
                height={300}
                src={item.img}
                alt={item.name}
                className="w-[90%] h-1/2 object-cover "
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 text-wrap transform -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:opacity-75"
      >
        <ChevronLeft size={30} color="white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:opacity-75"
      >
        <ChevronRight size={30} color="white" />
      </button>
    </div>
  );
};

export default CardSlider;
