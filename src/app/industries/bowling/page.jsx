"use client";

import { motion } from "framer-motion";
import { roboto } from "../../../styles/fonts";
import Link from "next/link";
import { Video, Crop, Target,  } from "lucide-react";
import ComprehensiveSection from "@/components/ComprehensiveSection";

const services = [
  {
    title: "On-Lane Projection Mapping",
    icon: <Video className="w-7 h-7 text-[color:var(--accent-alt)]" />,
    description:
      "We project interactive games and effects directly onto the lane. Each system is custom-calibrated to your exact install for pixel-perfect accuracy. Whether it's targets, animations, or real-time effects that respond to ball movement, every interaction is fluid and visually striking. The result is an immersive, high-energy experience that keeps bowlers engaged and entertained.",
  },
  {
    title: "Anamorphic Image Engine",
    icon: <Crop className="w-7 h-7 text-[color:var(--accent-alt)]" />,
    description:
      "Every animation is rendered with precise perspective correction, ensuring visuals appear undistorted and perfectly scaled from the bowler’s point of view at the foul line. This creates a natural sense of depth and realism, allowing projections to blend seamlessly with the physical lane for maximum visual impact.",
  },
  {
    title: "Specto Tracking Integration",
    icon: <Target className="w-7 h-7 text-[color:var(--accent-alt)]" />,
    description:
      "By integrating with Specto's advanced ball-tracking system, our platform responds in real time to ball speed, direction, and impact location. This unlocks responsive gameplay features, interactive target zones, and reactive lane effects—turning every shot into a dynamic experience that evolves with the bowler’s performance.",
  },
];


export default function BowlingPage() {
  return (
    <main className={`min-h-screen text-white px-6 py-20 md:px-12 ${roboto.className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1
            initial={{ opacity: 0, x: -40, rotateZ: -1 }}
            animate={{ opacity: 1, x: 0, rotateZ: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-light)] via-[color:var(--accent)] to-[color:var(--accent-light)] drop-shadow-[0_0_10px_var(--accent-alt)]"
          >
          The Ultimate Interactive Bowling Experience
        </motion.h1>
        <motion.div
          className="mx-auto mt-2 mb-6 h-[3px] w-40 bg-[color:var(--accent)] rounded-full shimmer"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <p className="text-lg text-white/80 mb-8">
          We're on a mission to revolutionize how you think about bowling. From projection-mapped lanes to real-time ball tracking, our tech transforms bowling alleys into immersive digital playgrounds.
        </p>
        <Link
          href="/contact"
          className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-alt)] text-black font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-[0_0_20px_var(--accent-alt)] transition transform hover:scale-105"
        >
          Learn More
        </Link>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-5xl mx-auto  p-8 md:p-12 mt-6 "
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--accent-light)] mb-2 text-center">
          Key Features
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    <p className="text-white/70 text-sm">
                      {service.description}
                    </p>
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
        <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--accent-alt)] mb-6">
          Built for Bowling Venues of the Future
        </h2>
        <p className="text-white/90 text-lg">
          Whether you run a boutique alley or a full-scale entertainment complex, our immersive tech adds excitement, interactivity, and a wow factor that keeps players coming back.
        </p>
      </motion.section>
      <ComprehensiveSection />
    </main>
  );
}
