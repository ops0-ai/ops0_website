"use client";

import React from "react";
import ButtonWithIcon from "./button/ButtonWithIcon";
import CommandCenter from "./CommandCenter";

export default function HeroSection() {
  return (
    <div className="mt-[4rem] lg:mt-[6rem]">
          {/* left line */}
        {/* <div className="hidden md:block">
          <div className="absolute  md:top-[18%] md:left-[100px] md:right-0 md:w-[40px] md:h-[2px] border-t-2 border-dashed border-[#14e12980]"></div>
          <div className="absolute  md:top-[30%] md:left-0 md:right-0 md:w-[100px] md:h-[2px] border-t-2 border-dashed border-[#4414e180]"></div>
          <div className="absolute  md:top-[59%] md:left-[100px] md:right-0 md:w-[40px] md:h-[2px] border-t-2 border-dashed border-[#e1141480]"></div>
          <div className="absolute md:top-[18%] md:left-[100px] md:right-0 md:w-[2px] md:h-[41%] border-l-2 border-dashed border-[#18afe180]"></div>
        </div> */}
        
      <section className="flex flex-col items-center justify-center text-center">
        {/* Heading */}
        <h1 className="text-[35px] sm:text-5xl xl:text-[80px] font-semibold text-center text-white leading-[48px] lg:leading-[66px] font-geist">
          World’s First <br />
          <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF] bg-clip-text text-transparent">
            AI DevOps Engineer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="px-[20px] mt-5 md:max-w-[70%] text-lg font-medium text-center text-[#FFFFFF80] leading-[24px] md:leading-[30px] font-geist">
          From creation to operation at scale, everything becomes faster,
          simpler, more predictable, and at a fraction of the cost.
        </p>

        <ButtonWithIcon btnText='Demo with Founder' />
      </section>

      <CommandCenter />
    </div>
  );
}
