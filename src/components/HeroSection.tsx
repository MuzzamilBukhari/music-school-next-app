import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen py-10 md:py-0 mx-auto ">
      <Spotlight />
      <div className="px-6 text-center space-y-6 mt-16">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="text-base font-normal text-neutral-300 md:text-lg max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <Button>
          <Link href={"/courses"}>Explore courses</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
