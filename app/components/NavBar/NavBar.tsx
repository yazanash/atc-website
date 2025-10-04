"use client";
import React, { useEffect, useState } from "react";
import { NavLinks } from "@/app/constants/NavBarLinks";
import Link from "next/link";
import { HiBars3BottomLeft, HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
interface NavProps {
  openNav: () => void;
   dir?: "rtl" | "ltr";
}

const NavBar = ({ openNav, dir = "ltr" }: NavProps) => {
  const t = useTranslations("nav_items");

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <div
      className={`fixed bg-white shadow-md  w-full transition-all duration-200 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* <h1 className="text-xl md:text-2xl font-bold">
          <span className='text-3xl md:text-4xl text-blue-600'>ATC</span>
            Association
          </h1> */}
        <Image
          src="/images/atc-logo2.png"
          alt="Atc Logo"
          width={60}
          height={60}
        />
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <span className="nav__link">{t(`${link.label}`)}</span>
              </Link>
            );
          })}
          
        </div>
        <div className="flex items-center space-x-4">
          {/* <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full ">
           {t(`join`)}
          </button> */}
              <LanguageSwitcher/>
          {
            dir==='ltr'?
            <HiBars3BottomRight
            onClick={openNav} direction={dir}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
          : <HiBars3BottomLeft
            onClick={openNav} direction={dir}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
          }
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
