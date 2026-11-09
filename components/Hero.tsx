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
      {/* Background Circle - Exact Original Geometry with Smooth Motion (Float & Pulse) */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/10 xl:-translate-y-2/5 h-2/5 md:h-3/5 xl:h-4/5 aspect-square z-0 pointer-events-none">
        <div className="w-full h-full rounded-full bg-[#20e9bd] animate-circle-motion will-change-transform shadow-xs"></div>
      </div>

      {/* Profile Photo - Static & Solid, Exactly Anchored */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 h-8/12 xl:h-full aspect-square z-1 pointer-events-none">
        <Image
          src="/images/profile-cropped.png"
          alt="Rifki Bayu Ariyanto"
          className="object-contain"
          fill
          priority
        />
      </div>

      {/* Main Hero Content */}
      <div className="w-full h-full flex flex-col xl:flex-row z-10 relative">
        <div className="md:flex-1/2 mt-32 md:mt-0 flex pl-8 pr-8 md:pr-32 md:pl-32 xl:pr-0 xl:pl-16 2xl:pl-32 items-center">
          <div className="w-full xl:w-3/7 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#20e9bd] rounded-full shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
              <span>Full-Stack Web Developer</span>
            </span>

            <h1 className="font-extrabold text-slate-900 text-4xl sm:text-5xl lg:text-6xl xl:text-4xl 2xl:text-6xl font-redhat tracking-tight leading-tight">
              Hello, I&apos;m <br />
              <span className="text-[#0d9488]">Rifki Bayu</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-jakarta leading-relaxed pt-2">
              Full-stack web developer passionate about engineering clean, high-performance web applications and modern digital solutions.
            </p>

            {/* Social Links with Tactile Spring Motion */}
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
          <h2 className="font-redhat md:text-5xl 2xl:text-6xl text-slate-900 font-extrabold tracking-tight leading-tight text-right">
            Software<br></br>
            <span className="text-[#0d9488]">Developer</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
