import Hero from "@/components/hero";
import Blogs from "@/components/blogs";
export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Hero />
      <Blogs />
    </div>
  );
}
