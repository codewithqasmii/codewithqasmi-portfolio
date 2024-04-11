"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-blue-200">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className=" mx-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
         <h3 className=''>Welcome</h3>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-red-600 font-">
             Hi! I am Tauseef Qasmi
             </h1>
             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black font-mono">
              
            <Typewriter
              options={{
                strings: [
                  // 'I am Tauseef Qasmi',
                  'Frontend Web Developer',
                  'Problem Solver',
                ],
                autoStart: true,
                loop: true,
              }}
            />

          </h1>
          {/* <div className='w-[250px] h-[3px] bg-red-600'></div> */}
          <p className="mb-8 leading-relaxed">
            A passionate Computer Science Student Programmer with ability
            for designing and developing websites.

          </p>
          <div className="flex justify-center">
            <Link href={"#contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center mx-auto w-[24rem] rounded-lg"
            alt="Tauseef"
            width={300}
            height={300}
            src={require("../../../public/assests/picture/qasmi logo.png")}
          />
        </div>
      </div>
    </section>

  )
}

export default Hero