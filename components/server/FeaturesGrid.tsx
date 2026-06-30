import { Shield, Blocks, Cloud, Database } from "lucide-react";
import { BentoGrid, BentoItem } from "./BentoGrid";

export function FeaturesGrid() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-white mb-6" />,
      title: "Secure Guard",
      description: "Military-grade encryption for all neural logic deployments and parameter weights.",
    },
    {
      icon: <Blocks className="w-6 h-6 text-white mb-6" />,
      title: "Agent Build",
      description: "Compose multi-agent workflows with deterministic routing and fallback protocols.",
    },
    {
      icon: <Cloud className="w-6 h-6 text-white mb-6" />,
      title: "Cloud Scale",
      description: "Auto-scaling infrastructure that adapts to your inference load in milliseconds.",
    },
    {
      icon: <Database className="w-6 h-6 text-white mb-6" />,
      title: "Data Mining",
      description: "Extract structured insights from unstructured vector clusters efficiently.",
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Integrate with the world's<br />most powerful neural engines
        </h2>
      </div>
      
      <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <BentoItem key={i} className="flex flex-col items-start bg-[rgba(20,20,20,0.4)] backdrop-blur-[16px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:bg-neutral-900 transition-colors">
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {feature.description}
            </p>
          </BentoItem>
        ))}
      </BentoGrid>
    </section>
  );
}
