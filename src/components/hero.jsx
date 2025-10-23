"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import BlogCard from "./blogCard";
export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSearched, setIsSearched] = useState(false);
  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    setIsSearched(false); // reset before new search

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs?search=${encodeURIComponent(
          searchTerm
        )}`
      );

      if (!res.ok) throw new Error("Failed to fetch blogs");

      const data = await res.json();
      setBlogs(data?.data || []);
      setIsSearched(true); // ✅ mark search complete
      console.log("Search results:", data?.data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
      setIsSearched(true); // ✅ also mark as searched on error
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="w-full flex justify-center items-center pt-[2rem] lg:pt-[5rem]">
      <section className="w-full max-w-7xl flex flex-col justify-center items-center gap-3 lg:gap-7">
        <h1 className="text-lg lg:text-4xl font-semibold uppercase text-secondary">
          Stay Ahead with Robibet News
        </h1>
        <p className=" lg:text-lg text-center max-w-4xl font-medium">
          Discover the latest match previews, betting strategies, and industry
          updates. <br /> Stay informed, stay winning.
        </p>

        <div className="flex justify-center items-center w-full gap-1 lg:gap-4">
          <div className="w-3/4 lg:w-1/2 flex justify-center items-center border px-4 border-gray-800 rounded-xl">
            <span className="text-gray-700">
              <CiSearch />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-2 py-2 lg:px-4 lg:py-2 text-sm font-bold text-bg bg-secondary rounded-lg hover:secondary/80 transition cursor-pointer "
          >
            {loading ? "Searching..." : "Find Now"}
          </button>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {blogs.length > 0 && isSearched ? (
          <div className="w-full mt-6 px-4 ">
            <div className="flex flex-wrap  justify-start items-center w-full gap-4 ">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        ) : blogs.length === 0 && isSearched ? (
          <div>
            {" "}
            <div className="w-full h-[20vh] flex justify-center items-center">
              <h1 className="text-2xl font-semibold text-gray-500">
                No Blogs Found
              </h1>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
