import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section
      id="profile"
      className="w-full h-screen relative bg-slate-50 overflow-hidden flex items-center"
    >
      {/* Subtle Vector Dot Grid Ornament */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35 pointer-events-none -z-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-dots"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#94a3b8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* Decorative Rotating Dashed Orbit Ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/10 xl:-translate-y-2/5 h-[48%] md:h-[68%] xl:h-[88%] aspect-square rounded-full border border-dashed border-slate-300/80 -z-10 animate-[spin_80s_linear_infinite] pointer-events-none" />

      {/* Decorative Satellite Orbital Dot Revolving Around Circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/10 xl:-translate-y-2/5 h-[52%] md:h-[72%] xl:h-[92%] aspect-square rounded-full border border-slate-200/60 -z-10 animate-[spin_35s_linear_infinite] pointer-events-none">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#20e9bd] ring-4 ring-white shadow-2xs" />
      </div>

      {/* Background Circle - Exact Original Geometry with Bright Teal #20e9bd */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/10 xl:-translate-y-2/5 h-2/5 md:h-3/5 xl:h-4/5 aspect-square rounded-full bg-[#20e9bd] z-0"></div>

      {/* Profile Photo - Exact Original Geometry */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 h-8/12 xl:h-full aspect-square z-1">
        <Image
          src="/images/profile-cropped.png"
          alt="Rifki Bayu Ariyanto"
          className="object-contain"
          fill
          priority
        />
      </div>

      {/* Floating Animated Badge 1 (Left): Tech Focus */}
      <div className="hidden md:flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full shadow-xs text-xs font-mono font-bold text-slate-800 absolute left-6 xl:left-20 top-1/3 z-20 animate-float-slow select-none">
        <span className="text-[#0d9488]">&lt;/&gt;</span>
        <span>Full-Stack Engineer</span>
      </div>

      {/* Floating Animated Badge 2 (Right): Live Availability Status */}
      <div
        className="hidden lg:flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full shadow-xs text-xs font-semibold text-slate-700 font-jakarta absolute right-8 xl:right-28 bottom-28 z-20 animate-float-slow select-none"
        style={{ animationDelay: "2s" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20e9bd] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0d9488]"></span>
        </span>
        <span>Available for Projects</span>
      </div>

      {/* Engineering Corner Crosshair Marks */}
      <div className="hidden md:block absolute top-28 left-8 text-slate-300 font-mono text-sm select-none pointer-events-none">
        +
      </div>
      <div className="hidden md:block absolute bottom-8 left-8 text-slate-300 font-mono text-sm select-none pointer-events-none">
        +
      </div>
      <div className="hidden md:block absolute top-28 right-8 text-slate-300 font-mono text-sm select-none pointer-events-none">
        +
      </div>

      <div className="w-full h-full flex flex-col xl:flex-row z-10 relative">
        <div className="md:flex-1/2 mt-32 md:mt-0 flex pl-8 pr-8 md:pr-32 md:pl-32 xl:pr-0 xl:pl-16 2xl:pl-32 items-center">
          <div className="w-full xl:w-3/7 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#20e9bd] rounded-full shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
              <span>Full-Stack Web Developer</span>
            </span>

            <h1 className="font-extrabold text-slate-900 text-4xl sm:text-5xl lg:text-6xl xl:text-4xl 2xl:text-6xl font-redhat tracking-tight leading-tight">
              Hello, I&apos;m <br />
              <span className="text-[#0d9488] relative inline-block">
                Rifki Bayu
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#20e9bd] rounded-full" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-jakarta leading-relaxed pt-2">
              Full-stack web developer passionate about engineering clean, high-performance web applications and modern digital solutions.
            </p>

            {/* Social Links with Tactile Spring Hover */}
            <div className="pt-4 flex flex-row gap-3">
              <Link
                href="mailto:email.rifkibayu@gmail.com"
                aria-label="Email"
                className="w-11 h-11 rounded-xl bg-white hover:bg-[#20e9bd] hover:-translate-y-1.5 active:scale-95 flex justify-center items-center shadow-xs transition-all duration-200 group cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  className="text-slate-800 group-hover:text-slate-950 transition-colors"
                />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/rifkibayuariyanto/"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl bg-white hover:bg-[#20e9bd] hover:-translate-y-1.5 active:scale-95 flex justify-center items-center shadow-xs transition-all duration-200 group cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  className="text-slate-800 group-hover:text-slate-950 transition-colors"
                />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/rifkibayuariy"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl bg-white hover:bg-[#20e9bd] hover:-translate-y-1.5 active:scale-95 flex justify-center items-center shadow-xs transition-all duration-200 group cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  className="text-slate-800 group-hover:text-slate-950 transition-colors"
                />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/rifkibayuariyan/"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl bg-white hover:bg-[#20e9bd] hover:-translate-y-1.5 active:scale-95 flex justify-center items-center shadow-xs transition-all duration-200 group cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  className="text-slate-800 group-hover:text-slate-950 transition-colors"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1/2 md:flex items-center justify-end pr-16 xl:pr-16 2xl:pr-32 hidden">
          <div className="text-right space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0d9488] bg-[#e6faf5] px-3 py-1 rounded-full">
              Production Engineer
            </span>
            <h2 className="font-redhat md:text-5xl 2xl:text-6xl text-slate-900 font-extrabold tracking-tight leading-tight">
              Software<br></br>
              <span className="text-[#0d9488]">Developer</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-65 hover:opacity-100 transition-opacity">
        <Link
          href="#experience"
          aria-label="Scroll to experience"
          className="flex flex-col items-center gap-1.5 group cursor-pointer"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 group-hover:text-slate-700 uppercase transition-colors">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-300 group-hover:border-slate-400 flex justify-center pt-1.5 transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#0d9488] animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
}
