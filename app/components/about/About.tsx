import React from 'react'
import Image from 'next/image'
import { FaCheckCircle,FaArrowRight } from 'react-icons/fa'
const About = () => {
  return (
    <div className='pt-24 pb-16'>
        <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
                <Image src='/images/about.jpg' alt='About ATC' width={500} height={500}
                 className='object-contain rounded-3xl'/>
            </div>
            <div className='p-6'>
                <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>About ATC Association</h1>
                <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos vel voluptatum nam, ut neque qui laudantium necessitatibus iste facilis doloremque consectetur suscipit at iure optio? Quasi officia suscipit necessitatibus?
                </p>
                <ul className="mt-7 space-y-2 text-gray-800">
                    <li className="flex items-center font-semibold">
                        <FaCheckCircle className='text-sky-500 mr-2'/>
                        Check Number 1
                    </li>
                    <li className="flex items-center font-semibold">
                        <FaCheckCircle className='text-sky-500 mr-2'/>
                        Check Number 2
                    </li>
                    <li className="flex items-center font-semibold">
                        <FaCheckCircle className='text-sky-500 mr-2'/>
                        Check Number 3
                    </li>
                </ul>
                <button className='md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full mt-8 flex items-center'>Visit Our Facebook Page <FaArrowRight className='ml-2'/></button>

            </div>
        </div>
    </div>
  )
}

export default About