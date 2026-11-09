import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillsData } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  const skills = skillsData;

  return (
    <section id="skills" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative Vector Dot Grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="skills-dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#94a3b8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#skills-dots)" />
      </svg>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <Reveal>
          <SectionTitle title="Skills & Tools" tag="03 // Tech Stack" />
        </Reveal>

        {/* Clean Solid Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 mt-8">
          {skills.map((skill, index) => {
            const staggerDelay = (index % 6) * 45 + Math.floor(index / 6) * 90;

            return (
              <Reveal key={skill.name} delay={staggerDelay} direction="up">
                <div className="bg-white hover:bg-[#e6faf5] hover:-translate-y-2 hover:scale-[1.03] hover:shadow-md rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-default shadow-2xs">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 relative shrink-0 flex items-center justify-center">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={44}
                      height={44}
                      className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-115 group-hover:-rotate-3 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold font-jakarta text-slate-700 group-hover:text-[#0d9488] group-hover:font-bold text-center truncate max-w-full transition-all duration-200">
                    {skill.name}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
