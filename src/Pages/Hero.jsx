import Navbar from "@/compoents/Navbar";
import { IoInfinite } from "react-icons/io5";
import { LuCircleDotDashed } from "react-icons/lu";
import React from "react";

const Hero = () => {
  return (
    <div className="w-screen min-h-screen bg-[#1A1A1D] flex flex-col">
      <Navbar />

      <div className="flex flex-col justify-center flex-1 px-4 sm:px-10">
        {/* Title */}
        <div className="text-[#EEEEEE] tracking-normal text-[2.5rem] sm:text-[4rem] font-tektur font-bold leading-tight">
          AI ENGINEER.
        </div>

        {/* Subtitle */}
        <div className="text-[#EEEEEE] tracking-normal flex text-[2.5rem] sm:text-[4rem] font-tektur font-bold leading-tight mt-2">
          WEB DEVEL
          <span className="flex items-center text-yellow-400">
            <IoInfinite size={40} className="sm:size-[80px]" />
          </span>
          PER.
        </div>

        {/* Description */}
        <div className="text-muted-foreground font-mono tracking-normal text-sm sm:text-base mt-3">
          Shaping the future with code and creativity.
        </div>
        <div className="text-muted-foreground font-mono tracking-tight text-sm sm:text-base">
          since 2023
        </div>

        {/* Button */}
        <a href="#contact">
          <div className="rounded-3xl border cursor-pointer border-white bg-gray-100/15 text-white font-bebas flex gap-2 tracking-widest backdrop-blur-lg px-4 py-2 mt-6 w-fit text-sm sm:text-base">
            <span className="flex items-center">
              <LuCircleDotDashed className="animate-spin-slow text-green-500" />
            </span>
            AVAILABLE FOR WORK
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
