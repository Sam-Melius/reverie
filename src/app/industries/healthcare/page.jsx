"use client";

import { motion } from "framer-motion";
import { roboto } from "../../../styles/fonts";
import Link from "next/link";
import ComprehensiveSection from "@/components/ComprehensiveSection";
import { HeartPulse, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Reliable, Proactive IT Support for Care Providers",
    description:
      "Healthcare professionals rely on technology for EMRs, communication, scheduling, and compliance. Downtime and disruptions can affect patient outcomes. Our proactive services ensure your systems are secure, stable, and always available—so you can focus on delivering exceptional care. From rapid issue resolution to preventative system monitoring, we keep your IT healthy. Our support team understands the unique demands of medical environments and responds with urgency and care.",
    icon: <HeartPulse className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
  {
    title: "HIPAA Compliance & Data Security",
    description:
      "Handling sensitive patient data requires strict regulatory compliance and advanced security. We provide robust cybersecurity solutions that safeguard EMRs, internal communications, and protected health information, keeping you compliant and your patient data secure. Our team stays current with evolving HIPAA requirements and healthcare data standards. We conduct regular audits, implement encryption, and help your staff stay vigilant with proper access controls and training.",
    icon: <ShieldCheck className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
];


export default function HealthcarePage() {
  return (
    <main className={`min-h-screen text-white px-6 py-20 md:px-12 ${roboto.className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1
            initial={{ opacity: 0, x: -40, rotateZ: -1 }}
            animate={{ opacity: 1, x: 0, rotateZ: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-light)] via-[color:var(--accent)] to-[color:var(--accent-light)] drop-shadow-[0_0_10px_var(--accent-alt)]"
          >
          Innovative Solutions for Healthcare Organizations
        </motion.h1>
        <motion.div
          className="mx-auto mt-2 mb-6 h-[3px] w-40 bg-[color:var(--accent)] rounded-full shimmer"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div className="text-xl md:text-2xl font-semibold  mb-6 text-center">
          Why Healthcare Providers Choose Reverie Tech Solutions
        </motion.div>
        <Link
          href="/contact"
          className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-alt)] text-black font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-[0_0_20px_var(--accent-alt)] transition transform hover:scale-105"
        >
          Get a Free Quote
        </Link>
      </motion.div>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#111827] rounded-2xl p-6 text-center shadow-lg hover:shadow-[0_0_20px_var(--accent)] border border-white/10 backdrop-blur-sm group"
                >
                  <div className="text-[color:var(--accent-alt)] mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <ComprehensiveSection />
    </main>
  );
}
