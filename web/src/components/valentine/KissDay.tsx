import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const KissDay = () => {
  const { ref, isVisible } = useScrollReveal(0.3);
  const [kisses, setKisses] = useState<{ id: number; left: number }[]>([]);

  const handleSendKiss = () => {
    const newKiss = {
      id: Date.now(),
      left: Math.random() * 90, // Random horizontal position
    };
    setKisses((prev) => [...prev, newKiss]);

    // Remove kiss after animation
    setTimeout(() => {
      setKisses((prev) => prev.filter((k) => k.id !== newKiss.id));
    }, 3000);
  };

  return (
    <section
      ref={ref}
      className="valentine-section py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(340 80% 85%) 0%, hsl(350 70% 80%) 100%)",
      }}
    >
      {/* Floating Kisses Container */}
      {kisses.map((kiss) => (
        <div
          key={kiss.id}
          className="absolute bottom-0 text-4xl animate-float-up opacity-0"
          style={{
            left: `${kiss.left}%`,
            animation: "floatUp 3s ease-out forwards",
          }}
        >
          💋
        </div>
      ))}

      <div className={`text-center transition-all duration-1000 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-valentine-deep/60 uppercase tracking-[0.3em] text-sm font-body mb-3">Day 7 — The Sweetest Moment</p>
        <h2 className="text-6xl md:text-8xl font-serif-display text-valentine-deep font-bold mb-6 drop-shadow-sm">
          Kiss Day 💋
        </h2>

        {/* Apocalypse Lyrics - Uniquely styled */}
        <div className="relative inline-block my-8 group cursor-default">
          <div className="absolute -inset-1 blur-lg bg-pink-400 opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative px-8 py-4 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 shadow-lg transform transition hover:scale-105 duration-500">
            <p className="font-serif-display text-2xl md:text-3xl italic text-valentine-deep/90 leading-tight">
              "Your lips, my lips,<br />
              <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-600 animate-pulse block my-2">Apocalypse</span>
              <span className="text-5xl inline-block animate-bounce delay-75">🌪️</span> <span className="text-5xl inline-block animate-pulse delay-150">❤️</span>"
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl font-body text-valentine-deep/70 mb-10 max-w-lg mx-auto">
          Some moments are so powerful, they feel like the end of the world... and the beginning of a new one.
        </p>

        {/* Interactive Kiss Button */}
        <button
          onClick={handleSendKiss}
          className="group relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 scale-125 transform transition-transform active:scale-95"
        >
          <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 text-valentine-deep font-bold text-lg">
            Send a Digital Kiss 💋
          </span>
        </button>

        <p className="mt-4 text-valentine-rose/60 text-sm animate-pulse">
          (Tap repeatedly for a shower of love!)
        </p>

        {/* Central Visual */}
        <div className={`mt-12 transition-all duration-1000 delay-300 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
          <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 bg-valentine-pink/30 rounded-full animate-ping opacity-20"></div>
            <div className="relative bg-white/40 backdrop-blur-md rounded-full p-8 shadow-xl border border-white/50 flex items-center justify-center w-full h-full">
              <span className="text-7xl animate-breathe">😽</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-80vh) scale(1.5) rotate(20deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default KissDay;
