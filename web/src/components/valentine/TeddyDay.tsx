import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TeddyDay = () => {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section
      ref={ref}
      className="valentine-section"
      style={{
        background: "linear-gradient(180deg, hsl(20 40% 75%) 0%, hsl(30 50% 85%) 50%, hsl(35 60% 90%) 100%)",
      }}
    >
      <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-valentine-warm/50 uppercase tracking-[0.3em] text-sm font-body mb-3">Day 4 — February 10</p>
        <h2 className="text-5xl md:text-7xl font-serif-display text-valentine-chocolate font-bold mb-6">
          Teddy Day
        </h2>
      </div>

      {/* Teddy Bear SVG */}
      <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100 animate-breathe" : "opacity-0 scale-75"}`}>
        <svg width="220" height="220" viewBox="0 0 220 220" className="drop-shadow-xl">
          {/* Ears */}
          <circle cx="65" cy="45" r="30" fill="hsl(30 40% 55%)" />
          <circle cx="65" cy="45" r="18" fill="hsl(30 50% 70%)" />
          <circle cx="155" cy="45" r="30" fill="hsl(30 40% 55%)" />
          <circle cx="155" cy="45" r="18" fill="hsl(30 50% 70%)" />
          {/* Head */}
          <circle cx="110" cy="85" r="55" fill="hsl(30 40% 60%)" />
          {/* Body */}
          <ellipse cx="110" cy="165" rx="55" ry="50" fill="hsl(30 40% 58%)" />
          {/* Belly */}
          <ellipse cx="110" cy="170" rx="35" ry="32" fill="hsl(30 50% 72%)" />
          {/* Eyes */}
          <circle cx="90" cy="78" r="6" fill="hsl(30 20% 15%)" />
          <circle cx="130" cy="78" r="6" fill="hsl(30 20% 15%)" />
          <circle cx="92" cy="76" r="2" fill="white" />
          <circle cx="132" cy="76" r="2" fill="white" />
          {/* Nose */}
          <ellipse cx="110" cy="93" rx="10" ry="7" fill="hsl(30 30% 30%)" />
          <ellipse cx="110" cy="91" rx="4" ry="2" fill="hsl(30 20% 45%)" />
          {/* Mouth */}
          <path d="M104 100 Q110 108 116 100" stroke="hsl(30 30% 30%)" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Arms */}
          <ellipse cx="55" cy="150" rx="18" ry="30" transform="rotate(20 55 150)" fill="hsl(30 40% 55%)" />
          <ellipse cx="165" cy="150" rx="18" ry="30" transform="rotate(-20 165 150)" fill="hsl(30 40% 55%)" />
          {/* Heart */}
          <g transform="translate(97, 155) scale(0.8)">
            <path d="M13 3C7 -2 0 4 0 10c0 8 13 15 13 15s13-7 13-15c0-6-7-12-13-7z" fill="hsl(350 80% 60%)" />
          </g>
        </svg>
      </div>

      <div className={`mt-8 text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-xl md:text-2xl font-serif-display italic text-valentine-chocolate/70 max-w-md mx-auto">
          "Sometimes all you need is a warm hug and someone to hold"
        </p>
      </div>
    </section>
  );
};

export default TeddyDay;
