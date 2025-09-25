import React from 'react';
import Hero from './Hero/Hero';
import BackgroundHero from './Hero/BackgroundHero';
import Actvities from './Activities/Actvities';
import About from './about/About';
import Blog from './Blog/Blog';
const Home = () => {
  return (
    <div className='overflow-hidden'>
      <BackgroundHero/>
        <About/>
      <Actvities/>
      <Blog/>
    </div>
  )
}

export default Home