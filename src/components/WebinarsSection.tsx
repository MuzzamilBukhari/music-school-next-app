"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

const WebinarsSection = () => {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];

  return (
    <div className="flex justify-center items-center bg-gray-900 flex-col py-16 ">
      <div className="max-w-lg space-y-2 text-center">
        <h3 className="text-md font-medium text-teal-600">FEATURED WEBINARS</h3>
        <h1 className="text-3xl font-bold">Enhance your musical journey</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-5 space-y-5 mx-3">
        <HoverEffect
          items={featuredWebinars.map((webinar) => ({
            title: "Music Production Essentials",
            description:
              "Get started with music production with this comprehensive overview.",
            link: "/",
          }))}
        />
      </div>
      <div className="text-center ">
        <Button className="bg-gray-950 hover:bg-black duration-300">
          <Link href="/courses">View All Webinars</Link>
        </Button>
      </div>
    </div>
  );
};

export default WebinarsSection;
