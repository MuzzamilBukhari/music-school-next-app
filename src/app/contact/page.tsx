import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-900 ">
      <div className="flex flex-col justify-center items-center max-w-[700px] mt-[160px] mb-32 space-y-6 z-10">
        <h1 className="text-4xl md:text-7xl font-bold">Contact Us</h1>
        <p className="text-sm text-gray-500 font-light text-center max-w-[470px]">
          We're here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>
        <div className="flex justify-center flex-col items-center gap-6">
          <input
            type="text"
            placeholder="Your email address"
            className="w-[570px] p-4 outline-none bg-black/70 rounded-lg focus:outline-gray-300 "
          />
          <textarea
            placeholder="Your Message"
            cols={2}
            rows={6}
            className="w-[570px] p-4 outline-none bg-black/70 rounded-lg focus:outline-gray-300 "
          ></textarea>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Send Message
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Contact;
