'use client';

import PricingCard from './PricingCard';

interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  moreCount: number;
  isPopular: boolean;
}

interface PricingGridProps {
  plans: Plan[];
  billingPeriod: 'monthly' | 'yearly';
}

export default function PricingGrid({ plans, billingPeriod }: PricingGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-20">
      {plans.map((plan, index) => (
        <PricingCard
          key={plan.name}
          name={plan.name}
          price={plan.price}
          description={plan.description}
          features={plan.features}
          moreCount={plan.moreCount}
          isPopular={plan.isPopular}
          billingPeriod={billingPeriod}
        />
      ))}
    </div>
  );
}