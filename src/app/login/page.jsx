'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form"


const Login= () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const handle=async(data)=>{
       
        console.log(data)

        const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(res,error)
    }
    return (

        <div className='mx-auto bg-sky-100 flex flex-col items-center my-10 w-fit px-5 rounded-2xl'>
    <form action="" onSubmit={handleSubmit(handle)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend font-bold">Login</legend>

  <label className="label">Email</label>
  <input type="email"  className="input" placeholder="Email"
  {...register("email")} />

  <label className="label">Password</label>
  <input type="password"  className="input" placeholder="Password" 
    {...register("password", { required: "password field is required" })} />
    {
       errors.password && (
       <p className='text-red-600'>{errors.password.message}</p>)
    }

  <button className="btn btn-neutral mt-4">Login</button>
</fieldset>
    </form>
    <p>{`don't have a account ?`}<Link href={'/register'} className='text-red-700'>Register</Link></p>
        </div>
    );
};

export default Login;