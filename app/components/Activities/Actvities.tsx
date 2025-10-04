import React from 'react'
import ActivityCard from './ActivityCard'
import { useTranslations } from 'next-intl';

const Actvities = () => {
  const t = useTranslations('services');
  const heading = t('heading');
  const services = [
    {
      id: t('items.0.id'),
      title: t('items.0.title'),
      text: [
        t('items.0.text0'),
        t('items.0.text1'),
        t('items.0.text2'),
        t('items.0.text3')
      ],
      image: t('items.0.image')
    },
    {
      id: t('items.1.id'),
      title: t('items.1.title'),
      text: [
       t('items.1.text0'),
        t('items.1.text1'),
        t('items.1.text2'),
        t('items.1.text3')
      ],
      image: t('items.1.image')
    },
     {
      id: t('items.2.id'),
      title: t('items.2.title'),
      text: [
       t('items.2.text0'),
        t('items.2.text1'),
        t('items.2.text2'),
        t('items.2.text3')
      ],
      image: t('items.2.image')
    },
     {
      id: t('items.3.id'),
      title: t('items.3.title'),
      text: [
       t('items.3.text0'),
        t('items.3.text1'),
        t('items.3.text2'),
        t('items.3.text3')
      ],
      image: t('items.3.image')
    }
  ];
  return (
    <div className='py-16 bg-sky-50' id="services">
        <h1 className=" text-2xl md:text-3xl capitalize font-bold text-center ">
            {heading}
        </h1>
        <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-12">
             {services.map((service) => (
               <div key={service.id}>
                <ActivityCard image={service.image} title={service.title} description={service.text.join(' ')}/>
               </div>
        ))}
        </div>
    </div>
  )
}

export default Actvities