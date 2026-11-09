import SectionTitle from "@/components/ui/SectionTitle";
import { educationData } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const educationHistory = educationData;

  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Subtle Vector Dots */}
      <svg
        className="absolute left-0 top-1/3 w-36 h-64 opacity-25 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="edu-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#94a3b8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#edu-dots)" />
      </svg>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <Reveal>
          <SectionTitle title="Education" tag="02 // Academic" />
        </Reveal>

        {/* Clean Solid Roadmap Timeline */}
        <div className="relative mt-8">
          {/* Central Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-[#20e9bd]" />

          {/* Left Vertical Line (Mobile) */}
          <div className="md:hidden absolute left-4 top-3 bottom-3 w-0.5 bg-[#20e9bd]" />

          <div className="space-y-12 md:space-y-16">
            {educationHistory.map((edu, index) => {
              const isEven = index % 2 === 0;
              const isPresent = edu.period.toLowerCase().includes("present");

              return (
                <div
                  key={edu.id}
                  className="relative flex flex-col md:flex-row items-start md:items-center group"
                >
                  {/* Desktop Alternating: Left Content */}
                  <div
                    className={`hidden md:block md:w-1/2 ${
                      isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12 md:text-left"
                    }`}
                  >
                    <Reveal
                      direction={isEven ? "left" : "right"}
                      delay={index * 150}
                    >
                      <div className="inline-block p-5 rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:bg-slate-50 relative">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold text-slate-900 bg-[#20e9bd] rounded-full shadow-2xs group-hover:scale-105 transition-transform">
                          <GraduationCap className="w-3.5 h-3.5" />
                          <span>{edu.period}</span>
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-redhat text-slate-900 mt-2 group-hover:text-[#0d9488] transition-colors">
                          {edu.institution}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-[#0d9488] mt-1">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-slate-600 mt-0.5">
                          {edu.major}
                        </p>
                      </div>
                    </Reveal>
                  </div>

                  {/* Center Node Dot (Desktop) with Interactive Scale & Living Pulse */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                    <div className="relative flex items-center justify-center">
                      {isPresent && (
                        <span className="absolute w-7 h-7 rounded-full bg-[#20e9bd] animate-ping opacity-40" />
                      )}
                      <div className="w-5 h-5 rounded-full bg-[#20e9bd] ring-4 ring-white shadow-xs relative z-10 transition-transform duration-300 ease-out group-hover:scale-130" />
                    </div>
                  </div>

                  {/* Desktop Alternating: Right Spacer / Empty Balance */}
                  <div
                    className={`hidden md:block md:w-1/2 ${
                      isEven ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12"
                    }`}
                  />

                  {/* Mobile Layout (Stacked with left dot) */}
                  <div className="md:hidden flex items-start gap-5 pl-1">
                    {/* Node Dot with Living Pulse */}
                    <div className="relative flex items-center justify-center shrink-0 mt-0.5 z-10">
                      {isPresent && (
                        <span className="absolute w-8 h-8 rounded-full bg-[#20e9bd] animate-ping opacity-40" />
                      )}
                      <div className="w-6 h-6 rounded-full bg-[#20e9bd] ring-4 ring-white shadow-xs relative z-10 transition-transform duration-300 group-hover:scale-125" />
                    </div>

                    {/* Content */}
                    <Reveal delay={index * 120} direction="up">
                      <div className="space-y-1 pb-2 transition-transform duration-300 group-hover:-translate-y-1">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold text-slate-900 bg-[#20e9bd] rounded-full shadow-2xs">
                          <GraduationCap className="w-3.5 h-3.5" />
                          <span>{edu.period}</span>
                        </span>
                        <h3 className="text-xl font-bold font-redhat text-slate-900 pt-1 group-hover:text-[#0d9488] transition-colors">
                          {edu.institution}
                        </h3>
                        <p className="text-sm font-semibold text-[#0d9488]">
                          {edu.degree}
                        </p>
                        <p className="text-xs text-slate-600">
                          {edu.major}
                        </p>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
