"use client";

import dynamic from "next/dynamic";

export const HeroMesh = dynamic(
  () => import("@/components/client/HeroMesh").then((mod) => mod.HeroMesh),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black" />,
  }
);
