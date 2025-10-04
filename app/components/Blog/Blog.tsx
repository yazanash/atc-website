import React from "react";
import Image from "next/image";
import BlogCard from "./BlogCard";
const Blog = () => {
  return (
    <div className="py-16">
      <h1 className="text-2xl md:text-3xl capitalize font-bold text-center">
        Our Intitive
      </h1>
      
      <div className="mt-2 w-[90%] mx-auto flex flex-col" id="activities">
        <BlogCard
          image="/images/edu-aid.jpg"
          title="Education Intitive"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non ab libero deserunt incidunt eius voluptas maxime cupiditate, vel quam ut. Assumenda voluptatum labore rem dignissimos minus quaerat quis repudiandae."
        />
        <BlogCard
          RightToLeft={true}
          image="/images/medical-aid.jpg"
          title="Medical Intitive"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non ab libero deserunt incidunt eius voluptas maxime cupiditate, vel quam ut. Assumenda voluptatum labore rem dignissimos minus quaerat quis repudiandae."
        />
        <BlogCard
          image="/images/food-aid.jpg"
          title="Food Intitive"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non ab libero deserunt incidunt eius voluptas maxime cupiditate, vel quam ut. Assumenda voluptatum labore rem dignissimos minus quaerat quis repudiandae."
        />
      </div>
    </div>
  );
};

export default Blog;
