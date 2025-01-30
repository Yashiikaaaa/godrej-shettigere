import React from 'react';

import Backgrou from '../assets/amenities/amenitiesBirla.png';

import pool from '../assets/amenities/pool.png';
import parking from '../assets/amenities/parking.png';
import kids from '../assets/amenities/kids.png';
import meditate from '../assets/amenities/meditate.png';
import gym from '../assets/amenities/gym.png';
import tableTennis from '../assets/amenities/tableTennis.png';
import tracki from '../assets/amenities/tracki.png';
import clubhouse from '../assets/amenities/clubHouse.png';
import senior from '../assets/amenities/senior.png';
import poolTable from '../assets/amenities/poolTable.png';



const amenitiesData = {
  "Swimming pool": pool,
  "Visitor's parking": parking,
  "Kid’s play area": kids,
  "Meditation": meditate,
  "Gymnasium": gym,
  "Sports Courts": tableTennis,
  "Jogging Track": tracki,
  "Clubhouse": clubhouse,
  "Senior Citizen": senior,
  "Pool Table": poolTable,

 
};

export const Amenities = () => {
  const containerStyle = {
    backgroundImage: `url(${Backgrou})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const opacBackground = {
    // backgroundColor: '#294B29CC',   
  };

  return (
    <div
      id="Home"
      className="w-full h-auto object-cover"
      style={containerStyle}
    >
      <div className="flex flex-col justify-center w-full" style={opacBackground}>
          <div id="Amenities" className='max-w-full pt-10 md:pt-20'>
              <div className="w-full px-0 md:px-16 text-center mx-auto">
                  {/* Updated text-center and font-bold classes */}
                  <div className='text-center text-3xl md:text-5xl font-subheading font-bold w-full text-white px-4 lg:px-6'>
                      Amenities
                  </div> 
                  <div className="m-16">
                      <div className="max-w-full md:max-w-[80%] mx-auto">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-x-12 lg:gap-x-40">
                            {Object.entries(amenitiesData).map(([amenity, Icon]) => (
                                <div key={amenity} className="flex flex-col items-center">
                                  <img src={Icon} alt={amenity} className="h-12 md:h-20" />
                                  <span className="py-5 text-white text-center">
                                      {amenity}
                                  </span>
                                </div>
                            ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};
