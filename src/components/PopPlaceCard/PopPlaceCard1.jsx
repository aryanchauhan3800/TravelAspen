import React from 'react';

function PopPlaceCard1({ imageSrc, title, rating, isFavorite }) {
  return (
    <div className="flex flex-col w-[170px] h-[140px] m-2 border border-gray-300 rounded-[14px] shadow-md overflow-hidden">
      <img
        src={imageSrc || "https://lp-cms-production.imgix.net/features/2017/09/dubai-marina-skyline-2c8f1708f2a1.jpg?w=1440&h=810&fit=crop&auto=format&q=75"}
        alt={title}
        className="w-full h-[70%] object-cover"
      />
      <div className="p-0 h-[30%] flex flex-col justify-between bg-white">
        <h3 className="text-sm font-semibold ml-1">Explore Aspen</h3>
        <div className="flex items-center text-xs text-gray-600 mb-2">
          <span className="material-icons ml-1 w-4 h-4">
            <img src="https://cdn-icons-png.flaticon.com/128/616/616490.png" alt="star" />
          </span>
          <span className="ml-1">5.0</span>
        </div>
        {isFavorite && (
          <button className="bg-white border-none p-0 cursor-pointer">
            <span className="material-icons">favorite</span>
          </button>
        )}
        
      </div>
    </div>
  );
}

export default PopPlaceCard1;
