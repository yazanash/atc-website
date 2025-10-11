import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const About = () => {
  const t = useTranslations("about");
  const title = t("heading");
  const subtitle = [t("text0"), t("text1"), t("text2"), t("text3")];
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <div className="pt-24 pb-16" id="about">
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <Image
            src="/images/about.jpeg"
            alt="About ATC"
            width={500}
            height={500}
            className="object-contain rounded-3xl"
          />
        </div>
        <div className="p-6">
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
            {subtitle.join(" ")}
          </p>
          {/* <ul className="mt-7 space-y-2 text-gray-800">
                    <li className="flex items-center font-semibold">
                        <FaCheckCircle className='text-sky-500 mr-2'/>
                        Check Number 1
                    </li>
                    <li className="flex items-center font-semibold">
                        <FaCheckCircle className='text-sky-500 mr-2'/>
                        Check Number 2
                    </li>
                    <li className="flex items-center font-semibold">
                        <FaCheckCircle className='text-sky-500 mr-2'/>
                        Check Number 3
                    </li>
                </ul> */}
          <button
            onClick={() =>
              window.open(
                "https://www.facebook.com/Tomorrow.children.ATC",
                "_blank"
              )
            }
            className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full mt-8 flex items-center"
          >
            {" "}
            {t("visit")}
            {dir === "ltr" ? (
              <FaArrowRight className="mx-2" />
            ) : (
              <FaArrowLeft className="mx-2" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
