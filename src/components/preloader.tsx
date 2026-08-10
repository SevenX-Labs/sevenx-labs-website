"use client";

import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

type Phase = "loading" | "welcome" | "expanding" | "unveiling";

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("loading");
  const [isFinished, setIsFinished] = useState(false);

  // 1. Smooth & relaxed progress counter 0% -> 100%
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Slightly slower, natural pacing (1 to 3 per tick)
        const increment = Math.floor(Math.random() * 3) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // 2. When progress reaches 100%, trigger "welcome" phase
  useEffect(() => {
    if (progress === 100 && phase === "loading") {
      setPhase("welcome");
    }
  }, [progress, phase]);

  // 3. When phase is "welcome", wait 900ms then trigger "expanding"
  useEffect(() => {
    if (phase === "welcome") {
      const t = setTimeout(() => {
        setPhase("expanding");
      }, 900);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // 4. When phase is "expanding", wait 750ms then trigger "unveiling"
  useEffect(() => {
    if (phase === "expanding") {
      const t = setTimeout(() => {
        setPhase("unveiling");
      }, 750);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // 5. When phase is "unveiling", wait 800ms then unmount
  useEffect(() => {
    if (phase === "unveiling") {
      const t = setTimeout(() => {
        setIsFinished(true);
        if (onComplete) onComplete();
      }, 800);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-transform duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === "unveiling"
          ? "-translate-y-full pointer-events-none"
          : "translate-y-0"
      }`}
    >
      {/* Light background layer */}
      <div className="absolute inset-0 bg-[#EBE9F0] pointer-events-none z-0" />

      {/* Giant Typography Background Marquee */}
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center opacity-90 select-none overflow-hidden whitespace-nowrap pointer-events-none transition-opacity duration-300 ${
          phase === "expanding" || phase === "unveiling" ? "opacity-0" : "opacity-90"
        }`}
      >
        <div className="flex gap-10 items-center text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-black font-sans uppercase animate-marquee">
          <span>PRODUCT BUILDER</span>
          <span className="text-black font-mono font-bold text-3xl sm:text-5xl md:text-7xl">&lt;/&gt;</span>
          <span>AI INNOVATOR</span>
          <span className="text-black font-mono font-bold text-3xl sm:text-5xl md:text-7xl">&lt;/&gt;</span>
          <span>TECHNOLOGY PARTNER</span>
          <span className="text-black font-mono font-bold text-3xl sm:text-5xl md:text-7xl">&lt;/&gt;</span>
          <span>PRODUCT BUILDER</span>
          <span className="text-black font-mono font-bold text-3xl sm:text-5xl md:text-7xl">&lt;/&gt;</span>
          <span>AI INNOVATOR</span>
          <span className="text-black font-mono font-bold text-3xl sm:text-5xl md:text-7xl">&lt;/&gt;</span>
          <span>TECHNOLOGY PARTNER</span>
          <span className="text-black font-mono font-bold text-3xl sm:text-5xl md:text-7xl">&lt;/&gt;</span>
        </div>
      </div>

      {/* Outer wrapper for pill shadow */}
      <div className="relative z-30 flex items-center justify-center">
        {/* Subtle Ambient Shadow */}
        {phase !== "expanding" && phase !== "unveiling" && (
          <div className="absolute -inset-1 bg-black/20 rounded-full blur-md pointer-events-none" />
        )}

        {/* Central Pure Solid Black Pill Badge */}
        <div
          className={`relative z-10 flex items-center justify-center bg-[#000000] text-white transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            phase === "expanding" || phase === "unveiling"
              ? "w-[240px] h-[64px] rounded-[32px] scale-[45] shadow-none border-none"
              : "w-auto h-auto rounded-full border border-white/20 shadow-2xl scale-100"
          }`}
        >
          {/* Inner Content (LOADING or WELCOME) */}
          <div
            className={`flex items-center justify-center gap-3 px-8 py-3.5 text-white transition-opacity duration-200 ${
              phase === "expanding" || phase === "unveiling"
                ? "opacity-0"
                : "opacity-100"
            }`}
          >
            {phase === "loading" ? (
              <>
                {/* LOADING STATE */}
                <span className="text-xs font-bold tracking-[0.2em] text-white uppercase font-mono">
                  LOADING
                </span>
                <div className="flex items-center gap-2 ml-2">
                  <span className="text-xs font-mono font-semibold text-zinc-300 min-w-[28px] text-right">
                    {progress}%
                  </span>
                  <span
                    className="w-2.5 h-3 bg-white rounded-[1px] shadow-[0_0_8px_rgba(255,255,255,0.9)] transition-opacity duration-150"
                    style={{ opacity: progress % 2 === 0 ? 1 : 0.4 }}
                  />
                </div>
              </>
            ) : (
              <>
                {/* WELCOME STATE - Clean text without block icon */}
                <span className="text-xs font-extrabold tracking-[0.25em] text-white uppercase font-mono">
                  WELCOME
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
