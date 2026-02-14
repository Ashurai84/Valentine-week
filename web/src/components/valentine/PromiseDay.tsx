import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const PromiseDay = () => {
  const { ref, isVisible } = useScrollReveal(0.3);
  const [promise, setPromise] = useState("");
  const [sealed, setSealed] = useState(false);

  const handleSeal = () => {
    if (!promise.trim()) return;
    localStorage.setItem("valentine-promise", promise.trim());
    setSealed(true);
  };

  return (
    <section
      ref={ref}
      className="valentine-section"
      style={{
        background: "linear-gradient(180deg, hsl(35 60% 90%) 0%, hsl(350 40% 92%) 50%, hsl(340 50% 88%) 100%)",
      }}
    >
      <div className={`text-center max-w-xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-valentine-rose/50 uppercase tracking-[0.3em] text-sm font-body mb-3">Day 5 — February 11</p>
        <h2 className="text-5xl md:text-7xl font-serif-display text-valentine-deep font-bold mb-4">
          Promise Day
        </h2>
        <p className="text-xl md:text-2xl font-serif-display italic text-valentine-deep/60 mb-10">
          "Seal a promise from your heart"
        </p>

        {sealed ? (
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-valentine-pink/30">
              <p className="font-serif-display text-xl text-valentine-deep italic">"{promise}"</p>
            </div>
            {/* Seal stamp */}
            <div className="absolute -top-4 -right-4 animate-stamp">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="35" fill="hsl(350 70% 40%)" opacity="0.9" />
                <circle cx="40" cy="40" r="28" fill="none" stroke="hsl(350 100% 80%)" strokeWidth="2" />
                <text x="40" y="38" textAnchor="middle" fill="hsl(350 100% 90%)" fontSize="10" fontFamily="serif" fontWeight="bold">
                  SEALED
                </text>
                <text x="40" y="50" textAnchor="middle" fill="hsl(350 100% 80%)" fontSize="7" fontFamily="serif">
                  WITH LOVE
                </text>
              </svg>
            </div>
            <p className="text-valentine-rose/50 text-sm font-body mt-6">Your promise is sealed 💌</p>
          </div>
        ) : (
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <textarea
              value={promise}
              onChange={(e) => setPromise(e.target.value)}
              placeholder="I promise to..."
              maxLength={200}
              className="w-full bg-card/60 backdrop-blur-sm rounded-2xl p-6 text-lg font-body text-valentine-deep
                         placeholder:text-valentine-rose/30 border border-valentine-pink/30 focus:border-valentine-rose/50
                         focus:outline-none focus:ring-2 focus:ring-valentine-rose/20 resize-none min-h-[120px]
                         transition-all duration-300"
            />
            <button
              onClick={handleSeal}
              disabled={!promise.trim()}
              className="mt-6 px-10 py-3 bg-valentine-rose text-primary-foreground rounded-full text-lg font-body font-semibold
                         shadow-lg hover:scale-105 active:scale-95 transition-all duration-300
                         disabled:opacity-40 disabled:hover:scale-100"
            >
              Seal My Promise 💍
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PromiseDay;
