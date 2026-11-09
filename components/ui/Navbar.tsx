"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { name: "About", href: "#profile" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "bg-white/95 shadow-xs py-3.5 backdrop-blur-none"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        {/* Brand / Logo with Smooth Hover */}
        <Link href="#profile" className="flex items-center gap-3 group">
          <div className="w-9 h-9 relative rounded-full overflow-hidden bg-slate-100 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108">
            <Image
              src="/images/profile-cropped.png"
              alt="Rifki Bayu Ariyanto"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <span className="font-bold text-slate-900 font-jakarta text-sm sm:text-base group-hover:text-[#0d9488] transition-colors duration-200">
            Rifki Bayu Ariyanto
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 font-jakarta text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-slate-900 transition-colors duration-200 relative group py-1"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#20e9bd] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#contacts"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#20e9bd] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#1cd2aa] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-2xs"
          >
            Let&apos;s Talk
          </Link>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden relative">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Navigation Menu"
              className="w-10 h-10 rounded-xl bg-white text-slate-800 flex items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-all duration-150"
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-3 w-52 p-4 rounded-2xl bg-white shadow-md animate-fade-in-up">
                <ul className="flex flex-col gap-3 font-jakarta text-sm font-medium text-slate-700">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-1 hover:text-slate-900 transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2 border-t border-slate-100">
                    <Link
                      href="#contacts"
                      onClick={() => setMenuOpen(false)}
                      className="block text-center py-2 rounded-xl bg-[#20e9bd] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#1cd2aa] active:scale-95 transition-all duration-150"
                    >
                      Let&apos;s Talk
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
