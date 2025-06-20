import image from "../assets/overview/1pic.webp";
import { PageTitle } from "../components/page-title/PageTitle";

export const Overview = ({ contactmodal, setContactModal }) => {
  return (
    <div className="bg-white">
      <section
        className="w-full flex flex-wrap justify-center gap-8 md:gap-x-48 mx-auto py-10 md:py-10 max-w-10xl px-10"
        id="Overview"
      >
        <div className="">
          <div className="text-left flex flex-col justify-center gap-10 h-full">
            {/* Title */}
            <div className="font-subheading font-bold text-3xl md:text-5xl text-black text-center ">
              Overview
            </div>
            {/* Paragraph */}
            <div className="max-w-4xl md:text-xl text-sm text-black font-body font-normal  mx-auto text-justify  ">
              <span className="font-bold">BARCA at Godrej MSR City</span>- an emerging residential development in North Bengaluru that offers quick connectivity to NH7 (Bengaluru-Hyderabad Highway) and the upcoming Bengaluru Aerospace Park, along with access to major business hubs, hospitals and schools. 

<p>Located in Shettigere, a fast-developing area near Kempegowda International Airport, it ensures a tranquil yet well-connected lifestyle, making it an ideal choice for frequent travellers and urban professionals alike. </p>

With a total size of 62 acres, the Godrej Airport-City township is set to be one of the most sought-after addresses in Bengaluru.
            </div>

            <div className="flex flex-wrap">
              <div className="flex-1 w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
                {/* <!-- Content/Details inside the box --> */}
                <h2 className="text-3xl font-bold text-gray-900  mb-6">
                  Phase 1
                </h2>
                <p className="text-gray-600 text-base">
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Total Unit Phase 1:- 1961</li>
                    <li>Total Towers :- 6</li>
                    <li>Clubhouse :- 1.47L Sqft</li>
                    <li>5 Club House</li>
                    <li>Phase 1 Club House :- 50000sqft.</li>
                  </ul>
                  <button
              className="w-full px-12 py-5 lg:mt-10 mt-0 bg-[#2c2c2c] text-white font-semibold rounded-lg text-base border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-transparent hover:text-trimayablue1 hover:border-trimayablue1"
              onClick={() => {
                setContactModal(!contactmodal);
              }}
            >
              Download Brochure
            </button>
                </p>
              </div>

              <div className="flex-1 hidden lg:block w-full h-auto">
                <img
                  src={image}
                  alt="about"
                  className="hidden lg:block w-full max-w-2xl h-auto"
                />
              </div>
            </div>
             
            
            
            {/* Button (Moved below the paragraph) */}
            
          </div>
          
        </div>

        {/* <!-- Box with Content -->
  <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
    <!-- Content/Details inside the box -->
    <p className="text-gray-600 text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nunc ut tortor vulputate lacinia. Donec ac vestibulum velit. Sed luctus nisi id nisl interdum, id tempor metus gravida.
    </p>

    <!-- Additional Detail or Button -->
    <div className="mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
        Learn More
      </button>
    </div>
  </div>
</div> */}
      </section>
    </div>
  );
};
