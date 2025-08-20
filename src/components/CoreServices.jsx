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
    <section className="relative w-full py-24 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Techy Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:30px_30px] opacity-10 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-[color:var(--primary)] glitch" data-text="Core Services">
          Core Services
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2, type: "spring" }}
              className="bg-[#111] p-6 rounded-2xl border border-[color:var(--primary)] hover:shadow-[0_0_20px_var(--accent-alt)] transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-[color:var(--accent-alt)] text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[color:var(--primary)]">{service.title}</h3>
              <p className="mt-2 text-white/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
