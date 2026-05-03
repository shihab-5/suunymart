import React from 'react';
import { IoMdSunny } from "react-icons/io";


const Tips = () => {
    return (
        <div>
            <div className="pb-16 mx-20">
  <h2 className="text-6xl font-bold  justify-center text-center  mb-10 flex gap-3">
    Summer Care Tips <span className='text-amber-600'><IoMdSunny/></span>
  </h2>

  <div className="grid md:grid-cols-4 gap-6">
    <div className="p-6 shadow rounded-xl text-center bg-base-100">
      <h3 className='text-2xl font-bold'>Stay Hydrated</h3>
      <p>Drink enough water daily.</p>
    </div>

    <div className="p-6 shadow rounded-xl text-center bg-base-100">
      <h3 className='text-2xl font-bold'>Use Sunscreen</h3>
      <p>Protect skin from UV rays.</p>
    </div>

    <div className="p-6 shadow rounded-xl text-center bg-base-100">
      <h3 className='text-2xl font-bold'>Wear Sunglasses</h3>
      <p>Protect eyes from sunlight.</p>
    </div>

    <div className="p-6 shadow rounded-xl text-center bg-base-100">
      <h3 className='text-2xl font-bold'>Eat Fruits</h3>
      <p>Stay cool and healthy.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Tips;