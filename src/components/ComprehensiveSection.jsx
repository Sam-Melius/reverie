"use client";

import { motion } from "framer-motion";
import {
  ServerCog,
  ShieldCheck,
  Cloud,
  Sparkles
} from "lucide-react";

const services = [
  {
    title: "Managed IT Services",
    description:
      "We take the stress out of IT management by providing 24/7 monitoring, maintenance, and support. Our services ensure your systems are always up to date, secure, and running at peak performance.",
    delay: 0.1,
    icon: <ServerCog className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
  {
    title: "Cybersecurity & Compliance",
    description:
      "With cyber threats on the rise, protecting your business is more important than ever. We implement cutting-edge security measures to safeguard sensitive data and ensure compliance with industry regulations.",
    delay: 0.2,
    icon: <ShieldCheck className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
  {
    title: "Cloud & Remote Work Solutions",
    description:
      "Modern businesses need flexibility. We provide secure cloud solutions that allow your team to collaborate from anywhere while keeping your data protected.",
    delay: 0.3,
    icon: <Cloud className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
  {
    title: "Custom Technology & Innovation",
    description:
      "We don’t just support your IT—we help you innovate. From custom app development to workflow automation and Power BI dashboards, our team builds forward-thinking solutions that align with your business goals.",
    delay: 0.4,
    icon: <Sparkles className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
];


export default function ComprehensiveSection() {
  return (
    
    <section className="w-full relative overflow-hidden py-28 px-6 md:px-12  text-white">
          {/* Diagonal gradient background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute w-full h-full bg-gradient-to-br from-[color:var(--accent-alt)/10] to-transparent rotate-6 blur-3xl" />
          </div>
    
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[color:var(--accent-light)]">
              Comprehensive IT Services for Businesses
            </h2>
            {/* <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
              Not your average MSP. We design for resilience, speed, and control.
            </p> */}
          </motion.div>
    
          {/* Asymmetric Feature Cards */}
          <div className="mt-24 max-w-7xl mx-auto space-y-20 relative z-10">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`flex flex-col md:flex-row hover:drop-shadow-[0_0_10px_var(--accent-light)] items-center gap-8 md:gap-14 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="bg-[#111111] border border-[color:var(--accent-alt)/30] shadow-[0_0_20px_var(--accent-alt)/10] p-8 rounded-3xl w-full md:w-[60%] transform hover:scale-[1.02] transition duration-300">
                  <div className="flex items-center gap-3 text-[color:var(--accent)] mb-4">
                    {item.icon}
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
                <div className="hidden md:block w-1/5 h-[2px] bg-[color:var(--accent-alt)] rotate-45 shadow-[0_0_20px_var(--accent-alt)] blur-sm" />
              </motion.div>
            ))}


          </div>
    
          {/* CTA */}
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
    <button className="px-6 py-3 rounded bg-[color:var(--accent)] text-black font-semibold shadow hover:shadow-lg transition shadow-md hover:drop-shadow-[0_0_20px_var(--accent-alt)] hover:bg-[color:var(--accent-alt)]">
      Get a Free Quote
    </button>
  </motion.div>
        </section>
  );
}
