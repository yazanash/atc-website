import React from "react";
import Image from "next/image";
import {
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaFacebookSquare,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
const Footer = () => {
  const t = useTranslations("footer");
  return (
    <div className="bg-white py-10">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">

          <div className="flex flex-row items-center">
            <Image
              src="/images/atc-logo2.png"
              alt="Atc Logo"
              width={60}
              height={60}
            />
            <h1 className="text-xl md:text-xl font-bold">{t("title")}</h1>
          </div>
            </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {t("contact")}
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li className="flex items-center">
                <FaMapMarkedAlt className="mx-2" />
                
                {t("location")}
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mx-2" />+ (963) 994262919
              </li>
              <li className="flex items-center">
                <FaClock className="mx-2" />7 {t("days")} / 08:00AM - 04:00PM
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mx-2" />
                tomorrowchildren676@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {t("social")}
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li className="flex items-center">
                <FaFacebookSquare className="mx-2" />
              facebook.com/Tomorrow.children.ATC
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mx-2" />+ (963) 994262919
              </li>
              <li className="flex items-center">
                <FaTelegram className="mx-2" />+ (963) 994262919
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-t-gray-300 pt-8 flex items-center flex-col md:flex-row justify-between text-gray-600 text-sm ">
          <p className="text-center">Copyright &copy; ATC, {t("copyright")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
