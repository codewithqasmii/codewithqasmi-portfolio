import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-black'>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image src={require("../../../public/assests/picture/qasmi logo.png")}
                            alt='codewithqasmi'
                            width={200}
                            height={200}
                            className='w-[150px]'
                        />
                        <span className="ml-3 text-xl text-red-600 font-bold">CODEWITHQASMI</span>
                    </a>
                    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-4">
                        © 2024 codewithqasmi
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link
                        target='_blank'
                        href={'https://www.linkedin.com/in/tauseef-qasmi-336097303/'} className="text-gray-500">
                        <FaLinkedin className='text-2xl hover:text-blue-600'/>

                        </Link>
                    </span>
                </div>
            </footer>

        </div>
    )
}

export default Footer