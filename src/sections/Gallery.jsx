import React, { useState } from 'react';
import pic1 from '../assets/gallery/icons/pic1.webp';
import pic2 from '../assets/gallery/icons/pic2.jpg';
import pic3 from '../assets/gallery/icons/pic3.jpg';
import pic4 from '../assets/gallery/icons/pic4.webp';
import pic5 from '../assets/gallery/icons/pic5.webp';
import pic6 from '../assets/gallery/icons/pic6.jpg';
import pic7 from '../assets/gallery/icons/pic7.jpg';
import pic8 from '../assets/gallery/icons/pic8.webp';
import pic9 from '../assets/gallery/icons/pic9.webp';
// import pic4 from '../assets/gallery/gallery4GodrejPark.png';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const tabs = [
  { id: 1, title: 'EXTERIOR', photos: [pic1 ,pic2, pic3,pic4,pic5,pic6,pic7,pic8,pic9] },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <svg
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        strokeWidth="5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
        data-role="none"
        className="slick-arrow slick-next"
        style={{ display: 'block' }}
        
      >
        <path
          d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <svg
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        strokeWidth="5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
        data-role="none"
        className="slick-arrow slick-prev"
        style={{ display: 'block' }}
        currentSlide="0"
        slideCount="4"
      >
        <path
          d="M21 12L3 12M3 12L11.5 20.5M3 12L11.5 3.5"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
}

export const Gallery = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="pb-12 px-4 md:px-24 mx-auto bg-white py-10 md:pt-20" id="Gallery">
      {/* Center the heading */}
      <div className="text-center text-3xl md:text-5xl font-bold font-subheading w-full text-black">
        Gallery
      </div> 
      
      <div className="gap-6 md:py-6">
        {tabs.map((tab) => (
          <Slider {...settings} key={tab.id}>
            {tab.photos.map((photo, index) => (
              <div  key={index}>
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  style={{ objectFit: 'cover' }}
                  className="px-2 mx-3 py-5 w-full h-[30vh] md:h-[70vh]"
                />
              </div>
            ))}
          </Slider>
        ))}
      </div>
    </div>
  );
};
