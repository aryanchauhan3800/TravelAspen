import React from 'react';

const PlaceCard = () => {
  return (
    <div className="relative w-[160px] h-[250px] rounded-3xl overflow-hidden shadow-md m-4">
      <img
        className="w-full h-full object-cover"
        src="https://www.affordableluxurytravel.co.uk/blog/wp-content/uploads/2023/08/best-time-of-the-year-to-visit-australia.jpg"
        alt="Alley Palace"
      />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent flex justify-between items-center rounded-b-3xl">
        <div className="flex flex-col items-start space-y-1">
          <div className="bg-gray-500 text-white text-xs py-1 px-2 rounded-full flex items-center justify-center">
            Alley Palace
          </div>
          <div className="flex items-center space-x-1 text-xs text-white">
            <div className="bg-gray-500 text-white py-1 px-2 rounded-full flex items-center justify-center">
              <img 
                src="https://cdn-icons-png.flaticon.com/128/616/616490.png" 
                alt="star" 
                className="w-4 h-4"
              />
              <span className="ml-1">4.1</span>
            </div>
          </div>
        </div>
        <div className="w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full shadow-lg">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png" 
            alt="heart icon" 
            className="w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
