'use client';

interface PricingHeaderProps {
  billingPeriod: 'monthly' | 'yearly';
  setBillingPeriod: (period: 'monthly' | 'yearly') => void;
}

export default function PricingHeader({ billingPeriod, setBillingPeriod }: PricingHeaderProps) {
  return (
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12 leading-tight">
        Flexible{' '}
        <span className="text-blue-400">Pricing</span>
      </h1>
      
      {/* Billing Toggle */}
      <div className="inline-flex rounded-full bg-gray-800 p-1 mb-8 sm:mb-12 lg:mb-16">
        <button
          onClick={() => setBillingPeriod('monthly')}
          className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
            billingPeriod === 'monthly'
              ? 'bg-white text-gray-900'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          MONTHLY
        </button>
        <button
          onClick={() => setBillingPeriod('yearly')}
          className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
            billingPeriod === 'yearly'
              ? 'bg-white text-gray-900'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          YEARLY
        </button>
      </div>
    </div>
  );
}