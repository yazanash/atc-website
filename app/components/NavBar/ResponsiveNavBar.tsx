"use client";

import React, { useState } from "react";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
interface NavProps{
  dir?: "rtl"|'ltr'
}
const ResponsiveNavBar = ({dir='ltr'}:NavProps) => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => {
    setShowNav(true);
  };
  const handleNavHide = () => {
    setShowNav(false);
  };
  return (
    <div>
      <NavBar dir={dir} openNav={handleNavShow}></NavBar>
      <MobileNavBar dir={dir} showNav={showNav} closeNav={handleNavHide}></MobileNavBar>
    </div>
  );
};

export default ResponsiveNavBar;
