"use client";

import Link from "next/link";
import { Building, Hospital, Store, Gavel, Gamepad2 } from "lucide-react";

const industries = [
  {
    title: "Businesses",
    icon: <Building className="w-7 h-7 text-[color:var(--accent-alt)]" />,
    text: "We’re a proactive tech partner — not just a break-fix vendor. Stay secure, smooth, and efficient.",
    href: "/industries/businesses",
  },
  {
    title: "Healthcare",
    icon: <Hospital className="w-7 h-7 text-[color:var(--accent-alt)]" />,
    text: "Reliable support, HIPAA compliance, and IT systems built for healthcare environments.",
    href: "/industries/healthcare",
  },
  {
    title: "Entertainment",
    icon: <Store className="w-7 h-7 text-[color:var(--accent-alt)]" />,
    text: "Scalable, consistent IT for multi-location entertainment businesses and franchises.",
    href: "/industries/entertainment",
  },
  {
    title: "Legal",
    icon: <Gavel className="w-7 h-7 text-[color:var(--accent-alt)]" />,
    text: "Streamlined discovery, secure client data, and compliance-focused support.",
    href: "/industries/legal",
  },
  {
    title: "Bowling Industry",
    icon: <Gamepad2 className="w-7 h-7 text-[color:var(--accent-alt)]" />,
    text: "Tech for entertainment venues including POS, networking, and support solutions.",
    href: "/industries/bowling",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative bg-[#0a0a0a] text-white py-32 px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:30px_30px] opacity-30" />
      <div className="absolute -top-60 -left-60 w-[800px] h-[800px] bg-gradient-to-br from-[#1454ff1a] to-[#00ffe51a] rounded-full blur-[180px] z-0" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px)] opacity-20 mix-blend-soft-light" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#1454ff]"
          style={{ textShadow: "0 0 10px rgba(20, 84, 255, 0.6)" }}
        >
          Industries We Serve
        </h2>
        <p className="text-gray-400 text-lg mt-2 max-w-xl mx-auto">
          From healthcare to hospitality, we bring tailored technology solutions
          to every industry we touch.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto relative z-10">
        {industries.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="relative bg-[#111] rounded-xl p-6 shadow-md ring-2 ring-[color:var(--accent-light)] hover:ring-[color:var(--accent)] ring-offset-2 ring-offset-[#0a0a0a] transition-all duration-300 hover:scale-[1.03] group overflow-hidden w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] max-w-[400px]"
          >
            {/* Ripple glow on hover */}
            <div className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-105 group-hover:bg-[color:var(--accent-light)] bg-[color:var(--accent)] blur-[40px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3
                  className="text-xl font-bold"
                  style={{ textShadow: "0 0 6px rgba(255,255,255,0.3)" }}
                >
                  {item.title}
                </h3>
              </div>
              <p className="text-white group-hover:text-[color:var(--accent)] text-sm">
                {item.text}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
