import { ReactNode } from "react";

export function BentoGrid({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <div className={`grid border-l border-t border-t-[rgba(255,255,255,0.06)] ${className}`}>
      {children}
    </div>
  );
}

export function BentoItem({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <div className={`border-r border-b border-b-[rgba(255,255,255,0.06)] p-8 ${className}`}>
      {children}
    </div>
  );
}
