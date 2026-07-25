"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { LuArrowRight, LuMenu, LuX } from "react-icons/lu";

const NAVBAR_HEIGHT = 100;

const navItems = [
  { label: "About", sectionId: "about" },
  { label: "Skills", sectionId: "skills" },
  { label: "Projects", sectionId: "projects" },
  { label: "Education", sectionId: "education" },
  { label: "Contact", sectionId: "contact" },
];

const observedSections = ["hero", ...navItems.map((n) => n.sectionId)];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrollLockRef = useRef(null);

  // --- Scroll handler: getBoundingClientRect + window.scrollTo (NO scrollIntoView) ---
  const handleNavClick = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      setDrawerOpen(false);

      if (!isHomePage) {
        window.location.href = `/#${sectionId}`;
        return;
      }

      const element = document.getElementById(sectionId);
      if (!element) return;

      // Lock: prevent IntersectionObserver from overriding during scroll
      scrollLockRef.current = sectionId;
      setActiveSection(sectionId);
      window.history.replaceState(null, "", `#${sectionId}`);

      const targetY = element.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
      window.scrollTo({ top: targetY, behavior: "smooth" });

      // Release lock after scroll animation finishes
      clearTimeout(scrollLockRef.current);
      scrollLockRef.current = setTimeout(() => {
        scrollLockRef.current = null;
      }, 800);
    },
    [isHomePage]
  );

  const handleLogoClick = useCallback(() => {
    scrollLockRef.current = "hero";
    setActiveSection("hero");
    window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    clearTimeout(scrollLockRef.current);
    scrollLockRef.current = setTimeout(() => {
      scrollLockRef.current = null;
    }, 800);
  }, []);

  // --- Navbar background on scroll ---
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Lock body scroll when drawer is open ---
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  // --- IntersectionObserver for active highlight (NO structural re-renders) ---
  useEffect(() => {
    if (!isHomePage) return;

    const observers = [];

    observedSections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !scrollLockRef.current) {
              setActiveSection(sectionId);
              window.history.replaceState(null, "", `#${sectionId}`);
            }
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHomePage]);

  return (
    <header id="home" className="max-w-7xl mx-auto px-8 pt-4 sticky top-0 z-50">
      <nav
        className={`flex justify-between rounded-2xl w-full lg:w-[70%] mx-auto p-3 items-center backdrop-blur-lg transition-all duration-300
        ${scrolled ? "bg-[#f1f1f11a]" : ""}`}
      >
        {/* Logo */}
        <div onClick={handleLogoClick} className="flex gap-2 items-center cursor-pointer">
          <Image width={100} height={100} id="logo" src="/assets/logo.png" alt="Logo" className="w-10 h-6" />
          <p className="text-xl">|</p>
        </div>

        {/* Hamburger */}
        <button className="lg:hidden flex items-center justify-center w-10 h-10" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          <LuMenu className="w-6 h-6" />
        </button>

        {/* Desktop Nav */}
        <div className="gap-10 hidden lg:flex">
          {navItems.map(({ label, sectionId }) => (
            <button
              key={label}
              onClick={(e) => handleNavClick(e, sectionId)}
              className={`relative group font-medium transition-all duration-300 cursor-pointer ${
                activeSection === sectionId && isHomePage
                  ? "bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent"
                  : "hover:bg-linear-to-r hover:from-violet-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent"
              }`}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-linear-to-r from-violet-400 to-pink-500 transition-all duration-300 ${
                  activeSection === sectionId && isHomePage ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Hire Me */}
        <div className="hidden lg:flex">
          <Link href="https://www.linkedin.com/in/atik-hasan-sarker/" target="_blank">
            <Button className="bg-linear-to-r from-violet-400 to-pink-500 hover:scale-105 transition-all duration-300" size="lg">
              Hire Me <LuArrowRight />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden" onClick={() => setDrawerOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-[280px] bg-[#0d0a2e]/95 backdrop-blur-xl border-l border-white/10 z-[70] lg:hidden flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <Image width={100} height={100} src="/assets/logo.png" alt="Logo" className="w-10 h-6" />
              <button onClick={() => setDrawerOpen(false)} aria-label="Close menu" className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300">
                <LuX size={18} />
              </button>
            </div>
            <nav className="flex-1 p-5 overflow-y-auto">
              <div className="flex flex-col gap-1">
                {navItems.map(({ label, sectionId }) => (
                  <button
                    key={label}
                    onClick={(e) => handleNavClick(e, sectionId)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 cursor-pointer ${
                      activeSection === sectionId && isHomePage
                        ? "bg-linear-to-r from-violet-400 to-pink-500 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </nav>
            <div className="p-5 border-t border-white/10">
              <Link href="https://www.linkedin.com/in/atik-hasan-sarker/" target="_blank" className="block">
                <Button className="w-full bg-linear-to-r from-violet-400 to-pink-500 hover:scale-[1.02] transition-all duration-300" size="lg">
                  Hire Me <LuArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
