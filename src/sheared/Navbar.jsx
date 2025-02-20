// import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
 
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/providers/AuthProvider"
import { useContext } from "react"

// import { Button } from "@/components/ui/button";
// import { NavLink } from "react-router";

export default function NavBar() {
  const {user, handleLogout} = useContext(AuthContext);
  console.log(user)
  return (
    <nav className="bg-gray-300 py-3">
        <div className="flex justify-between items-center w-11/12 mx-auto">
      <h2 className="text-2xl font-semibold">Task Management</h2>
      {/* <div className="space-x-2">
      <NavLink to='/signIn'><Button>Sign In</Button></NavLink>
      <NavLink to='/signUp'><Button>Sign Up</Button></NavLink>
      <Button>Sign Out</Button>
      </div> */}
      {
        user?.email&& <div className="flex space-x-2"><Avatar>
        <AvatarImage src={user?.photoURL} alt="@shadcn" />
        <AvatarFallback>NA</AvatarFallback>
      </Avatar><Button onClick={handleLogout}>Sign Out</Button></div>
      }
        </div>
    </nav>
  )
}
