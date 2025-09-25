"use client";

import { motion } from "framer-motion";
import { roboto } from "next/font/google";
import Link from "next/link";
import ComprehensiveSection from "@/components/ComprehensiveSection";
import { ActivitySquare, TrendingUp } from "lucide-react";

const services = [
  {
    title: "A Proactive IT Partner – Not Just a Break-Fix Vendor",
    description:
      "Many IT providers only respond when something goes wrong. At Reverie Tech, we take a different approach. We monitor, maintain, and optimize your systems around the clock to prevent issues before they impact your operations. Our goal is to ensure your technology works for you—not against you.",
    icon: <ActivitySquare className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
  {
    title: "Scalable Technology Solutions for Growing Businesses",
    description:
      "As your business expands, your IT infrastructure must keep up. Whether you’re adding employees, opening new locations, or scaling your services, we provide tailored IT solutions that grow with you.",
    icon: <TrendingUp className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
];


export default function BusinessIndustryPage() {
  return (
    <section className="relative w-full min-h-screen text-white px-6 lg:px-20 py-24 overflow-hidden">
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
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-5xl mx-auto z-10"
      >
        <motion.h1
            initial={{ opacity: 0, x: -40, rotateZ: -1 }}
            animate={{ opacity: 1, x: 0, rotateZ: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-light)] via-[color:var(--accent)] to-[color:var(--accent-light)] drop-shadow-[0_0_10px_var(--accent-alt)]"
          >
          Innovative Tech Solutions for Businesses
        </motion.h1>
        <motion.div
          className="mx-auto my-4 h-[3px] w-40 bg-[color:var(--accent)] rounded-full shimmer"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <p className="mt-4 text-white/80 text-lg max-w-3xl mx-auto mb-6">
          In today’s fast-paced digital world, businesses rely on technology to stay competitive, secure, and efficient. At Reverie Tech Solutions, we provide proactive IT services that go beyond the traditional break-fix model. Instead of reacting to problems as they arise, we work proactively to prevent them—allowing you to focus on running and growing your business without IT disruptions.
        </p>
        <Link
          href="/contact"
          className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-alt)] text-black font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-[0_0_20px_var(--accent-alt)] transition transform hover:scale-105"
        >
          Get a Free Quote
        </Link>
      </motion.section>

      {/* Divider */}
      <motion.div
        className="my-16 h-px bg-gradient-to-r from-transparent via-[color:var(--accent-alt)] to-transparent w-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      />

      {/* Features */}
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
                              <Link
              href={industry.href}
              className="text-[color:var(--accent-light)] underline"
            >
              Explore →
            </Link>
                </motion.div>
              ))}
            </div>

      <ComprehensiveSection />
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

