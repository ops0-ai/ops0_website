import { Pencil, Sliders, Rocket } from "lucide-react";

export const COMMAND_CENTER_LABEL = "UNIFY CONTROL ON SINGULAR COMMAND CENTER";

export  const commandCards = [
    {
      id: 1,
      icon: Pencil,
      iconColor: "text-gray-400",
      shadow: "shadow-[0_0_30px_rgba(59,130,246,0.2)]",
      gradientText: "CREATE",
      regularText: "YOUR CLOUD RESOURCES",
      combinedText: true
    },
    {
      id: 2,
      icon: Sliders,
      iconColor: "text-gray-200",
      shadow: "shadow-[0_0_40px_rgba(139,92,246,0.4)]",
      gradientText: "CM AGENT",
      regularText: "MANAGE",
      combinedText: true
    },
    {
      id: 3,
      icon: Rocket,
      iconColor: "text-gray-400",
      shadow: "shadow-[0_0_30px_rgba(59,130,246,0.2)]",
      gradientText: "OPS AGENT",
      regularText: "OPERATE",
      combinedText: true
    }
  ];