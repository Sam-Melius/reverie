"use client";

import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 px-6 overflow-hidden">
      {/* Background glow + scanlines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(transparent,rgba(0,255,229,0.1))] blur-[80px] opacity-20" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px)] mix-blend-soft-light opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        {/* Logo + Tagline */}
        <div className="space-y-4">
              <img
    src="/WhiteLogo.png"
    alt="Reverie Tech Logo"
    className="w-[200px] h-auto object-contain"
  />
          {/* <h3 className="text-2xl font-bold text-[color:var(--accent)] tracking-wide">Reverie Tech <span className="text-white"> Solutions</span></h3> */}
          <p className="text-[color:var(--accent)]">
            Future-ready IT solutions that keep your business secure, efficient, and innovative.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-[color:var(--accent)]">Explore</h4>
          <ul className="space-y-2">
            <li><Link href="/services/manage" className="hover:text-[color:var(--accent-alt)]">Manage</Link></li>
            <li><Link href="/services/protect" className="hover:text-[color:var(--accent-alt)]">Protect</Link></li>
            <li><Link href="/services/innovate" className="hover:text-[color:var(--accent-alt)]">Innovate</Link></li>
            <li><Link href="/#industries" className="hover:text-[color:var(--accent-alt)]">Industries</Link></li>
            <li><Link href="/contact" className="hover:text-[color:var(--accent-alt)]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-[color:var(--accent)]">Contact Us</h4>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-center gap-2"><Mail size={16} /> info@reverietech.com</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> 1224 US-377 Suite 303 #242
Roanoke, TX 76262</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Link href="https://linkedin.com" target="_blank" className="hover:text-[color:var(--accent-alt)]">
              <Linkedin size={20} />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-[color:var(--accent-alt)]">
              <Facebook size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mt-16 border-t border-white/10 pt-6 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} Reverie Tech Solutions. All rights reserved.
      </div>
    </footer>
  );
}
