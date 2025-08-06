"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const challenges = [
  "My IT person is leaving (... already left)",
  "We've outgrown our current IT provider",
  "It takes too long to resolve issues",
  "I don't feel confident about my technology plan",
  "I don't know if we're secure",
  "Unexpected IT costs keep coming up",
  "My IT department is stretched too thin",
  "Our team doesn't have the compliance expertise we need",
];

export default function PainPoints() {
  return (
    <section className="relative bg-[#0b0b0b] text-white py-32 px-6 overflow-hidden">
      {/* 🟡 Glowing yellow blur background */}
      <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-[200px] z-0" />
      {/* 🟡 Scanline overlay */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px)] mix-blend-soft-light opacity-20 z-0 pointer-events-none" />
      {/* 🧊 Faint grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:30px_30px] opacity-30 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6"
            style={{ textShadow: "0 0 10px rgba(255, 230, 100, 0.6)" }}
          >
            Do You Struggle With IT Challenges Like:
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mb-6 rounded" />
        </motion.div>

        <div className="space-y-4">
          {challenges.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="text-yellow-400 mt-1" />
              <p className="text-white/90">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-14 text-center">
        <a
          href="#services"
          className="inline-block bg-yellow-400 text-black font-bold py-3 px-6 rounded hover:bg-yellow-300 transition shadow-lg"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
