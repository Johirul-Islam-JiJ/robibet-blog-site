"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./blogCard";
// import FeatureCard from "./featureCard";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Replace with your real API endpoint
        const response = await fetch("http://192.168.68.112:8000/api/blogs/");

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        setBlogs(data?.data);
        console.log(data?.data[0]);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div className="w-full  lg:my-10 px-2 flex justify-center items-center ">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-[5%]">
        <div className="flex flex-col justify-center items-center w-full  gap-[2rem] ">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-2xl font-semibold text-gray-400">
              Whiteboards are remarkable.
            </h2>
            <span className="flex-1 h-[1px] bg-gray-600 hidden md:inline-block"></span>
          </div>

          {blogs?.length === 0 && (
            <div className="w-full h-[20vh] flex justify-center items-center">
              <h1 className="text-2xl font-semibold text-gray-500">
                No Blogs Found
              </h1>
            </div>
          )}
          <div className="flex flex-wrap  justify-between lg:justify-start items-center w-full gap-4">
            {blogs?.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>

        {/* <div className="flex flex-wrap   justify-between items-center md:gap-4 lg:w-[28%]">
  
          <div className="w-full md:w-[48%] lg:w-full flex justify-between items-center flex-col gap-2">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Featured</h1>
              <span className="flex-1 h-[1px] bg-gray-300"></span>
            </div>
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>


          <div className="w-full md:w-[48%] lg:w-full flex justify-between items-center flex-col gap-2">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Latest</h1>
              <span className="flex-1 h-[1px] bg-gray-300"></span>
            </div>
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>

   
          <div className="w-full md:w-[48%] lg:w-full flex justify-between items-center flex-col gap-2">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Popular</h1>
              <span className="flex-1 h-[1px] bg-gray-300"></span>
            </div>
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>
        </div> */}
      </div>
    </div>
  );
}
