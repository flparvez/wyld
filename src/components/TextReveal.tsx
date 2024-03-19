"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-auto rounded-2xl w-full">
      <TextRevealCard
        text="1000 Folowers On Instagram"
        revealText="Is All You Need To #GETWYLD "
      ></TextRevealCard>
    </div>
  );
}
