import React from "react";
import Image from "next/image";
import BlogCard from "./BlogCard";

import { useTranslations } from "next-intl";
const Blog = () => {
  const t = useTranslations("blog");
  const heading = t("heading");
  const services = [
    {
      id: t("items.0.id"),
      title: t("items.0.title"),
      text: [
        t("items.0.text0"),
        t("items.0.text1"),
        t("items.0.text2"),
        t("items.0.text3"),
        t("items.0.text4"),
      ],
      image: t("items.0.image"),
    },
    {
      id: t("items.1.id"),
      title: t("items.1.title"),
      text: [t("items.1.text0"), t("items.1.text1"), t("items.1.text2")],
      image: t("items.1.image"),
    },
    {
      id: t("items.2.id"),
      title: t("items.2.title"),
      text: [
        t("items.2.text0"),
        t("items.2.text1"),
        t("items.2.text2"),
        t("items.2.text3"),
      ],
      image: t("items.2.image"),
    },
  ];
  return (
    <div className="py-16">
      <h1 className="text-2xl md:text-3xl capitalize font-bold text-center">
        {heading}
      </h1>

      <div className="mt-2 w-[90%] mx-auto flex flex-col" id="activities">
        {services.map((service,index) => (
          <div key={service.id}>
            <BlogCard
            RightToLeft={index%2===0}
              image={service.image}
              title={service.title}
              description={service.text.join(" ")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
