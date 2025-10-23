// src/app/blog/[slug]/page.jsx
import Image from "next/image";

// Fetch blog data
const fetchBlog = async (slug) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch blog");
  const data = await res.json();
  return data.data;
};

// Dynamic SEO
export async function generateMetadata({ params }) {
  const blog = await fetchBlog(params.slug);
  return {
    title: blog.seo?.meta_title || blog.title,
    description: blog.seo?.meta_description || "",
    keywords: blog.seo?.meta_keywords || "",
    openGraph: {
      title: blog.seo?.meta_title || blog.title,
      description: blog.seo?.meta_description || "",
      images: [
        {
          url: blog.image
            ? `${process.env.NEXT_PUBLIC_STORAGE_API_URL}/${blog.image}`
            : "/blogImage/blogImage.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// Server Component
export default async function Page({ params }) {
  const blog = await fetchBlog(params.slug);

  const imageUrl = blog.image
    ? `${process.env.NEXT_PUBLIC_STORAGE_API_URL}/${blog.image}`
    : "/blogImage/blogImage.jpg";

  const date = new Date(blog.created_at).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <div className="lg:mt-10 px-2 w-full flex flex-col gap-5">
          <div className="w-full h-[20rem] lg:h-[30rem] overflow-hidden rounded-xl">
            <Image
              src={imageUrl}
              alt={blog.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="px-4 py-2 bg-gray-800 rounded-md capitalize">
              {blog.category}
            </div>

            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <div className="px-4 py-2 bg-gray-800 rounded-md capitalize">
                {date}
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 px-2 flex flex-col gap-5">
          <h1 className="text-2xl lg:text-4xl font-semibold">{blog.title}</h1>
          <div
            className="prose max-w-none  leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
}
