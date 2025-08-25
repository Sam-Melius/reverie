"use client";

import { motion } from "framer-motion";
import { roboto } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";



export default function BusinessIndustryPage() {
  return (
    <main className={` text-white min-h-svh px-6 py-20`}>
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-[color:var(--accent)]">
          Innovative Tech Solutions for Businesses
        </h1>
        <motion.div
          className="mx-auto mt-2 h-[3px] w-40 bg-[color:var(--accent)] rounded-full shimmer"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <p className="mt-6 text-white/80 text-lg max-w-3xl mx-auto mb-6">
          In today’s fast-paced digital world, businesses rely on technology to stay competitive, secure, and efficient. At Reverie Tech Solutions, we provide proactive IT services that go beyond the traditional break-fix model. Instead of reacting to problems as they arise, we work proactively to prevent them—allowing you to focus on running and growing your business without IT disruptions.
        </p>
        <Link
          href="/contact"
          className="bg-[color:var(--accent-alt-light)] hover:bg-[color:var(--accent-alt)] text-black font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-[0_0_20px_var(--accent-alt)] transition transform hover:scale-105"
        >
          Get a Free Quote
        </Link>
      </motion.section>

      {/* Divider */}
      <motion.div
        className="my-16 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent w-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      />

      {/* Features */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <FeatureCard
          title="A Proactive IT Partner – Not Just a Break-Fix Vendor"
          desc="Many IT providers only respond when something goes wrong. At Reverie Tech, we take a different approach. We monitor, maintain, and optimize your systems around the clock to prevent issues before they impact your operations. Our goal is to ensure your technology works for you—not against you."
        />
        <FeatureCard
          title="Scalable Technology Solutions for Growing Businesses"
          desc="As your business expands, your IT infrastructure must keep up. Whether you’re adding employees, opening new locations, or scaling your services, we provide tailored IT solutions that grow with you."
        />
      </section>

      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="max-w-6xl mx-auto mt-24 px-6 py-16 md:px-12 bg-gradient-to-br from-[#0e0e0e] to-[#141414] border border-[color:var(--accent)] rounded-xl shadow-[0_0_60px_rgba(0,255,255,0.03)] backdrop-blur"
>
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[color:var(--accent)] mb-8">
    Comprehensive IT Services for Businesses
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/90">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-[#1a1a1a] border border-[color:var(--accent)/20] p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold text-[color:var(--accent)] mb-2">
        Managed IT Services
      </h3>
      <p>
        We take the stress out of IT management by providing 24/7 monitoring,
        maintenance, and support. Our services ensure your systems are always up to date,
        secure, and running at peak performance.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-[#1a1a1a] border border-[color:var(--accent)/20] p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold text-[color:var(--accent)] mb-2">
        Cybersecurity & Compliance
      </h3>
      <p>
        With cyber threats on the rise, protecting your business is more important than ever.
        We implement cutting-edge security measures to safeguard sensitive data and ensure compliance
        with industry regulations.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-[#1a1a1a] border border-[color:var(--accent)/20] p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold text-[color:var(--accent)] mb-2">
        Cloud & Remote Work Solutions
      </h3>
      <p>
        Modern businesses need flexibility. We provide secure cloud solutions
        that allow your team to collaborate from anywhere while keeping your data protected.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-[#1a1a1a] border border-[color:var(--accent)/20] p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold text-[color:var(--accent)] mb-2">
        Custom Technology & Innovation
      </h3>
      <p>
        We don’t just support your IT—we help you innovate. From custom app development
        to workflow automation and Power BI dashboards, our team builds forward-thinking solutions
        that align with your business goals.
      </p>
    </motion.div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="mt-16 text-center"
  >
    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
      Stay Ahead with Innovative IT Solutions
    </h3>
    <p className="text-white/80 max-w-2xl mx-auto mb-6">
      At Reverie Tech Solutions, we believe that technology should drive your business forward—
      not slow it down. Our experts deliver scalable, secure, and innovative IT tailored to your mission.
    </p>
    <button className="px-6 py-3 rounded bg-[color:var(--accent)] text-black font-semibold shadow hover:shadow-lg transition">
      Get a Free Quote
    </button>
  </motion.div>
</motion.section>

    </main>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#121212] border border-[color:var(--accent)] rounded-xl p-6 shadow-[0_0_30px_rgba(0,255,255,0.05)] relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[color:var(--accent)] opacity-5 blur-[120px] -z-10" />
      <h3 className="text-xl text-[color:var(--accent)] font-semibold mb-3 group-hover:scale-105 transition-transform duration-300">
        {title}
      </h3>
      <p className="text-white/80 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
