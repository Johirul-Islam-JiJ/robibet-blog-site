import axios from "axios";

export default async function sitemap() {
  const baseUrl = "https://www.robibet.com";

  let blogs = [];
  try {
    const res = await axios.get("http://192.168.68.112:8000/api/blogs");
    blogs = res.data?.data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: blog.updated_at || new Date().toISOString(),
  }));

  return [...blogUrls];
}
