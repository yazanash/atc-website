import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { useTranslations } from "next-intl";
const BackgroundHero = () => {
  const t = useTranslations("hero");
  const title = t("title");
  const subtitle = [
    t("subtitle0"),
    t("subtitle1"),
    t("subtitle2"),
    t("subtitle3"),
  ];
  return (
    <div className="relative w-full h-screen" id="home">
      <Image
        src="/images/hero-image.jpg"
        alt="Kids learn in classroom"
        fill
        className="z-0 object-cover"
        priority
      />

      {/* طبقة الشادو */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* المحتوى */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          {title}
        </h1>

        <p className="text-white max-w-2xl text-lg sm:text-base mb-8 leading-loose">
          {subtitle.join(' ')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-800 transition rounded-full">
            {t("join")}
          </button>
          <button className="px-6 py-2 text-blue-200 font-semibold border border-blue-300 hover:bg-blue-100 hover:text-blue-800 transition rounded-full flex items-center gap-2">
            <FaFacebookF />
             {t("follow")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundHero;
