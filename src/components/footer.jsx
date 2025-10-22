"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

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
        `http://192.168.68.112:8000/api/subscribe?email=${data.email}`,
        { method: "POST" }
      );

      if (!response.ok) throw new Error("Subscription failed");

      toast.success(" Successfully subscribed!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error(" Failed to subscribe. Please try again!");
    }
  };

  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200 px-6 sm:px-12 py-10 flex justify-center items-center">
      <div>
        <div className="max-w-7xl flex flex-wrap justify-between lg:flex-row gap-8">
          {/* About Section */}
          <div className="w-full lg:w-1/3">
            <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-2">
              <span className="text-blue-600 text-2xl mr-1">∞</span> Robibet
            </h2>
            <p className="text-sm leading-relaxed text-gray-500">
              Step into Robibet — the all-in-one destination for casino games,
              live dealers, and endless entertainment. Enjoy slots, blackjack,
              roulette, and more in a secure and dynamic environment designed
              for winners.
            </p>
          </div>

          {/* Subscribe Section */}
          <div className="w-1/3">
            <h3 className="font-semibold text-gray-800 mb-3">Subscribe</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className="flex-1 p-2 border rounded-l-md border-gray-300 text-sm"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 text-sm cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </form>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition"
                  >
                    <Icon size={14} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-10 pt-4 text-center text-sm text-gray-500">
          © Copyright 2025 Robibet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
