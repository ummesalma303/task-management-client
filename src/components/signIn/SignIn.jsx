// import React from 'react'

import Swal from "sweetalert2";
import SocialLogin from "../socialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

export default function SignIn() {
  const navigate = useNavigate()
  const {loginUser} = useContext(AuthContext);
  // console.log(createNewUser)
  const {
      register,
      formState: { errors },
      // reset,
      handleSubmit,
    } = useForm()
  
    const onSubmit = (data) => {
      // console.log(data)
      
     
      loginUser(data?.email,data?.password)
      .then(res=>{
          console.log(res)
          Swal.fire({
            title: "Success",
            text: "user successfully Sign In",
            icon: "success",
            // timer: 1000
          });
          navigate('/')
          // reset
      })
      .catch(err=>{
        Swal.fire({
          title: "Error",
          text:`${err?.message}`,
          icon: "success",
          // timer: 1000
        });
        console.log(err)
      })

  }
  
  return (
      <div className='h-screen flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover'>
        <h2 className='text-2xl font-semibold mb-6'>Please login yor account</h2> 
<div className="w-11/12 md:w-[50%] lg:w-1/3 border-2 p-5 rounded-lg backdrop-blur-md bg-white/30">
<form className='grid gap-2' onSubmit={handleSubmit(onSubmit)}>
   {/* input-3 */}
   <div className="">
   <label>Email:</label>
    <Input type="email" placeholder="Email" {...register("email", { required: true })}/>
    {errors.email && <span className='text-red-500'>This field is required</span>} 
   </div>
   {/* input-4 */}
   <div className="py-1">
   <label>Password:</label>
    <Input type="Password" placeholder="Password" {...register("password", { required: true })}/>
    {errors.email && <span className='text-red-500'>This field is required</span>} 
   <p className='pt-1 pb-3'>If you are a new user.please <Link to='/register'><span className='hover:underline text-green-600'>Register</span></Link></p>
   </div>
  
    <input className='bg-black px-4 py-2 rounded-md text-white w-full mb-3' type="submit" value='Login' />
  </form>
  <div className="divide-x-2 ">
  <SocialLogin></SocialLogin>
  </div>
</div>
      </div>
  )
}
