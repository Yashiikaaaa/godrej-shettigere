// import React from 'react';
import mapPointer from "../assets/location/mapPointerBirla.png";

export const Location = () => {
  return (
    <section
      id="Location"
      className="max-w-full flex flex-col items-center max-h-screen  bg-white"
    >
      <div className="w-full md:max-w-10xl flex flex-col md:flex-row items-center md:items-start py-10 md:py-18 ">
        <div className=" flex flex-col items-center md:items-start w-full md:w-5/12 px-4 lg:px-20 gap-8">
          <div className="flex flex-col items-start w-full px-4 lg:px-2">
            <h1 className="text-3xl md:text-5xl font-subheading font-bold text-sobhabrown2">
              Location
            </h1>

            <div className="flex items-center md:hidden pt-2">
              <img
                src={mapPointer}
                alt="Map Pointer"
                className="w-3 h-3 md:w-6 md:h-6 mr-2"
              />
              <p className="text-xs md:text-xl font-body font-normal text-">
                Aerocity, Bengaluru
              </p>
            </div>
          </div>

          <div className="text-center px-6 py-3 md:py-5 md:px-12 border-trimayablue1 bg-transparent border-2 text-sobhabrown2 rounded-lg text-sm md:text-base font-semibold md:w-80 font-body">
            <a href="https://maps.app.goo.gl/9EjN3ED5nQQuSdGr8" className="">
              Open in Google Maps
            </a>
          </div>
          <div className="md:flex flex-col gap-6 font-body hidden ">
            <h1 className="md:text-3xl font-normal">Landmarks Nearby</h1>
            <ol className="list-decimal md:text-xl md:pl-6 flex flex-col gap-6">
              <li>Aerocity</li>
              <li>Manyata Tech Park</li>
              <li>Devanahalli Business Park</li>
              <li>Sadahalli Main Road</li>
            </ol>
          </div>
        </div>
        <div className="w-full md:w-6/12 mt-7 md:mt-0 block">
          <div className="relative h-96 md:h-[500px] w-full">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.506799829597!2d77.65454457790563!3d13.193467076847455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d8829723495%3A0x42397d8ede95b3d1!2sGodrej%20Shettigere!5e0!3m2!1sen!2sin!4v1738150708951!5m2!1sen!2sin"
               width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
