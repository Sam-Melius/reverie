"use client";

import { motion } from "framer-motion";
import {
  Radar,
  AlarmClockCheck,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Radar size={36} />,
    title: "Proactive Threat Defense",
    desc: "We anticipate and eliminate threats before they reach your systems. Continuous monitoring, AI-driven prevention, and response practices aligned to NIST cybersecurity guidance keep your environment a step ahead of attackers.",
  },
  {
    icon: <AlarmClockCheck size={36} />,
    title: "Disaster-Proof Recovery",
    desc: "Our systems replicate and restore in seconds, not hours. Resilient backup, ransomware-ready recovery plans, and tested playbooks ensure outages and incidents don’t stop your business—or your CMMC and NIST-aligned obligations.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Industry-Tuned Compliance",
    desc: "Compliance made practical. From HIPAA and SOC 2 to CMMC and NIST 800-171, we map technical controls to real business needs and help you maintain the documentation, monitoring, and evidence auditors expect.",
  },
  {
    icon: <LockKeyhole size={36} />,
    title: "Adaptive Security Fabric",
    desc: "Firewalls that learn. Rulesets that evolve. An adaptive security fabric that scales with your company and its risks, while staying aligned to modern frameworks like the NIST Cybersecurity Framework and CMMC 2.0 maturity goals.",
  },
];

export default function WhyReverieAltLayout() {
  return (
    <section className="w-full relative overflow-hidden py-28 px-6 md:px-12 text-white">
      {/* Diagonal gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-to-br from-[color:var(--accent-alt)/10] to-transparent rotate-6 blur-3xl" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[color:var(--accent-alt)]">
          Why Choose Reverie Tech?
        </h2>
        <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
          Not your average MSP. We design for resilience, security, and control—with CMMC- and NIST-informed practices built in from day one.
        </p>
      </motion.div>

      {/* Asymmetric Feature Cards */}
      <div className="mt-24 max-w-7xl mx-auto space-y-20 relative z-10">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-14 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="bg-[#111111] border border-[color:var(--accent-alt)/30] shadow-[0_0_20px_var(--accent-alt)/10] p-8 rounded-3xl w-full md:w-[60%] transform hover:scale-[1.02] transition duration-300">
              <div className="flex items-center gap-3 text-[color:var(--accent)] mb-4">
                {item.icon}
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </div>
            <div className="hidden md:block w-1/5 h-[2px] bg-[color:var(--accent-alt)] rotate-45 shadow-[0_0_20px_var(--accent-alt)] blur-sm" />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-32 text-center z-10 relative"
      >
        <a
          href="/contact"
          className="inline-block bg-[color:var(--accent-alt)] hover:bg-[color:var(--accent)] text-black font-bold px-10 py-4 rounded-xl shadow-xl transition hover:shadow-[0_0_25px_var(--accent)]"
        >
          Start Securing Your Future
        </a>
      </motion.div>
    </section>
  );
}
