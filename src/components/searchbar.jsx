import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const MySearchbar = () => {
  return (
    <div className="p-4">
      <div className="relative flex items-center">
        {/* Search icon */}
        <span className="absolute left-3 text-gray-400">
          <FaSearch />
        </span>
        {/* Input field */}
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-0 h-[52px] rounded-full border-none outline-none w-full"
          style={{ backgroundColor: '#F3F8FE' }} // Background color
        />
      </div>
    </div>
  );
};

export default MySearchbar;
