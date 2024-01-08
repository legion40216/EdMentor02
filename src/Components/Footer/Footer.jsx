import React from 'react'
import { FaCircle } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer() {
  return (
    <div>
        <div className=' bg-gray-300 flex flex-col items-center w-full mt-20 md:mt-36 py-12'>
            <div className='  h-12 flex flex-row text-xl justify-center gap-1 md:gap-7 cursor-pointer'>
                  <div className=' bg-white h-10 w-10 flex items-center justify-center rounded-full border-2 hover:text-blue-600 hover:border-blue-600'><FaCircle/></div>
                  <div className=' bg-white h-10 w-10 flex items-center justify-center rounded-full border-2 hover:text-blue-600 hover:border-blue-600'><AiFillTwitterCircle/></div>
                  <div className=' bg-white h-10 w-10 flex items-center justify-center rounded-full border-2 hover:text-blue-600 hover:border-blue-600'><FaSquareInstagram/></div>
                  <div className=' bg-white h-10 w-10 flex items-center justify-center rounded-full border-2 hover:text-blue-600 hover:border-blue-600'><IoLogoYoutube/></div>
                  <div className=' bg-white h-10 w-10 flex items-center justify-center rounded-full border-2 hover:text-blue-600 hover:border-blue-600'><IoLogoLinkedin/></div>
            
            </div>

            <div className=' flex flex-col w-10/12 md:flex-row gap-4 mt-4'>
                <div className=' md:w-1/3  h-32 text-center md:text-left'>
                    <h1 className=' text-xl font-semibold'>Team EduMentor</h1>
                    <span>
                        EduMentor was fouded on 2012, now we have branches all over India.
                        We are providing quality education to all.
                    </span>
                    </div>
                <div className='   md:w-1/3  h-32 text-center'>
                    <h1 className=' text-xl font-semibold'>Quick Links</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Contact</li>
                    </ul>
                    </div>
                <div className=' md:w-1/3  h-32 text-center'>
                    <h1 className=' text-2xl font-semibold'>Useful Links</h1>
                    <ul>
                    <ul className=' text-xl'>
                        <li className=' text-black hover:text-opacity-60'>Hero</li>
                        <li className=' text-black hover:text-opacity-60'>Materials</li>
                        <li className=' text-black hover:text-opacity-60'>Testimonials</li>
                        <li className=' text-black hover:text-opacity-60'>Status</li>
                    </ul>
                    </ul>
                    </div>

            </div>
            <div className=' w-full text-center font-semibold mt-12'>© Copyrights. All rights reserved. Supnits Classes</div>
             
        </div>
    </div>
  )
}

export default Footer