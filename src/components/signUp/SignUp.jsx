// import React from 'react'
import { Input } from '@/components/ui/input';
import { AuthContext } from '@/providers/AuthProvider';
import { useContext } from 'react';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router';
// import { Link} from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate()
    const {newUser,updateUserProfile} = useContext(AuthContext)
    const {
        register,
        formState: { errors },
        // reset,
        handleSubmit,
      } = useForm()

      const onSubmit = (data) => {
        newUser(data.email,data.password)
        .then(res=>{
            console.log(res)
            const updateData = {
                displayName : data?.name,
                photoURL: data?.photo
            }
            updateUserProfile(updateData)
        navigate('/')
        })
        .catch(err=>console.log(err))
        console.log(data)
      }
  return (
    <div className='py-24 flex flex-col justify-center items-center '>
    <h2 className='text-2xl font-semibold mb-6'>Please register yor account</h2>
    
    <div className="w-11/12 md:w-[60%] border-2 p-5 rounded-lg backdrop-blur-md bg-white/80 border-black">
   
    <form className='grid gap-4  ' onSubmit={handleSubmit(onSubmit)}>
{/* input-1 */}
<div>
<label>Name</label>
{/* <label>Email:</label> */}
<Input type="text" placeholder="Name" required {...register("name", { required: true })}/>
{errors.name && <span className='text-red-500'>This field is required</span>}
</div>
{/* input-2 */}
<div className="">
<label>PhotoURL:</label>
<Input type="url" placeholder="PhotoURL" {...register("photo", { required: true })}/>
{errors.email && <span className='text-red-500'>This field is required</span>} 
</div>
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
</div>



<p className='pt-1 pb-3'>If You have an account.please <Link to='/signIn'><span className='hover:underline text-red-300'>Sign In</span></Link></p>
<input className='bg-black px-4 py-1 w-full rounded-md text-white mb-3' type="submit" value='register' />
</form>
<div className="divide-x-2 ">
</div>
    </div>

</div>
  )
}
