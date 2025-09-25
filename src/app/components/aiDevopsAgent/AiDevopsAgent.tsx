"use client";

import { useState } from "react";
import { CheckCircle, Layers, Zap } from "lucide-react";
import AccordionSection from "./AccordionSection";
import StatusTable from "./StatusTable";
import AgentTerminal from "./AgentTerminal";
import StatsGrid from "./StatsGrid";

const sectionData = {
  "devops-everyone": {
    title: "DevOps for Everyone",
    icon: CheckCircle,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/20",
    description:
      'Anyone can manage infra using simple commands like "Restart dev server." No need to learn Kubernetes, Terraform, or AWS CLI. Empower developers, QA, analysts, and PMs to self-serve safely.',
    statusData: [
      {
        type: "Drift Detection",
        result: "Drifted",
        resources: 15,
        duration: "00:00:41",
        status: "error" as const,
      },
      {
        type: "Deploy",
        result: "Success",
        resources: 15,
        duration: "00:00:51",
        status: "success" as const,
      },
      {
        type: "Drift Detection",
        result: "Success",
        resources: 15,
        duration: "00:00:41",
        status: "success" as const,
      },
      {
        type: "Deploy",
        result: "Success",
        resources: 15,
        duration: "00:00:50",
        status: "success" as const,
      },
    ],
    terminalCommand: "Build terraform infrastructure...",
    agentTitle: "OPSO AGENT",
  },
  "pipeline-creation": {
    title: "Pipeline Creation",
    icon: Layers,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
    description:
      "Automatically generate CI/CD pipelines with intelligent configuration. Our AI analyzes your codebase and creates optimized deployment workflows that follow industry best practices and security standards.",
    statusData: [
      {
        type: "Pipeline Build",
        result: "Success",
        resources: 8,
        duration: "00:02:15",
        status: "success" as const,
      },
      {
        type: "Test Suite",
        result: "Success",
        resources: 12,
        duration: "00:01:32",
        status: "success" as const,
      },
      {
        type: "Security Scan",
        result: "Warning",
        resources: 5,
        duration: "00:00:28",
        status: "warning" as const,
      },
      {
        type: "Deploy to Staging",
        result: "Success",
        resources: 10,
        duration: "00:03:45",
        status: "success" as const,
      },
    ],
    terminalCommand: "Generating CI/CD pipeline configuration...",
    agentTitle: "PIPELINE AGENT",
  },
  "ai-infra": {
    title: "AI-Powered Infra",
    icon: Zap,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/20",
    description:
      "Leverage artificial intelligence to optimize infrastructure costs, predict scaling needs, and automatically resolve common issues. Smart resource allocation and predictive maintenance reduce downtime by 95%.",
    statusData: [
      {
        type: "Cost Optimization",
        result: "Optimized",
        resources: 25,
        duration: "00:05:12",
        status: "success" as const,
      },
      {
        type: "Auto Scaling",
        result: "Active",
        resources: 18,
        duration: "00:00:15",
        status: "success" as const,
      },
      {
        type: "Anomaly Detection",
        result: "Alert",
        resources: 3,
        duration: "00:00:08",
        status: "warning" as const,
      },
      {
        type: "Resource Cleanup",
        result: "Success",
        resources: 7,
        duration: "00:01:45",
        status: "success" as const,
      },
    ],
    terminalCommand: "Analyzing infrastructure patterns...",
    agentTitle: "AI INFRA AGENT",
  },
};

const stats = [
  { label: "CONFIG ACCURACY", value: "99.5%" },
  { label: "LESS MANUAL EFFORT", value: "80%" },
  { label: "INCREASE IN PRODUCTIVITY", value: "3x" },
  { label: "FASTER TIME TO MARKET", value: "50" },
];

export default function AiDevopsAgent() {
  const [activeSection, setActiveSection] = useState("devops-everyone");
  const currentSection = sectionData[activeSection];

  return (
    <div className="    text-white overflow-hidden">
      {/* Background Pattern */}
    
      <div className="relative z-10 ">
        {/* Header */}
        <div className="">
          <div className="flex items-center justify-center text-white/50 text-sm  font-mono mb-[16px]">
            <span>/</span>
            <span className="mx-2">AI DEVOPS AGENTS</span>
            <span>(-)</span>
            <span className="mx-2">USE CASES</span>
            <span>/</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
            Made for{" "}
            <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF]  bg-clip-text text-transparent">
              Modern DevOps
            </span>{" "}
            teams
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 pt-[50px] pb-[80px]">
          {/* Left Sidebar - Accordion Sections - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {Object.entries(sectionData).map(([key, section]) => (
              <AccordionSection
                key={key}
                id={key}
                title={section.title}
                icon={section.icon}
                iconColor={section.iconColor}
                iconBg={section.iconBg}
                description={section.description}
                isActive={activeSection === key}
                onClick={setActiveSection}
              />
            ))}
          </div>
          {/* Image Section - Takes 3 columns */}
          <div className="lg:col-span-3 w-full h-full">
            <img
              src="/images/section3.png"
              alt="Section"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Statistics */}
        <StatsGrid stats={stats} />
      </div>
    </div>
  );
}
