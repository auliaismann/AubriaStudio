"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Menangani event scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolling ? "bg-white bg-opacity-70 shadow-sm" : "bg-transparent"
      } py-4 px-6 fixed top-0 left-0 w-full transition-all duration-300 z-50`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/aubrialogo.png"
              alt="AubriaStudio Logo"
              className={`h-[60px] w-auto transition-all duration-300 ${
                scrolling ? "h-[50px]" : "h-[80px]"
              }`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-emerald-900 hover:text-orange-600">
            Home
          </Link>
          <Link
            href="#About"
            className="text-emerald-900 hover:text-orange-600"
          >
            About
          </Link>
          <Link
            href="#Program"
            className="text-emerald-900 hover:text-orange-600"
          >
            Programs
          </Link>
          <button className="bg-yellow-50 text-black px-6 py-2 rounded-full hover:bg-yellow-100 transition">
            <Link href="/login">Login</Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-emerald-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white">
          <Link
            href="/"
            className="block py-2 px-4 text-emerald-900 hover:bg-emerald-50"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block py-2 px-4 text-emerald-900 hover:bg-emerald-50"
          >
            About
          </Link>
          <Link
            href="#programs"
            className="block py-2 px-4 text-emerald-900 hover:bg-emerald-50"
          >
            Programs
          </Link>
          <div className="py-2 px-4">
            <button className="w-full bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
