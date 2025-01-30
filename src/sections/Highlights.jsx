  import React, { useState } from 'react';
  import { PageTitle } from '../components/page-title/PageTitle';

  import pic1 from '../icons/highlights/pic1.png'  
  import pic2 from '../icons/highlights/pic2.png'  
  import pic3 from '../icons/highlights/pic3.png'  
  import pic4 from '../icons/highlights/pic4.png'  




  import Slider from 'react-slick';

  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  import {  ArrowRight } from 'iconoir-react';

  const tabs = [
    { id: 1, title: 'EXTERIOR', photos: [ pic1,pic2,pic3,pic4 ] },
  ];

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" data-role="none" className="slick-arrow slick-next" style={{ display: 'block' }} currentSlide="0" slideCount="5"><path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
    );
  }


  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" data-role="none" className="slick-arrow slick-prev" style={{ display: 'block' }} currentSlide="0" slideCount="5"><path d="M21 12L3 12M3 12L11.5 20.5M3 12L11.5 3.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
    );
  }


  export const Highlights = () => {

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
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
          },
        },
      ],
    };

    return (
      <div className="bg-[#d0eeff] pb-12 px-4 md:px-16  mx-auto " id="Highlights">
        <div className='text-headColor font-heading font-bold uppercase text-3xl md:text-5xl text-themeColor pb-10 w-full'>
          Key Highlights
        </div> 
        <div className='flex flex-col justify-center w-full mx-auto'>
          {tabs.map((tab) =>
            (
              <Slider {...settings} key={tab.id}>
                {tab.photos.map((photo, index) => (
                  <div className='w-full'>
                  <img
                    key={index}
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    style={{objectFit: 'contain' }}
                    className=" px-5 py-5 w-auto h-auto flex justify-center items-center mx-auto"
                  />
                  </div>

                ))}
              </Slider>
            )
          )}
        </div>
      </div>
    );
  };