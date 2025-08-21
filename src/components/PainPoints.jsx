"use client";


import { lexend } from "../styles/fonts";
import { ShieldCheck, Cpu, AlertTriangle, Activity } from "lucide-react";

const painPoints = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Security Risks",
    description:
      "Outdated systems leave your business vulnerable to cyberattacks and data breaches.",
  },
  {
    icon: <Cpu size={40} />,
    title: "Tech Overload",
    description:
      "Too many tools and no strategy? Disconnected platforms slow your team down.",
  },
  {
    icon: <AlertTriangle size={40} />,
    title: "Reactive IT",
    description:
      "Waiting until something breaks wastes time, money, and customer trust.",
  },
  {
    icon: <Activity size={40} />,
    title: "Lack of Innovation",
    description:
      "Falling behind competitors who leverage tech to streamline operations and improve UX.",
  },
];

export default function PainPointsSection() {
  return (
    <section
      id="pain"
      className={`w-full bg-[#0a0a0a] py-20 px-6 md:px-12 text-white ${lexend.className}`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[rgb(0,82,220)] mb-10">
          Common Tech Pain Points
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-[rgba(0,255,255,0.2)] rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300"
            >
              <div className="mb-4 text-[rgb(0,255,255)]">{point.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-gray-300 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
