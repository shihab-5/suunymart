 import Image from 'next/image';
 import Link from 'next/link';
 import React from 'react';
 import { FaStar } from 'react-icons/fa';
const Products = async() => {

 
     const res =await fetch('http://localhost:3000/data.json',{cache :'no-store'})
     const products=await res.json()
     // console.log(name);
     
     return (
         <div className='py-10 container mx-auto bg-sky-50 flex flex-col gap-16'>
             <p className='text-6xl font-bold text-center'>All Products</p>
 
    <div className='flex flex-wrap gap-7 justify-around mb-9 mx-20'>
     {products.map((item) => (
   <div  className='p-5 rounded-2xl bg-base-100 flex flex-col gap-3 w-80' key={item.id}>
 
 <div className='relative w-full h-64'>
     <Image 
     src={item.image} 
     alt={item.name} 
     
     className=' object-cover' fill/>
     
 </div>
     <h2 className='text-[18px]'>{item.name}</h2>
     <div className='flex justify-between'>
        <p>${item.price}</p>
        <p className='flex gap-1.5 items-center'>{item.rating}<FaStar></FaStar> Rating</p>
     </div>
     <Link href={'/details'}>
     <button className='btn btn-outline btn-warning block'>View Details</button>
     </Link>
   </div>
 ))}
    </div>
         </div>
     );
 };
 

export default Products;