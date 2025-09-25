'use client'
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
interface ActivityCardProps{
    title:string;
    image: string;
    description: string
}


const ActivityCard = ({title,image, description}:ActivityCardProps) => {
     const [showFull, setShowFull] = useState(false);

  const toggleShow = () => setShowFull(prev => !prev);
  const isLong = description.length > 100;
  const displayedText = showFull || !isLong ? description : description.slice(0, 100) + '...';
  return (

    <div>
        <Image src={image} alt={title} width={200} height={200} className='object-contain mx-auto rounded-2xl'></Image>
        <h1 className='text-center text-lg my-5 font-semibold text-gray-800'>
            {title}
        </h1>
        <p className='text-gray-600 font-medium text-sm mb-7 text-left'>{displayedText}</p>
        {isLong && (
        <button
          onClick={toggleShow}
          className="text-sky-600 font-semibold text-sm hover:underline cursor-pointer"
        >
          {showFull ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  )
}

export default ActivityCard