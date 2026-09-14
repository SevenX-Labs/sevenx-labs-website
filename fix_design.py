import re

with open('src/app/solutions/page.tsx', 'r') as f:
    content = f.read()

# Make MEASURABLE RESULTS section match the high-end premium aesthetic of the site (subtle borders, hover glow, backdrop blur)
old_results = '''      {/* VALUE PROPOSITION STRIP */}
      <section className="py-20 bg-zinc-950 text-white w-full border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              MEASURABLE RESULTS
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              Designed for Measurable Business Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-3">
              <TrendingUp className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="font-general text-xl font-bold uppercase text-white">Faster Time-to-Market</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Compress multi-month development cycles into focused 6-to-10 week release milestones without sacrificing technical quality.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-3">
              <Zap className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="font-general text-xl font-bold uppercase text-white">Automated Ops</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Eliminate manual data entry and routine workflows with custom AI pipelines engineered for continuous, always-on operation.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-3">
              <ShieldCheck className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="font-general text-xl font-bold uppercase text-white">Built to Last</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Production codebases written in TypeScript with strong test coverage, clear API documentation, and clean, modular architecture that keeps future maintenance costs low.
              </p>
            </div>
          </div>
        </div>
      </section>'''

new_results = '''      {/* VALUE PROPOSITION STRIP */}
      <section className="py-24 bg-zinc-950 text-white w-full border-t border-white/10 relative overflow-hidden">
        {/* Background Subtle Gradient & Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12 relative z-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              MEASURABLE RESULTS
            </span>
            <h2 className="font-general text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Designed for Measurable Business Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 md:p-10 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl flex flex-col gap-6 hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#3B82F6] group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-general text-xl font-extrabold uppercase text-white tracking-wide group-hover:text-blue-400 transition-colors">
                  Faster Time-to-Market
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                  Compress multi-month development cycles into focused 6-to-10 week release milestones without sacrificing technical quality.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl flex flex-col gap-6 hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#3B82F6] group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <Zap className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-general text-xl font-extrabold uppercase text-white tracking-wide group-hover:text-blue-400 transition-colors">
                  Automated Ops
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                  Eliminate manual data entry and routine workflows with custom AI pipelines engineered for continuous, always-on operation.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl flex flex-col gap-6 hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#3B82F6] group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-general text-xl font-extrabold uppercase text-white tracking-wide group-hover:text-blue-400 transition-colors">
                  Built to Last
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                  Production codebases written in TypeScript with strong test coverage, clear API documentation, and clean, modular architecture that keeps future maintenance costs low.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>'''

if old_results in content:
    content = content.replace(old_results, new_results)
    with open('src/app/solutions/page.tsx', 'w') as f:
        f.write(content)
    print("SUCCESS")
else:
    print("OLD NOT FOUND")
