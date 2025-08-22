"use client";

import WhyChooseReverieSection from "@/components/WhyChooseReverieSection";
import { motion } from "framer-motion";
import { ShieldCheck, CloudOff, ShieldAlert, BadgeCheck } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Managed Security Services",
    description:
      "Cyber threats are constantly evolving, and businesses need proactive security measures to stay protected. Our managed security services provide continuous monitoring, threat detection, and risk mitigation, ensuring your organization remains secure.",
  },
  {
    icon: <CloudOff size={40} />,
    title: "Data Backup & Disaster Recovery",
    description:
      "Unexpected data loss or system failures can bring business operations to a halt. Our data backup and disaster recovery solutions ensure your critical information is protected, accessible, and quickly restorable in the event of an emergency.",
  },
  {
    icon: <ShieldAlert size={40} />,
    title: "Security Assessments",
    description:
      "Understanding your security posture is the first step to strengthening your defenses. Our comprehensive security assessments identify vulnerabilities, ensure compliance readiness, and provide actionable insights to improve your overall cybersecurity resilience.",
  },
  {
    icon: <BadgeCheck size={40} />,
    title: "CMMC Compliance",
    description:
      "Industry regulations are complex, but compliance doesn’t have to be overwhelming. We work closely with your team to navigate CMMC requirements, implement security controls, and achieve certification, ensuring your organization meets industry standards.",
  },
];

export default function ProtectPage() {
  return (
    <main className="text-white min-h-screen py-20 px-6 lg:px-24 overflow-hidden">
      <section className="relative text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
        >
          Protect
        </motion.h1>
        
        <motion.div
          className="mx-auto mt-2 h-[3px] w-40 bg-[color:var(--accent)] rounded-full shimmer"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
        >
          Comprehensive Security & Compliance Solutions
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-alt)] text-black font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-[0_0_20px_var(--accent-alt)] transition"
          >
            Get a free quote
          </Link>
        </motion.div>
      </section>

      <section className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-[color:var(--accent)] mb-16"
        >
          Secure Your Business with Proven Protection
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111827] border border-[rgba(0,255,255,0.2)] rounded-2xl p-8 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:scale-[1.02] transition-all duration-300"
            >
              <div className="mb-4 text-cyan-400 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-white/70 text-center text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        <WhyChooseReverieSection />
      </section>
    </main>
  );
}
