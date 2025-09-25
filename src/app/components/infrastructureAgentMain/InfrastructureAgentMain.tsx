"use client";
import * as React from "react";
const { useState } = React;
import Image from "next/image";
import CompanyLogos from "./CompanyLogos";
import DashboardContent from "./DashboardContent";
import InfrastructureAgent from "./InfrastructureAgent";
import Sidebar from "./Sidebar";
import TabNavigation from "./TabNavigation";

function InfrastructureAgentMain() {
  const [activeTab, setActiveTab] = useState("create");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative text-white">
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="flex max-md:flex-col gap-4 border-gradient">
        <div className="md:w-[30%]">

          <InfrastructureAgent activeTab={activeTab} />
        </div>

        <div className="relative flex-1">
          <Image
            src="/images/section2.png"
            alt="Section 2"
            fill
            className="object-contain p-8"
            priority
          />
        </div>
      </div>

      <CompanyLogos />
    </div>
  );
}

export default InfrastructureAgentMain;
