import React from 'react';
import { NavLink } from 'react-router-dom';
import Greet from "../assets/Greet.jpg";
import DraggableTabs from './DraggableTabs';
import MySearchbar from './searchbar';
import PlaceCard from './Placecard/card';
import PlaceCard2 from './Placecard/card2';
import PopPlaceCard1 from './PopPlaceCard/PopPlaceCard1';


function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Logo */}
      <img
        src={Greet}
        alt="logo"
        width={103}
        height={56}
        className="absolute top-[25px] left-5 z-20"
      />

      {/* Search bar positioned 80px from the top */}
      <div className="absolute top-[60px] left-0 right-0 p-5 z-10">
        <MySearchbar />
      </div>

      {/* Main content */}
      <div className="relative pt-[60px]"> {/* Padding top to accommodate for Navbar */}
        <div className="absolute top-[180px] left-[-10px] right-0">
          <div className="flex flex-col items-start w-full ml-1">
            <DraggableTabs />

            <div className="text-left mt-5 ml-[20px]">
              <h1 className="font-montserrat text-[18px] font-semibold leading-[21.94px]">
                Popular
              </h1>
              <div className="flex  gap-4 overflow-y-auto max-h-[400px] scrollbar-hide pb-3">
                {/* Card 1 */}
                <NavLink
                  to="/layout/place/1"
                  className="w-[188px] h-[240px] opacity-100 mb-4 ml-[-5px]"
                >
                  <PlaceCard />
                </NavLink>
                {/* Card 2 */}
                <NavLink
                  to="/layout/place/2"
                  className="block w-full sm:w-[150px] sm:h-[200px] ml-[-30px]"
                >
                  <PlaceCard2 />
                </NavLink>
                {/* Add more cards as needed */}
              </div>

              {/* Recommended Section */}
              <div className="mt-[10px] mb-[100px] bg-white">
                <h1 className="font-montserrat text-[18px] font-semibold leading-[21.94px] mb-3 text-left ml-2">
                  Recommended
                </h1>
                <PopPlaceCard1 />
                <div className="mt-[-148px] ml-[180px] mb-[100px] bg-white">
                  <PopPlaceCard1 />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Home;
