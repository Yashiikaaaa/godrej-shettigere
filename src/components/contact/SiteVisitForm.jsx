import React, { useState, useEffect } from "react";
import { FormAlert } from "./FormAlert";
import { db } from "../../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import ReactGA from "react-ga4";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Xmark } from "iconoir-react";
import overlaybg from '../../assets/overlay-bg-site.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const trackingId = import.meta.env.VITE_GA_MEASUREMENT_ID;
const ip_api = import.meta.env.VITE_IP_API;

ReactGA.initialize(trackingId);

// Utility Functions
function getUnixDateTime() {
  return Math.floor(Date.now() / 1000);
}

function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
  };
}


async function addDataToFireStore(name, number, startDate, utmParams) {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "new_users"), where("phonenumber", "==", number))
    );
    if (!querySnapshot.empty) {
      console.log("Duplicate entry");
      return false;
    }

    const addedUnixTimestamp = getUnixDateTime();
    const siteVisitTimestamp = Math.floor(startDate.getTime() / 1000);
    // const randomId = generateRandomId();

    await addDoc(collection(db, "new_users"), {
      name: name.toLowerCase(),
      phonenumber: number,
      campaign: true, // Fixed as true
      projectName: "godrej shettigere", // Example project name
      projectId: "Ux8CYriFrhjOGqNQaGG6", // Example property ID
      siteVisitDate: siteVisitTimestamp, // Date for the site visit in Unix timestamp
      added: addedUnixTimestamp, // Current timestamp in Unix format
      utmDetails: {
        ...(utmParams.utmSource ? { source: utmParams.utmSource } : {}),
        ...(utmParams.utmMedium ? { medium: utmParams.utmMedium } : {}),
        ...(utmParams.utmCampaign ? { campaign: utmParams.utmCampaign } : {}),
      },
    });

    console.log("Document successfully added");
    return true;
  } catch (error) {
    console.error("Error adding document:", error);
    return false;
  }
}

// SiteVisitForm Component
export const SiteVisitForm = ({ sitevisitmodal, setSiteVisitModal }) => {
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [startDate, setStartDate] = useState(new Date());
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

  const showAlert = (message) => {
    setAlertMessage(
      <FormAlert message={message} onClose={() => setAlertMessage(null)} />
    );
  };

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
    if (number.length < 10 || number.length > 15) {
      showAlert("Invalid Phone Number.");
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
  
    setAlert(<FormAlert message="Submitting form..." onClose={() => setAlert(null)} />);
  
    const normalizedNumber = number.trim();
    const normalizedName = name.trim().toLowerCase();
    const siteVisitTimestamp = Math.floor(startDate.getTime() / 1000);
  
    const propertyId = "Ux8CYriFrhjOGqNQaGG6"; // Example property ID
    const projectName = "godrej shettigere"; // Example project name
  
    const payload = {
      name: normalizedName,
      phonenumber: normalizedNumber,
      campaign: true,
      projectId: propertyId,
      projectName: projectName,
      siteVisitDate: siteVisitTimestamp,
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
  
      // Clear form fields after successful submission
      setName("");
      setNumber("");
  
      // Show success alert
      setAlert(<FormAlert message="We received your info. Expect a response soon!" onClose={() => setAlert(null)} />);
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert(<FormAlert message="Something went wrong. Please try again later." onClose={() => setAlert(null)} />);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle color change in the time picker (not used in this example)
  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
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
          className="hidden md:block w-full h-full overflow-hidden"
        />
        <form className="mx-auto w-full gap-5 px-8" name="lead-form" onSubmit={handleSubmit}>
          <button
            className="text-3xl absolute top-10 right-5 rounded-full bg-white"
            onClick={() => setSiteVisitModal(!sitevisitmodal)}
          >
            <Xmark />
          </button>
          <div className="font-subheading font-medium text-3xl text-center pt-8">
            Schedule Your Site Visit
          </div>
          <div className="text-xl text-center font-body py-4 opacity-50">
            We’ll need some info. to schedule it for you!
          </div>
          <div className="mx-auto max-w-sm pt-8">
            <input
              type="text"
              id="fullName"
              className="p-4 w-full bg-transparent text-base focus:outline-none placeholder-gray-400 text-black border border-gray-500 rounded-sm"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>

          <div className="mx-auto max-w-sm py-4">
            <PhoneInput
              placeholder="Contact Number"
              defaultCountry="IN"
              value={formData.number}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, number: value }))
              }
              className=" bg-transparent text-base focus:outline-none placeholder-gray-400 text-black border border-gray-500 rounded-sm h-16 shadow-none p-5"
            />
          </div>

          <div className="mx-auto max-w-sm py-4">
            <div className="p-3 w-full placeholder-gray-400 text-black border border-gray-500 rounded-sm">
            <DatePicker
                  showTimeSelect
                  showIcon
                  icon={<Calendar color="DarkGreen" height={36} width={340} />}
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    // console.log(startDate);
                  }}
                  timeClassName={handleColor}
                  className=" bg-transparent ml-3 text-base focus:outline-none"
                />
            </div>
          </div>
          <div className="flex">
            <div className="max-w-sm mx-auto w-40">
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
        </form>
      </div>
      {alertMessage && <div>{alertMessage}</div>}
    </div>
  );
};

export default SiteVisitForm;
