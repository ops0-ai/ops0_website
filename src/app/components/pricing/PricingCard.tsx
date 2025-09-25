'use client';

import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  moreCount: number;
  isPopular: boolean;
  billingPeriod: 'monthly' | 'yearly';
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  moreCount,
  isPopular,
  billingPeriod
}: PricingCardProps) {
  return (
    <div className="relative bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-700 hover:border-gray-600 transition-colors">
      {/* {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-blue-500 hover:bg-blue-500 text-white px-3 sm:px-4 py-1 text-xs font-medium">
            MOST POPULAR
          </Badge>
        </div>
      )} */}
      
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">{name}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">${price}</span>
          <span className="text-gray-400 ml-2 text-sm sm:text-base">
            / {billingPeriod === 'monthly' ? 'Month' : 'Year'}
          </span>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      <div className="mb-6 sm:mb-8">
        {features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center mb-3">
            <div className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <Check className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
        <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors font-medium">
          + {moreCount} more
        </button>
      </div>

      <button
        className="w-full bg-transparent border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500 rounded-full py-3 sm:py-4 flex items-center justify-center gap-2 text-sm font-medium"
      >
        SELECT PLAN
        <div className="flex gap-1 ml-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </button>
    </div>
  );
}