import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | SevenX Labs" },
  description: "The requested page could not be found. Return home or explore SevenX Labs services and portfolio.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D11] text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl flex flex-col items-center gap-6">
          <span className="px-3.5 py-1 bg-white/5 text-[#3B82F6] text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full border border-blue-500/30">
            404 — PAGE NOT FOUND
          </span>

          <h1 className="font-general text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Lost in the Stack?
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on track.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/"
              className="px-6 py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-all"
            >
              Return Home
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 bg-white/5 text-white border border-white/10 font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white/10 transition-all"
            >
              Explore Services
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 bg-white/5 text-white border border-white/10 font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white/10 transition-all"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-blue-500 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
