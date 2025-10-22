"use client";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <section className="max-w-7xl mx-auto flex items-center justify-between  py-3 ">
        <Link
          href="/"
          className="flex items-center space-x-1 text-xl font-semibold text-gray-800"
        >
          <span className="text-blue-600 font-bold text-2xl">∞</span>
          <span>Robibet</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <div className="flex items-center gap-2 mt-3">
            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center px-4 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
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
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-2 space-y-2">
            <div className="flex items-center gap-2 mt-3">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center px-4 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center px-4 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
