"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "@/data/music.json";
import { Button } from "./ui/moving-border";
import Link from "next/link";

const FeaturedSection = () => {
  const featuredCourses = courseData.courses.filter(
    (course) => course.isFeatured
  );
  return (
    <div className="flex justify-center items-center bg-gray-900 flex-col py-16">
      <div className="max-w-lg space-y-2 text-center">
        <h3 className="text-md font-medium text-teal-600">FEATURED COURSES</h3>
        <h1 className="text-3xl font-bold">Learn with the best</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-5 space-y-5 mt-12 mx-3">
        {featuredCourses.map((course) => (
          <div key={course.id}>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-6 bg-white dark:bg-zinc-900 space-y-4 flex justify-center items-center flex-col">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {course.title}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {course.description}
              </p>
              <button className="bg-gray-300 px-5 py-2 rounded-md hover:bg-gray-200 text-black shadow-md">
                <Link href={`/courses/${course.slug}`}>Learn more</Link>
              </button>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <Button className="bg-gray-950 hover:bg-black duration-300">
          <Link href="/courses">View All Courses</Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedSection;
