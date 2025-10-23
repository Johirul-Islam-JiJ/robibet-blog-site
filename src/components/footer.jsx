"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

const links = [
  {
    link: "https://wa.me/2348123456789",
    icon: FaWhatsapp,
  },
  {
    link: "https://t.me/robibet",
    icon: FaTelegramPlane,
  },
];

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/subscribe?email=${data.email}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) throw new Error("Subscription failed");

      toast.success("Successfully subscribed!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to subscribe. Please try again!");
    }
  };

  return (
    <footer className="border-t border-gray-800 px-4 sm:px-8 md:px-12 py-10 bg-bg text-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* === Left Section (About) === */}
        <div className="flex-1 text-center lg:text-left">
          <Link
            href="/"
            className="flex justify-center lg:justify-start items-center space-x-2 mb-4"
          >
            <Image
              src="/logo.png"
              alt="Robibet logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
            Step into Robibet — the all-in-one destination for casino games,
            live dealers, and endless entertainment. Enjoy slots, blackjack,
            roulette, and more in a secure and dynamic environment designed for
            winners.
          </p>
        </div>

        {/* === Right Section (Subscribe + Socials) === */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="font-semibold text-gray-200 mb-3 text-lg">
            Subscribe
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 w-full sm:w-auto justify-center lg:justify-start"
          >
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="flex-1 w-full sm:w-[220px] p-2 rounded-md border border-gray-700 bg-transparent text-sm focus:outline-none focus:ring-1 focus:ring-secondary"
            />
            <button
              type="submit"
              className="bg-secondary text-black font-semibold px-4 py-2 rounded-md hover:opacity-90 text-sm transition"
            >
              Subscribe
            </button>
          </form>

          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-3 mt-4">
            {links.map((Icon, index) => (
              <a
                key={index}
                href={Icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-secondary hover:text-black transition"
              >
                <Icon.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* === Bottom Copyright === */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} Robibet. All rights reserved.
      </div>
    </footer>
  );
}
