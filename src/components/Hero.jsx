"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen text-white pt-32 pb-20 px-6 lg:px-20 overflow-hidden bg-black">
      {/* Futuristic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero2.png"
          alt="Futuristic Tech Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-95"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#050505] " />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side (Heading & Sub) */}
        <div className="text-left max-w-2xl flex-1">
          <motion.h1
            initial={{ opacity: 0, x: -40, rotateZ: -1 }}
            animate={{ opacity: 1, x: 0, rotateZ: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-light)] via-[color:var(--accent)] to-[color:var(--accent-light)] drop-shadow-[0_0_10px_var(--accent-alt)]"
          >
            Innovative. Reliable.{" "}
            <span className="text-[color:var(--accent-alt)]">Secure.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg sm:text-xl text-white/80"
          >
            With a proactive approach, we help businesses navigate evolving challenges by streamlining operations, protecting critical data, and implementing cutting-edge tools. Our mission is to provide innovative tech solutions, simplify IT, reduce risks, and unlock new opportunities for success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex gap-4"
          >
            <Link
              href="/contact"
              className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-light)] text-black font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-[0_0_20px_var(--accent-alt)] transition transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              href="/services/manage"
              className="border border-[color:var(--accent-light)] text-[color:var(--accent-light)] hover:text-black hover:bg-[color:var(--accent-light)] font-semibold py-3 px-6 rounded-md transition transform hover:scale-105 shadow hover:shadow-[0_0_20px_var(--accent-alt)]"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Right Side Accent Shape */}
        <motion.div
          initial={{ opacity: 0, rotateZ: 5, scale: 0.95 }}
          animate={{ opacity: 1, rotateZ: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block w-96 h-96 bg-gradient-to-br from-[color:var(--accent-alt)]/20 to-white/5 rounded-3xl blur-2xl shadow-2xl"
        ></motion.div>
      </div>
    </section>
  );
}
