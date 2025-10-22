import React from "react";
import { FiShare2, FiCopy } from "react-icons/fi";
import Link from "next/link";
export default function BlogCard({ blog }) {
  const formattedDate = new Date(blog.created_at).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const imageUrl = blog.image
    ? `http://192.168.68.112:8000/storage/${blog.image}`
    : "/blogImage/blogImage2.jpg";
  console.log(`http://192.168.68.112:8000/api/storage/${blog.image}`);

  const getExcerpt = (html) => {
    const text = html.replace(/<[^>]+>/g, "");
    return text.length > 150 ? text.substring(0, 150) + "..." : text;
  };

  return (
    <div className="w-full flex flex-col md:w-[45%] xl:w-[30%] h-[28rem]  bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col gap-3 justify-between  flex-1">
        <div className="flex flex-col gap-2">
          <p className="text-xs  mt-1 text-gray-500">{formattedDate}</p>
          <h2 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
            {blog.title}
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {getExcerpt(blog.content)}
          </p>
        </div>
        <div className="flex justify-between items-center mt-2 ">
          <Link href={`/blog/${blog.id}`} className="">
            <button className="text-sm text-blue-600 font-medium hover:underline !cursor-pointer">
              Read More →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
