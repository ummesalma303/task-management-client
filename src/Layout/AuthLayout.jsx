import Banner from '@/components/banner/Banner'
import { Button } from '@/components/ui/button'
// import React from 'react'
import { NavLink } from 'react-router'

export default function AuthLayout() {
  return (
    <div>

        <nav className="bg-gray-300 py-3">
        <div className="flex justify-between items-center w-11/12 mx-auto">
      <h2 className="text-2xl font-semibold">Task Management</h2>
      <div className="space-x-2">
      <NavLink to='/signIn'><Button>Sign In</Button></NavLink>
      <NavLink to='/signUp'><Button>Sign Up</Button></NavLink>
      {/* <Button>Sign Out</Button> */}
      </div>
        </div>
    </nav>

    <Banner></Banner>
    </div>
  )
}
