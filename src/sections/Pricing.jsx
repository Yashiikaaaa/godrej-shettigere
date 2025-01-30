import React, { useState } from "react";

// Importing images for property types (can uncomment if needed)
// import type1 from "../assets/floor-plans/type1.png";
// import type2 from "../assets/floor-plans/type3.png";
// import type3 from "../assets/floor-plans/type2.png";

import bhk1 from '../assets/pricing/bhk1.png';
import bhk2 from '../assets/pricing/bhk2.png';
import bhk4 from '../assets/pricing/bhk4.png';
// import bhk3 from '../assets/pricing/bhk3.png';
// import bhk4 from '../assets/pricing/bhk4.png';
// import bhk5 from '../assets/pricing/bhk5.png';

/**
 * Pricing component to display property pricing and floor plans.
 * 
 * @param {function} setContactModal - Function to toggle the contact modal.
 * @param {boolean} contactmodal - Boolean to determine the modal's state.
 */
const Pricing = ({ setContactModal, contactmodal }) => {
  // State to track the currently active tab/floor plan
  const [activeTab, setActiveTab] = useState(0);

  // Function to handle the floor plan tab switch
  const handleFloorPlan = (index) => {
    setActiveTab(index);
  };

  // Data for different property types (can expand this array as needed)
  const propertyTypes = [
  
    {
      type: "2 BHK",
      price: "₹ 71 Lakhs*",
      size: "1186-1292sqft (1 Balcony)",
      image: bhk1,
    },
    {
      type: "3 BHK 2T",
      price: "₹ 1.24 Cr*",
      size: "1585-1626sqft (1 Balcony)",
      image: bhk2,
    },
    {
      type: "3 BHK 3T",
      price: "₹ 71 Lakhs*",
      size: "1842-1876sqft (2 Balcony)",
      image: bhk4,
    },
  ];

  return (
    <section id="Pricing" className="bg-blue py-10 md:pt-18">
      <div className="">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">

          {/* Section Heading */}
          <div className='text-black w-full text-center font-subheading font-medium text-3xl md:text-5xl'>
            Details
          </div> 

          {/* Property Cards Container */}
          <div className="flex flex-wrap justify-center gap-10 items-center py-10 px-10 lg:py-12">
            {propertyTypes.map((property, index) => (
              <div
                key={index}
                className="relative p-4 w-fit border-[1.5px] border-trimayablue1/50 bg-white cursor-pointer"
                onClick={() => handleFloorPlan(index)}
              >
                {/* Property Image */}
                <img
                  src={property.image}
                  alt={property.type}
                  className="w-100 mb-8"
                />

                {/* Property Type */}
                <div className="font-semibold font-body text-xl md:text-2xl w-64 text-trimayablue1">
                  {property.type}
                </div>

                {/* Property Details */}
                <div className="max-w-md relative">
                  {/* Price Info */}
                  <div className="text-xl pt-4 flex items-center font-normal">
                    <span className="text-lg md:text-xl">&bull;</span>
                    <span className="text-lg md:text-xl hover:hidden">
                      Starting at: <span className="blur-md">{property.price}</span>
                    </span>
                  </div>

                  {/* Size Info */}
                  <div className="text-xl pt-4 flex items-center font-normal">
                    <span className="text-lg md:text-xl">&bull;</span>
                    <span className="text-lg md:text-xl hover:hidden">
                      Size: <span className="blur-md">{property.size}</span>
                    </span>
                  </div>

                  {/* Get Pricing Button */}
                  <button
                    className="absolute w-max top-1/2 right-0 transform -translate-y-1/2 px-6 py-3 border-gray-300 border bg-[#2c2c2c] text-white text-center rounded-lg font-body font-semibold text-sm sm:text-base"
                    onClick={() => {
                      setContactModal(!contactmodal);
                    }}
                  >
                    Get Pricing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
