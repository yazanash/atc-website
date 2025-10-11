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
      className="grid rounded-2xl shadow-sm w-[95%] sm:w-[80%] bg-gray-50 mx-auto p-2 my-3
        grid-cols-1 md:grid-cols-2 gap-4 items-center"
    >
      <div className={`w-full h-[300px] relative ${RightToLeft ? "md:order-2" : "md:order-1"}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-3xl object-cover"
        />
      </div>
      <div className={`p-4 ${RightToLeft ? "md:order-1 text-right" : "md:order-2"}`}>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h1>
        <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
