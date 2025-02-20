// import React from 'react'
import bannerImg from '../../assets/banner.jpg'
export default function Banner() {
  return (
    <div className="h-screen bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url(${bannerImg})` }}>

<div className="bg-[#00000042] w-full h-full flex justify-center items-center">
        {/* <div className=""> */}
        <div className="w-11/12 md:w-1/2 mx-auto text-center text-white space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold">
          Simplify Tasks, Boost Productivity!
          </h2>
         
        </div>
       
      </div>

    </div>
  )
}
