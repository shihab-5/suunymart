import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const Details = async({params}) => {
    const {id} = await params;

    const res = await fetch('http://localhost:3000/data.json', {cache: 'no-store'});
    const products = await res.json();
    const product = products.find(p => p.id === parseInt(id));
    
    if (!product) {
        return <div className='container mx-auto py-10'>Product not found</div>;
    }

    return (
        <div className='container mx-auto py-10 bg-sky-50 px-20'>
            <div className='flex gap-8'>
                <div className='flex-1'>
                    <div className='relative w-full h-96'>
                        <Image 
                            src={product.image} 
                            alt={product.name}
                            className='object-cover'
                            fill
                        />
                    </div>
                </div>
                <div className='flex-1'>
                    <h1 className='text-4xl font-bold mb-4'>{product.name}</h1>
                    <p className='text-xl text-gray-600 mb-2'>Brand: {product.brand}</p>
                    <p className='text-2xl font-bold mb-4 bg-amber-300 py-1 px-3 w-fit rounded-4xl'>${product.price}</p>
                    
                    <div className='flex items-center gap-2 mb-4'>
                        <FaStar className='text-yellow-400' />
                        <span className='text-lg'>{product.rating} Rating</span>
                    </div>
                    
                    <p className='text-gray-700 mb-4'>{product.description}</p>
                    
                    <div className='mb-4'>
                        <p className='text-lg'>
                            <span className='font-bold'>Category:</span> {product.category}
                        </p>
                        <p className='text-lg'>
                            <span className='font-bold'>Stock:</span> {product.stock}
                        </p>
                    </div>
                    
                    <button className='btn btn-warning btn-lg w-full'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;