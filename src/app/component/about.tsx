import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div id='about'>
            <section className="text-gray-600 body-font bg-blue-200">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-20 mt-50">
                        <Image
                            className="object-cover object-center rounded-full mx-auto w-[150px] h-[250] "
                            alt="hero"
                            src={require("../../../public/assests/picture/tauseef.jpg")}
                            width={300}
                            height={600}
                        />
                        <p className='text-center mt-6'>
                            A passionate Computer Science Student Programmer with ability
                            for designing and developing websites.

                        </p>
                    </div>
                        {/* <div className='w-[4px] h-[200px] bg-red-600'></div> */}

                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mx-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-600">
                            About Me
                        </h1>
                        
                        <p className="mb-5 leading-relaxed">
                            As a web developer, I thrive on turning ideas into interactive digital experiences. I command HTML, CSS, JavaScript, TypeScript, Next.js, React.js. Currently, I am pursuing Generative AI and Cloud Computing Engineering. When I am not coding, you all find me exploring the latest tech trends or lost in a good book. Lets connect and build something remarkable!
                        </p>
                        <div className="flex justify-center">
                            <Link target='_blank' href={"https://www.linkedin.com/in/tauseef-qasmi-336097303/"}>
                                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                    Hire Me
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default About