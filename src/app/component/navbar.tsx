import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className='bg-black z-50 sticky top-0'>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={require("../../../public/assests/picture/qasmi logo.png")}
                            alt='codewithqasmi'
                            width={200}
                            height={200}
                            className='w-[150px]'
                        />
                        {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-600"> */}

                            <span className="ml-3 text-xl text-red-600 font-medium">CODEWITHQASMI</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
                        <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
                        <Link href={"#about"} className="mr-5 hover:text-blue-600">About</Link>
                        <Link href={"#skills"} className="mr-5 hover:text-blue-600">Skils</Link>
                        <Link href={"#project"} className="mr-5 hover:text-blue-600">Projects</Link>
                        <Link href={"#contact"} className="mr-5 hover:text-blue-600">Contact</Link>
                    </nav>
                    <a href="/assests/cv/cv.pdf">
                        <button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0 m-4">
                            Download CV
                            <FaCloudDownloadAlt className='text-xl ml-3 text-blue-800 hover::blue-500' />
                        </button>
                    </a>
                </div>
            </header>

        </div>
    )
}

export default Navbar