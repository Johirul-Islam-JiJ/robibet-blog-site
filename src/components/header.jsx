"use client";
import { useState } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-secondary/10 bg-bg sticky top-0 z-50">
      <section className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Robibet Logo"
            width={160}
            height={60}
            className="object-contain w-32 sm:w-40 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link
            href="https://robibet.com/"
            className="px-5 py-2 text-sm font-semibold bg-secondary text-bg rounded-md hover:bg-secondary/80 transition"
          >
            Join Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <MdOutlineClose size={26} />
          ) : (
            <MdOutlineMenu size={26} />
          )}
        </button>
      </section>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg border-t border-secondary/10 animate-slideDown">
          <nav className="flex flex-col items-center py-6 space-y-4">
            <Link
              href="https://robibet.com/"
              onClick={() => setMenuOpen(false)}
              className="w-3/4 text-center text-bg px-4 py-2 text-sm font-medium bg-secondary rounded-md hover:bg-secondary/80 transition"
            >
              Register
            </Link>
            <Link
              href="https://robibet.com/"
              onClick={() => setMenuOpen(false)}
              className="w-3/4 text-center text-bg px-4 py-2 text-sm font-medium bg-secondary rounded-md hover:bg-secondary/80 transition"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
