import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'

const BackgroundHero = () => {
  return (
    <div className="relative w-full h-screen">
     
      <Image
        src="/images/hero-image.jpg"
        alt="Kids learn in classroom"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* طبقة الشادو */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* المحتوى */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span className="text-blue-400">A</span>ssociation For <span className="text-blue-400">T</span>omorrow's <span className="text-blue-400">C</span>hildren
        </h1>
        <p className="text-white max-w-2xl text-sm sm:text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt enim totam nam beatae quidem, velit alias, necessitatibus hic cum ex excepturi veniam, iste atque vitae et corrupti voluptatibus ullam error.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-800 transition rounded-full">
            Join Us Now
          </button>
          <button className="px-6 py-2 text-blue-200 font-semibold border border-blue-300 hover:bg-blue-100 hover:text-blue-800 transition rounded-full flex items-center gap-2">
            <FaFacebookF />
            Follow us on Facebook
          </button>
        </div>
      </div>
    </div>
  )
}

export default BackgroundHero
