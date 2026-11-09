"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
  direction = "up",
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    // Trigger reveal if already in viewport on mount, or observe
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-7 scale-[0.98]";
      case "down":
        return "-translate-y-7 scale-[0.98]";
      case "left":
        return "-translate-x-7 scale-[0.98]";
      case "right":
        return "translate-x-7 scale-[0.98]";
      case "scale":
        return "scale-95";
      case "fade":
      default:
        return "translate-y-0 scale-100";
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all transform ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${getInitialTransform()}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
