'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form"


const Login= () => {

const handleGoogleLogin=async()=>{
  const data = await authClient.signIn.social({
    provider: "google",
  });
}

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
if(error){
    alert('not correct')
}
console.log(res,error)
    }
    return (

        <div className='min-h-screen flex flex-col items-center justify-center px-4 py-6 sm:py-10 bg-gradient-to-br from-sky-100 to-sky-50'>
    <div className='w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden'>
    <form action="" onSubmit={handleSubmit(handle)}>
        <fieldset className="fieldset bg-white border-0 rounded-0 w-full border-0 p-4 sm:p-6 md:p-8">
  <legend className="fieldset-legend font-bold text-xl sm:text-2xl text-center mb-6">Login</legend>

  <div className="space-y-4">
  <div>
  <label className="label text-sm sm:text-base">Email</label>
  <input type="email"  className="input input-bordered w-full text-sm sm:text-base" placeholder="your@email.com"
  {...register("email", { required: "Email is required" })} />
  {errors.email && <p className='text-error text-xs sm:text-sm mt-1'>{errors.email.message}</p>}
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

  <button type="submit" className="btn btn-neutral w-full mt-6 text-sm sm:text-base">Login</button>
</fieldset>
    </form>
    
    <div className="px-4 sm:px-6 md:px-8 py-4 text-center border-t">
    <p className="text-xs sm:text-sm">{`don't have a account ?`}<Link href={'/register'} className='text-red-600 font-semibold hover:underline'> Register</Link></p>
    </div>
    
    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6">
        <button onClick={handleGoogleLogin}
         className="btn bg-sky-300 hover:bg-sky-400 w-full text-black border-[#e5e5e5] text-sm sm:text-base">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
    </div>
    </div>
        </div>
    );
};

export default Login;