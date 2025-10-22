"use client";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-secondary/10 bg-bg">
      <section className="max-w-7xl mx-auto flex items-center justify-between  py-3 ">
        <Link
          href="/"
          className="flex items-center space-x-1 text-xl font-semibold text-gray-800"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={900}
            height={900}
            className="object-cover w-1/2 h-full "
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <div className="flex items-center gap-2 mt-3">
            <Link
              href="https://robibet.com/"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center px-4 py-1.5 text-sm  text-bg bg-secondary rounded-md hover:bg-secondary/70 font-bold"
            >
              Join Now
            </Link>
          </div>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? (
            <MdOutlineClose size={24} />
          ) : (
            <MdOutlineMenu size={24} />
          )}
        </button>
      </section>

      {menuOpen && (
        <div className="md:hidden min-h-[50vh] border-t bg-bg">
          <nav className="flex flex-col justify-center items-center px-4  min-h-[40vh] py-2 space-y-2">
            <div className="flex w-full flex-col items-center  gap-5 mt-3">
              <Link
                href="https://robibet.com/"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center  text-bg px-4 py-1.5 text-sm font-medium  bg-secondary rounded-md hover:bg-secondary/80"
              >
                Register
              </Link>
              <Link
                href="https://robibet.com/"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center text-bg px-4 py-1.5 text-sm font-medium  bg-secondary rounded-md hover:bg-secondary/80"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
