"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import ButtonWithIcon from "../button/ButtonWithIcon";

type BillingPeriod = "monthly" | "yearly";

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <div className="flex items-center mb-3">
    <div className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
      <Check className="w-2.5 h-2.5 text-white" />
    </div>
    <span className="text-gray-300 text-sm">{text}</span>
  </div>
);

interface PricingCardProps {
  title: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  billingPeriod: BillingPeriod;
  badge?: string;
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  priceMonthly,
  priceYearly,
  description,
  features,
  billingPeriod,
  badge,
  buttonText,
}) => {
  const price = billingPeriod === "monthly" ? priceMonthly : priceYearly;

  return (
    <div className="relative bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-700 hover:border-gray-600 transition-colors">
      {badge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-3 sm:px-4 py-1 text-xs font-medium rounded">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-[14px] sm:text-xl font-medium mb-4 text-white">{title}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
            ${price}
          </span>
          <span className="text-white ml-2 text-sm sm:text-base">
            / {billingPeriod === "monthly" ? "Month" : "Year"}
          </span>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      <div className="mb-6 sm:mb-8">
        {features.slice(0, 4).map((f, i) => (
          <FeatureItem key={i} text={f} />
        ))}
        {features.length > 4 && (
          <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors font-medium">
            + {features.length - 4} more
          </button>
        )}
      </div>

      <ButtonWithIcon btnText={buttonText} />
    </div>
  );
};

export default function PricingMain() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  const pricingData: PricingCardProps[] = [
    {
      title: "Totally Free",
      priceMonthly: 0,
      priceYearly: 0,
      description: "1 concurrent deployment",
      features: [
        "All core features included",
        "Great for trying Ops0",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      billingPeriod,
      buttonText: "Select plan",
    },
    {
      title: "Ridiculously Cheap",
      priceMonthly: 19,
      priceYearly: 190,
      description: "5 concurrent deployment",
      features: [
        "All core features included",
        "Great for trying Ops0",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      billingPeriod,
      badge: "MOST POPULAR",
      buttonText: "Select plan",
    },
    {
      title: "Serious Business",
      priceMonthly: 39,
      priceYearly: 390,
      description: "15 concurrent deployment",
      features: [
        "All core features included",
        "Great for trying Ops0",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      billingPeriod,
      buttonText: "Select plan",
    },
  ];

  const enterpriseData = [
    { text: "Unlimited concurrent deployments" },
    { text: "Custom API Volume" },
  ];

  const customQuoteData = [
    { text: "Dedicated SLA & SOC-2" },
    { text: "VPC/on-premise option" },
  ];

  return (
    <div className="text-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Flexible{" "}
            <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF] bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>

          {/* Billing Toggle */}
          <div className="inline-flex rounded-full bg-gray-800 border border-white/70 p-1 mt-5">
            {(["monthly", "yearly"] as BillingPeriod[]).map((period) => (
              <button
                key={period}
                onClick={() => setBillingPeriod(period)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  billingPeriod === period
                    ? "bg-white text-gray-900"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {period.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-20">
          {pricingData.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>

        {/* Enterprise & Custom Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-700">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-white">
              For Enterprise
            </h3>
            <div className="space-y-4">
              {enterpriseData.map((item, idx) => (
                <FeatureItem key={idx} text={item.text} />
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-700">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">
              Contact for Custom Quote
            </h3>
            <div className="space-y-4 mb-6 sm:mb-8">
              {customQuoteData.map((item, idx) => (
                <FeatureItem key={idx} text={item.text} />
              ))}
            </div>
            <ButtonWithIcon btnText="Book a call" />
          </div>
        </div>
      </div>
    </div>
  );
}