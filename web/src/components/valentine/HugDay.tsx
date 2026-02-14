import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const HugDay = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [closeness, setCloseness] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / vh));
      setCloseness(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gap = Math.max(0, 120 - closeness * 120);

  return (
    <section
      ref={(el: HTMLDivElement | null) => {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        sectionRef.current = el;
      }}
      className="valentine-section"
      style={{
        background: "linear-gradient(180deg, hsl(340 50% 88%) 0%, hsl(350 60% 85%) 50%, hsl(340 70% 80%) 100%)",
      }}
    >
      <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-valentine-deep/50 uppercase tracking-[0.3em] text-sm font-body mb-3">Day 6 — February 12</p>
        <h2 className="text-5xl md:text-7xl font-serif-display text-valentine-deep font-bold mb-4">
          Hug Day
        </h2>
        <p className="text-xl md:text-2xl font-serif-display italic text-valentine-deep/60 mb-12">
          "Come closer..."
        </p>
      </div>

      {/* Two figures moving closer */}
      <div className={`flex items-center justify-center transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div style={{ transform: `translateX(${gap}px)`, transition: "transform 0.1s ease-out" }}>
          <svg width="80" height="140" viewBox="0 0 80 140">
            <circle cx="40" cy="25" r="20" fill="hsl(350 60% 65%)" />
            <ellipse cx="40" cy="85" rx="22" ry="40" fill="hsl(350 60% 65%)" />
            {/* Arms reaching right */}
            <ellipse cx="62" cy="70" rx="20" ry="8" fill="hsl(350 55% 60%)" />
            <circle cx="40" cy="20" r="3" fill="white" opacity="0.5" />
          </svg>
        </div>

        {closeness > 0.7 && (
          <div className="animate-bloom">
            <svg width="40" height="40" viewBox="0 0 40 40" className="mx-[-10px]">
              <path d="M20 8C14 2 5 7 5 14c0 10 15 20 15 20s15-10 15-20c0-7-9-12-15-6z" fill="hsl(350 80% 60%)" opacity={Math.min(1, (closeness - 0.7) * 3.3)} />
            </svg>
          </div>
        )}

        <div style={{ transform: `translateX(-${gap}px)`, transition: "transform 0.1s ease-out" }}>
          <svg width="80" height="140" viewBox="0 0 80 140">
            <circle cx="40" cy="25" r="20" fill="hsl(25 60% 65%)" />
            <ellipse cx="40" cy="85" rx="22" ry="40" fill="hsl(25 60% 65%)" />
            {/* Arms reaching left */}
            <ellipse cx="18" cy="70" rx="20" ry="8" fill="hsl(25 55% 60%)" />
            <circle cx="40" cy="20" r="3" fill="white" opacity="0.5" />
          </svg>
        </div>
      </div>

      <p className={`mt-8 text-lg font-body text-valentine-deep/40 transition-all duration-500 ${closeness > 0.8 ? "opacity-100" : "opacity-0"}`}>
        ✨ Together at last ✨
      </p>
    </section>
  );
};

export default HugDay;
