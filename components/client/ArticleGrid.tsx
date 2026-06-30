"use client";

export function ArticleGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 border-t border-[rgba(255,255,255,0.06)]">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-white">Insights on neural logic</h2>
          <p className="text-[#888888] text-lg">Deep dives into architecture, performance, and scaling AI in production.</p>
        </div>
        <button className="hidden md:flex border border-[rgba(255,255,255,0.2)] text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest font-mono hover:bg-white hover:text-black transition-colors">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[600px]">
        {/* Left Column (Featured) */}
        <div className="lg:col-span-7 group cursor-pointer flex flex-col bg-[rgba(20,20,20,0.4)] backdrop-blur-[16px] border-[0.5px] border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] h-[500px] lg:h-full">
          <div className="w-full h-[60%] overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop" 
              alt="AI Business Asset"
              className="w-full h-full object-cover object-center grayscale brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
          </div>
          <div className="p-8 flex flex-col justify-end flex-grow">
            <div className="flex gap-4 mb-4">
              <span className="text-[#7a7a7a] text-[10px] uppercase tracking-[0.2em] font-mono">Oct 24, 2026</span>
              <span className="text-[#7a7a7a] text-[10px] uppercase tracking-[0.2em] font-mono">12 Min Read</span>
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
              What It Takes To Turn AI Into a Business Asset
            </h3>
            <p className="text-[#888888] mt-4 line-clamp-2">
              Discover the architectural shifts required to move from experimental prompt engineering to robust, deterministic autonomous systems deployed at planetary scale.
            </p>
          </div>
        </div>

        {/* Right Column (List) */}
        <div className="lg:col-span-5 flex flex-col gap-6 h-[800px] lg:h-full">
          
          {/* Side 1 */}
          <div className="flex-1 group cursor-pointer flex flex-col bg-[rgba(20,20,20,0.4)] backdrop-blur-[16px] border-[0.5px] border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <div className="w-full h-[55%] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop" 
                alt="AI Outputs"
                className="w-full h-full object-cover object-center grayscale brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
            </div>
            <div className="p-6 flex flex-col justify-end flex-grow">
              <div className="flex gap-4 mb-3">
                <span className="text-[#7a7a7a] text-[10px] uppercase tracking-[0.2em] font-mono">Oct 18, 2026</span>
                <span className="text-[#7a7a7a] text-[10px] uppercase tracking-[0.2em] font-mono">8 Min Read</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors leading-snug">
                Why Your AI Outputs Feel Inconsistent
              </h3>
            </div>
          </div>

          {/* Side 2 */}
          <div className="flex-1 group cursor-pointer flex flex-col bg-[rgba(20,20,20,0.4)] backdrop-blur-[16px] border-[0.5px] border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <div className="w-full h-[55%] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2940&auto=format&fit=crop" 
                alt="Prompting Shift"
                className="w-full h-full object-cover object-center grayscale brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
            </div>
            <div className="p-6 flex flex-col justify-end flex-grow">
              <div className="flex gap-4 mb-3">
                <span className="text-[#7a7a7a] text-[10px] uppercase tracking-[0.2em] font-mono">Oct 02, 2026</span>
                <span className="text-[#7a7a7a] text-[10px] uppercase tracking-[0.2em] font-mono">14 Min Read</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors leading-snug">
                From Prompting to Systems: The Real Shift in AI
              </h3>
            </div>
          </div>

        </div>
      </div>
      
      <div className="md:hidden mt-8 flex justify-center">
        <button className="border border-[rgba(255,255,255,0.2)] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-mono hover:bg-white hover:text-black transition-colors w-full font-bold">
          View All Insights
        </button>
      </div>
    </section>
  );
}
