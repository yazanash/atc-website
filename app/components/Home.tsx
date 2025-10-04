"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import BackgroundHero from "./Hero/BackgroundHero";
import Actvities from "./Activities/Actvities";
import About from "./about/About";
import Blog from "./Blog/Blog";
// import Aos from 'aos';
// import 'aos/dist/aos.css';

const Home = () => {
 
  // useEffect(()=>{
  //   const initAos = async ()=>{
  //     await import('aos');
  //     Aos.init({
  //       duration: 1000,
  //       easing:'ease',
  //       once:true,
  //       anchorPlacement:'top-bottom'

  //     })
  //     initAos();
  //   }
  // },[])

  return (
    <div className="overflow-hidden">
      <BackgroundHero/>
      <About />
      <Actvities />
      <Blog />
    </div>
  );
};

export default Home;
