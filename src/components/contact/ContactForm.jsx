import React, { useEffect, useState } from "react";
import { FormAlert } from "./FormAlert";
import { db } from "../../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import ReactGA from "react-ga4";
import { Xmark } from "iconoir-react";
import overlaybg from "../../assets/1pic.webp";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";

const trackingId = import.meta.env.VITE_GA_MEASUREMENT_ID;
const ip_api = import.meta.env.VITE_IP_API;

// Initialize Google Analytics
ReactGA.initialize(trackingId);

//
// Utility Functions
//

/**
 * Utility function to extract UTM parameters from the URL.
 * @returns {object} An object containing UTM parameters.
 */
function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source"); // Corrected parameter names (use underscores)
  const medium = params.get("utm_medium");
  const campaign = params.get("utm_campaign");
  ReactGA.send({
    hitType: 'pageview',
    'utm_source': source,
    'utm_medium': medium,
    'utm_campaign': campaign,
  
  })

  return {
    utmSource: source || "",
    utmMedium: medium || "",
    utmCampaign: campaign || "",
  };
}

/**
 * Utility function to generate a random ID based on the current timestamp.
 * @returns {string} Random ID string.
 */
function generateRandomId() {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

/**
 * Utility function to get the current Unix timestamp.
 * @returns {number} Current Unix timestamp.
 */
function getUnixDateTime() {
  return Math.floor(Date.now() / 1000);
}

/**
 * Function to add user data to Firestore.
 * Checks for duplicate phone numbers before adding.
 * @param {string} name - User's name.
 * @param {string} number - User's phone number.
 * @param {object} utmParams - UTM parameters.
 * @returns {boolean} Returns true if data was added successfully, false otherwise.
 */


//
// ContactForm Component
//

export const ContactForm = ({
  contactmodal,
  setContactModal,
  setSiteVisitModal,
}) => {
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [alertMessage, setAlertMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ipDetails, setIPDetails] = useState(null);
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    const fetchIPDetails = async () => {
      try {
        const ipResponse = await fetch("https://api64.ipify.org?format=json");
        const ipData = await ipResponse.json();
        const response = await fetch(
          `https://api.ipdata.co/${ipData.ip}?api-key=${ip_api}`
        );
        const data = await response.json();
        setIPDetails(data.country_code || null);
        setUtmParams(getUTMParams());
      } catch (error) {
        console.error("Error fetching IP details:", error);
      }
    };

    fetchIPDetails();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const showAlert = (message) => {
    setAlertMessage(
      <FormAlert message={message} onClose={() => setAlertMessage(null)} />
    );
  };

  // const validateForm = () => {
  //   const { name, number } = formData;
  //   if (!name || !number) {
  //     showAlert("Please fill in all required fields.");
  //     return false;
  //   }
  //   const nameRegex = /^[A-Za-z ]+$/;
  //   if (!nameRegex.test(name)) {
  //     showAlert("Invalid Full Name. Please use only alphabets and spaces.");
  //     return false;
  //   }
  //   if (number.length !==10) {
  //     showAlert("Invalid Phone Number.");
  //     return false;
  //   }
  //   if (ipDetails === "PK") {
  //     showAlert("ACCESS BLOCKED!");
  //     return false;
  //   }
  //   return true;
  // };


const validateForm = () => {
  const { name, number } = formData;
  if (!name || !number) {
    showAlert("Please fill in all required fields.");
    return false;
  }
  const nameRegex = /^[A-Za-z ]+$/;
  if (!nameRegex.test(name)) {
    showAlert("Invalid Full Name. Please use only alphabets and spaces.");
    return false;
  }

  // Use libphonenumber-js to validate
  if (!isValidPhoneNumber(number)) {
    showAlert("Invalid Phone Number. Please enter a valid number.");
    return false;
  }

  if (ipDetails === "PK") {
    showAlert("ACCESS BLOCKED!");
    return false;
  }
  return true;
};


   const handleSubmit = async (e) => {
      e.preventDefault();
      if (loading) return;
      setLoading(true);
    
      // Validate form before proceeding
      if (!validateForm()) {
        setLoading(false);
        return;
      }
    
      showAlert("Submitting form...");
    
      const normalizedNumber = formData.number.trim();
      const normalizedName = formData.name.trim().toLowerCase();
    
      const propertyId = "Ux8CYriFrhjOGqNQaGG6"; // Example property ID
      const projectName = "godrej shettigere"; // Example project name
    
      const payload = {
        name: normalizedName,
        phonenumber: normalizedNumber,
        campaign: true,
        projectId: propertyId,
        projectName: projectName,
        utmDetails: {
          source: utmParams.utmSource || null,
          medium: utmParams.utmMedium || null,
          campaign: utmParams.utmCampaign || null,
        }
      };
    
      try {
        // Optionally, you can call the handleMultipleCampaignData function if necessary:
        // await handleMultipleCampaignData(payload);
    
        // Send the request to the server
        const response = await fetch("https://handlemultiplecampaigndata-66bpoanwxq-uc.a.run.app", {
          method: "POST",
          headers: {
            "Content-Type": "application/json" // Ensure the server knows you're sending JSON
          },
          body: JSON.stringify(payload) // Convert the payload object to a JSON string
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        // Parse the JSON response from the server
        const result = await response.json();
    
        // Log the successful response data
        console.log("Success:", result);  
    
   
        // Show success alert
        showAlert("We received your info. Expect a response soon!");
      } catch (error) {
        console.error("Error submitting form:", error);
        // setAlert(<FormAlert message="Something went wrong. Please try again later." onClose={() => setAlert(null)} />);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="fixed top-24 left-0 right-0 bg-white z-30 w-full md:w-fit mx-auto">
      <div
        className="max-w-7xl mx-auto md:grid grid-cols-2 gap-5 items-center border shadow-xl"
        style={{ height: "75vh" }}
      >
        <img
          src={overlaybg}
          alt="background"
          className="hidden md:block w-full h-full overflow-hidden opacity-100"
        />
        <form className="mx-auto w-full gap-5 px-8" onSubmit={handleSubmit}>
          <button
            type="button"
            className="text-3xl focus:outline-none float-end absolute top-10 right-5 rounded-full bg-white w-fit"
            onClick={() => setContactModal(!contactmodal)}
          >
            <Xmark />
          </button>
          <div className="font-subheading text-2xl text-center pt-36 md:pt-8">
            Want to know more? Enquire Now!
          </div>
          <div className="mx-auto max-w-sm pt-8">
            <input
              type="text"
              className="p-4 w-full bg-transparent text-base focus:outline-none placeholder-gray-400 text-black border border-gray-500 rounded-sm"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </div>
          <div className="mx-auto max-w-sm py-4">
            <PhoneInput
              className="bg-transparent text-base focus:outline-none placeholder-gray-400 border border-gray-500 rounded-sm h-16 shadow-none p-5"
              placeholder="Contact Number"
              defaultCountry="IN"
              value={formData.number}
              onChange={(value) => handleInputChange("number", value)}
            />
          </div>
          <div className="flex">
            <div className="mx-auto max-w-sm w-40">
              <button
                type="submit"
                className={`text-white my-5 p-2 w-full rounded-md ${
                  loading ? "bg-gray-400" : "bg-trimayablue1"
                }`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
          <div className="text-center py-4 text-gray-500">
            Click{" "}
            <span
              className="text-godrejgreen2 font-semibold cursor-pointer"
              onClick={() => {
                setContactModal(false);
                setSiteVisitModal(true);
              }}
            >
              here
            </span>{" "}
            to Schedule a Site Visit
          </div>
        </form>
      </div>
      {alertMessage && <div>{alertMessage}</div>}
    </div>
  );
};
