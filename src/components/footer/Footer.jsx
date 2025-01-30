import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import contactbanner from '../../assets/1pic.webp';

export const Footer = ({ contactmodal, setContactModal }) => {
  // Background image and overlay styles
  const opacBackground = {
    backgroundImage: `url(${contactbanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const overlayStyle = {
    backgroundColor: '#0F2938C2',
  };

  return (
    <div className="relative">
      {/* Footer Banner Section */}
      <div className="text-white border-t border-gray-700 h-auto" style={opacBackground}>
        <div style={overlayStyle} className="mx-auto">
          {/* Text and Button */}
          <div className="flex flex-col text-center gap-6 md:gap-10 items-center justify-center mx-auto pt-20 md:pt-40 pb-20 md:py-24 lg:h-[60vh] w-full">
            {/* Title Text */}
            <div className="text-lg md:text-4xl max-w-2xl font-medium md:font-medium font-body">
              Looking To Get In Touch With Us?
            </div>

            {/* "Fill the form" Button */}
            <div
              className="mx-auto font-semibold text-sm md:text-lg text-center border-2 h-fit md:py-5 md:px-20 py-3 px-8 border-white w-fit opacity-80 hover:opacity-100 cursor-pointer scroll-to-top rounded-lg transition-all duration-300"
              onClick={() => {
                setContactModal(!contactmodal);
              }}
            >
              Fill the form
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer Section */}
      <div className="mx-auto w-full">
        <footer className="bg-black text-white p-5 w-full">
          <div className="max-w-8xl text-xs sm:text-lg flex flex-col lg:flex-row gap-5 justify-between w-full mx-auto font-semibold text-center">
            {/* Privacy Policy Button */}
            <p>
              <div>
                <button className="underline">Privacy Policy</button>
              </div>
            </p>

            {/* Disclaimer Text */}
            <p>
              <span className="pr-2 font-bold">Disclaimer:</span>This website is not an official site; it belongs to the authorized channel partner and is for informational purposes only.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
