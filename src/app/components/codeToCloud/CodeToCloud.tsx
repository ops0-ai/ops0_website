import React from "react";

const steps = [
  {
    id: 1,
    title: "Connect Your Cloud",
    description:
      "Securely link Ops0 to your cloud provider and instantly gain visibility into deployments and drifts.",
    duration: "~ 1 hr",
    badgeColor: "bg-gray-700 text-gray-300",
  },
  {
    id: 2,
    title: "Configure Your Stack",
    description:
      "Quickly define infrastructure, pipelines, and policies—ready to monitor and manage in minutes.",
    duration: "~ 2 hr",
    badgeColor: "bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF] text-black",
  },
  {
    id: 3,
    title: "Automate & Scale",
    description:
      "Let Ops0 handle deployment, monitoring, and optimization—so your systems run on autopilot.",
    duration: "~ 2 hr",
    badgeColor: "bg-gray-700 text-gray-300",
  },
];

const StepCard = ({ step }: { step: (typeof steps)[0] }) => (
  <div className="text-center md:text-left relative">
    <div className="flex justify-center md:justify-start mb-4">
      <span
        className={`inline-block ${step.badgeColor} text-xs font-semibold px-3 py-1 uppercase tracking-wider`}
      >
        STEP {step.id}
      </span>
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
      {step.title}
    </h3>
    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
      {step.description}
    </p>
    <div className="text-gray-500 text-sm">{step.duration}</div>

    {/* Dot below each card */}
    <div
      className={`absolute max-md:hidden -top-[-30px] left-2 transform -translate-x-1/2 w-2 h-2 ${step.badgeColor}`}
    ></div>
  </div>
);

const Badge = ({
  children,
  colorClasses,
}: {
  children: React.ReactNode;
  colorClasses: string;
}) => (
  <div
    className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${colorClasses}`}
  >
    {children}
  </div>
);

export default function CodeToCloud() {
  return (
    <div className="text-white overflow-hidden relative">
      {/* Dotted Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-col justify-center items-center">
        {/* Headline */}
        <div className="flex flex-col justify-center items-center mb-16 md:mb-24 ">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight md:max-w-[60%]">
            From{" "}
            <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF] bg-clip-text text-transparent">
              code to cloud
            </span>{" "}
            in minutes, not days.
          </h1>
        </div>

        <div className="relative max-w-6xl mx-auto mb-12">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0">
            <div className="relative h-0.5 bg-white/50 opacity-60"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-gray-400">The future of DevOps is human</span>
            <br />
            <span className="text-gray-400">intuition powered by </span>
            <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF]  bg-clip-text text-transparent">AI execution.</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
