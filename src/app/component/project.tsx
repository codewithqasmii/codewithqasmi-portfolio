"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Typewriter from 'typewriter-effect';


const Project = () => {
    return (
        <div className='-mt-32 bg-blue-200' id='project'>
            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-600">
                            My Projects
                        </h1>

                        <br className="hidden lg:inline-block" /> <br />
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-black font-mono">

                            <Typewriter
                                options={{
                                    strings: [
                                        'HTML & CSS',
                                        'Bootstrap',
                                        'Typescript',
                                        'Next Js',
                                        'Tailwind CSS',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>


                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
                        heard of them man bun deep jianbing selfies heirloom.
                    </p> */}
                    </div>
                    <div className="flex flex-wrap -mt-16">
                        {/*  project */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../../public/assests/project/facebook.jpg")}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    {/* <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Mini Calculator
                                    </h2> */}
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Facebook Login clone
                                    </h1>
                                    <p className="leading-relaxed">
                                        This the projet which i have created with the help of html, tailwind css and Next.js
                                    </p>
                                    <Link target='_blank' href={"https://github.com/codewithqasmii/facebook.git"}>
                                        <p className="leading-relaxed text-blue-500 hover:underline "> View code on Github..</p>
                                    </Link>
                                    <Link target='_blank' href={"https://facebook-eight-snowy.vercel.app/"}>
                                        <p className="leading-relaxed text-blue-500 hover:underline "> View Project ..</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/*  project */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../../public/assests/project/monuments.png")}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    {/* <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Monuments based Website
                                    </h2> */}
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Monuments
                                    </h1>
                                    <p className="leading-relaxed">
                                        This the projet which i have created with the help of htm, css and bootstrap.
                                    </p>
                                    <Link target='_blank' href={"https://github.com/codewithqasmii/monuments.git"}>
                                        <p className="leading-relaxed text-blue-500 hover:underline "> View code on github ..</p>
                                    </Link>
                                    <Link target='_blank' href={"https://monumentstauseef.web.app/"}>
                                        <p className="leading-relaxed text-blue-500 hover:underline "> View Project ..</p>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        {/*  project */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../../public/assests/project/number guessing.png")}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Game
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Number Guessing Game
                                    </h1>
                                    <p className="leading-relaxed">
                                        This the projet which i have created with the help of typescript
                                    </p>
                                    <Link target='_blank' href={"https://github.com/codewithqasmii/number_guessing_game.git"}>
                                        <p className="leading-relaxed text-blue-500 hover:underline "> View Project on Github..</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*  project */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../../public/assests/project/codewithqasmi.jpg")}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Atm
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Atm Machine
                                    </h1>
                                    <p className="leading-relaxed line-clamp-2">
                                        This the projet which i have created with the help of typescript
                                    </p>
                                    <Link target='_blank' href={"https://github.com/codewithqasmii/atm.git"}>
                                        <p className="leading-relaxed text-blue-500 hover:underline "> View Project on Github..</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*  project */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../../public/assests/project/calculator.jpg")}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Mini Calculator
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Calculator
                                    </h1>
                                    <p className="leading-relaxed">
                                        This the projet which i have created with the help of typescript
                                    </p>
                                    <Link target='_blank' href={"https://github.com/codewithqasmii/calculator.git"}>
                                        <p className="leading-relaxed text-blue-500 hover:underline "> View Project on Github..</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*  project */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../../public/assests/project/currency converter.png")}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Mini Exchane
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Currency Converter
                                    </h1>
                                    <p className="leading-relaxed">
                                        This the projet which i have created with the help of typescript
                                    </p>
                                    <Link target='_blank' href={"https://github.com/codewithqasmii/currency_converter.git"}>
                                        <p className="leading-relaxed text-blue-500 hover:underline "> View Project on Github..</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*  project */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../../public/assests/project/todo.png")}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        To-do
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Mini To-do
                                    </h1>
                                    <p className="leading-relaxed">
                                        This the projet which i have created with the help of typescript
                                    </p>
                                    <Link target='_blank' href={"https://github.com/codewithqasmii/todo_list.git"}>
                                        <p className="leading-relaxed text-blue-500 hover:underline "> View Project on Github..</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*  project */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../../public/assests/project/adventure game.png")}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Mini Adventure GAME
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Adventure Game
                                    </h1>
                                    <p className="leading-relaxed">
                                        This the projet which i have created with the help of typescript
                                    </p>
                                    <Link target='_blank' href={"https://github.com/codewithqasmii/adventure_game.git"}>
                                        <p className="leading-relaxed text-blue-500 hover:underline "> View Project on Github..</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/*  project */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={require("../../../public/assests/project/word counter.png")}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                                        Word Counter
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Word Counter Game
                                    </h1>
                                    <p className="leading-relaxed">
                                        This the projet which i have created with the help of typescript
                                    </p>
                                    <Link target='_blank' href={"https://github.com/codewithqasmii/word_counter.git"}>
                                        <p className="leading-relaxed text-blue-500 hover:underline "> View Project on Github..</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project