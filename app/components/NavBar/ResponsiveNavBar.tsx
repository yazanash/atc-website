"use client";

import React, { useState } from "react";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
const ResponsiveNavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => {
    setShowNav(true);
  };
  const handleNavHide = () => {
    setShowNav(false);
  };
  return (
    <div>
      <NavBar openNav={handleNavShow}></NavBar>
      <MobileNavBar showNav={showNav} closeNav={handleNavHide}></MobileNavBar>
    </div>
  );
};

export default ResponsiveNavBar;
