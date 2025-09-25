'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const testimonialData = [
  {
    logo: '/img/genengine-logo.svg',
    description:
      'Finally, a tool that speaks my language! I was spending way too much time wrestling with infrastructure configs instead of building features. Ops0 let me describe what I needed in plain English and handled the heavy lifting. Cut my DevOps needs by at least 60%. Still early days but impressed so far.',
    author: 'Premchander Racharla',
    designation: 'Software Engineer at ADARA, Inc',
  },
  {
    logo: '/img/financial-logo.svg',
    description: (
      <>
        We're a lean team of 8 developers and couldn't justify a full-time
        DevOps engineer. Ops0 has been a game-changer - our junior devs can now
        handle infrastructure tasks that used to require specialist knowledge.
        The natural language interface is surprisingly intuitive. Only minor
        hiccup was some learning curve with more complex setups, but support was
        responsive.
      </>
    ),
    author: 'Wayne Creel',
    designation: 'CTO at Financial Services',
  },
  {
    logo: '/img/igniteai-logo.svg',
    description: (
      <>
        Honestly skeptical at first about the 'natural language' claim, but Ops0
        delivers. Described our deployment pipeline in regular sentences and it
        just worked. I went from dreading infrastructure tasks to actually being
        productive with them. Huge time saver for sure!
      </>
    ),
    author: 'Vinay Kumar Racharla',
    designation: 'Site Reliability Engineer, IgniteAI',
  },
  {
    logo: '/img/factset-logo.svg',
    description: (
      <>
        As a Software Engineer, I needed something that wouldn't require me to
        become a DevOps expert overnight. Ops0 fits perfectly - I can focus on
        product development while it handles the infrastructure complexity. Not
        perfect for every edge case yet, but covers 90% of what small teams
        need.
      </>
    ),
    author: 'Bhuvana Krishna Mathi',
    designation: 'Software Engineer, Factset',
  },
];

export default function Testimonial() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [minWidth, setMinWidth] = useState(0);
  const splitRef = useRef(null);

  // Measure first description width once
  useLayoutEffect(() => {
    const el = document.querySelector('.first-description');
    if (el && minWidth === 0) {
      setMinWidth(el.offsetWidth);
    }
  }, []);

  // Animate current description when index changes
  useEffect(() => {
    // Find all .description elements (desktop + mobile)
    const allDescriptions = document.querySelectorAll('.description');

    // Pick the one that's actually visible (opacity or layout-based)
    const visibleDescription = Array.from(allDescriptions).find((el) => {
      const style = window.getComputedStyle(el);
      return (
        style.display !== 'none' &&
        style.opacity !== '0' &&
        el.offsetParent !== null
      );
    });

    if (!visibleDescription) return;

    // Clean up previous SplitText
    if (splitRef.current) {
      splitRef.current.revert();
    }

    // Simple fade animation without SplitText for now
    gsap.fromTo(
      visibleDescription,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
      }
    );
  }, [activeTestimonial]);

  function testimonialTrigger(value) {
    return () => {
      setActiveTestimonial(value);
      if (window.innerWidth < 767) {
        setTimeout(() => {
          const el = document.getElementById(`testimonial-panel-${value}`);
          if (el) {
            const offset = -80; // Adjust for sticky header height
            const y = el.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 700); // Slight delay to ensure DOM updates
      }
    };
  }

  gsap.registerPlugin(useGSAP);

  return (
    <div className="  relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      

      {/* Interactive testimonials section */}
      <section className="relative isolate border-y border-y-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="border-x border-dashed border-x-white/20">
            {/* Desktop version */}
            <div className="min-h-[400px] overflow-hidden hidden md:flex">
              {testimonialData.map((data, index) => (
                <div
                  onClick={testimonialTrigger(index)}
                  key={index}
                  className={`group cursor-pointer grid relative border-r border-r-white/20 last:border-0 duration-1000 ease-out bg-gray-900 overflow-hidden ${
                    activeTestimonial === index
                      ? 'grid-cols-[1fr] min-w-[calc(100%-400px)]'
                      : 'grid-cols-[0fr] min-w-[100px]'
                  }`}
                >
                  {/* Background overlay */}
                  <div
                    className={`absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm duration-300 ease-out ${
                      activeTestimonial === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></div>
                  
                  {/* Logo when collapsed */}
                  <div
                    className={`absolute inset-0 w-full h-full flex items-center justify-center ${
                      activeTestimonial === index ? 'hidden' : ''
                    }`}
                  >
                    <div className="text-white font-bold text-lg group-hover:scale-110 duration-500 ease-out">
                      {index === 0 && 'genengine'}
                      {index === 1 && 'FINANCIAL'}
                      {index === 2 && <span><span className="text-orange-500">ignite</span>ai</span>}
                      {index === 3 && 'FACTSET'}
                    </div>
                  </div>
                  
                  {/* Expanded content */}
                  <div className="min-w-0">
                    <div
                      className={`relative duration-500 ease-out p-8 flex flex-col h-full ${
                        activeTestimonial === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="mb-4">
                        <Quote size={35} className="text-blue-500 rotate-180" />
                      </div>

                      <div
                        className={`text-xl font-medium mb-4 flex-1 overflow-hidden text-white ${
                          index === 0 ? 'first-description' : ''
                        } ${activeTestimonial === index ? 'description' : ''}`}
                        style={{
                          minWidth: minWidth ? `${minWidth}px` : undefined,
                        }}
                      >
                        "{data.description}"
                      </div>
                      
                      <div
                        style={{
                          minWidth: minWidth ? `${minWidth}px` : undefined,
                        }}
                      >
                        <div className="text-sm text-white/60 mb-2 font-medium">
                          {data.author},{' '}
                          <span className="font-normal">
                            {data.designation}
                          </span>
                        </div>

                        <div className="text-white font-bold text-sm">
                          {index === 0 && 'genengine'}
                          {index === 1 && 'FINANCIAL'}
                          {index === 2 && <span><span className="text-orange-500">ignite</span>ai</span>}
                          {index === 3 && 'FACTSET'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile version */}
            <div className="block md:hidden">
              {testimonialData.map((data, index) => (
                <div
                  id={`testimonial-panel-${index}`}
                  key={index}
                  className="border-b border-b-white/20 last:border-b-0"
                >
                  <div
                    className={`grid duration-500 ease-out overflow-hidden ${
                      activeTestimonial === index
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="min-h-0">
                      <div
                        className={`relative duration-500 ease-out px-6 pt-8 flex flex-col h-full ${
                          activeTestimonial === index
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                      >
                        <div className="mb-4">
                          <Quote size={35} className="text-blue-500 rotate-180" />
                        </div>

                        <div
                          className={`text-base font-medium mb-4 flex-1 overflow-hidden text-white ${
                            activeTestimonial === index ? 'description' : ''
                          }`}
                        >
                          "{data.description}"
                        </div>
                        
                        <div>
                          <div className="text-sm text-white/60 mb-2 font-medium">
                            {data.author},{' '}
                            <span className="font-normal">
                              {data.designation}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={testimonialTrigger(index)}
                    className="w-full py-4 px-6 flex flex-col justify-center min-h-16"
                  >
                    <div className="text-white font-bold text-lg group-hover:scale-110 duration-500 ease-out">
                      {index === 0 && 'genengine'}
                      {index === 1 && 'FINANCIAL'}
                      {index === 2 && <span><span className="text-orange-500">ignite</span>ai</span>}
                      {index === 3 && 'FACTSET'}
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}