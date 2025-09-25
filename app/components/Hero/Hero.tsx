import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa' 
const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]'>
        <div className="flex flex-col justify-center w-[90%] sm:w-[80%] h-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                {/* text content */}
                <div>   
                    {/* <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white">
                        <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700
                         md:text-base sm:text-sm text-xl text-white">
                            News
                        </div>
                        <p className='text-xs sm:text-sm'>We have updated our terms and conditions</p>
                    </div> */}
                    <h1 className='text-2xl sm:text-4xl md:text-5xl my-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]'>
                        <span className='text-blue-700'>A</span>ssociation For <span className='text-blue-700'>T</span>omorrows <span className='text-blue-700'>C</span>hildren</h1>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt enim totam nam beatae quidem, velit alias, necessitatibus hic cum ex excepturi veniam, iste atque vitae et corrupti voluptatibus ullam error.</p>
                <div className="flex my-8 items-center space-x-4 ">
                    <button className='md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full '>Join Us Now</button>
                    <button className='flex items-center md:px-8 md:py-2.5 px-6 py-2 text-blue-700 font-semibold text-base border-1 border-blue-900 hover:bg-blue-100 transition-all duration-200 rounded-full '>
                       Follow us on Facebook </button>
                    
                </div>
                
                </div>
                {/* image content */}
                <div className='hidden lg:block'>
                    <Image className='rounded-3xl' src='/images/hero-image.jpg' alt='Kids learn in class room' width={700} height={700}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero