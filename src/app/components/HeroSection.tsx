"use client";

import React from "react";
import ButtonWithIcon from "./button/ButtonWithIcon";
import CommandCenter from "./CommandCenter";

export default function HeroSection() {
  return (
    <div className="mt-[5rem]">
        
      <section className="flex flex-col items-center justify-center text-center relative">
     
       {/* left line */}

        <div className="hidden lg:block">
          {/* 1. Vertical Line (Left Top) */}
          {/* <div className="absolute top-[0px] left-0 w-[30px] transform -translate-x-full h-full border-l-2 border-dashed border-[#f3151580]"></div> */}

          {/* 2. Horizontal Line (Left Middle) */}
          <div className="absolute bg-red-950 top-[0%] left-0 right-0 w-[100px] h-[2px] border-t-2 border-dashed border-[#52525280]"></div>

          {/* 3. Vertical Line (Left Bottom) */}
          <div className="absolute top-[30%] left-[50px] w-[2px] h-full border-l-2 border-dashed border-[#52525280]"></div>

          <div className="absolute top-[130%] left-0 w-[30px] h-[2px] border-t-2 border-dashed border-[#52525280]"></div>

        </div>

        {/* Heading */}
        <h1 className="text-[35px] sm:text-5xl md:text-6xl font-semibold text-center text-white leading-[48px] lg:leading-[] tracking-[0] font-geist">
          World’s First <br />
          <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF] bg-clip-text text-transparent">
            AI DevOps Engineer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="px-[15px] mt-6 md:max-w-[45%] text-base sm:text-lg font-medium text-center text-[#FFFFFF80] leading-[24px] tracking-[0] font-geist">
          From creation to operation at scale, everything becomes faster,
          simpler, more predictable, and at a fraction of the cost.
        </p>

        <ButtonWithIcon btnText='Demo with Founder' />
      </section>

     

      <CommandCenter />
    </div>
  );
}
