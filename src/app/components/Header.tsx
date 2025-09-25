"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../../../public/svg/Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50  rounded-3xl   border border-slate-600/50 bg-[#ffffff19] pr-1">
      <div className=" ">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className='flex items-center gap-[24px]'>
            <div className='bg-gradient-to-r from-[#BEA1EF]/30 via-[#3A3241]/0 to-[#4757D1]/40 px-3 py-[4px] rounded-3xl'>

            <Logo/>
            </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-200 text-[14px] font-medium">
              FEATURES
            </a>
            <div className="w-px h-6 bg-slate-600/50"></div>
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-200 text-[14px] font-medium">
              PRICING
            </a>
            <div className="w-px h-6 bg-slate-600/50"></div>
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-200 text-[14px] font-medium">
              REVIEWS
            </a>
            <div className="w-px h-6 bg-slate-600/50"></div>
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-200 text-[14px] font-medium">
              PARTNER WITH US
            </a>
          </div>
          </div>


          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-white bg-white/20 text-sm px-3 py-1.5 rounded-3xl font-medium ">
              LOGIN
            </button>
            <button className="text-black bg-[radial-gradient(91.5%_91.5%_at_8.5%_0%,#E5D5FF_0%,#FFFFFF_100%)] text-sm px-3 py-1.5 rounded-3xl font-medium ">
            DEMO WITH FOUNDER
            </button>
           
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-400 font-medium hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-6 right-6 bg-slate-800/95 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 space-y-6">
            <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              FEATURES
            </a>
            <hr className="border-slate-700/50" />
            <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              PRICING
            </a>
            <hr className="border-slate-700/50" />
            <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              REVIEWS
            </a>
            <hr className="border-slate-700/50" />
            <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium">
              PARTNER WITH US
            </a>
            <hr className="border-slate-700/50" />
            <button className="block w-full text-left bg-slate-700/40 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium border border-slate-600/30">
              LOGIN
            </button>
            <button className="block w-full bg-white text-slate-900 hover:bg-gray-100 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200">
              DEMO WITH FOUNDER
            </button>
          </div>
        )}
      </div>
    </header>
  );
}