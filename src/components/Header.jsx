"use client";

import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ServerCog, ShieldCheck, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { lexend } from "../styles/fonts";


export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-[color:var(--accent)/10]">
      <div className={`max-w-7xl mx-auto px-6 py-4 flex justify-between items-center ${lexend.className}`}>
<Link href="/" className="flex items-center w-auto">
  <img
    src="/ReverieLogo.png"
    alt="Reverie Tech Logo"
    className="w-[100px] h-auto object-contain"
  />
  <span className="text-[color:var(--accent)] font-bold text-lg tracking-wide">
    Reverie Tech<span className="text-white"> Solutions</span>
  </span>
</Link>



        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/" className={navLink(pathname, "/")}>Home</Link>

          {/* SERVICES DROPDOWN */}
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="group"
          >
            <span className="text-white/90 hover:text-[color:var(--accent)] cursor-pointer">
              Services
            </span>

            {open && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0.7 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0.7 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="fixed top-[0px] right-0 right-0 -translate-x-1/2 bg-gradient-to-b from-[#0b0b0b]/95 to-[#0d0d0d]/90 border-l border-b border-[color:var(--accent)] shadow-[0_0_40px_rgba(0,255,255,0.08)] rounded-bl-xl px-8 py-6 w-[92vw] max-w-6xl z-50 backdrop-blur-xl overflow-hidden origin-top"
              >
                <motion.div
                  className="text-[color:var(--accent)] text-xl font-bold text-center mb-6 relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Reverie Tech Services
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] h-[2px] w-32 bg-[color:var(--accent)] rounded-full shimmer"
                    animate={{ x: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <DropdownItem
                    href="/services/manage"
                    icon={<ServerCog className="w-6 h-6" />}
                    title="Manage"
                    desc="From IT management to cloud solutions, we ensure seamless operations so you can focus on growing your business."
                  />
                  <DropdownItem
                    href="/services/protect"
                    icon={<ShieldCheck className="w-6 h-6" />}
                    title="Protect"
                    desc="We protect your critical data, systems, and networks with advanced cybersecurity solutions."
                  />
                  <DropdownItem
                    href="/services/innovate"
                    icon={<Lightbulb className="w-6 h-6" />}
                    title="Innovate"
                    desc="Building tailored solutions to streamline operations and enhance user experiences."
                  />
                </div>
              </motion.div>
            )}

          </div>

          {/* INDUSTRIES DROPDOWN */}
          <div
            onMouseEnter={() => setOpen("industries")}
            onMouseLeave={() => setOpen(false)}
            className="group"
          >
            <span className="text-white/90 hover:text-[color:var(--accent)] cursor-pointer">
              Industries
            </span>

            {open === "industries" && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0.7 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0.7 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="fixed top-[0px] right-0 -translate-x-1/2 bg-gradient-to-b from-[#0b0b0b]/95 to-[#0d0d0d]/90 border-l border-b border-[color:var(--accent)] shadow-[0_0_40px_rgba(0,255,255,0.08)] rounded-bl-xl px-8 py-6 w-[92vw] max-w-6xl z-50 backdrop-blur-xl overflow-hidden origin-top"
              >
                <motion.div
                  className="text-[color:var(--accent)] text-xl font-bold text-center mb-6 relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Reverie Tech Industries
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] h-[2px] w-32 bg-[color:var(--accent)] rounded-full shimmer"
                    animate={{ x: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <DropdownItem
                    href="/industries/businesses"
                    title="Businesses"
                    desc="We’re a proactive tech partner — not just a break-fix vendor. Stay secure, smooth, and efficient."
                  />
                  <DropdownItem
                    href="/industries/healthcare"
                    title="Healthcare"
                    desc="Reliable support, HIPAA compliance, and IT systems built for senior living facilities."
                  />
                  <DropdownItem
                    href="/industries/entertainment"
                    title="Entertainment"
                    desc="Scalable, consistent IT for multi-location businesses and franchise networks."
                  />
                  <DropdownItem
                    href="/industries/legal"
                    title="Legal"
                    desc="Streamlined discovery, secure client data, and compliance-focused support."
                  />
                  <DropdownItem
                    href="/industries/bowling"
                    title="Bowling Industry"
                    desc="Tech for entertainment venues including POS, networking, and support solutions."
                  />
                </div>
              </motion.div>
            )}
          </div>

          <Link href="/contact" className={navLink(pathname, "/contact")}>Contact</Link>
          <Link href="/blog" className={navLink(pathname, "/blog")}>Blog</Link>

        </nav>
      </div>
      
    </header>
  );
}

function DropdownItem({ href, icon, title, desc }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="var(--accent)"
      glarePosition="all"
      scale={1.04}
      transitionSpeed={300}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
    >
      <Link
        href={href}
        className="group p-4 rounded-lg transition border border-transparent hover:bg-[color:var(--accent)/10]  shadow hover:shadow-[0_0_15px_color:var(--accent-alt)] bg-[#0d0d0d]/70 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-2 text-[color:var(--accent)] group-hover:scale-105 transition-transform">
          {icon}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-white/80 group-hover:text-[color:var(--accent-alt-light)]">
          {desc}
        </p>
      </Link>
    </Tilt>
  );
}

function navLink(pathname, href) {
  return `relative text-white/90 hover:text-[color:var(--accent)] transition ${
    pathname === href ? "text-[color:var(--accent)]" : ""
  }`;
}
