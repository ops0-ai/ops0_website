'use client';

import { Check } from 'lucide-react';

export default function EnterpriseSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* For Enterprise */}
      <div className="bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-700">
        <h3 className="text-lg sm:text-xl font-semibold mb-6 text-white">For Enterprise</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <Check className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-gray-300 text-sm">Unlimited concurrent deployments</span>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <Check className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-gray-300 text-sm">Custom API Volume</span>
          </div>
        </div>
      </div>

      {/* Contact for Custom Quote */}
      <div className="bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-700">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">Contact for Custom Quote</h3>
        <div className="space-y-4 mb-6 sm:mb-8">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <Check className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-gray-300 text-sm">Dedicated SLA & SOC-2</span>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <Check className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-gray-300 text-sm">VPC/on-premise option</span>
          </div>
        </div>
        
        <button
          className="bg-transparent border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500 rounded-full py-3 sm:py-4 flex items-center justify-center gap-2 text-sm font-medium"
        >
          BOOK A CALL
          <div className="flex gap-1 ml-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </button>
      </div>
    </div>
  );
}