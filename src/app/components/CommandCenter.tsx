"use client";

import React from "react";
import { Pencil, Sliders, Rocket } from "lucide-react"; // using lucide-react for icons

export default function CommandCenter() {
  return (
    <section className="  flex flex-col items-center   container mx-auto    px-6">
      {/* Top label */}
      <div className="mb-16 max-md:text-center">
        <span className="px-4 py-2  md:bg-gray-800/80 rounded-md text-white text-sm font-mono  ">
          UNIFY CONTROL ON SINGULAR COMMAND CENTER
        </span>
      </div>

      {/* Three columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center ">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-lg border border-gray-700 bg-black/40 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <Pencil className="text-gray-400 w-8 h-8" />
          </div>
          <p className="mt-4 text-white text-sm sm:text-base">
            <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF]  bg-clip-text text-transparent font-semibold">CREATE</span> YOUR
            <br />
            CLOUD RESOURCES
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-lg border border-gray-700 bg-black/40 shadow-[0_0_40px_rgba(139,92,246,0.4)]">
            <Sliders className="text-gray-200 w-8 h-8" />
          </div>
          <p className="mt-4 text-white text-sm sm:text-base">
            MANAGE
            <br />
            <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF]  bg-clip-text text-transparent font-semibold">CM AGENT</span>
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-lg border border-gray-700 bg-black/40 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <Rocket className="text-gray-400 w-8 h-8" />
          </div>
          <p className="mt-4 text-white text-sm sm:text-base">
            OPERATE
            <br />
            <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF]  bg-clip-text text-transparent font-semibold">OPS AGENT</span>
          </p>
        </div>
      </div>
    </section>
  );
}
