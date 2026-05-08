"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="home" className="w-11/12 mx-auto pt-8 sticky top-0 z-50">
      <nav className="flex justify-between bg-[#f1f1f11a] rounded-2xl w-full lg:w-[70%] mx-auto p-4 items-center backdrop-blur">
        <div className="flex gap-2 items-center">
          <Image
            width={100}
            height={100}
            id="logo"
            src="/assets/logo.png"
            alt="Logo"
            className="w-10 h-6"
          />
          <p className="text-xl">|</p>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="gap-10 hidden lg:flex">
          {["Home", "About", "Skills", "Project", "Education", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item === "Home" ? "hero" : item.toLowerCase()}`}
                className="relative group font-medium transition-all duration-300 hover:bg-linear-to-r hover:from-[#3B82F6] hover:to-[#06B6D4] hover:bg-clip-text hover:text-transparent"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-[#3B82F6] to-[#06B6D4] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ),
          )}
        </div>
        <div className="hidden md:flex">
          <Button className="bg-linear-to-r from-violet-400 to-pink-500">
            Hire Me
          </Button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-separator md:hidden absolute top-full right-0 w-fit bg-[#f1f1f11a] rounded-b-2xl backdrop-blur">
            <ul
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-2 p-4"
            >
              <li>
                <Link href="#hero">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#project">Project</Link>
              </li>
              <li>
                <Link href="#education">Project</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
