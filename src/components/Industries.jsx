"use client";


import {
  Building,
  Hospital,
  Store,
  Gavel,
  Gamepad2,
} from "lucide-react";

const industries = [
  {
    title: "Businesses",
    icon: <Building className="w-7 h-7 text-[#0056cc]" />, // Reverie blue
    text: "We’re a proactive tech partner — not just a break-fix vendor. Stay secure, smooth, and efficient.",
  },
  {
    title: "Healthcare",
    icon: <Hospital className="w-7 h-7 text-[#0056cc]" />,
    text: "Reliable support, HIPAA compliance, and IT systems built for senior living facilities.",
  },
  {
    title: "Entertainment",
    icon: <Store className="w-7 h-7 text-[#0056cc]" />,
    text: "Scalable, consistent IT for multi-location businesses and franchise networks.",
  },
  {
    title: "Legal",
    icon: <Gavel className="w-7 h-7 text-[#0056cc]" />,
    text: "Streamlined discovery, secure client data, and compliance-focused support.",
  },
  {
    title: "Bowling Industry",
    icon: <Gamepad2 className="w-7 h-7 text-[#0056cc]" />,
    text: "Tech for entertainment venues including POS, networking, and support solutions.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative bg-[#0a0a0a] text-white py-32 px-6 overflow-hidden"
    >
      {/* 🔳 Radial grid */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:30px_30px] opacity-30" />
      
      {/* 🟦 Mesh blob (Reverie blue + turquoise blend) */}
      <div className="absolute -top-60 -left-60 w-[800px] h-[800px] bg-gradient-to-br from-[#1454ff1a] to-[#00ffe51a] rounded-full blur-[180px] z-0" />

      {/* 📡 Scanlines */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px)] opacity-20 mix-blend-soft-light" />

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {industries.map((item, i) => (
          <div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-[#111] rounded-xl p-6 shadow-md ring-2 ring-[#1454ff] ring-offset-2 ring-offset-[#0a0a0a] transition-all duration-300 hover:scale-[1.03] group overflow-hidden"
          >
            {/* Ripple glow on hover */}
            <div className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-10 bg-[#00ffe5] blur-[40px] pointer-events-none" />

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
              <p className="text-[#0056cc] text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
