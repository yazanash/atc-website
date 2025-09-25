import React from 'react'
import Image from 'next/image'
import { FaMapMarkedAlt,FaPhoneAlt,FaClock,FaEnvelope, FaFacebookSquare,FaWhatsapp, FaTelegram } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='bg-white py-10'>
        <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8 '>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    {/* <h1 className="text-xl md:text-2xl font-bold">
                        <span className='text-3xl md:text-4xl text-blue-600'>ATC</span>
                            Association
                    </h1> */}
                     <Image src='/images/atc-logo2.png' alt='Atc Logo' width={60} height={60}/>
                    <p className='mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-800'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quidem!</p>
                </div>
                <div>
                    <h3 className='text-lg font-semibold text-gray-800'> 
                        Contact Information
                    </h3>
                    <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
                        <li className='flex items-center'> 
                            <FaMapMarkedAlt className='mr-2'/>
                            AS-Swayda'a City, Syria 
                        </li>
                        <li className='flex items-center'> 
                            <FaPhoneAlt className='mr-2'/>
                            + (963) - 999 999 999
                        </li>
                        <li className='flex items-center'> 
                            <FaClock className='mr-2'/>
                            7 Days / 08:00AM - 04:00PM
                        </li>
                         <li className='flex items-center'> 
                            <FaEnvelope className='mr-2'/>
                            email@example.com
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-semibold text-gray-800'> 
                        Social Media
                    </h3>
                    <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
                        <li className='flex items-center'> 
                            <FaFacebookSquare className='mr-2'/>
                            facebook.com/AtcPage
                        </li>
                        <li className='flex items-center'> 
                            <FaWhatsapp className='mr-2'/>
                            + (963) - 999 999 999
                        </li>
                        <li className='flex items-center'> 
                            <FaTelegram className='mr-2'/>
                             + (963) - 999 999 999
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className='mt-8 border-t border-t-gray-300 pt-8 flex items-center flex-col md:flex-row justify-between text-gray-600 text-sm '>
                <p className='text-center'>
                    Copyright &copy; ATC, All rights reserved
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer