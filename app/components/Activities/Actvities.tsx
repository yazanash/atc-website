import React from 'react'
import ActivityCard from './ActivityCard'
const Actvities = () => {
  return (
    <div className='py-16 bg-sky-50'>
        <h1 className=" text-2xl md:text-3xl capitalize font-bold text-center ">
            Our Activities
        </h1>
        <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-12">
            <div>
                <ActivityCard image='/images/edu-aid.jpg' title='Children Education' description='A child education initiative is a community-driven effort that aims to provide accessible and inclusive learning opportunities for children especially in underserved or crisis-affected areas it focuses on nurturing foundational skills like reading writing and critical thinking through interactive and culturally relevant methods often combining traditional teaching with digital tools and emotional support to create a safe and empowering environment for young learners the initiative seeks to build a generation equipped with knowledge resilience and hope for a better future'/>
               </div>
               <div>
                 <ActivityCard image='/images/food-aid.jpg' title='Food Aid' description='A relief support initiative focuses on delivering essential aid to vulnerable communities especially during crises or displacement it provides food water shelter and medical supplies to families in need aiming to restore dignity and stability through coordinated humanitarian efforts the initiative often works with local partners to ensure rapid response and sustainable impact reaching children women and the elderly with life-saving resources and emotional support to help them survive and recover from hardship'/>
               
               </div>
               <div>
                 <ActivityCard image='/images/medical-aid.jpg' title='Medical Aid' description='A medical support initiative provides essential healthcare services to vulnerable populations especially in areas affected by conflict poverty or displacement it focuses on delivering free medical consultations treatments and medications while also offering psychological care and health education the initiative often collaborates with local clinics and humanitarian organizations to ensure access to life-saving services and promote long-term well-being for children families and the elderly in underserved communities'/>
            
               </div>
               <div>
                <ActivityCard image='/images/psycho-aid.jpg' title='Psychological aid' description='A psychosocial support initiative focuses on helping individuals especially children and families cope with emotional stress and trauma caused by conflict displacement or hardship it provides safe spaces for expression and healing through structured activities counseling and community engagement the initiative aims to strengthen resilience restore a sense of normalcy and promote mental well-being by addressing both psychological and social needs in a compassionate and culturally sensitive way'/>

               </div>
        </div>
    </div>
  )
}

export default Actvities