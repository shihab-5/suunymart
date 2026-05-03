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
        <button onClick={handleGoogleLogin}
         className="btn bg-sky-300 my-4 text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        </div>
    );
};

export default Login;