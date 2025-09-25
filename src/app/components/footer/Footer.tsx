import Discord from "public/svg/Discord";
import Github from "public/svg/Github";
import RedditAlien from "public/svg/RedditAlien";
import XTwitter from "public/svg/XTwitter";
import Youtube from "public/svg/Youtube";

export default function Footer() {
  return (
    <div className="   text-white overflow-hidden px-4 sm:px-8  flex flex-col justify-end">
      {/* Content */}
      <div className="   flex flex-wrap flex-col md:flex-row   gap-y-12 gap-x-12 z-10">
        {/* Left : Text, form, icons */}
        <div className="">
          <h2 className=" text-3xl font-medium mb-5 leading-tight">
            From{" "}
            <span className="bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF]  bg-clip-text text-transparent">
              code to cloud
            </span>{" "}
            in
            <br />
            minutes, not days.
          </h2>
          <form className="w-full mt-8 mb-6 max-w-lg">
            <div className="relative flex items-center w-full bg-neutral-900 border border-neutral-700 focus-within:ring-2 focus-within:ring-blue-400">
              <input
                type="email"
                aria-label="Email"
                placeholder="Email"
                className="flex-1 w-full bg-transparent text-white px-4 py-3 rounded-none focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 my-1 mr-1 text-xs font-semibold tracking-widest bg-white text-black hover:bg-neutral-200 rounded-none border-2 border-transparent transition whitespace-nowrap"
              >
                STAY UPDATED
              </button>
            </div>
          </form>
          <div className="flex items-center gap-4 text-xl">
            <a href="#" aria-label="Discord">
              <Discord />
            </a>
            <a href="#" aria-label="Reddit">
              <RedditAlien />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube />
            </a>
            <a href="#" aria-label="Twitter">
              <XTwitter />
            </a>
            <a href="#" aria-label="GitHub">
              <Github />
            </a>
          </div>
        </div>
        {/* Right: navigation and contact */}
        <div className="flex-1 flex max-md:flex-wrap justify-between md:justify-around   font-mono  ">
          <nav className="mb-12">
            <h4 className="uppercase text-sm text-white mb-3 tracking-wider">
              Explore more
            </h4>
            <ul className="flex flex-col space-y-3 text-xs font-mono">
              <li>
                <a href="#" className="hover:underline text-white/50">
                  PRODUCT
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white/50">
                  USE CASES
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white/50">
                  CLI
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white/50">
                  FAQS
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white/50">
                  BLOG
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white/50">
                  PARTNER WITH US
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-xs space-y-3 font-mono">
            <div className="flex flex-col gap-5">
              <a
                href="mailto:support@ops0.com"
                className="block text-white/50 underline underline-offset-2 hover:text-blue-200"
              >
                SUPPORT@OPS0.COM
              </a>
              <div className="space-x-4 mb-2">
                <div className="mt-4 mb-2 text-white/50 font-normal">
                  © 2025 OPS0. ALL RIGHTS RESERVED.
                </div>
                <a
                  href="#"
                  className="underline text-white/50 hover:text-blue-200"
                >
                  TERMS OF USE
                </a>
                <a
                  href="#"
                  className="underline text-white/50 hover:text-blue-200"
                >
                  PRIVACY POLICY
                </a>
              </div>
              <a
                href="https://www.google.com/maps/search/7900+SUDLEY+SUITE,+MANASSAS,+VA+20109"
                target="_blank"
                rel="noopener noreferrer"
                className="block underline text-white/50 hover:text-blue-200"
              >
                7900 SUDLEY SUITE, MANASSAS, VA 20109
              </a>
            </div>
            <div className="font-mono text-xs mt-8 text-neutral-100">
              MADE WITH <span className="text-red-500">♥</span> IN DALLAS, TEXAS
            </div>
          </div>
        </div>
      </div>
      <div className="max-lg:hidden text-[400px] text-white/20">
        OPSO
      </div>
    </div>
  );
}
