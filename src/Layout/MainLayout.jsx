// import React from 'react'

import NavBar from "@/sheared/NavBar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}
