import Navbar from "@/compoents/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import { IoInfinite } from "react-icons/io5";
import { LuCircleDotDashed } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="w-full h-screen  bg-[#1A1A1D]">
      <Navbar />

      <div className="flex flex-col items-start w-full h-full px-10 ">
        <div className="text-[#EEEEEE] tracking-normal text-[4rem] font-tektur font-bold  mt-[10rem]">
          AI ENGINEER.
        </div>
        <div className="text-[#EEEEEE] tracking-normal flex text-[4rem] font-tektur font-bold">
          WEB DEVEL
          <span className="flex items-center text-yellow-400">
            <IoInfinite size={80} />
          </span>
          PER.
        </div>
        <div className="text-muted-foreground font-mono tracking-normal  ">
          Shaping the future with code and creativity.
        </div>
        <div className="text-muted-foreground  font-mono tracking-tight ">
          since 2023
        </div>
        <div className="rounded-3xl border cursor-pointer border-white bg-gray-100/15 text-white font-bebas flex gap-2 tracking-widest backdrop-blur-lg p-2 mt-4">
          <span className="flex items-center">
            <LuCircleDotDashed className="animate-spin-slow  text-green-500" />
          </span>
          Available for work
        </div>
      </div>
    
    </div>
  );
};

export default Hero;
