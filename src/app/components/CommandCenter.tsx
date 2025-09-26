"use client";

import React from "react";
import { COMMAND_CENTER_LABEL, commandCards } from "../../../constants/constant";

export default function CommandCenter() {

  return (
    <section className="my-[4rem] lg:mt-[70px] flex flex-col items-center mx-auto px-[15px]">
      {/* Top label */}
      <div className="mb-16 text-center">
        <span className="p-2 bg-[#393939] font-bold rounded-md text-white text-[12px]">
          {COMMAND_CENTER_LABEL}
        </span>
      </div>

      {/* Three columns */}
      <div className="grid grid-cols-3 gap-12 text-center mt-4">
        {commandCards.map((card: any) => {
          const IconComponent = card.icon;
          return (
            <div key={card.id} className="flex flex-col items-center">
              <div className={`w-15 relative h-15 flex items-center justify-center rounded-lg border border-gray-700 bg-black/40 ${card.shadow}`}>
                <IconComponent className={`${card.iconColor} w-7 h-7`} />
              </div>
              <p className="mt-4 text-white text-[12px]">
                {card.combinedText ? (
                  <>
                    {card.regularText}
                    <br />
                    <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF]  bg-clip-text text-transparent font-semibold">
                      {card.gradientText}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF]  bg-clip-text text-transparent font-semibold mr-1">
                      {card.gradientText}
                    </span>
                    {card.regularText}
                  </>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}