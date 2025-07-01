import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";

const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
const InfoSection = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const query = trip?.userChoice?.location?.label;
    if (!query || query.trim() === "") return;
  
    const result = await GetPlaceDetails({ textQuery: query });
    if (!result || !result.data?.places?.[0]) return;
  
    const photoArray = result.data.places[0].photos;
    const chosenPhoto = photoArray?.[3] || photoArray?.[0]; // fallback if 3rd photo is undefined
  
    if (chosenPhoto?.name) {
      const PhotoUrl = PHOTO_REF_URL.replace("{NAME}", chosenPhoto.name);
      setPhotoUrl(PhotoUrl);
    }
  };
  
  return (
    <div className="flex justify-center items-center px-4 mt-10">
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
        {/* Optional Image */}
        {/* <img
          className="h-40 w-40 rounded-full object-cover mb-4"
          src={photoUrl}
          alt="Trip Image"
        /> */}
  
        <div className="text-4xl font-bold mb-4">
          🗺️ {trip?.userChoice?.location?.label}
        </div>
        <div className="text-xl mb-2">
          📅 <span className="font-semibold ml-1">Duration:</span> {trip?.userChoice?.noOfDays} days
        </div>
        <div className="text-xl mb-2">
          💰 <span className="font-semibold ml-1">Budget:</span> {trip?.userChoice?.budget}
        </div>
        <div className="text-xl">
          👥 <span className="font-semibold ml-1">Traveling with:</span> {trip?.userChoice?.noOfPeople}
        </div>
      </div>
    </div>
  );
  
  
};

export default InfoSection;