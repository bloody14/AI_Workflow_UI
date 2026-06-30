"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Armory handle data privacy?",
      answer: "All data is processed using end-to-end military-grade encryption. We never train our base models on your proprietary datasets without explicit enterprise-level consent."
    },
    {
      question: "Can I deploy agents on-premise?",
      answer: "Yes, enterprise customers can deploy the Armory engine entirely on-premise or within a private VPC to meet stringent compliance requirements."
    },
    {
      question: "What is the typical inference latency?",
      answer: "Our distributed edge network guarantees p95 inference latency under 20ms for standard payload sizes, ensuring real-time responsiveness."
    },
    {
      question: "How are tokens calculated?",
      answer: "Tokens are calculated based on both input prompts and generated output. We offer tiered volume discounts automatically applied at the end of each billing cycle."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left Column */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Common inquiries</h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Everything you need to know about the product, architecture, and billing infrastructure.
          </p>
        </div>

        {/* Right Column: Interactive Accordion */}
        <div className="w-full lg:w-2/3 flex flex-col border-t border-t-[rgba(255,255,255,0.06)]">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div key={index} className="border-b border-b-[rgba(255,255,255,0.06)]">
                <button
                  id={headerId}
                  aria-expanded={isActive}
                  aria-controls={contentId}
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-sm"
                >
                  <span className="text-xl font-medium text-neutral-200">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 ml-4 transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-500'}`}
                    aria-hidden="true"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-neutral-400 text-lg leading-relaxed pr-12">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
