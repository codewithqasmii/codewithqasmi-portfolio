import React from 'react'
import { FaRegCheckSquare } from "react-icons/fa";


const Skill = () => {
    return (
        <div id='skills' className='bg-blue-200'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-600">
                            My Skills
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4 -mt-[2rem]">
                        {/* skill */}
                        <div className="p-4 w-[100%] md:w-1/2">
                            <div className="flex rounded-lg h-full p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        <FaRegCheckSquare className='text-2xl font-bold' />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        HTML
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className='relative h-1 w-full bg-red-600 rounded-xl'>
                                        <div className='absolute bg-blue-600 h-1 rounded-xl w-[100%]'></div>
                                    </div>
                                    <p className='font-bold text-blue-600 text-right'>100%</p>
                                </div>
                            </div>
                        </div>
                        {/* skill */}
                        <div className="p-4 w-[100%] md:w-1/2">
                            <div className="flex rounded-lg h-full p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        <FaRegCheckSquare className='text-2xl font-bold' />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        CSS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className='relative h-1 w-full bg-red-600 rounded-xl'>
                                        <div className='absolute bg-blue-600 h-1 rounded-xl w-[95%]'></div>
                                    </div>
                                    <p className='font-bold text-blue-600 text-right'>95%</p>
                                </div>
                            </div>
                        </div>
                        {/* skill */}
                        <div className="p-4 w-[100%] md:w-1/2">
                            <div className="flex rounded-lg h-full p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        <FaRegCheckSquare className='text-2xl font-bold' />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        Javascript/Typescript
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className='relative h-1 w-full bg-red-600 rounded-xl'>
                                        <div className='absolute bg-blue-600 h-1 rounded-xl w-[50%]'></div>
                                    </div>
                                    <p className='font-bold text-blue-600 text-right'>50%</p>
                                </div>
                            </div>
                        </div>
                        {/* skill */}
                        <div className="p-4 w-[100%] md:w-1/2 mb-10" >
                            <div className="flex rounded-lg h-full p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                                        <FaRegCheckSquare className='text-2xl font-bold' />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        NEXT JS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className='relative h-1 w-full bg-red-600 rounded-xl'>
                                        <div className='absolute bg-blue-600 h-1 rounded-xl w-[50%]'></div>
                                    </div>
                                    <p className='font-bold text-blue-600 text-right'>50%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skill