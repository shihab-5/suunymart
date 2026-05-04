'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const handle= async(data)=>{
       
        console.log(data)
        const {name,email,image,password}=data

        const {data:res,error}=await authClient.signUp.email({
        email:email, // user email address
        password:password, // user password -> min 8 characters by default
        name:name, // user display name
        image:image,
        callbackURL: "/" // A URL to redirect to after the user verifies their email (optional) 
        })
        console.log(res,error)
        if(error){
            alert(error.message || 'Registration failed')
        } else {
            alert('Registration successful! Redirecting to login...')
            router.push('/')
        }
    }
    return (

        <div className='min-h-screen flex flex-col items-center justify-center px-4 py-6 sm:py-10 bg-gradient-to-br from-sky-100 to-sky-50'>
    <div className='w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden'>
    <form action="" onSubmit={handleSubmit(handle)}>
        <fieldset className="fieldset bg-white border-0 rounded-0 w-full border-0 p-4 sm:p-6 md:p-8">
  <legend className="fieldset-legend font-bold text-xl sm:text-2xl text-center mb-6">Register</legend>

  <div className="space-y-4">
  <div>
  <label className="label text-sm sm:text-base">Name</label>
  <input type="text"  className="input input-bordered w-full text-sm sm:text-base" placeholder="Your Name"
  {...register("name", { required: "name field is required" })} />
  {errors.name && (
     <p className='text-error text-xs sm:text-sm mt-1'>{errors.name.message}</p>)
  }
  </div>

  <div>
  <label className="label text-sm sm:text-base">Email</label>
  <input type="email"  className="input input-bordered w-full text-sm sm:text-base" placeholder="your@email.com"
  {...register("email", { required: "email field is required" })} />
  {errors.email && (
     <p className='text-error text-xs sm:text-sm mt-1'>{errors.email.message}</p>)
  }
  </div>

  <div>
  <label className="label text-sm sm:text-base">Image URL</label>
  <input type="url"  className="input input-bordered w-full text-sm sm:text-base" placeholder="https://..." 
    {...register("image", { required: "url field is required" })} />
    {errors.image && (
       <p className='text-error text-xs sm:text-sm mt-1'>{errors.image.message}</p>)
    }
  </div>

  <div>
  <label className="label text-sm sm:text-base">Password</label>
  <input type="password"  className="input input-bordered w-full text-sm sm:text-base" placeholder="••••••••" 
    {...register("password", { required: "password field is required" })} />
    {errors.password && (
       <p className='text-error text-xs sm:text-sm mt-1'>{errors.password.message}</p>)
    }
  </div>
  </div>

    <button type="submit" className="btn btn-neutral w-full mt-6 text-sm sm:text-base">Register</button>
</fieldset>
    </form>
    
    <div className="px-4 sm:px-6 md:px-8 py-4 text-center border-t">
    <p className="text-xs sm:text-sm">Already have an account?<Link href={'/login'} className='text-blue-600 font-semibold hover:underline ml-2'> Login</Link></p>
    </div>
    </div>
        </div>
    );
};

export default Register;