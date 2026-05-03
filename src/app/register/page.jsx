'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
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
            alert('already exist')
        }
    }
    return (

        <div className='mx-auto bg-sky-100 flex flex-col items-center my-10 w-fit px-5 rounded-2xl'>
    <form action="" onSubmit={handleSubmit(handle)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend font-bold">Register</legend>

  <label className="label">Name</label>
  <input type="text"  className="input" placeholder="Name"
  {...register("name")} />

  <label className="label">Email</label>
  <input type="email"  className="input" placeholder="Email"
  {...register("email")} />

  <label className="label">Image</label>
  <input type="url"  className="input" placeholder="image url" 
    {...register("image", { required: "url field is required" })} />
    {
       errors.password && (
       <p className='text-red-600'>{errors.image.message}</p>)
    }

  <label className="label">Password</label>
  <input type="password"  className="input" placeholder="Password" 
    {...register("password", { required: "password field is required" })} />
    {
       errors.password && (
       <p className='text-red-600'>{errors.password.message}</p>)
    }

    <Link href={'/login'}>  <button className="btn btn-neutral mt-4">Register</button>
</Link>
</fieldset>
    </form>
        </div>
    );
};

export default Register;