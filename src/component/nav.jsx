'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';
  import { authClient } from "@/lib/auth-client"


 const Nav = () => {

const { data: session,isPending } = authClient.useSession()
 const user=session?.user
console.log(user)
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
            <div className="navbar flex bg-base-100 shadow-sm px-4 sm:px-8 md:px-16 lg:px-20 mx-auto min-h-16">
  <div className="navbar-start flex-1">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-base-100">
     {
         nav.map((item, ind) => (
    <li key={ind} className='font-bold text-lg sm:text-xl'>
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
  { isPending?(<span className="loading loading-spinner text-info"></span>
)
  : user ? (<div className="navbar-end flex gap-3">
    <h1>hello, {user.name}</h1>
    <Image 
    src={user.image}
    alt="logo of the website" 
    width={55} height={55}
    className='rounded-full'
    />
    {/* <button className="font-bold text-3xl"><FaUser /></button> */}
    <button
className='btn btn-neutral font-bold' onClick={async()=> await authClient.signOut()}>Logout
  </button>
  </div>)
  :(    <Link href={'/login'} className='btn btn-neutral font-bold ml-80'>Login</Link>
)
  }

</div>
        </div>
    );
};

export default Nav;