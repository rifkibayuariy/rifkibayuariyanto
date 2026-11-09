"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck, faCopy, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "email.rifkibayu@gmail.com";

  const handleCopyEmail = async (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }

    let success = false;

    // Method 1: Modern Clipboard API
    if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(email);
        success = true;
      } catch {
        success = false;
      }
    }

    // Method 2: Rock-solid ExecCommand Fallback (Works on localhost, http, mobile, iframes)
    if (!success) {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        textArea.setAttribute("readonly", "");
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        success = document.execCommand("copy");
        document.body.removeChild(textArea);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacts" className="bg-white text-slate-900 pt-20 pb-12 relative overflow-hidden">
      {/* Decorative Subtle Corner Vector Dots */}
      <svg
        className="absolute right-0 bottom-0 w-64 h-64 opacity-20 pointer-events-none -z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="contact-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#94a3b8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-dots)" />
      </svg>

      {/* Engineering Corner Crosshair Marks */}
      <span className="hidden md:block absolute top-8 left-8 text-slate-200 font-mono text-xs select-none">+</span>
      <span className="hidden md:block absolute top-8 right-8 text-slate-200 font-mono text-xs select-none">+</span>

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <Reveal>
          <div className="space-y-4">
            <span className="inline-block px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-slate-950 bg-[#20e9bd] rounded-full shadow-2xs">
              05 // Contact
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-redhat text-slate-900 tracking-tight">
              Let&apos;s build something together.
            </h2>

            <p className="text-slate-600 font-jakarta text-sm sm:text-base max-w-lg mx-auto">
              Open to full-stack engineering roles, freelance opportunities, and technical discussions.
            </p>
          </div>
        </Reveal>

        {/* Email Pill / Actions */}
        <Reveal delay={120}>
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 bg-slate-50 p-2 sm:p-2.5 rounded-2xl shadow-2xs">
            <button
              onClick={handleCopyEmail}
              title="Click to copy email address"
              className="text-sm sm:text-base font-bold font-mono text-slate-900 px-4 py-2 hover:text-[#0d9488] transition-colors cursor-pointer"
            >
              {email}
            </button>

            <button
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-jakarta active:scale-95 transition-all duration-200 cursor-pointer ${
                copied
                  ? "bg-[#e6faf5] text-[#0d9488] shadow-xs"
                  : "bg-white hover:bg-slate-100 text-slate-800 shadow-2xs"
              }`}
            >
              <FontAwesomeIcon
                icon={copied ? faCheck : faCopy}
                className={copied ? "text-[#0d9488]" : "text-slate-400"}
              />
              <span>{copied ? "Copied!" : "Copy"}</span>
            </button>

            <Link
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#20e9bd] hover:bg-[#1cd2aa] active:scale-95 text-xs font-bold font-jakarta text-slate-950 shadow-2xs transition-all cursor-pointer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Send Email</span>
            </Link>
          </div>
        </Reveal>

        {/* Clean Social Profiles */}
        <Reveal delay={200}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/rifkibayuariy"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-[#20e9bd] hover:-translate-y-1 active:scale-95 flex items-center justify-center text-slate-700 hover:text-slate-950 transition-all shadow-2xs"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/rifkibayuariyanto/"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-[#20e9bd] hover:-translate-y-1 active:scale-95 flex items-center justify-center text-slate-700 hover:text-slate-950 transition-all shadow-2xs"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/rifkibayuariyan/"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-[#20e9bd] hover:-translate-y-1 active:scale-95 flex items-center justify-center text-slate-700 hover:text-slate-950 transition-all shadow-2xs"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </Reveal>

        {/* Bottom Sub-Footer: Concise & Clean */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-jakarta text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Rifki Bayu Ariyanto. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <FontAwesomeIcon icon={faArrowUp} className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
