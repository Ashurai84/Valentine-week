import { useState, useCallback } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ProposeDay = () => {
  const { ref, isVisible } = useScrollReveal(0.3);
  const [answered, setAnswered] = useState<"yes" | "no" | null>(null);
  const [noCount, setNoCount] = useState(0);
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; color: string; delay: number }>>([]);

  const noTexts = ["No 😢", "Are you sure? 🥺", "Really sure? 💔", "Think again! 😭", "Last chance! 🥹", "Okay fine... 😔"];

  const handleYes = useCallback(() => {
    setAnswered("yes");
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: ["hsl(350,80%,60%)", "hsl(350,100%,80%)", "hsl(25,70%,65%)", "hsl(350,100%,88%)"][i % 4],
      delay: Math.random() * 1.5,
    }));
    setConfetti(particles);
  }, []);

  const handleNo = () => {
    setNoCount((c) => Math.min(c + 1, noTexts.length - 1));
  };

  return (
    <section
      ref={ref}
      className="valentine-section"
      style={{
        background: "linear-gradient(180deg, hsl(350 70% 75%) 0%, hsl(340 60% 85%) 50%, hsl(350 80% 90%) 100%)",
      }}
    >
      {/* Confetti */}
      {confetti.map((p) => (
        <div
          key={p.id}
          className="confetti-particle rounded-full"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            width: `${8 + Math.random() * 8}px`,
            height: `${8 + Math.random() * 8}px`,
          }}
        />
      ))}

      <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-valentine-deep/50 uppercase tracking-[0.3em] text-sm font-body mb-3">Day 2 — February 8</p>
        <h2 className="text-5xl md:text-7xl font-serif-display text-valentine-deep font-bold mb-4">
          Propose Day
        </h2>
        <p className="text-xl md:text-2xl font-serif-display italic text-valentine-deep/70 max-w-lg mx-auto mb-12">
          "Will you be my Valentine?"
        </p>

        {answered === "yes" ? (
          <div className="animate-bloom">
            <p className="text-3xl md:text-5xl font-serif-display text-valentine-deep font-bold">
              Yay! 🎉💕
            </p>
            <p className="text-lg text-valentine-deep/60 mt-4 font-body">I knew you'd say yes!</p>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <button
              onClick={handleYes}
              className="px-12 py-4 bg-valentine-rose text-primary-foreground rounded-full text-xl font-bold font-body
                         shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-glow"
            >
              Yes! 💕
            </button>
            <button
              onClick={handleNo}
              className="px-8 py-3 border-2 border-valentine-deep/30 text-valentine-deep/60 rounded-full text-lg font-body
                         hover:scale-95 transition-all duration-300"
              style={{
                fontSize: `${Math.max(14, 18 - noCount * 2)}px`,
                opacity: Math.max(0.3, 1 - noCount * 0.15),
              }}
            >
              {noTexts[noCount]}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProposeDay;
