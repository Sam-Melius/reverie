"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AmadaConferencePage() {
  return (
    <main className="text-[#111] font-sans overflow-hidden relative">
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

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-20 m-12 relative z-10 space-y-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-10 md:pt-0 mb-8 flex flex-col items-center"
        >
          <Image
            src="/LogoWhiteText.png"
            alt="Reverie Tech Solutions Logo"
            width={260}
            height={100}
            priority
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center pt-16 md:pt-0 text-3xl font-bold bg-gradient-to-r from-[#00bfff] via-[color:var(--accent-light)] to-[color:var(--accent)] bg-clip-text text-transparent"
        >
          AMADA CONFERENCE 2025!
        </motion.h1>

        {/* WHY CHOOSE */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md border border-white/10 shadow-md hover:shadow-[0_0_20px_var(--accent-light)]"
        >
          <h2 className="text-xl font-bold mb-4 text-[color:var(--accent)]">
            WHY CHOOSE REVERIE TECH SOLUTIONS?
          </h2>
          <ul className="list-none space-y-4 text-white text-sm leading-relaxed">
            <li>
              🕒 <strong className="text-[color:var(--accent-light)]">Rapid Issue Resolution:</strong> We resolve 90% of support tickets within 30 minutes,
              minimizing downtime and keeping your caregivers focused on client care.
            </li>
            <li>
              💡 <strong className="text-[color:var(--accent-light)]">Caregiver & Staff Assistance:</strong> From software glitches to hardware troubleshooting,
              we support your team with clear, compassionate guidance, reducing stress and boosting efficiency.
            </li>
            <li>
              📈 <strong className="text-[color:var(--accent-light)]">Scalable Solutions:</strong> Whether you operate one location or a multi-state franchise,
              our help desk services scale to meet your needs.
            </li>
            <li>
              🧩 <strong className="text-[color:var(--accent-light)]">Seamless Integration:</strong> We work with your existing platforms, providing tailored
              support for tools you use every day, ensuring smooth training and operations.
            </li>
          </ul>
        </motion.section>

        {/* Divider */}
        <div className="h-px my-12 bg-gradient-to-r from-transparent via-[color:var(--accent-light)] to-transparent" />

        {/* COMMITMENT */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md border border-white/10 shadow-md hover:shadow-[0_0_20px_var(--accent-light)]"
        >
          <h2 className="text-xl font-bold mb-4 text-[color:var(--accent)]">
            OUR COMMITMENT TO AMADA SENIOR CARE:
          </h2>
          <p className="text-white text-sm leading-relaxed">
            We understand the demands of delivering compassionate, non-medical in-home care and navigating
            senior housing solutions. Our help desk ensures your technology runs flawlessly, allowing you to
            focus on enriching lives and growing your franchise network.
          </p>
        </motion.section>

        {/* CONNECT */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md border border-white/10 hover:shadow-[0_0_20px_var(--accent-light)]"
>
  <h2 className="text-xl font-bold mb-4 text-[color:var(--accent)]">
    CONNECT WITH US
  </h2>

  <p className="text-white mb-4 text-sm leading-relaxed">
    Visit us at our booth at the Amada Senior Care Conference 2025 to see how we can support your
    franchise.{" "}
    <strong className="text-[color:var(--accent-alt)]">
      If you sign up at the conference, we are waiving any implementation fees
    </strong>{" "}
    <em>(value savings of up to $1,500)</em>!
  </p>

  <ul className="mb-4 space-y-1 text-white text-sm">
    <li><strong>Email:</strong> sales@reverietech.com</li>
    <li><strong>Phone:</strong> (817) 730-5600</li>
  </ul>

  <p className="text-white text-sm leading-relaxed mb-4">
    Schedule a Free Consultation Today! Partner with Reverie Tech Solutions for 24/7 help desk support
    that keeps your Amada Senior Care franchise thriving.
  </p>

  <a
    href="/contact"
    className="inline-block mt-4 px-6 py-3 rounded-lg text-white text-sm font-semibold bg-gradient-to-r from-[color:var(--accent-light)] to-[color:var(--accent)] hover:brightness-110 transition"
  >
    Contact Us
  </a>
</motion.section>

        
      </section>

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
    </main>
  );
}
