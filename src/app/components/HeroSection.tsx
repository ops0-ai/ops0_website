"use client";

import React from "react";
import ButtonWithIcon from "./button/ButtonWithIcon";
import CommandCenter from "./CommandCenter";

export default function HeroSection() {
  return (
    <div className="space-y-[100px]">
      <section className="flex flex-col items-center justify-center   text-center  px-3">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          World’s First <br />
          <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF]  bg-clip-text text-transparent">
            AI DevOps Engineer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 md:max-w-[45%] text-white/50 text-base sm:text-lg">
          From creation to operation at scale, everything becomes faster,
          simpler, more predictable, and at a fraction of the cost.
        </p>

       <ButtonWithIcon btnText='Demo with Founder'/>
      </section>
      <CommandCenter />
    </div>
  );
}
