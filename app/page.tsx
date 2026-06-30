import dynamic from 'next/dynamic';
import { FeaturesGrid } from "@/components/server/FeaturesGrid";
import { Footer } from "@/components/server/Footer";
import { TrustTicker } from "@/components/client/TrustTicker";
import { VideoPlayer } from "@/components/client/VideoPlayer";
import { CaseStudies } from "@/components/client/CaseStudies";
import { FeatureTabs } from "@/components/client/FeatureTabs";
import { FAQAccordion } from "@/components/client/FAQAccordion";
import { OperationsDashboard } from "@/components/client/OperationsDashboard";
import { ArticleGrid } from "@/components/client/ArticleGrid";
import { WorkflowCanvas } from '@/components/client/WorkflowCanvas';
import { HeroMesh } from "@/components/client/DynamicHeroMesh";
import { ParticleBrain } from "@/components/client/DynamicParticleBrain";

// 1. IMPORT ADDED AT THE TOP
import { SystemMonitor } from "@/components/client/SystemMonitor";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-start">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col items-center justify-center border-b border-[rgba(255,255,255,0.06)] relative overflow-hidden">
        <HeroMesh />
        <div className="z-10 text-center px-4 mt-16">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl">
            Power your future<br />with AI
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Integrate seamlessly with the world's most advanced neural engines. Build logic at scale.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-neutral-200 transition-colors mx-auto shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Build a Workflow
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </section>

      <TrustTicker />
      <VideoPlayer />
      <CaseStudies />
      <WorkflowCanvas />
      <FeatureTabs />
      <FeaturesGrid />
      
      {/* 2. COMPONENT PLACED HERE */}
      <div className="w-full flex justify-center py-10">
        <SystemMonitor />
      </div>

      <OperationsDashboard />

      {/* Built for the long term - Particle Brain Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 border-t border-[rgba(255,255,255,0.06)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          <div className="w-full h-[500px] relative">
            <ParticleBrain />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">Built for the long term</h2>
            <p className="text-[#888888] text-lg mb-10 leading-relaxed">A robust architecture engineered to scale alongside your most ambitious logic clusters. Deep neural routing and resilient memory vectors ensure faultless execution.</p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col border-l-2 border-[rgba(255,255,255,0.2)] pl-6 py-1 transition-all hover:border-white">
                <h4 className="text-white font-bold tracking-tight text-xl mb-2">Persistent Vector State</h4>
                <p className="text-[#888888] text-sm leading-relaxed">Long-term episodic memory integration via deep RAG architectures.</p>
              </div>
              <div className="flex flex-col border-l-2 border-[rgba(255,255,255,0.2)] pl-6 py-1 transition-all hover:border-white">
                <h4 className="text-white font-bold tracking-tight text-xl mb-2">Self-Healing Logic</h4>
                <p className="text-[#888888] text-sm leading-relaxed">Automatic execution fallbacks and autonomous recovery nodes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArticleGrid />
      <FAQAccordion />
      <Footer />
    </main>
  );
}