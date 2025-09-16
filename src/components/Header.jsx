"use client";

import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ServerCog, ShieldCheck, Lightbulb, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { roboto } from "../styles/fonts";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-[color:var(--accent)/10]">
      <div
        className={`max-w-7xl mx-auto px-6 py-4 flex justify-between items-center ${roboto.className}`}
      >
        {/* Logo + Name */}
        <Link href="/" className="flex items-center w-auto">
          <img
            src="/LogoWhiteText.png"
            alt="Reverie Tech Logo"
            className="w-[150px] h-auto object-contain"
          />
          {/* <span className="ml-3 text-[color:var(--accent)] font-bold text-lg tracking-wide">
            Reverie Tech<span className="text-white"> Solutions</span>
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          <Link href="/" className={navLink(pathname, "/")}>
            Home
          </Link>

          {/* SERVICES DROPDOWN */}
          <div
            onMouseEnter={() => setOpen("services")}
            onMouseLeave={() => setOpen(false)}
            className="group relative"
          >
            <span className="text-white/90 hover:text-[color:var(--accent)] pb-20 cursor-pointer">
              Services
            </span>
            {open === "services" && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0.7 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0.7 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="fixed top-20 z-0 right-0 -translate-x-1/2 bg-gradient-to-b from-[#0b0b0b]/95 to-[#0d0d0d]/90 border-l border-b border-[color:var(--accent)] shadow-lg rounded-bl-xl px-8 py-6 w-[700px] backdrop-blur-xl origin-top"
              >
                <motion.div
                  className="text-[color:var(--accent)] text-lg font-bold text-center mb-6 relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Reverie Tech Services
                  <motion.div
          className="mx-auto mt-2 h-[3px] w-40 bg-[color:var(--accent)] rounded-full shimmer"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
                </motion.div>

                <div className="grid grid-cols-3 gap-6">
                  <DropdownItem
                    href="/services/manage"
                    icon={<ServerCog className="bg-none" />}
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
            className="group relative"
          >
            <span className="text-white/90 hover:text-[color:var(--accent)] pb-20 cursor-pointer">
              Industries
            </span>
            {open === "industries" && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0.7 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0.7 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="fixed top-20 z-0 right-0 -translate-x-1/2 bg-gradient-to-b from-[#0b0b0b]/95 to-[#0d0d0d]/90 border-l border-b border-[color:var(--accent)] shadow-lg rounded-bl-xl px-8 py-6 w-[700px] backdrop-blur-xl origin-top"
              >
                <motion.div
                  className="text-[color:var(--accent)] text-lg font-bold text-center mb-6 relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Reverie Tech Industries
                  <motion.div
          className="mx-auto mt-2 h-[3px] w-40 bg-[color:var(--accent)] rounded-full shimmer"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
                </motion.div>

                <div className="grid grid-cols-3 gap-6">
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
                    href="/industries/sports"
                    title="Sports"
                    desc="Tech for entertainment venues including POS, networking, and support solutions."
                  />
                </div>
              </motion.div>
            )}
          </div>

          <Link href="/contact" className={navLink(pathname, "/contact")}>
            Contact
          </Link>
          {/* <Link href="/conference" className={navLink(pathname, "/conference")}>
            Conference
          </Link> */}
          <Link href="/blog" className={navLink(pathname, "/blog")}>
            Blog
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(true)}
            className="text-white hover:text-[color:var(--accent)] transition"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className=" inset-0 bg-black backdrop-blur-md z-10"
              onClick={() => setMobileOpen(false)}
            />

            {/* MENU */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="top-0 right-0 w-full h-full bg-black/95 text-white z-50 p-8 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Navigation */}
              <nav className="flex flex-col gap-8 mt-12 text-xl font-semibold">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>

                <div>
                  <h3 className="text-[color:var(--accent)] mb-2">Services</h3>
                  <div className="flex flex-col gap-3 ml-4">
                    <Link href="/services/manage" onClick={() => setMobileOpen(false)}>Manage</Link>
                    <Link href="/services/protect" onClick={() => setMobileOpen(false)}>Protect</Link>
                    <Link href="/services/innovate" onClick={() => setMobileOpen(false)}>Innovate</Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-[color:var(--accent)] mb-2">Industries</h3>
                  <div className="flex flex-col gap-3 ml-4">
                    <Link href="/industries/businesses" onClick={() => setMobileOpen(false)}>Businesses</Link>
                    <Link href="/industries/healthcare" onClick={() => setMobileOpen(false)}>Healthcare</Link>
                    <Link href="/industries/entertainment" onClick={() => setMobileOpen(false)}>Entertainment</Link>
                    <Link href="/industries/legal" onClick={() => setMobileOpen(false)}>Legal</Link>
                    <Link href="/industries/sports" onClick={() => setMobileOpen(false)}>Sports</Link>
                  </div>
                </div>

                <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
                {/* <Link href="/conference" onClick={() => setMobileOpen(false)}>Conference</Link> */}
                <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

/* Dropdown Card */
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
        className="group p-6 rounded-lg transition border border-transparent hover:bg-[color:var(--accent)/10] shadow hover:shadow-[0_0_15px_color:var(--accent-alt)] backdrop-blur-lg"
      >
        <div className="flex items-center gap-3 text-[color:var(--accent)] group-hover:scale-105 transition-transform">
          {icon}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-white/80 group-hover:text-[color:var(--accent-alt)]">
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
