"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Sync with HTML data-theme
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = (e) => {
    const isLight = e.target.checked;
    const newTheme = isLight ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    
    // Manage specific DOM elements if necessary (like the button border)
    const seeAllBtn = document.getElementById("seeAllBtn");
    if (seeAllBtn) {
      if (isLight) {
        seeAllBtn.classList.remove("border-white");
        seeAllBtn.classList.add("border-black");
      } else {
        seeAllBtn.classList.remove("border-black");
        seeAllBtn.classList.add("border-white");
      }
    }
  };

  return (
    <header id="home" className="w-11/12 mx-auto pt-8 sticky top-0 z-50">
      <nav className="flex justify-between bg-[#f1f1f11a] rounded-2xl w-full lg:w-[70%] mx-auto p-4 items-center backdrop-blur">
        <div className="flex gap-2 items-center">
          <img
            id="logo"
            src={theme === "light" ? "/assets/logo-black.png" : "/assets/logo.png"}
            alt="Logo"
            className="w-8 h-6"
          />
          <p className="text-xl">|</p>
        </div>

        {/* Hamburger Menu */}
        <div className="navbar-center lg:hidden">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
              <div className="text-2xl">
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-primary rounded-box z-1 ml-3 p-2 shadow"
            >
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="gap-10 hidden lg:flex">
          {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item === "Home" ? "hero" : item.toLowerCase()}`}
              className="relative group font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-[#3B82F6] hover:to-[#06B6D4] hover:bg-clip-text hover:text-transparent"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        <div>
          <label className="swap swap-rotate">
            {/* hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              id="theme-toggle"
              checked={theme === "light"}
              onChange={toggleTheme}
            />

            {/* sun icon */}
            <svg
              id="sun"
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              id="moon"
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </nav>
    </header>
  );
}
