"use client";

import { motion } from "framer-motion";
import { ServerCog, ShieldCheck, Lightbulb } from "lucide-react";

const services = [
  {
    title: "MANAGE",
    icon: <ServerCog className="w-8 h-8 text-white" />,
    gradient: "from-yellow-300 via-yellow-500 to-black",
    text: "We manage your tech — IT, cloud, and infrastructure — so you can focus on growing your business.",
  },
  {
    title: "PROTECT",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    gradient: "from-yellow-200 via-yellow-500 to-[#0a0a0a]",
    text: "We protect your critical data, systems, and networks with enterprise-grade cybersecurity.",
    sub: "HIPAA compliance, proactive monitoring, and risk mitigation strategies.",
  },
  {
    title: "INNOVATE",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    gradient: "from-yellow-400 via-yellow-600 to-[#111]",
    text: "We build tailored solutions to streamline operations and enhance experiences.",
    sub: "Dashboards, consulting, and fractional CIO/CTO leadership.",
  },
];

export default function CoreServices() {
  return (
    <section id="services" className="relative bg-[#0a0a0a] text-white py-32 px-6 overflow-hidden">
      {/* 🎯 Grid/tech background lines */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:30px_30px] opacity-30" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_2px,transparent_2px)] opacity-10 mix-blend-soft-light z-0 pointer-events-none" />
      {/* 🟡 Glow blob */}
      <div className="absolute -top-40 -left-48 w-[700px] h-[700px] bg-yellow-500/20 rounded-full blur-[180px] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-yellow-400"
          style={{ textShadow: "0 0 10px rgba(255, 230, 100, 0.6)" }}
        >
          Reverie Tech Solutions
        </motion.h2>
        <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
          High-impact IT, cybersecurity, and innovation — tailored for you.
        </p>
      </div>

      <div className="space-y-12 max-w-5xl mx-auto relative z-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, rotate: 3, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`group rounded-xl p-8 text-white shadow-xl bg-gradient-to-br ${s.gradient} ring-2 ring-yellow-400 ring-offset-2 ring-offset-[#0a0a0a] transition-all duration-300 hover:scale-[1.02] hover:ring-yellow-300`}
          >
            <div className="flex items-center gap-4 mb-4">
              {s.icon}
              <h3
                className="text-2xl font-bold tracking-tight"
                style={{ textShadow: "0 0 6px rgba(255,255,255,0.4)" }}
              >
                {s.title}
              </h3>
            </div>
            <p className="text-white/90 text-sm">{s.text}</p>
            {s.sub && (
              <p className="text-white/70 text-sm mt-2 italic">{s.sub}</p>
            )}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mt-16 text-center flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#contact"
          className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded hover:bg-yellow-300 transition shadow-lg"
        >
          Schedule a Free Consultation
        </a>
        <a
          href="#contact"
          className="border border-yellow-400 text-yellow-400 font-semibold py-3 px-6 rounded hover:bg-yellow-400 hover:text-black transition"
        >
          Book an Appointment
        </a>
      </div>
    </section>
  );
}
