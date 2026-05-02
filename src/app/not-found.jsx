'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter(); 

  return (
    <div className='min-h-screen flex items-center justify-center bg-amber-50'>
      <div className='text-center max-w-md px-4'>

        
        <h1 className='text-9xl font-bold text-orange-500 tracking-tighter'>404</h1>
        <div className='w-16 h-1 bg-yellow-400 rounded mx-auto my-4'></div>

        <h2 className='text-2xl font-semibold text-gray-800 mb-3'>
            Oops! Page Melted Away
        </h2>
        <p className='text-gray-500 mb-8'>
          Looks like this page got lost in the summer heat. 
          Don't worry, our cool products are still here!
        </p>

        <div className='flex gap-3 justify-center'>
          <Link
            href='/'
            className='btn bg-orange-500 hover:bg-orange-600 text-white border-none rounded-lg px-6'
          >
            Home
          </Link>
          <button
            onClick={() => router.back()} 
            className='btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg px-6'
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  )
};

export default NotFound;