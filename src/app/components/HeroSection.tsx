"use client";

import React from "react";
import DemoWithFounder from "../../../public/svg/DemoWithFounder";
import CommandCenter from "./CommandCenter";

export default function HeroSection() {
  return (
    <div className="space-y-[100px]">
        
    <section className="flex flex-col items-center justify-center   text-center pt-[120px] px-3">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
        World’s First{" "} <br />
        <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF]  bg-clip-text text-transparent">
  AI DevOps Engineer


        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 md:max-w-[40%] text-white/50 text-base sm:text-lg">
        From creation to operation at scale, everything becomes faster, simpler,
        more predictable, and at a fraction of the cost.
      </p>

      {/* Button */}
      <div className="mt-10">
        <button className="flex items-center gap-3  text-[12px] p-1 pl-3 rounded-full border border-gray-600 bg-transparent text-white font-bold hover:bg-white/10 transition">
          DEMO WITH FOUNDER
         <DemoWithFounder/>
        </button>
      </div>
    </section>
    <CommandCenter/>
    </div>
  );
}
