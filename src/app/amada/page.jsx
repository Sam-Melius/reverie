"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ActivitySquare,
  ShieldCheck,
  LifeBuoy,
  Mail,
  Phone,
  ClipboardList,
    PhoneCall,
  Headset,
  Radar,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Managed IT Services & Maintenance",
    description:
      "Ongoing support for devices, user environments, and core systems to keep operations stable, secure, and efficient.",
    icon: <ActivitySquare className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
  {
    title: "Monitoring & Support",
    description:
      "Proactive monitoring and fast issue response to reduce downtime and catch problems before they impact productivity.",
    icon: <LifeBuoy className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
  {
    title: "Cybersecurity & Risk Mitigation",
    description:
      "Layered cybersecurity practices to protect systems and data, reduce vulnerabilities, and support secure operations.",
    icon: <ShieldCheck className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
  {
    title: "Security & Compliance Guidance",
    description:
      "Security best-practice guidance and documentation support to help maintain a strong security posture over time.",
    icon: <ClipboardList className="w-7 h-7 text-[color:var(--accent-alt)]" />,
  },
];

export default function AmadaClientPage() {
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
          Amada Client Support
        </motion.h1>

        <motion.div
          className="mx-auto my-4 h-[3px] w-40 bg-[color:var(--accent)] rounded-full shimmer"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <p className="mt-4 text-white/80 text-lg max-w-3xl mx-auto mb-6">
          This page provides a high-level overview of the managed IT and cybersecurity
          support Reverie Tech provides for Amada, along with the best ways to contact
          our team for assistance.
        </p>

        <Link
          href="/contact"
          className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-alt)] text-black font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-[0_0_20px_var(--accent-alt)] transition transform hover:scale-105"
        >
          Contact Support
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
      {/* <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto z-10 relative">
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
            <p className="text-white/70 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div> */}

 {/* Amada Service Details */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-24 max-w-5xl mx-auto bg-[#0b0b0b] border border-white/10 rounded-2xl p-10 shadow-lg z-10 relative"
>
  <h2 className="text-3xl font-bold text-white mb-6 text-center">
    Services Provided for Amada
  </h2>

  <p className="text-white/70 text-center max-w-3xl mx-auto mb-10">
    Reverie Tech Solutions delivers secure, scalable IT and cybersecurity services
    to support Amada’s operations and protect critical systems, using practices aligned
    with <span className="font-bold text-[color:var(--accent-alt)]">NIST</span> guidance and
    a security maturity approach compatible with{" "}
    <span className="font-bold text-[color:var(--accent-alt)]">CMMC</span> readiness.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {/* Phone Numbers with SMS */}
    <div className="bg-[#111827] rounded-2xl p-6 shadow-lg border border-white/10 backdrop-blur-sm group">
      <div className="flex items-start gap-4">
        <div className="mt-1 text-[color:var(--accent-alt)] group-hover:scale-110 transition-transform">
          <PhoneCall className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">
            Phone Numbers with SMS
          </h3>
          <p className="text-white/70 text-sm mt-1">
            Seamless communication through integrated phone lines with SMS notifications,
            supporting secure workflows and consistent access practices.
          </p>
        </div>
      </div>
    </div>

    {/* 24/7 Helpdesk Support */}
    <div className="bg-[#111827] rounded-2xl p-6 shadow-lg border border-white/10 backdrop-blur-sm group">
      <div className="flex items-start gap-4">
        <div className="mt-1 text-[color:var(--accent-alt)] group-hover:scale-110 transition-transform">
          <Headset className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">
            24/7 Helpdesk Support
          </h3>
          <p className="text-white/70 text-sm mt-1">
            Around-the-clock support for desktops, laptops, and printers with fast issue
            resolution—helping maintain system availability and operational resilience.
          </p>
        </div>
      </div>
    </div>

    {/* Security Awareness Training */}
    <div className="bg-[#111827] rounded-2xl p-6 shadow-lg border border-white/10 backdrop-blur-sm group">
      <div className="flex items-start gap-4">
        <div className="mt-1 text-[color:var(--accent-alt)] group-hover:scale-110 transition-transform">
          <ShieldCheck className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">
            Security Awareness Training
          </h3>
          <p className="text-white/70 text-sm mt-1">
            Interactive training designed to reduce phishing and strengthen user security
            habits—supporting the human controls emphasized across NIST and CMMC programs.
          </p>
        </div>
      </div>
    </div>

    {/* Monitoring / SIEM / Vulnerability */}
    <div className="bg-[#111827] rounded-2xl p-6 shadow-lg border border-white/10 backdrop-blur-sm group">
      <div className="flex items-start gap-4">
        <div className="mt-1 text-[color:var(--accent-alt)] group-hover:scale-110 transition-transform">
          <Radar className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">
            SIEM, Vulnerability, Firewall & Network Monitoring
          </h3>
          <p className="text-white/70 text-sm mt-1">
            Ongoing visibility into systems and networks through monitoring and scanning to
            identify risk early—aligned with NIST-style continuous improvement and CMMC-ready
            security maturity.
          </p>
        </div>
      </div>
    </div>

    {/* On-Demand IT Support */}
    <div className="bg-[#111827] rounded-2xl p-6 shadow-lg border border-white/10 backdrop-blur-sm group md:col-span-2">
      <div className="flex items-start gap-4">
        <div className="mt-1 text-[color:var(--accent-alt)] group-hover:scale-110 transition-transform">
          <Wrench className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">
            On-Demand IT Support
          </h3>
          <p className="text-white/70 text-sm mt-1">
            Flexible assistance for urgent or specialized technical needs, with changes and
            remediation handled using documented, security-conscious processes.
          </p>
        </div>
      </div>
    </div>
  </div>

  <p className="text-white/40 text-xs text-center mt-8">
    Specific pricing, service levels, and scope are governed by existing agreements.
  </p>
</motion.section>


      {/* Support & Contact */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20 max-w-4xl mx-auto bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 text-center shadow-lg z-10 relative"
      >
        <h2 className="text-2xl font-bold text-white mb-2">
          How to Reach Reverie Tech Support
        </h2>
        <p className="text-white/70 text-sm max-w-2xl mx-auto mb-6">
          For technical issues, service requests, access concerns, or anything security-related,
          contact our team using the options below. Include your name, location, device, and a
          short description of the issue for faster help.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-left max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[color:var(--accent-alt)]" />
            <span className="text-white/80">sales@reverietech.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[color:var(--accent-alt)]" />
            <span className="text-white/80">(801) 805-6661</span>
          </div>
        </div>

        {/* <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-[color:var(--accent)] hover:bg-[color:var(--accent-alt)] text-black font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-[0_0_20px_var(--accent-alt)] transition transform hover:scale-105"
          >
            Submit a Support Request
          </Link>
        </div> */}

        <p className="text-white/40 text-xs mt-6">
          This page is a general overview. Exact scope and responsibilities are governed by
          existing service agreements.
        </p>
      </motion.section>

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
