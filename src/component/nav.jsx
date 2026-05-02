import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUser } from "react-icons/fa";
import Navlink from './Navlink';


 const Nav = () => {
    const nav=[
        {
            path:'/',
            text:'Home'
        },
        {
            path:'/products',
            text:'Products'
        },
        {
            path:'/profile',
            text:'My Profile'
        },
      
    ]
    return (
        <div>
            <div className="navbar flex bg-base-100 shadow-sm px-20 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow bg-base-100">
     {
         nav.map((item, ind) => (
    <li key={ind} className='font-bold text-2xl'>
        <Navlink
              href={item.path}>
            {item.text}
            </Navlink> 
    </li>
        ))
     }
      </ul>
    </div>
  <div className='flex gap-2 btn btn-ghost' >
    <Image src="/logo.png" alt="logo of the website" width={55} height={55}/>
    <p className='font-bold text-2xl'>Sunnymart</p>
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-3.5">
  {
             nav.map((item, ind) => (
    <li key={ind} className=' text-[18px]'>
        <Navlink href={item.path}>
            {item.text}
        </Navlink>
    </li>
        ))
     }
    </ul>
  </div>
  <div className="navbar-end flex gap-3">
    <button className="font-bold text-3xl"><FaUser /></button>
    <Link href={'/login'} className='btn btn-neutral text-2xl font-bold'>Login</Link>
  </div>
</div>
        </div>
    );
};

export default Nav;