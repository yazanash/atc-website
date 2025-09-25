import React from "react";
import Image from "next/image";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  RightToLeft?: boolean;
}

const BlogCard = ({
  image,
  title,
  description,
  RightToLeft = false,
}: BlogCardProps) => {
  return (
    <div
      className={`rounded-2xl shadow-sm w-[95%] sm:w-[80%] bg-gray-50 mx-auto items-center flex flex-col ${
        RightToLeft ? " md:flex-row-reverse" : "md:flex-row"
      } p-2 my-3`}
    >
      <div>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-contain rounded-3xl"
        />
      </div>
      <div className="p-6">
        <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h1>
        <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem] max-w-[60%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
