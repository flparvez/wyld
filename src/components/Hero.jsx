import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full bg-[#02101d] rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          The World's 1st social currency card
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Fulled By Likes a Share
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
    </div>
  );
}

export default HeroSection;
