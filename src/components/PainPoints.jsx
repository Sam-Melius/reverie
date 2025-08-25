"use client";

import { useState } from "react";
import { roboto } from "../styles/fonts";
import { ShieldCheck, Cpu, AlertTriangle, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const painPoints = [
  {
    icon: <ShieldCheck size={50} />,
    title: "Security Risks",
    description:
      "Outdated or poorly maintained systems pose a significant threat to modern organizations, exposing them to a wide range of cybersecurity vulnerabilities. Data breaches, ransomware attacks, and system hijackings can lead to devastating financial losses, legal consequences, and permanent damage to a company’s reputation.",
    bg: "/SecurityRisk.png",
  },
  {
    icon: <Cpu size={50} />,
    title: "Tech Overload",
    description:
      "In today’s fast-paced digital environment, organizations often adopt numerous tools and platforms without a cohesive strategy in place. Without streamlined workflows and centralized control, your technology begins to work against you—creating confusion, delays, and unnecessary complexity.",
    bg: "/TechOverload.png",
  },
  {
    icon: <AlertTriangle size={50} />,
    title: "Reactive IT",
    description:
      "Relying on a break-fix approach to technology is no longer sustainable in today’s always-on digital landscape. This reactive model drains resources, disrupts workflows, and creates a culture of crisis response rather than strategic growth. Proactive monitoring, maintenance, and planning are essential to prevent issues before they happen and ensure long-term stability and customer confidence.",
    bg: "/Reactive.png",
  },
  {
    icon: <Activity size={50} />,
    title: "Lack of Innovation",
    description:
      "In a rapidly evolving digital world, failing to innovate can quietly cripple a business. While competitors leverage emerging technologies to automate workflows, enhance customer experiences, and optimize decision-making, companies without a clear innovation strategy fall behind. Relying on outdated systems and manual processes leads to inefficiencies, missed opportunities, and stagnant growth.",
    bg: "/Lack.png", // fallback
  },
];


export default function PainPointsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

const handleHover = (index) => {
  if (index !== hoveredIndex) {
    setDirection(index > hoveredIndex ? 1 : -1);
    setPrevIndex(hoveredIndex);
    setHoveredIndex(index);
  }
};

  return (
    <section
      id="pain"
      className={`relative w-full min-h-[80vh] bg-[ #96939B] text-white overflow-hidden ${roboto.className}`}
    >
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={hoveredIndex !== null ? painPoints[hoveredIndex].bg : "/PainPoint.png"}
          initial={{ x: `${-100 * direction}%`, opacity: 0, filter: "blur(12px)" }}
          animate={{ x: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ x: `${100 * direction}%`, opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hoveredIndex !== null ? painPoints[hoveredIndex].bg : "/PainPoint.png"})`,
            opacity: 0.25,
          }}
        />
        <motion.div
        key={`overlay-${hoveredIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-[color:var(--accent-alt)] via-transparent to-black"
      />
      </AnimatePresence>

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0  z-0" />

      {/* Title */}
      <div className="relative z-10 text-center mb-12 pt-20">
        <h2 className="text-3xl md:text-5xl font-bold text-[color:var(--accent)]">
          Common Tech Pain Points
        </h2>
      </div>

      {/* Sliced columns */}
      <div className="relative z-10 flex h-full">
        {painPoints.map((point, index) => (
          <div
            key={index}
            onMouseEnter={() => handleHover(index)}

            onMouseLeave={() => setHoveredIndex(null)}
            className="w-1/4 border-l border-r border-white/10 backdrop-blur-sm px-6 py-12 transition-all duration-300 hover:backdrop-blur-md group flex flex-col justify-center items-center text-center"
          >
            <div className="mb-4 text-[color:var(--accent-alt)] group-hover:scale-110 transition-transform duration-300">
              {point.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {point.title}
            </h3>
            <div className="relative h-20 w-full">
              <p className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white/70 text-sm translate-y-2 group-hover:translate-y-0 pointer-events-none text-center px-2">
                {point.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
