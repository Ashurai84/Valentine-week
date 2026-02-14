import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const chocolates = [
  { emoji: "🍫", name: "Dark Delight", note: "Intense, like our connection" },
  { emoji: "🍬", name: "Sweet Caramel", note: "Warm and comforting" },
  { emoji: "🧁", name: "Truffle Kiss", note: "A little surprise inside" },
  { emoji: "🍩", name: "Cocoa Dream", note: "Rich and unforgettable" },
  { emoji: "🎂", name: "Velvet Heart", note: "Soft and irresistible" },
  { emoji: "🍪", name: "Cookie Love", note: "Classic and timeless" },
];

const ChocolateDay = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      ref={ref}
      className="valentine-section py-20"
      style={{
        background: "linear-gradient(180deg, hsl(350 80% 90%) 0%, hsl(20 50% 85%) 40%, hsl(20 40% 75%) 100%)",
      }}
    >
      <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-valentine-chocolate/50 uppercase tracking-[0.3em] text-sm font-body mb-3">Day 3 — February 9</p>
        <h2 className="text-5xl md:text-7xl font-serif-display text-valentine-chocolate font-bold mb-4">
          Chocolate Day
        </h2>
        <p className="text-xl md:text-2xl font-serif-display italic text-valentine-chocolate/70 max-w-lg mx-auto">
          "Life is sweeter with you"
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto px-4">
        {chocolates.map((choco, i) => (
          <div
            key={choco.name}
            className={`group relative bg-card/60 backdrop-blur-sm rounded-2xl p-6 text-center cursor-pointer
                        transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-valentine-warm/20
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="text-5xl mb-3 group-hover:animate-float">{choco.emoji}</div>
            <h3 className="font-serif-display text-valentine-chocolate font-semibold text-lg">{choco.name}</h3>
            <p className="text-valentine-chocolate/50 text-sm font-body mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {choco.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChocolateDay;
