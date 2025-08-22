"use client";

import { motion } from "framer-motion";
import { lexend } from "../../../styles/fonts";
import Link from "next/link";

export default function BowlingPage() {
  return (
    <main className={`min-h-screen text-white px-6 py-20 md:px-12 ${lexend.className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--accent)] mb-4">
          The Ultimate Interactive Bowling Experience
        </h1>
        <motion.div
          className="mx-auto mt-2 h-[3px] w-40 bg-[color:var(--accent)] rounded-full shimmer"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <p className="text-lg text-white/80 mb-8">
          We're on a mission to revolutionize how you think about bowling. From projection-mapped lanes to real-time ball tracking, our tech transforms bowling alleys into immersive digital playgrounds.
        </p>
        <Link
          href="/contact"
          className="bg-[color:var(--accent-alt-light)] hover:bg-[color:var(--accent-alt)] text-black font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-[0_0_20px_var(--accent-alt)] transition transform hover:scale-105"
        >
          Learn More
        </Link>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-5xl mx-auto bg-gradient-to-b from-[#121212] to-[#1a1a1a] border border-[color:var(--accent)] rounded-xl p-8 md:p-12 mt-12 shadow-[0_0_60px_rgba(0,255,255,0.04)]"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--accent)] mb-6 text-center">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "On-Lane Projection Mapping",
              desc: "We project interactive games and effects directly onto the lane. Each system is custom-calibrated to your exact install for pixel-perfect accuracy.",
            },
            {
              title: "Anamorphic Image Engine",
              desc: "Every animation is rendered with perspective correction so visuals look perfect from the bowler's view at the foul line.",
            },
            {
              title: "Specto Tracking Integration",
              desc: "Using Specto, we track the ball’s movement in real time—enabling responsive gameplay, target zones, and dynamic lane effects.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="bg-[#181818] border border-[color:var(--accent)/20] p-6 rounded-lg shadow hover:shadow-[0_0_20px_color:var(--accent)] transition"
            >
              <h3 className="text-xl font-semibold text-[color:var(--accent)] mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-4xl mx-auto mt-16 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--accent)] mb-6">
          Built for Bowling Venues of the Future
        </h2>
        <p className="text-white/90 text-lg">
          Whether you run a boutique alley or a full-scale entertainment complex, our immersive tech adds excitement, interactivity, and a wow factor that keeps players coming back.
        </p>
      </motion.section>

      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="max-w-6xl mx-auto mt-24 px-6 py-16 md:px-12 bg-gradient-to-br from-[#0e0e0e] to-[#141414] border border-[color:var(--accent)] rounded-xl shadow-[0_0_60px_rgba(0,255,255,0.03)] backdrop-blur"
>
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[color:var(--accent)] mb-8">
    Comprehensive IT Services for Businesses
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/90">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-[#1a1a1a] border border-[color:var(--accent)/20] p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold text-[color:var(--accent)] mb-2">
        Managed IT Services
      </h3>
      <p>
        We take the stress out of IT management by providing 24/7 monitoring,
        maintenance, and support. Our services ensure your systems are always up to date,
        secure, and running at peak performance.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-[#1a1a1a] border border-[color:var(--accent)/20] p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold text-[color:var(--accent)] mb-2">
        Cybersecurity & Compliance
      </h3>
      <p>
        With cyber threats on the rise, protecting your business is more important than ever.
        We implement cutting-edge security measures to safeguard sensitive data and ensure compliance
        with industry regulations.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-[#1a1a1a] border border-[color:var(--accent)/20] p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold text-[color:var(--accent)] mb-2">
        Cloud & Remote Work Solutions
      </h3>
      <p>
        Modern businesses need flexibility. We provide secure cloud solutions
        that allow your team to collaborate from anywhere while keeping your data protected.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-[#1a1a1a] border border-[color:var(--accent)/20] p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold text-[color:var(--accent)] mb-2">
        Custom Technology & Innovation
      </h3>
      <p>
        We don’t just support your IT—we help you innovate. From custom app development
        to workflow automation and Power BI dashboards, our team builds forward-thinking solutions
        that align with your business goals.
      </p>
    </motion.div>
  </div>

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
    <button className="px-6 py-3 rounded bg-[color:var(--accent)] text-black font-semibold shadow hover:shadow-lg transition">
      Get a Free Quote
    </button>
  </motion.div>
</motion.section>

    </main>
  );
}
