import React from 'react';
import { IoMdSunny } from "react-icons/io";


const Tips = () => {
    return (
        <div>
            <div className="pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold justify-center text-center mb-6 sm:mb-8 md:mb-10 flex gap-2 sm:gap-3">
    Summer Care Tips <span className='text-amber-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl'><IoMdSunny/></span>
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-6">
    <div className="p-4 sm:p-6 shadow rounded-xl text-center bg-base-100">
      <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Stay Hydrated</h3>
      <p className='text-sm sm:text-base'>Drink enough water daily.</p>
    </div>

    <div className="p-4 sm:p-6 shadow rounded-xl text-center bg-base-100">
      <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Use Sunscreen</h3>
      <p className='text-sm sm:text-base'>Protect skin from UV rays.</p>
    </div>

    <div className="p-4 sm:p-6 shadow rounded-xl text-center bg-base-100">
      <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Wear Sunglasses</h3>
      <p className='text-sm sm:text-base'>Protect eyes from sunlight.</p>
    </div>

    <div className="p-4 sm:p-6 shadow rounded-xl text-center bg-base-100">
      <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Eat Fruits</h3>
      <p className='text-sm sm:text-base'>Stay cool and healthy.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Tips;