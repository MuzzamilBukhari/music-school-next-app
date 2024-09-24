import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="p-8 bg-black pb-10">
      <div className="flex justify-around items-start ">
        <div className="max-w-[375px]">
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="font-light text-gray-400">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="font-light text-gray-400">
            <li>
              <Link href={"/"} className="hover:text-white duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white duration-200">
                Contact
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white duration-200">
                Courses
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="font-light text-gray-400">
            <li>
              <Link href={"/"} className="hover:text-white duration-200">
                Facebook
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white duration-200">
                Twitter
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-white duration-200">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <div className="font-light text-gray-400">
            <p>New Karachi, Karachi, Pakistan</p>
            <p>Email: info@musicschool.com</p>
            <p>Phone: +92 311 1291641</p>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-sm mt-20">
        © 2024 Music School. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
