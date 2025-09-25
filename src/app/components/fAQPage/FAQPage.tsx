'use client'
import React from 'react';
import { Plus, X } from 'lucide-react';
import ButtonWithIcon from '../button/ButtonWithIcon';

const FAQPage = () => {
  const faqData = [
    {
      question: "What is OpsO and how is it different from traditional DevOps platforms?",
      answer: "OpsO uses AI-powered agents to automate the entire DevOps lifecycle—from infrastructure provisioning to CI/CD and incident resolution—eliminating the need for manual intervention and traditional scripting.",
      isOpen: true,
    },
    {
      question: "Do I need to change my existing tools or workflows to use OpsO?",
      answer: "No. OpsO is designed to integrate seamlessly with your existing toolchain, including major cloud providers, CI/CD tools, and observability platforms, enhancing your workflows without replacing them.",
      isOpen: false,
    },
    {
      question: "What are OpsO's AI agents actually capable of?",
      answer: "OpsO's AI agents can perform a wide array of tasks, such as auto-generating Terraform from natural language, creating CI/CD pipelines, detecting and fixing configuration drift, and performing root cause analysis for incidents.",
      isOpen: false,
    },
    {
      question: "How does OpsO handle security and compliance?",
      answer: "Security is built-in. OpsO is SOC 2 compliant and ensures all operations are secure with features like workload isolation, end-to-end encryption, access control, and comprehensive audit logging.",
      isOpen: false,
    },
    {
      question: "Can OpsO scale with enterprise-grade workloads?",
      answer: "Absolutely. The platform is architected to be highly scalable and robust, capable of managing complex, large-scale enterprise environments and heavy workloads without performance degradation.",
      isOpen: false,
    },
  ];

  // A simple state for a standalone accordion. In a real app, this logic might be more complex.
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white w-full font-sans antialiased">
      <div className="w-full h-full bg-grid-white/[0.05] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="  relative z-10">
          
          <header className="text-center py-12 md:py-16">
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
              FAQS
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
              Got Questions? <br /> We've got answers
            </h1>
            <p className="mt-6 text-neutral-400 max-w-lg mx-auto">
              Can't find the solution you need? Email us at{' '}
              <a href="mailto:support@ops0.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline underline-offset-4">
                support@ops0.com
              </a>
            </p>
          </header>

          <main className="w-full border-t border-dashed border-white/30 max-sm:p-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-dashed border-white/30 py-6"
              >
                <div 
                  className="flex justify-between items-center cursor-pointer group"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <h3 className="text-base sm:text-lg font-medium text-neutral-100 pr-4">
                   <span className="text-neutral-500 mr-4">{index + 1}.</span> {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? <X className="text-neutral-400" size={20} /> : <Plus className="text-neutral-400" size={20} />}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="mt-4 pl-8">
                    <p className="text-sm sm:text-base text-neutral-400 leading-relaxed w-[80%]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </main>

          <footer className="text-center pt-24 ">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tighter">
              Transform from{' '}
              <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF]  bg-clip-text text-transparent">
              DevOps to NoOps
          </span>
            </h2>
            <div className=" flex justify-center">
                <ButtonWithIcon btnText='Demo with Founder'/>
            </div>
          </footer>
          
        </div>
      </div>
    </div>
  );
};

export default FAQPage;