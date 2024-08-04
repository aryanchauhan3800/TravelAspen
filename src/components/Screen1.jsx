import React from 'react';
import { NavLink } from 'react-router-dom';


const Screen1 = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-[#121212] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1719866193184-e7f73c281faa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zJTIwc3Vuc2V0fGVufDB8fDB8fHww"
        alt="Skyline" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 p-5 z-10 flex flex-col items-start text-left">
        <h1 className="text-white font-thin text-4xl">Plan your</h1>
        <p className="text-white text-4xl">Luxurious</p>
        <p className="text-white text-3xl mb-[70px] ">Vacation</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex justify-center">
        <NavLink
          to="/layout/home"
          className="bg-[#3059df] text-white font-thin text-3xl w-[311px] h-[52px] flex items-center justify-center rounded-full"
        >
          Explore
        </NavLink>
      </div>
    </div>
  );
};

export default Screen1;
