import React from "react";
import { PageTitle } from "../components/page-title/PageTitle";
import masterplan from "../assets/masterPlan/masterPlan.png";

export const MasterPlan = ({setContactModal, contactmodal }) => {
  return (
    <div
      className="px-6 md:px-24 lg:px-64 pt-12 mx-auto flex flex-col items-center justify-center bg-white py-10 md:pt-8"
      id="MasterPlan"
    >
      <div className='text-black font-subheading font-medium text-3xl md:text-5xl w-fit'>
          Master Plan
      </div> 
      <div className="relative mt-5">
        <img src={masterplan} 
              alt="Master Plan" 
              className="max-w-screen-lg w-[80vw] pb-4 " />
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-3 text-white bg-[#2c2c2c]  text-center rounded-lg text-xs md:text-lg font-medium"
          onClick={() => {
            setContactModal(!contactmodal);
          }}
        >
          Get Master Plan
        </button>
      </div>
    </div>
  );
};
