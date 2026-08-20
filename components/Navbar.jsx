"use client";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { LuArrowRight, LuMenu, LuX } from "react-icons/lu";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";

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
  const [activeSection, setActiveSection] = useState("hero");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleHomeClick = useCallback(
    (e) => {
      setDrawerOpen(false);

      if (!isHomePage) return;

      e.preventDefault();
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [isHomePage]
  );

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

      setActiveSection(sectionId);
      window.history.pushState(null, "", `#${sectionId}`);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [isHomePage]
  )

  // --- Lock body scroll when drawer is open ---
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  // --- IntersectionObserver for active highlight only; do not mutate URL hash on scroll ---
  useEffect(() => {
    if (!isHomePage) return;

    const observers = [];

    observedSections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntry = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visibleEntry) {
            setActiveSection(sectionId);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHomePage]);

  const { theme, resolvedTheme } = useTheme();

  return (
    <header
      id="home"
      className="max-w-6xl w-full mx-auto px-4 pt-4 sticky top-0 z-50"
    >
      <nav
        className={`flex justify-between rounded-2xl w-full border mx-auto p-3 items-center bg-background transition-all duration-300`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex gap-2 items-center cursor-pointer"
          onClick={handleHomeClick}
        >
          <Image
            width={100}
            height={100}
            id="logo"
            src={
              theme === "dark"
                ? "/assets/logo-white.png"
                : "/assets/logo-black.png"
            }
            alt="Logo"
            className="w-10 h-6"
          />
          <p className="text-xl">|</p>
        </Link>

        {/* Desktop Nav */}
        <div className="gap-10 hidden lg:flex items-center">
          {navItems.map(({ label, sectionId }) => (
            <button
              key={label}
              onClick={(e) => handleNavClick(e, sectionId)}
              className={`relative group font-medium transition-all duration-300 cursor-pointer ${
                activeSection === sectionId && isHomePage
                  ? "font-semibold"
                  : "hover:font-semibold"
              }`}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-foreground transition-all duration-300 ${
                  activeSection === sectionId && isHomePage
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Hire Me */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Hamburger */}
          <button
            className="lg:hidden flex items-center cursor-pointer justify-center w-10 h-10"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <LuMenu className="w-7 h-7" />
          </button>

          <Link
            href="https://www.linkedin.com/in/atik-hasan-sarker/"
            target="_blank"
            className="hidden lg:block"
          >
            <Button
              className="bg-foreground text-background hover:scale-105 transition-all duration-300 group"
              size="lg"
            >
              Hire Me <LuArrowRight />
              <span className="absolute inset-y-0 left-0 w-1/4 rotate-12 bg-white/30 blur-sm transition-transform duration-700 group-hover:translate-x-[400%]" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-sm z-60 lg:hidden"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-70 bg-background border-l z-70 lg:hidden flex flex-col">
            <div className="flex items-center justify-between p-5 border-b">
              <Image
                width={100}
                height={100}
                src={
                  theme === "dark"
                    ? "/assets/logo-white.png"
                    : "/assets/logo-black.png"
                }
                alt="Logo"
                className="w-10 h-6"
              />
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="theme-icon-button cursor-pointer flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
              >
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
                        ? "theme-button"
                        : "hover:font-semibold"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </nav>
            <div className="p-5 border-t">
              <Link
                href="https://www.linkedin.com/in/atik-hasan-sarker/"
                target="_blank"
                className="block"
              >
                <Button
                  className="theme-button w-full hover:scale-[1.02] transition-all duration-300"
                  size="lg"
                >
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
