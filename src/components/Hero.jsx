"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
<section className="relative w-full min-h-screen bg-black text-white pt-32 pb-20 px-6 lg:px-20 flex flex-col items-center justify-center text-center overflow-hidden">
  {/* Background gradient effect */}
  <div className="absolute top-[-30%] left-[-30%] w-[800px] h-[700px] bg-[color:var(--accent)] opacity-30 blur-3xl rounded-full z-0 pointer-events-none"></div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-5xl leading-tight"
      >
        Innovative. Reliable. <span className="text-[color:var(--accent)]">Secure.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl"
      >
        Reverie Tech Solutions delivers end-to-end technology services—from IT management and cybersecurity to automation and innovation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/contact"
          className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-alt)] text-black font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-[0_0_20px_var(--accent-alt)] transition"
        >
          Get in Touch
        </Link>
        <Link
          href="/services/manage"
          className="border border-[color:var(--accent)] text-[color:var(--accent)] hover:text-black hover:bg-[color:var(--accent-alt)] font-semibold py-3 px-6 rounded-md transition shadow hover:shadow-[0_0_20px_var(--accent-alt)]"
        >
          Explore Services
        </Link>
      </motion.div>
    </section>
  );
}
