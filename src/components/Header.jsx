"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ServerCog, ShieldCheck, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";


export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(null);


  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-yellow-400/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-yellow-400 font-bold text-xl tracking-wide">
          Reverie<span className="text-white">Tech</span>
        </Link>

        <nav className="flex gap-6 text-sm font-semibold relative">
          
          <Link href="/" className={navLink(pathname, "/")}>Home</Link>

          {/* SERVICES DROPDOWN */}
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative group"
          >
            <span className="text-white/90 hover:text-yellow-400 cursor-pointer">
              Services
            </span>

            {open && (
              <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
              className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#111] border border-yellow-400 rounded-xl shadow-2xl p-8 w-[90vw] max-w-6xl z-50 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
            
                <div className="col-span-3 mb-4 text-yellow-400 text-xl font-bold text-center border-b border-yellow-400 pb-2">
                  Reverie Tech Services
                </div>

                <DropdownItem
                  href="/services/manage"
                  icon={<ServerCog className="w-6 h-6" />}
                  title="Manage"
                  desc="From IT management to cloud solutions, we ensure seamless operations so you can focus on growing your business."
                  className="group p-4 rounded-lg hover:bg-yellow-400/10 transition border border-transparent hover:border-yellow-400 shadow hover:shadow-yellow-500/20"

                />

                <DropdownItem
                  href="/services/protect"
                  icon={<ShieldCheck className="w-6 h-6" />}
                  title="Protect"
                  desc="We protect your critical data, systems, and networks with advanced cybersecurity solutions."
                  className="group p-4 rounded-lg hover:bg-yellow-400/10 transition border border-transparent hover:border-yellow-400 shadow hover:shadow-yellow-500/20"

                />

                <DropdownItem
                  href="/services/innovate"
                  icon={<Lightbulb className="w-6 h-6" />}
                  title="Innovate"
                  desc="Building tailored solutions to streamline operations and enhance user experiences."
                  className="group p-4 rounded-lg hover:bg-yellow-400/10 transition border border-transparent hover:border-yellow-400 shadow hover:shadow-yellow-500/20"

                />
              </motion.div>
            )}
          </div>

                      {/* INDUSTRIES DROPDOWN */}
<div
  onMouseEnter={() => setOpen("industries")}
  onMouseLeave={() => setOpen(null)}
  className="group cursor-pointer"
>
  <span className="text-white/90 hover:text-yellow-400">Industries</span>

  {open === "industries" && (
  <motion.div
    initial={{ opacity: 0, y: -10, scale: 0.96, rotateX: -15 }}
    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
    transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
    className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#111] border border-yellow-400 rounded-xl shadow-2xl p-8 w-[90vw] max-w-6xl z-50 grid grid-cols-1 sm:grid-cols-4 gap-6"
  >
    <div className="col-span-4 mb-4 text-yellow-400 text-xl font-bold text-center border-b border-yellow-400 pb-2">
      Reverie Tech Industries
    </div>

    <DropdownItem
      href="/industries/business"
      icon="🏢"
      title="Businesses"
      desc="We are a proactive technology partner—not just a break-fix vendor. Our solutions keep your business running smoothly, securely, and efficiently."
    />

    <DropdownItem
      href="/industries/healthcare"
      icon="🏥"
      title="Healthcare"
      desc="We provide IT solutions for healthcare facilities, ensuring HIPAA compliance and robust system reliability."
    />

    <DropdownItem
      href="/industries/entertainment"
      icon="🎮"
      title="Entertainment"
      desc="We deliver scalable, secure IT infrastructure and cloud solutions tailored for media, gaming, and entertainment brands."
    />

    <DropdownItem
      href="/industries/legal"
      icon="⚖️"
      title="Legal"
      desc="Secure document management, compliance solutions, and high-trust IT services for modern legal practices."
    />
  </motion.div>
)}

</div>
          <Link href="/contact" className={navLink(pathname, "/contact")}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function DropdownItem({ href, icon, title, desc }) {
  return (
    <Link
      href={href}
      className="group p-4 rounded-lg hover:bg-yellow-400/10 transition border border-transparent hover:border-yellow-400 shadow hover:shadow-yellow-500/20"
    >
      <div className="flex items-center gap-3 mb-2 text-yellow-400 group-hover:scale-105 transition-transform text-xl">
        <span>{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-white/80 group-hover:text-yellow-200">{desc}</p>
    </Link>
  );
}


function navLink(pathname, href) {
  return `relative text-white/90 hover:text-yellow-400 transition ${
    pathname === href ? "text-yellow-400" : ""
  }`;
}
