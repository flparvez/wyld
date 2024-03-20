import { HoverEffect } from "./ui/card-hover-effect";
import card2 from "../../public/card2.png";
import card1 from "../../public/card1.png";
import card3 from "../../public/card3.png";
export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-2">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    id: 1,
    img: card1,
  },
  {
    id: 2,
    img: card2,
  },
  {
    id: 3,
    img: card3,
  },
];
