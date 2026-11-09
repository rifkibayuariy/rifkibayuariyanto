import SectionTitle from "@/components/ui/SectionTitle";
import { experienceData } from "@/data/portfolio";
import { MapPin, Building2, Briefcase } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import DeveloperIllustration from "@/components/ui/DeveloperIllustration";

export default function Experience() {
  const exp = experienceData[0];

  const techStack = [
    "PHP",
    "CodeIgniter",
    "MySQL",
    "JavaScript",
    "Bootstrap",
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Vector Dot Grid */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-64 opacity-25 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="exp-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#94a3b8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#exp-dots)" />
      </svg>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <Reveal>
          <SectionTitle title="Experience" tag="01 // Career" />
        </Reveal>

        {/* Experience Showcase Card with Developer Illustration */}
        <Reveal delay={150}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xs hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6 relative">
            {/* Corner Crosshair Marks */}
            <span className="absolute top-4 right-4 text-slate-200 font-mono text-xs select-none">+</span>
            <span className="absolute bottom-4 left-4 text-slate-200 font-mono text-xs select-none">+</span>

            {/* Left Column: Concise & Honest Career Information (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 bg-[#20e9bd] text-slate-950 font-mono text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-jakarta">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.location}</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-redhat text-slate-900 tracking-tight">
                  {exp.role}
                </h3>

                <p className="text-slate-700 font-bold font-jakarta text-base sm:text-lg flex items-center gap-2 mt-1">
                  <Building2 className="w-4 h-4 text-[#0d9488]" />
                  <span>{exp.company}</span>
                </p>
              </div>

              <p className="text-slate-600 font-jakarta text-sm sm:text-base leading-relaxed max-w-xl">
                {exp.description}
              </p>

              {/* Technologies Used */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold font-jakarta rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metric Pillar */}
              <div className="pt-3 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold font-redhat text-[#0d9488]">
                  {exp.yearsOfExperience}+
                </span>
                <span className="text-xs font-bold text-slate-400 font-jakarta uppercase tracking-wider">
                  Years of Industry Production Experience
                </span>
              </div>
            </div>

            {/* Right Column: Animated Working Developer Illustration (5 cols on lg) */}
            <div className="lg:col-span-5 flex items-center justify-center pt-4 lg:pt-0">
              <DeveloperIllustration />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
