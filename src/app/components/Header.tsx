"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Logo from '../../../public/svg/Logo';
import ButtonWithIcon from './button/ButtonWithIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='px-[15px] pt-2 lg:px-[50px] lg:pt-6'>
      <header className="relative z-50 rounded-3xl  border-[0.5px] border-[#FFFFFF1F]">
        <div>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className='flex items-center gap-[24px]'>
              <div className='bg-[linear-gradient(308.41deg,rgba(190,161,239,0.6)_14.67%,rgba(58,50,65,0)_47%,rgba(71,87,209,0.6)_86.21%)] w-[75px] h-[48px] lg:w-[110px] lg:h-[48px] flex items-center justify-center rounded-3xl'>
                <Image src="/ops-logo.svg" alt="Ops Logo" width={70} height={34} className='w-[50px] h-[24px] lg:w-[70px] lg:h-[34px]' />
              </div>
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-4">
                <a href="#" className="text-[#FFFFFF] leading-[24px] opacity-50 text-sm font-medium">
                  FEATURES
                </a>
                <div className="w-px h-6 bg-slate-600/50"></div>
                <a href="#" className="text-[#FFFFFF] leading-[24px] opacity-50 text-sm font-medium">
                  PRICING
                </a>
                <div className="w-px h-6 bg-slate-600/50"></div>
                <a href="#" className="text-[#FFFFFF] leading-[24px] opacity-50 text-sm font-medium">
                  REVIEWS
                </a>
                <div className="w-px h-6 bg-slate-600/50"></div>
                <a href="#" className="text-[#FFFFFF] leading-[24px] opacity-50 text-sm font-medium">
                  PARTNER WITH US
                </a>
              </div>
            </div>


            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className=" bg-white/20 rounded-3xl login-button">
                LOGIN
              </button>
              <button className="demo-button mr-3">
                DEMO WITH FOUNDER
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="lg:hidden mr-2 w-9 h-9 rounded-[35px] flex items-center justify-center p-1.5 top-1.5 left-[301px] gap-2 bg-[radial-gradient(91.5%_91.5%_at_8.5%_0%,_rgba(229,213,255,0.12)_0%,_rgba(255,255,255,0.12)_100%)] text-gray-400 font-medium hover:text-white transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className="lg:hidden absolute w-full top-[-1px] backdrop-blur-[32px] rounded-2xl py-3 px-3 space-y-6 border border-slate-700/50"
              style={{

                // borderImage: 'linear-gradient(178.71deg, rgba(214, 211, 241, 0.3) -8.49%, rgba(40, 63, 129, 0.3) 98.9%) 1',
                background: 'linear-gradient(184.72deg, rgba(41, 50, 90, 0.88) -5.18%, rgba(3, 2, 13, 0.88) 99.17%)'
              }}
            >
              {/* Add logo at the top of mobile menu */}
              <div className='flex items-center justify-between gap-[24px] mb-6'>
                <div className='bg-[linear-gradient(308.41deg,rgba(190,161,239,0.6)_14.67%,rgba(58,50,65,0)_47%,rgba(71,87,209,0.6)_86.21%)] w-[75px] h-[48px] flex items-center justify-center rounded-3xl'>
                  <Image src="/ops-logo.svg" alt="Ops Logo" width={70} height={34} className='w-[50px] h-[34px]' />
                </div>
                <div>
                  <button
                    onClick={toggleMenu}
                    className="lg:hidden mr-2 w-9 h-9 rounded-[35px] flex items-center justify-center p-1.5 top-1.5 left-[301px] gap-2 bg-[radial-gradient(91.5%_91.5%_at_8.5%_0%,_rgba(229,213,255,0.12)_0%,_rgba(255,255,255,0.12)_100%)] text-gray-400 font-medium hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <a href="#" className="block text-[#FFFFFF] leading-[24px] opacity-50 text-sm font-medium text-center nav-link">
                FEATURES
              </a>
              <hr className="border-slate-700/50" />
              <a href="#" className="block text-[#FFFFFF] leading-[24px] opacity-50 text-sm font-medium text-center nav-link">
                PRICING
              </a>
              <hr className="border-slate-700/50" />
              <a href="#" className="block text-[#FFFFFF] leading-[24px] opacity-50 text-sm font-medium text-center nav-link">
                REVIEWS
              </a>
              <hr className="border-slate-700/50" />
              <a href="#" className="block text-[#FFFFFF] leading-[24px] opacity-50 text-sm font-medium text-center nav-link">
                PARTNER WITH US
              </a>

              <div className='flex items-center justify-center mb-4'>
                <ButtonWithIcon btnText='Demo with Founder' />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>

  );
}