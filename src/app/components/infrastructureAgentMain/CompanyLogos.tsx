import React from 'react';

const CompanyLogos: React.FC = () => {
  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center text-white/50 text-sm  font-mono mb-[22px] leading-6">
          BUILT BY ENGINEERS FROM LEADING ENTERPRISES
        </div>
        
        <div className="flex justify-center flex-wrap max-md:gap-6 gap-4 items-center space-x-16">
          <img
            src="/svg/CompanyLogo1.svg"
            alt="Company Logo 1"
            className="h-10 w-auto"
          />
          <img
            src="/svg/CompanyLogo2.svg"
            alt="Company Logo 2"
            className="h-10 w-auto"
          />
          <img
            src="/svg/CompanyLogo3.svg"
            alt="Company Logo 3"
            className="h-10 w-auto"
          />
           <img
            src="/svg/CompanyLogo4.svg"
            alt="Company Logo 3"
            className="h-10 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;