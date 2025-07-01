// import axios from "axios";
// const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

// const config = {
//   headers: {
//     "Content-Type": "application/json",
//     "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
//     "X-Goog-FieldMask": "places.photos,places.displayName,places.id",
//   },
// };

// export const GetPlaceDetails = (data) => axios.post(BASE_URL, data, config);


import axios from "axios";

// Google Places API endpoint
const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

// Configuring headers for the POST request
const config = {
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
    "X-Goog-FieldMask": "places.photos,places.displayName,places.id",
  },
};

// Function to call the Google Places API
export const GetPlaceDetails = async (data) => {
  // Validate the incoming textQuery
  if (!data?.textQuery || data.textQuery.trim() === "") {
    console.warn("⚠️ GetPlaceDetails: 'textQuery' is empty or undefined.");
    return null;
  }

  try {
    // Making the POST request
    const response = await axios.post(BASE_URL, data, config);
    return response;
  } catch (error) {
    // Logging detailed error information
    console.error(
      "Google Places API Error:",
      error.response ? error.response.data : error.message
    );
    return null;
  }
};