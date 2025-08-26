"use client";

import { motion } from "framer-motion"
import { ShieldCheck, Lightbulb, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Proactive Approach",
    text: "We prevent issues before they disrupt your business.",
  },
  {
    icon: Lightbulb,
    title: "Industry Expertise",
    text: "Solutions tailored to your unique business needs.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    text: "Reliable IT professionals who care about your success.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#0b0b0b] text-white py-32 px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:30px_30px] opacity-30 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_2px,transparent_2px)] mix-blend-soft-light opacity-10 z-0 pointer-events-none" />
      <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-[#1454ff1a] blur-[180px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -40, rotateZ: -1 }}
            animate={{ opacity: 1, x: 0, rotateZ: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-light)] via-[color:var(--accent)] to-[color:var(--accent-light)] drop-shadow-[0_0_10px_var(--accent-alt)]"
            
          >
            Why Choose Reverie Tech Solutions?
          </motion.h1>
          <p className="text-white/80 mb-6">
            Let’s transform your business with innovative technology solutions!
          </p>

        </div>

        {/* Divider */}
        <div className="hidden md:flex justify-center items-center relative z-10">
          <div className="w-[2px] h-64 bg-[color:var(--accent-alt)] shadow-[0_0_15px_rgba(0,255,229,0.3)] rounded-full" />
        </div>

        {/* Right Side */}
        <div className="space-y-8">
          {features.map((f, i) => (
            <div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <f.icon className="w-8 h-8 text-[#1454ff] transition group-hover:scale-110 group-hover:text-[#00ffe5] drop-shadow-[0_0_8px_rgba(20,84,255,0.4)]" />
              <div>
                <h3 className="text-xl font-bold mb-1">{f.title}</h3>
                <p className="text-white/80 text-sm">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
