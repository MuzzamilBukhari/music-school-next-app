import React from "react";
import courseData from "@/data/music.json";
import { ThreeDCourseCard } from "@/components";

const page = () => {
  const courses = courseData.courses.map((course) => ({
    id: course.id,
    title: course.title,
    description: course.description,
    image: course.image,
  }));
  return (
    <div className="bg-black w-full flex flex-col justify-center items-center pt-12">
      <h1 className="text-4xl md:text-7xl font-bold mt-32">
        All courses ({courseData.courses.length})
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-12 ">
        {courses.map((course) => (
          <div key={course.id}>
            <ThreeDCourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
