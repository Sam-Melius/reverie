"use client";

import WhyChooseReverieSection from "@/components/WhyChooseReverieSection";
import { motion } from "framer-motion";
import { BrainCog, BarChart4, Layers, Lightbulb } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <BarChart4 size={40} />,
    title: "Data-Driven Decision Making with Power BI",
    description:
      "Making informed business decisions requires real-time insights and data analytics. We implement Microsoft Power BI to help businesses visualize key performance indicators (KPIs), monitor operations, and uncover trends that drive strategic growth.",
  },
  {
    icon: <Layers size={40} />,
    title: "Custom Application Development",
    description:
      "Tailor-built applications designed to optimize workflows, engage customers, and drive efficiency. We design, develop, and deploy scalable apps aligned to your business goals.",
  },
  {
    icon: <BrainCog size={40} />,
    title: "Automation & Workflow Optimization",
    description:
      "We help businesses automate repetitive tasks, integrate platforms, and streamline internal operations with modern tools that eliminate inefficiencies.",
  },
  {
    icon: <Lightbulb size={40} />,
    title: "vCIO & IT Strategy",
    description:
      "Gain executive-level IT guidance without the full-time cost. Our vCIO services help align your technology roadmap with long-term business goals.",
  },
];

export default function InnovatePage() {
  return (
    <section className="w-full  min-h-screen text-white pt-28 px-6 md:px-12 pb-20">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-light)] via-[color:var(--accent)] to-[color:var(--accent-light)] drop-shadow-[0_0_10px_var(--accent-alt)]"
        >
          Innovate
        </motion.h1>
        <motion.div
          className="mx-auto mt-2 h-[3px] w-40 bg-[color:var(--accent)] rounded-full shimmer"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/80"
        >
          Cutting-Edge Technology Solutions for Business Growth
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-alt)] text-black font-semibold py-3 px-6 rounded-md shadow hover:shadow-[0_0_20px_var(--accent-alt)] transition"
          >
            Get a free quote
          </Link>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-[color:var(--accent-light)] mb-12"
        >
          Transform Your Business with Innovation
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#111827] border border-[var(--accent-alt)] rounded-2xl p-6 shadow-md hover:shadow-[0_0_20px_var(--accent-light)] transition duration-300"
            >
              <div className="text-[color:var(--accent)] mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white/70 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <WhyChooseReverieSection />
      </div>
    </section>
  );
}
