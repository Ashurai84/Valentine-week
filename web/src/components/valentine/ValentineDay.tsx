import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ValentineDay = () => {
    const { ref, isVisible } = useScrollReveal(0.3);
    const [isRead, setIsRead] = useState(false);

    return (
        <section
            ref={ref}
            className="valentine-section py-20 min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center"
            style={{
                background: "linear-gradient(180deg, hsl(350 50% 60%) 0%, hsl(340 60% 30%) 100%)",
            }}
        >
            {/* Background decoration - Updated as requested */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 text-white/5 text-9xl animate-float">✨</div>
                <div className="absolute bottom-20 right-20 text-white/5 text-8xl animate-sway">🌙</div>
                <div className="absolute top-1/2 left-1/4 text-white/5 text-9xl animate-pulse-glow">🕊️</div>
            </div>

            <div className={`relative z-10 max-w-4xl px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <p className="text-white/60 uppercase tracking-[0.4em] text-sm font-body mb-6 animate-in slide-in-from-top-4 duration-1000">
                    The Unspoken Truth — February 14
                </p>

                <h2 className="text-5xl md:text-7xl font-serif-display text-white font-bold mb-4 drop-shadow-lg leading-tight">
                    In love there is death,<br />not liberation 🥀
                </h2>

                <div className="w-24 h-px bg-white/30 mx-auto my-8" />

                {!isRead ? (
                    <button
                        onClick={() => setIsRead(true)}
                        className="group relative px-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full 
                       text-white font-serif-display text-xl transition-all duration-500 hover:bg-white/20 hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Unveil the Feeling <span className="animate-bounce">📖</span>
                        </span>
                    </button>
                ) : (
                    <div className="animate-in fade-in zoom-in duration-1000 bg-black/20 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
                        <p className="font-serif-display text-lg md:text-2xl text-white/90 leading-relaxed italic relative">
                            <span className="opacity-50 text-6xl leading-none absolute -top-8 -left-8">"</span>
                            I know that you love me ... but it isn't necessary that I must love you too ... <span className="text-4xl inline-block animate-pulse align-middle ml-2">❤️‍🔥</span>
                            <br /><br />
                            You may drive the entire city crazy in your frenzy ... but it isn't necessary that I cry out in pain too ... <span className="text-4xl inline-block animate-bounce align-middle ml-2">🌧️</span>
                            <br /><br />
                            It's possible that your craziness will scare me ... but it isn't necessary that I get scared too ... <span className="text-4xl inline-block animate-spin-slow align-middle ml-2">🌪️</span>
                            <br /><br />
                            You may bow your head in temples and before idols ... but it isn't necessary that you will attain salvation too. <span className="text-4xl inline-block animate-pulse align-middle ml-2">🙏✨</span>
                            <span className="opacity-50 text-6xl leading-none absolute -bottom-8 -right-8">"</span>
                        </p>
                        <div className="mt-8 flex justify-center gap-4 opacity-70">
                            <span className="text-2xl animate-pulse">🕯️</span>
                            <span className="text-2xl animate-pulse delay-700">📜</span>
                            <span className="text-2xl animate-pulse delay-500">🌌</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ValentineDay;
