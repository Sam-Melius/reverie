"use client";

import { useState } from "react";
import { lexend } from "../styles/fonts";
import { ShieldCheck, Cpu, AlertTriangle, Activity } from "lucide-react";

const painPoints = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Security Risks",
    description:
      "Outdated systems leave your business vulnerable to cyberattacks and data breaches.",
    bg: "/Manage.png",
  },
  {
    icon: <Cpu size={40} />,
    title: "Tech Overload",
    description:
      "Too many tools and no strategy? Disconnected platforms slow your team down.",
    bg: "/Protect.png",
  },
  {
    icon: <AlertTriangle size={40} />,
    title: "Reactive IT",
    description:
      "Waiting until something breaks wastes time, money, and customer trust.",
    bg: "/Innovate.png",
  },
  {
    icon: <Activity size={40} />,
    title: "Lack of Innovation",
    description:
      "Falling behind competitors who leverage tech to streamline operations and improve UX.",
    bg: "/PainPoint.png", // fallback
  },
];

export default function PainPointsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="pain"
      className={`relative w-full min-h-[80vh] bg-[#0b0b0b] text-white overflow-hidden ${lexend.className}`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${hoveredIndex !== null ? painPoints[hoveredIndex].bg : "/PainPoint.png"})`,
          opacity: 0.25,
        }}
      />

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0  z-0" />

      {/* Title */}
      <div className="relative z-10 text-center mb-12 pt-20">
        <h2 className="text-3xl md:text-5xl font-bold text-[rgb(0,82,220)]">
          Common Tech Pain Points
        </h2>
      </div>

      {/* Sliced columns */}
      <div className="relative z-10 flex h-full">
        {painPoints.map((point, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="w-1/4 border-l border-r border-white/10 backdrop-blur-sm px-6 py-12 transition-all duration-300 hover:backdrop-blur-md group flex flex-col justify-center items-center text-center"
          >
            <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              {point.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {point.title}
            </h3>
            <p className="text-white/70 text-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
