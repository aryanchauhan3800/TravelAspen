import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import the back arrow icon
import pool from "../assets/pool.png";
import heater from "../assets/heater.png";
import dish from "../assets/dish.png";
import bathtub from "../assets/bathtub.png";

const Allesplace = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = `Aspen is as close as one can get to a storybook alpine town in America. The choose-your-own-adventure possibilities—skiing, hiking, dining shopping and ....`;

  // Split text into words and truncate if necessary
  const wordLimit = 20;
  const words = text.split(' ');
  const isTextLong = words.length > wordLimit;

  const displayText = isExpanded ? text : words.slice(0, wordLimit).join(' ') + (isTextLong ? '...' : '');

  return (
    <div className="relative flex flex-col items-center justify-center pb-[240px] pt-[15px]">
      {/* Back Button */}
      <Link
        to="/layout/home"
        className="absolute top-5 left-5 bg-white rounded-full p-2 shadow-lg"
      >
        <FaArrowLeft className="text-blue-600" size={24} />
      </Link>
      
      <img
        src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3doYXQtY291bnRyeS1pcy1kdWJhaS1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ=="
        alt="Single Image"
        className="self-center rounded-3xl w-11/12 h-1/2 object-cover"
      />
      <div className="text-left mt-6 w-full px-4 flex flex-col items-start">

        <div className="w-full mb-6">
          <h2 className="font-montserrat text-24px font-semibold leading-29.26px">
            Allesplace
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            {displayText}
          </p>
          {isTextLong && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-500 mt-2 focus:outline-none"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
        <div className="w-full mb-6">
          <h2 className="font-montserrat text-24px font-semibold leading-29.26px pt-[20px]">
            Facilities
          </h2>
        </div>

        {/* Image Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mx-auto pl-[50px]">
          <div className="w-[77px] h-[74px] md:w-[150px] md:h-[150px] bg-gray-200 rounded-lg overflow-hidden ">
            <img
              src={pool}
              alt="Facility 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[77px] h-[74px] md:w-[150px] md:h-[150px] bg-gray-200 rounded-lg overflow-hidden ">
            <img
              src={bathtub}
              alt="Facility 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[77px] h-[74px] md:w-[150px] md:h-[150px] bg-gray-200 rounded-lg overflow-hidden ">
            <img
              src={heater}
              alt="Facility 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[77px] h-[74px] md:w-[150px] md:h-[150px] bg-gray-200 rounded-lg overflow-hidden ">
            <img
              src={dish}
              alt="Facility 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Price and Book Now Button */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center pb-[80px]">
        <div className="relative bg-white rounded-full px-10 py-6 shadow-lg flex items-center space-x-8 w-11/12 max-w-4xl">
          <div className="relative flex items-center">
            <div className="absolute -top-6 left-0 text-gray-600 text-xs font-semibold" style={{ width: '56px', height: '48px', lineHeight: '48px' }}>
              Price
            </div>
            <div className="ml-[5px]">
              <span className="text-2xl font-semibold text-green-600">$199</span>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-14 py-3 rounded-2xl">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Allesplace;
