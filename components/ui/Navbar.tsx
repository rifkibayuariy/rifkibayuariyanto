"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

interface NavItem {
  step: string;
  name: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { step: "01", name: "About", href: "#profile", id: "profile" },
  { step: "02", name: "Experience", href: "#experience", id: "experience" },
  { step: "03", name: "Education", href: "#education", id: "education" },
  { step: "04", name: "Skills", href: "#skills", id: "skills" },
  { step: "05", name: "Projects", href: "#projects", id: "projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scrollspy calculation for Journey Steps
      const scrollPosition = window.scrollY + 250;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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

        {/* Desktop Journey Step Menu */}
        <ul className="hidden md:flex items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-2xl shadow-2xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#20e9bd] text-slate-950 font-bold shadow-2xs scale-102"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/80"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? "text-slate-950 font-extrabold" : "text-slate-400"
                    }`}
                  >
                    {item.step}
                  </span>
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse ml-0.5" />
                  )}
                </a>
              </li>
            );
          })}
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
              <div className="absolute right-0 mt-3 w-56 p-4 rounded-2xl bg-white shadow-md animate-fade-in-up">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-3 pb-2">
                  Navigation Steps
                </div>
                <ul className="flex flex-col gap-1.5 font-jakarta text-xs font-medium text-slate-700">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                            isActive
                              ? "bg-[#20e9bd] text-slate-950 font-bold shadow-2xs"
                              : "hover:bg-slate-100 text-slate-700"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className={`font-mono text-[10px] ${
                                isActive ? "text-slate-950 font-bold" : "text-slate-400"
                              }`}
                            >
                              {item.step}
                            </span>
                            <span>{item.name}</span>
                          </span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                          )}
                        </a>
                      </li>
                    );
                  })}
                  <li className="pt-2 border-t border-slate-100 mt-1">
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
