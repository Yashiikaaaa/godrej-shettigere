import React, { useEffect } from 'react';

export const Features = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .feature-item {
        width: 48%;
        padding: 0rem;
        color: white;
      }
      
      @media (min-width: 640px) {
        .feature-item {
          width: 19%;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className='w-full bg-white'>
      <div className=" bg-[#294b29] w-full md:transform md:-translate-y-1/2">
          <div className=" flex flex-wrap sm:justify-between md:justify-around mx-auto text-center items-center">

              <div className="feature-item py-2 lg:py-4 px-6 p-2 md:p-4">
                  <h1 className="text-xs md:text-lg lg:font-normal font-body text-center">
                      Total Land Parcel
                  </h1>
                  <h3 className="text-xs font-body md:text-2xl font-medium pt-4">
                      62 Acres
                  </h3>
              </div>  

              <div className='border-r-4 h-16 md:h-32 mt-4 mb-4 md:mb-0 md:mt-0 border-white'></div> 

              <div className="feature-item p-2 py-2 md:py-0 px-6 md:p-0">
                  <h1 className="text-xs md:text-lg lg:font-normal font-body text-center">
                      Total Units
                  </h1>
                  <h3 className="text-xs font-body md:text-2xl font-medium pt-4">
                      4000+
                  </h3>
              </div>

              <div className='hidden sm:block border-r-4 h-16 md:h-32 border-white'></div>
              

              <div className="feature-item py-2 md:py-0 px-6 p-2 md:p-0">
                  <h1 className="text-xs md:text-lg lg:font-normal font-body text-center">
                      Starting Price
                  </h1>
                  <h3 className="text-xs font-body md:text-2xl font-medium pt-4">
                      Rs 1.2 Cr
                  </h3>
              </div>

              <div className='border-r-4  h-16 md:h-32 mt-4 mb-4 md:mb-0 md:mt-0 border-white'></div>

              <div className="feature-item   p-2 md:p-0">
                  <h1 className="text-xs md:text-lg lg:font-normal font-body text-center">
                      Possession 
                  </h1>
                  <h3 className="text-xs font-body md:text-2xl font-medium pt-4">
                      2028
                  </h3>
              </div>

              

              
          </div>
      </div>
    </section>
  );
};
