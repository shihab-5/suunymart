import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaStar } from 'react-icons/fa';

const TopBrands = () => {
    const brands = [
  {
    name: "Nike",
    logo: "https://cdn.simpleicons.org/nike"
  },
  {
    name: "Adidas",
    logo: "https://cdn.simpleicons.org/adidas"
  },
  {
    name: "Puma",
    logo: "https://cdn.simpleicons.org/puma"
  },
  {
    name: "H&M",
    logo: "https://cdn.simpleicons.org/h&m"
  },
  {
    name: "Zara",
    logo: "https://cdn.simpleicons.org/zara"
  },
  {
    name: "RayBan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ray-Ban_logo.svg"
  }
];
    return (
        <div className='flex flex-col bg-base-100 pb-4 sm:pb-6 md:pb-8 mx-4 sm:mx-6 md:mx-8 lg:mx-20 py-3 rounded-2xl'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold justify-center text-center mb-6 sm:mb-8 md:mb-10 flex gap-1">
              Top brands <span className='text-amber-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl'><FaStar></FaStar></span>
            </h1>
       <Marquee  pauseOnHover={true} speed={40}>
            {brands.map((brand, ind) => (
          <div key={ind} className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 bg-base-100">
            <p className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{brand.name}</p>
          </div>
        ))}
       </Marquee>
    
        </div>
    );
};

export default TopBrands;