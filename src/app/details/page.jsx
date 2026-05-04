// import React from 'react';
// import Image from 'next/image';
// import { FaStar } from 'react-icons/fa';
// import { authClient } from '@/lib/auth-client';
// import Link from 'next/link';

// const Details = async({params}) => {
//     const {id} = await params;

//     const res = await fetch('https://suunymart-orpin.vercel.app/data.json', {cache: 'no-store'});
//     const products = await res.json();
//     const product = products.find(p => p.id === parseInt(id));
    
//     if (!product) {
//         return <div className='container mx-auto py-10 px-4'>Product not found</div>;
//     }
//     // const { data: session,isPending } = authClient.useSession()
//     //  const user=session?.user

//     return (
//         { isPending?(<span className="loading loading-spinner text-info"></span>
// )
//   : user ?
//        (
//          <div className='min-h-screen py-6 sm:py-8 md:py-10 bg-sky-50 px-4 sm:px-6 md:px-8 lg:px-20'>
//             <div className='max-w-6xl mx-auto'>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12'>
//                 <div className='flex justify-center md:justify-start'>
//                     <div className='relative w-full max-w-sm h-64 sm:h-80 md:h-96'>
//                         <Image 
//                             src={product.image} 
//                             alt={product.name}
//                             className='object-cover'
//                             fill
//                         />
//                     </div>
//                 </div>
//                 <div className='flex flex-col justify-start'>
//                     <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4'>{product.name}</h1>
//                     <p className='text-base sm:text-lg md:text-xl text-gray-600 mb-2 sm:mb-3'>Brand: <span className='font-semibold'>{product.brand}</span></p>
//                     <p className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 bg-amber-300 py-1 px-3 w-fit rounded-full text-black'>${product.price}</p>
                    
//                     <div className='flex items-center gap-2 mb-4 sm:mb-6'>
//                         <FaStar className='text-yellow-400' />
//                         <span className='text-base sm:text-lg font-semibold'>{product.rating} Stars</span>
//                     </div>
                    
//                     <p className='text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed'>{product.description}</p>
                    
//                     <div className='mb-6 sm:mb-8 space-y-2 sm:space-y-3'>
//                         <p className='text-sm sm:text-base md:text-lg'>
//                             <span className='font-bold'>Category:</span> <span className='text-gray-600'>{product.category}</span>
//                         </p>
//                         <p className='text-sm sm:text-base md:text-lg'>
//                             <span className='font-bold'>Stock:</span> <span className={`font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>{product.stock > 0 ? `${product.stock} Available` : 'Out of Stock'}</span>
//                         </p>
//                     </div>
                    
//                     <button className='btn btn-warning btn-sm sm:btn-md md:btn-lg w-full'>Add to Cart</button>
//                 </div>
//             </div>
//             </div>
//         </div>
//        ):(
//         <Link href={'/login'}></Link>
//        )
//     );
// };

// export default Details;