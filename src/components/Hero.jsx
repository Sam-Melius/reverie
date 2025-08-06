"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden"
    >
      {/* 🌌 Background: animated glow orb */}
      <div className="absolute -top-48 -left-64 w-[800px] h-[800px] bg-yellow-500/20 rounded-full blur-[200px] z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.03),transparent_70%)] z-0" />
      {/* 🟡 Scanlines */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px)] mix-blend-soft-light opacity-20 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,100,0.3)]"
        >
          Innovative, Reliable Technology Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
        >
          We streamline operations, protect your data, and fuel business growth with proactive IT and cybersecurity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-yellow-400 text-black font-bold py-3 px-6 rounded hover:bg-yellow-300 transition shadow-lg"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
