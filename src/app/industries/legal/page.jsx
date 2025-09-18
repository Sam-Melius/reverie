"use client";

import { motion } from "framer-motion";
import { roboto } from "../../../styles/fonts";
import Link from "next/link";
import ComprehensiveSection from "@/components/ComprehensiveSection";
import { Timer, Tags, FileSearch2 } from "lucide-react";

const services = [
  {
    title: "Fast Processing",
    description:
      "Digitize and index discovery files in hours—not days—using high-throughput automation. Our system handles vast file batches with speed and accuracy, reducing manual labor and accelerating case readiness.",
    icon: <Timer className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
  {
    title: "Smart Organization",
    description:
      "Automatically label, tag, and date-stamp large volumes of documents with precision. Hierarchical structuring and metadata assignment make navigating complex files simple and intuitive.",
    icon: <Tags className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
  {
    title: "Advanced Search",
    description:
      "Run deep search queries to locate critical evidence quickly, even within nested or scanned files. Optical character recognition (OCR) and metadata indexing ensure nothing is missed—even in non-standard formats.",
    icon: <FileSearch2 className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
];


export default function LegalPage() {
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
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-light)] via-[color:var(--accent)] to-[color:var(--accent-light)] drop-shadow-[0_0_10px_var(--accent-alt)] my-4"
          >
          Digitize. Organize. Win Cases.
        </motion.h1>
        <motion.div
          className="mx-auto mt-2 mb-6 h-[3px] w-40 bg-[color:var(--accent)] rounded-full shimmer"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <p className="text-lg text-white/80 mb-8">
          Our legal discovery service helps law firms streamline case prep and document handling like never before. We digitize and organize massive volumes of legal documents, apply intelligent labeling, and enable
          advanced search across case files. Our discovery systems are built to maintain strict chain of custody,
          reduce prep time, and ensure accuracy in every phase of litigation.
        </p>
        <Link
          href="/contact"
          className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-alt)] text-black font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-[0_0_20px_var(--accent-alt)] transition transform hover:scale-105"
        >
          Get a Free Quote
        </Link>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-5xl mx-auto mt-16 text-white/90"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--accent-alt)] mb-6 text-center">
          Why Legal Teams Choose Us
        </h2>
        <ul className="space-y-6 text-lg list-disc list-inside">
          <li>
            <strong className="text-white">Secure, compliant infrastructure</strong> built specifically for legal data and chain-of-custody protection.
          </li>
          <li>
            <strong className="text-white">Rapid indexing and retrieval</strong> to reduce case preparation time and eliminate bottlenecks.
          </li>
          <li>
            <strong className="text-white">Streamlined user interface</strong> designed to reduce training overhead and boost productivity.
          </li>
          <li>
            <strong className="text-white">Expert technical support</strong> from professionals with deep experience in litigation workflows and legal tech.
          </li>
        </ul>
      </motion.section>
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
