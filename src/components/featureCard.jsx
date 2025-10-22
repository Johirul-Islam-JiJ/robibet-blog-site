import React from "react";
import Image from "next/image";
import { FiHeart, FiShare2 } from "react-icons/fi";

export default function FeatureCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start gap-5 p-3 cursor-pointer">
      {/* Left: Image */}
      <div className="size-[100px] flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src="/blogImage/blogImage.jpg"
          alt="feature"
          width={120}
          height={120}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col flex-1 relative">
        {/* Date */}

        {/* Title */}
        <h2 className="text-md sm:text-xl font-semibold text-gray-900 leading-snug mb-2">
          Tesla Launches First Rocket
        </h2>

        {/* Description */}
        <p className="text-sm lg:hidden text-gray-600 leading-relaxed line-clamp-2 mb-4">
          Elon Musk’s space exploration project began yesterday, as he sends off
          two rockets into space for the first time. This marks a new era of
          innovation and discovery......
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center">
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-full transition">
            Read More
          </button> */}
          <div className="flex items-center gap-3 text-gray-500">
            <FiHeart className="cursor-pointer hover:text-blue-600 transition" />
            <FiShare2 className="cursor-pointer hover:text-blue-600 transition" />
          </div>
          <p className="text-xs text-gray-400 mb-1 self-end sm:self-auto">
            6 Hours Ago
          </p>
        </div>
      </div>
    </div>
  );
}
