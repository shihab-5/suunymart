//  'use client'
 import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
 import Link from 'next/link';
 import React from 'react';
 import { FaStar } from 'react-icons/fa';
const Products = async() => {

 
     const res =await fetch('https://suunymart-orpin.vercel.app/data.json',{cache :'no-store'})
     const products=await res.json()
     // console.log(name);

    const session = await auth.api.getSession({
           headers: await headers()
       })
     
     return (
         <div className='py-6 sm:py-10 px-4 sm:px-6 md:px-8 bg-sky-50 flex flex-col gap-8 sm:gap-12 md:gap-16'>
             <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center'>All Products</p>
 
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-7 w-full max-w-7xl mx-auto'>
     {products.map((item) => (
   <div  className='p-4 sm:p-5 rounded-2xl bg-base-100 flex flex-col gap-3 w-full' key={item.id}>
 
 <div className='relative w-full h-48 sm:h-56 md:h-64'>
     <Image 
     src={item.image} 
     alt={item.name} 
     
     className='object-cover' fill/>
     
 </div>
     <h2 className='text-sm sm:text-base md:text-lg font-semibold line-clamp-2'>{item.name}</h2>
     <div className='flex justify-between items-center text-sm sm:text-base'>
        <p className='font-bold'>${item.price}</p>
        <p className='flex gap-1 sm:gap-1.5 items-center text-xs sm:text-sm'>{item.rating}<FaStar></FaStar> Rating</p>
     </div>
       { 
    //    isPending?(<span className="loading loading-spinner text-info"></span>)
   session ?(
      <Link href={`/products/${item.id}`}>
     <button className='btn btn-outline btn-warning btn-sm sm:btn-md block w-full'>View Details</button>
     </Link> 
  ):(
    <Link href={`/login`}>
     <button className='btn btn-outline btn-warning btn-sm sm:btn-md block w-full'>View Details</button>
     </Link> 
  )
}
  
   </div>
 ))}
    </div>
         </div>
     );
 };
 

export default Products;