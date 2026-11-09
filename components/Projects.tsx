"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { projectsData } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  LayoutGrid,
  SlidersHorizontal,
  ExternalLink,
} from "lucide-react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState<"bento" | "slideshow">("bento");

  const projects = projectsData;
  const currentProject = projects[activeIndex];

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 45;

  const handleNext = useCallback(() => {
    setSlideDirection("next");
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 450);
  }, [projects.length]);

  const handlePrev = useCallback(() => {
    setSlideDirection("prev");
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 450);
  }, [projects.length]);

  const handleDotClick = (index: number) => {
    if (index === activeIndex) return;
    setSlideDirection(index > activeIndex ? "next" : "prev");
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 450);
  };

  useEffect(() => {
    if (viewMode !== "slideshow" || isPaused || projects.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(timer);
  }, [viewMode, isPaused, handleNext, projects.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Corner Engineering Crosshairs */}
      <div className="hidden md:block absolute top-12 left-10 text-slate-300 font-mono text-sm select-none pointer-events-none">
        +
      </div>
      <div className="hidden md:block absolute bottom-12 right-10 text-slate-300 font-mono text-sm select-none pointer-events-none">
        +
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header with Title and Layout View Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <Reveal>
            <SectionTitle title="Featured Projects" tag="04 // Portfolio" />
          </Reveal>

          {/* Morph Segmented View Switcher */}
          <Reveal delay={150}>
            <div className="relative inline-flex p-1 bg-white rounded-2xl shadow-xs shrink-0 self-start sm:self-auto overflow-hidden">
              {/* Sliding Morph Pill Indicator */}
              <div
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-xl bg-[#20e9bd] transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  viewMode === "bento" ? "translate-x-0" : "translate-x-full"
                }`}
              />
              <button
                onClick={() => setViewMode("bento")}
                className={`relative z-10 flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-colors duration-200 cursor-pointer ${
                  viewMode === "bento"
                    ? "text-slate-950 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
              <button
                onClick={() => setViewMode("slideshow")}
                className={`relative z-10 flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-colors duration-200 cursor-pointer ${
                  viewMode === "slideshow"
                    ? "text-slate-950 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Slideshow</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* View Mode 1: Clean Solid Projects Grid */}
        {viewMode === "bento" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            {projects.map((proj, idx) => {
              const isFeatured = proj.featured;
              const cardDelay = (idx % 3) * 90;

              return (
                <Reveal
                  key={proj.title}
                  delay={cardDelay}
                  className={isFeatured ? "lg:col-span-2" : ""}
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-2 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between group h-full">
                    {/* Top: Image Preview */}
                    <div
                      className={`relative w-full overflow-hidden bg-slate-200 ${
                        isFeatured ? "h-64 sm:h-80" : "h-52 sm:h-60"
                      }`}
                    >
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-106"
                      />
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-900 bg-white/95 px-3 py-1 rounded-full shadow-xs">
                          {proj.category}
                        </span>
                        {isFeatured && (
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#20e9bd] px-2.5 py-1 rounded-full shadow-xs">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom: Info and Actions */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-5">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-xl sm:text-2xl font-bold font-redhat text-slate-900 group-hover:text-[#0d9488] transition-colors duration-200">
                            {proj.title}
                          </h3>
                          <Link
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${proj.title}`}
                            className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:bg-[#20e9bd] group-hover:bg-[#20e9bd] group-hover:text-slate-950 active:scale-95 transition-all duration-200 shrink-0"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </div>

                        <p className="text-slate-600 font-jakarta text-sm leading-relaxed">
                          {proj.description}
                        </p>

                        {/* Tech Tags */}
                        {proj.tags && proj.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {proj.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs font-medium font-jakarta text-slate-600 bg-slate-100 group-hover:bg-[#e6faf5] group-hover:text-[#0d9488] px-2.5 py-1 rounded-lg transition-colors duration-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Launch Link Button with Tactile Feedback */}
                      <div className="pt-2">
                        <Link
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold font-jakarta text-slate-900 bg-slate-100 hover:bg-[#20e9bd] hover:text-slate-950 active:scale-95 px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer"
                        >
                          <span>Visit Project</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-700" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        ) : (
          /* View Mode 2: Minimalist PowerPoint Morph Slideshow with Sliding Track Motion */
          <div
            className="space-y-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Active Project Card with Morph Slide Animation */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row gap-8 items-center overflow-hidden">
              {/* Image Column with Directional Morph Slide */}
              <div className="w-full md:w-3/5 h-64 sm:h-96 relative rounded-2xl overflow-hidden bg-slate-200">
                <div
                  key={`slide-img-${activeIndex}`}
                  style={{
                    animation: `${slideDirection === "next" ? "slideInNext" : "slideInPrev"} 0.5s cubic-bezier(0.16, 1, 0.3, 1) both`,
                  }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out hover:scale-104"
                    priority
                  />
                </div>
              </div>

              {/* Text Info Column with Staggered Slide In */}
              <div
                key={`slide-info-${activeIndex}`}
                style={{
                  animation: `${slideDirection === "next" ? "slideInNext" : "slideInPrev"} 0.5s cubic-bezier(0.16, 1, 0.3, 1) both`,
                }}
                className="w-full md:w-2/5 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 bg-[#e6faf5] px-3 py-1 rounded-full">
                      {currentProject.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono font-medium">
                      0{activeIndex + 1} / 0{projects.length}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-redhat text-slate-900">
                    {currentProject.title}
                  </h3>

                  <p className="text-slate-600 font-jakarta text-sm sm:text-base leading-relaxed">
                    {currentProject.description}
                  </p>

                  {/* Tags */}
                  {currentProject.tags && currentProject.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {currentProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium font-jakarta text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <Link
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#20e9bd] text-slate-950 font-bold text-sm hover:bg-[#1cd2aa] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-xs"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <div className="flex items-center gap-2 ml-auto">
                    <button
                      onClick={handlePrev}
                      disabled={isAnimating}
                      aria-label="Previous project"
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-800 flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={isAnimating}
                      aria-label="Next project"
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-800 flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Morph Navigation Dots / Bars */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {projects.map((proj, idx) => (
                <button
                  key={proj.title}
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full cursor-pointer ${
                    activeIndex === idx
                      ? "w-8 bg-[#20e9bd]"
                      : "w-2 bg-slate-300 hover:bg-slate-400 hover:w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
