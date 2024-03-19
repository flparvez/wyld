"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#000000] relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-3xl font-bold text-white">
          POST
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white font-bold max-w-sm mt-2 "
        >
          Falunt Your Shopping And Tag The Brand on social media
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
