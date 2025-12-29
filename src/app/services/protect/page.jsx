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
      "Cyber threats are constantly evolving, and businesses need proactive, standards-based security to stay protected. Our managed security services provide continuous monitoring, threat detection, endpoint protection, and incident response aligned with NIST Cybersecurity Framework best practices. We help ensure your environment remains secure, resilient, and ready for emerging threats.",
  },
  {
    icon: <CloudOff size={40} />,
    title: "Data Backup & Disaster Recovery",
    description:
      "Unexpected data loss or system failures can halt business operations. Our backup and disaster recovery solutions ensure your critical information is encrypted, replicated, and rapidly recoverable. We design recovery strategies aligned with NIST recommendations for data integrity and business continuity, keeping your organization prepared for any disruption.",
  },
  {
    icon: <ShieldAlert size={40} />,
    title: "Security Assessments",
    description:
      "Understanding your security posture is the first step toward strengthening your defenses. Our comprehensive assessments evaluate vulnerabilities, user access, network security, and policy maturity using NIST 800-171 and NIST CSF standards as our baseline. We deliver clear remediation plans and actionable insights to enhance compliance readiness and reduce organizational risk.",
  },
  {
    icon: <BadgeCheck size={40} />,
    title: "CMMC Compliance",
    description:
      "CMMC requirements can be complex, but compliance doesn’t have to be overwhelming. We guide your organization through each phase of CMMC 2.0 readiness—performing gap analyses, implementing required security controls, updating documentation, and preparing for third-party assessments. Our approach is grounded in NIST 800-171, ensuring you meet DoD cybersecurity expectations with confidence.",
  },
];


export default function ProtectPage() {
  return (
    
      <section className="relative text-center text-white min-h-screen py-24 px-6 lg:px-24 overflow-hidden">
                    {/* Top layered blue banners */}
      <motion.div
        initial={{ y: -80, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        className="hidden md:block h-4 w-full absolute z-0 top-20 bg-gradient-to-tr from-[#00bfff] via-[color:var(--accent-light)] to-[color:var(--accent)]"
        style={{
          clipPath: "polygon(0% 0%, 85% 0, 100% 0%, 100% 90%)",
        }}
      />

      {/* Top right triangle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="block absolute top-20 right-0 w-64 h-64 bg-gradient-to-br from-[#00bfff] via-[color:var(--accent-light)] to-[color:var(--accent)] z-0"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
        }}
      />

      {/* Top trapezoid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="block absolute top-24 right-0 w-72 h-72 bg-gradient-to-br from-[#00bfff] via-[color:var(--accent-light)] to-[color:var(--accent)] z-0"
        style={{
          clipPath: "polygon(0% 0%, 100% 100%, 100% 85%, 0% -15%)",
        }}
      />
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-light)] via-[color:var(--accent)] to-[color:var(--accent-light)] drop-shadow-[0_0_10px_var(--accent-alt)]"
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
      

      
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-[color:var(--accent-light)] my-16"
        >
          Secure Your Business with Proven Protection
        </motion.h2>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
        <WhyChooseReverieSection />
                    {/* Bottom layered blue banners */}
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        className="hidden md:block h-4 w-full absolute z-0 bottom-0 bg-gradient-to-bl from-[#00bfff] via-[color:var(--accent-light)] to-[color:var(--accent)]"
        style={{
          clipPath: "polygon(0 0, 15% 100%, 100% 100%, 0% 0%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="block absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tl from-[#00bfff] via-[color:var(--accent-light)] to-[color:var(--accent)] z-0"
        style={{
          clipPath: "polygon(0 100%, 0 0, 100% 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="block absolute bottom-4 left-0 w-72 h-72 bg-gradient-to-tl from-[#00bfff] via-[color:var(--accent-light)] to-[color:var(--accent)] z-0"
        style={{
          clipPath: "polygon(100% 100%, 0% 0%, 0% 15%, 100% 115%)",
        }}
      />
      </section>
      
    
  );
}
