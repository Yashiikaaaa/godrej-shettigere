import React, { useState, useEffect } from "react";
import { Phone, Xmark } from "iconoir-react";
import { MenuScale } from "iconoir-react";
import logo from "../../assets/godrejlogo.png";

// import logoalt from "../../assets/logo.png";
import {Link} from "react-router-dom";

export const Navbar = ({ sitevisitmodal, setSiteVisitModal }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="navbar font-body py-2 fixed w-full z-20 top-0 start-0 bg-[#294b29] ">
      <div className="max-w-10xl text-body mx-auto px-5 lg:px-10 flex flex-wrap items-center justify-between py-1">
        <a href="/" className="flex items-center px-4 space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-10 md:h-14 " alt="Birla Trimaya Phase 2" />
        </a>
        <div
          className={`flex  md:order-2 lg:order-1 space-x-3 rtl:space-x-reverse items-center `}
        >
          <button
            type="button"
            onClick={toggleMobileNav}
            className="inline-flex  items-center p-0 w-10 h-10 justify-center text-sm lg:hidden hover:bg-skyblue2Color hover:text-gray-100 text-black focus:outline-none"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileNavOpen ? "true" : "false"}
          >
            <span className="sr-only">
              {isMobileNavOpen ? "Close main menu" : "Open main menu"}
            </span>
            {isMobileNavOpen ? (
              <Xmark className="w-8 h-8" />
            ) : (
              <MenuScale className="w-8 h-8" />
            )}
          </button>
        </div>
        <div
          className={`items-center md:flex md:order-1 ${
            isMobileNavOpen
              ? "flex min-h-screen backdrop-blur-md w-full"
              : "hidden"
          }`}
          id="navbar-sticky"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <ul
            className={`flex flex-col p-4 md:p-0 mt-4 text-lg w-full md:text-lg text-black h-full gap-6 py-10 bg-transparency-lg justify-around md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 `}
          >
            <li>
              <a
                href="#Home"
                className="block py-2 px-3 border-b md:border-0 md:bg-transparent md:p-0 hover:border-b hover:border-gray-400 cursor-pointer text-white text-md "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Overview"
                className="block py-2 px-3  border-b md:border-0  md:bg-transparent md:p-0 hover:border-b hover:border-gray-400 cursor-pointer text-white text-md"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#Pricing"
                className="block py-2 px-3  border-b md:border-0  md:bg-transparent md:p-0 hover:border-b hover:border-gray-400 cursor-pointer text-white text-md"
              >
                Pricing
              </a>
            </li>
            
              
            
            {/* <li>
              <a
                href="#FloorPlan"
                className="block py-2 px-3  border-b  md:border-0 md:bg-transparent md:p-0 hover:border-b hover:border-gray-400 cursor-pointer text-md"
              >
                Floor Plan
              </a>
            </li> */}
            <li>
              <a
                href="#Location"
                className="block py-2 px-3  border-b md:border-0  md:bg-transparent md:p-0 hover:border-b hover:border-gray-400 cursor-pointer text-white text-md"
              >
                Location
              </a>
            </li>
           
            
          </ul>
        </div>
      </div>
    </nav>
  );
};