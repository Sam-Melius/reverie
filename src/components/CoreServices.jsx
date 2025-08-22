"use client";

import Image from "next/image";
import { ServerCog, ShieldCheck, Lightbulb } from "lucide-react";

const services = [
  {
    title: "MANAGE",
    icon: <ServerCog className="w-8 h-8 text-white" />,
    image: "/Manage.png",
    text: "We manage your tech — IT, cloud, and infrastructure — so you can focus on growing your business.",
  },
  {
    title: "PROTECT",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    image: "/Protect.png",
    text: "We protect your critical data, systems, and networks with enterprise-grade cybersecurity.",
    sub: "HIPAA compliance, proactive monitoring, and risk mitigation strategies.",
  },
  {
    title: "INNOVATE",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    image: "/Innovate.png",
    text: "We build tailored solutions to streamline operations and enhance experiences.",
    sub: "Dashboards, consulting, and fractional CIO/CTO leadership.",
  },
];

export default function CoreServices() {
  return (
    <section className="relative w-full py-2 text-white overflow-hidden bg-[#050505]">

      {/* ✨ Techy Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep grid shimmer */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />
        
        {/* Glow bursts */}
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] bg-yellow-500/20 blur-2xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-blue-900 via-transparent to-transparent opacity-20 rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-[color:var(--primary)] glitch" data-text="Core Services">
          Core Services
        </h2>

        <div className="flex flex-col gap-24 items-center">
          {services.map((service, i) => (
            <div
              key={i}
              className={`relative flex flex-col lg:flex-row ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-10 max-w-6xl`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <Image
                  src={service.image}
                  alt={`${service.title} Image`}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg border border-[color:var(--primary)]"
                />
              </div>

              {/* Text Card */}
              <div className="w-full lg:w-1/2 bg-[#111] p-8 rounded-2xl border border-[color:var(--primary)] shadow-xl hover:shadow-[0_0_20px_var(--accent-alt)] transition-all duration-300">
                <div className="mb-4 text-[color:var(--accent-alt)]">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-[color:var(--primary)] mb-2">{service.title}</h3>
                <p className="text-white/80 mb-2">{service.text}</p>
                {service.sub && <p className="text-sm text-white/60 italic">{service.sub}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
