"use client";

import WhyChooseReverieSection from "@/components/WhyChooseReverieSection";
import { motion } from "framer-motion";
import Link from "next/link";
import { Server, Cloud, Users, PhoneCall } from "lucide-react";


const services = [
  {
    icon: <Server size={40} />,
    title: "Managed IT Services",
    description:
      "Eliminate the stress of IT management with proactive monitoring, maintenance, and support. Our team ensures your technology runs smoothly, so your staff can stay productive without disruptions.",
  },
  {
    icon: <Cloud size={40} />,
    title: "Managed Cloud Solutions",
    description:
      "Move your business applications and data to a secure, fully managed cloud environment. Our compliant, high-performance cloud solutions provide scalability, security, and accessibility—anytime, anywhere.",
  },
  {
    icon: <Users size={40} />,
    title: "Co-Managed IT Solutions",
    description:
      "Already have an internal IT team? Our co-managed IT services provide additional expertise and support, allowing your team to focus on strategic initiatives while we handle day-to-day IT management.",
  },
  {
    icon: <PhoneCall size={40} />,
    title: "Managed VoIP Phone Systems",
    description:
      "Upgrade your business communication with a cost-effective, modern, and fully managed VoIP system. Our solutions provide reliable, feature-rich phone services that enhance connectivity and efficiency.",
  },
];

export default function ManagePage() {
  return (
    <section className="relative w-full min-h-screen text-white px-6 lg:px-20 py-24 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-[color:var(--accent)]">
          Manage
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Cutting-Edge Technology Solutions for Business Growth
        </p>
        <Link
          href="/contact"
          className="bg-[color:var(--accent)] text-black font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-[0_0_20px_var(--accent-alt)] transition"
        >
          Get a free quote
        </Link>
      </motion.div>

      {/* Description Block */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 max-w-3xl mx-auto text-center text-white/80 text-lg"
      >
        At Reverie Tech Solutions, we provide fully managed and co-managed IT solutions designed to streamline operations, enhance security, and support business growth. Whether you need round-the-clock IT support, secure cloud hosting, or modern VoIP solutions, our services ensure your technology works for you—not against you.
      </motion.p>

      {/* Services Section */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111827] rounded-2xl p-6 text-center shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] border border-white/10 backdrop-blur-sm group"
          >
            <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
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
      <WhyChooseReverieSection />
    </section>
  );
}
