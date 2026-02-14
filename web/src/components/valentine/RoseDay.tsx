import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const RoseDay = () => {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section
      ref={ref}
      className="valentine-section"
      style={{
        background: "linear-gradient(180deg, hsl(350 100% 96%) 0%, hsl(350 100% 88%) 50%, hsl(350 70% 75%) 100%)",
      }}
    >
      {/* Floating petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.3}s`,
            }}
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="hsl(350 70% 55%)">
              <ellipse cx="15" cy="15" rx="8" ry="14" transform="rotate(30 15 15)" />
            </svg>
          </div>
        ))}
      </div>

      {/* Rose SVG */}
      <div className={`transition-all duration-1500 ${isVisible ? "animate-bloom" : "opacity-0 scale-50"}`}>
        <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-2xl">
          {/* Stem */}
          <line x1="100" y1="130" x2="100" y2="200" stroke="hsl(120 40% 35%)" strokeWidth="4" strokeLinecap="round" />
          {/* Leaves */}
          <ellipse cx="85" cy="165" rx="15" ry="8" transform="rotate(-30 85 165)" fill="hsl(120 40% 40%)" />
          <ellipse cx="115" cy="175" rx="15" ry="8" transform="rotate(30 115 175)" fill="hsl(120 40% 40%)" />
          {/* Outer petals */}
          <ellipse cx="100" cy="75" rx="35" ry="50" fill="hsl(350 80% 60%)" />
          <ellipse cx="65" cy="95" rx="30" ry="45" transform="rotate(-30 65 95)" fill="hsl(350 75% 55%)" />
          <ellipse cx="135" cy="95" rx="30" ry="45" transform="rotate(30 135 95)" fill="hsl(350 75% 55%)" />
          {/* Inner petals */}
          <ellipse cx="100" cy="85" rx="25" ry="35" fill="hsl(350 85% 65%)" />
          <ellipse cx="85" cy="95" rx="20" ry="30" transform="rotate(-15 85 95)" fill="hsl(350 90% 70%)" />
          <ellipse cx="115" cy="95" rx="20" ry="30" transform="rotate(15 115 95)" fill="hsl(350 90% 70%)" />
          {/* Center */}
          <circle cx="100" cy="95" r="15" fill="hsl(350 95% 75%)" />
          <circle cx="100" cy="92" r="8" fill="hsl(350 100% 80%)" />
        </svg>
      </div>

      <div className={`mt-10 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-valentine-rose/60 uppercase tracking-[0.3em] text-sm font-body mb-3">Day 1 — February 7</p>
        <h2 className="text-5xl md:text-7xl font-serif-display text-valentine-deep font-bold mb-4">
          Rose Day
        </h2>
        <p className="text-xl md:text-2xl font-serif-display italic text-valentine-rose/80 max-w-lg mx-auto">
          "Every love story begins with a single bloom..."
        </p>
      </div>

      <div className={`mt-8 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <svg width="40" height="40" viewBox="0 0 24 24" className="animate-bounce text-valentine-rose/40 mx-auto">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
};

export default RoseDay;
