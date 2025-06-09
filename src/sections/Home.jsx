import React from "react";
import HOME from "../assets/HOME.png";
import homeLocation from "../assets/home/location.svg";

// eslint-disable-next-line react/prop-types
export const Home = ({ contactmodal, setContactModal }) => {
  const containerStyle = {
    backgroundImage: `url(${HOME})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const opacBackground = {
    backgroundColor: "rgba(0, 0, 5, 0.40)",
  };

  return (
    <div
      id="Home"
      className="w-full h-[30rem] min-h-[40vh] md:min-h-[88vh] mt-14 md:mt-20"
      style={containerStyle}
    >
      <div
        className="relative flex flex-col gap-6 justify-center h-[30rem] min-h-[60vh] md:min-h-[90vh] w-full items-center"
        style={opacBackground}
      >
        {/* Content Section */}
        <div className="px-10 lg:px-20 flex flex-col justify-center items-center w-full text-white lg:items-start relative">
          <div className="w-full max-w-10xl justify-center items-center lg:items-start text-center lg:text-left">
            <div className="w-full md:w-2/3 flex flex-col justify-start max-w-4xl gap-2 sm:gap-5">
              {/* Heading */}
              <h1 className="font-heading text-3xl md:text-6xl font-semibold my-3">
                BARCA at Godrej MSR City
              </h1>

              {/* Subheading (moved out of h1) */}
              <p className="font-body text-white md:text-2xl text-sm font-normal lg:w-5/6 mx-auto lg:mx-0">
                Luxury Apartments in Shettigere, North Bengaluru
              </p>

              {/* Enquire Now Button */}
              <div
                className="px-8 py-3 bg-white w-fit mx-auto md:my-5 md:mx-0 text-black cursor-pointer font-medium rounded-lg md:text-base font-home text-sm my-2"
                onClick={() => setContactModal(!contactmodal)}
              >
                Enquire Now!
              </div>
            </div>
          </div>
        </div>

        {/* Right-side content (Location card) */}
            <div className="flex md:absolute top-0 right-0 md:mt-14  md:right-20 z-10">
              <div className="flex gap-2 md:gap-6 bg-[#294b29] rounded-lg md:rounded-none items-center text-center md:px-10 md:py-6 px-4 py-4">
                <img
                  src={homeLocation}
                  alt="Location"
                  className="h-3 md:h-12 text-white "
                />
                <p className="max-w-96 font-body text-left text-white md:text-2xl text-xs font-medium leading-[130%]">
                Adjacent to Bengaluru Airport  <br className="hidden md:block" />
                Trumpet Road
                </p>
              </div>
            </div>


        {/* Starting Price Section Placeholder (commented out) */}
        {/* 
        <div className="font-body absolute left-8 md:left-auto md:right-20 top-0 px-4 md:px-20 py-4 md:py-8 text-white bg-trimayablue1 flex flex-col gap-2">
          <div className="font-normal text-center lg:text-3xl text-sm">
            Starting Price
          </div>
          <div className="font-normal text-sm lg:text-3xl text-center">
            ₹ 80 Lakhs* 
          </div>
        </div> 
        */}
      </div>
    </div>
  );
};
