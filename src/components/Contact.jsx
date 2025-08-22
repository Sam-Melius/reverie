"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔁 Hook up to Formspree, Vercel serverless, or backend here
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0b0b0b] text-white py-32 px-6 overflow-hidden"
    >
      {/* ✨ Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:30px_30px] opacity-30 pointer-events-none z-0" />
      <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-yellow-400/10 blur-[180px] rounded-full z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
          Request a Free MSP Quote
        </h2>
        <p className="text-white/80">
          Fill out the form below, and our team will contact you with a customized quote for our Managed Service Provider solutions.
        </p>
      </div>

      {!submitted ? (
        <form
          action="https://formspree.io/f/mgvznnbb"
          method="POST"
          className="relative z-10 max-w-4xl mx-auto grid gap-6 text-left"
          onSubmit={() => setSubmitted(true)}
        >

          {/* Company Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Company Name" name="company" required />
            <Input label="Contact Name" name="name" required />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Email Address" name="email" type="email" required />
            <Input label="Phone Number" name="phone" type="tel" required />
          </div>

          {/* Company Size */}
          <div>
            <label className="block text-sm mb-2 text-yellow-400 font-semibold">
              Company Size
            </label>
            <select
              name="size"
              required
              className="w-full bg-[#111] border border-yellow-400 px-4 py-3 rounded text-white focus:outline-none"
            >
              <option value="">Select company size</option>
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-200 employees</option>
              <option>201-500 employees</option>
              <option>500+ employees</option>
            </select>
          </div>

          {/* Services of Interest */}
          <div>
            <label className="block text-sm mb-2 text-yellow-400 font-semibold">
              Services of Interest
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {["24/7 HelpDesk Support", "Cloud Services", "Cybersecurity", "Network Management"].map((service) => (
                <label key={service} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    className="form-checkbox text-yellow-400 bg-[#111] border-yellow-400"
                  />
                  <span className="text-white/90">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Comments */}
          <div>
            <label className="block text-sm mb-2 text-yellow-400 font-semibold">
              Additional Comments
            </label>
            <textarea
              name="comments"
              rows="4"
              placeholder="Tell us more about your needs"
              className="w-full bg-[#111] border border-yellow-400 px-4 py-3 rounded text-white resize-none focus:outline-none"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold py-3 px-8 rounded hover:bg-yellow-300 transition shadow-lg"
            >
              Submit Request
            </button>
          </div>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-xl text-yellow-400 font-semibold"
        >
          ✅ Thank you for your submission! We'll contact you soon with your free quote.
        </motion.div>
      )}
    </section>
  );
}

// 💡 Reusable input component
function Input({ label, name, type = "text", required = false }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm mb-2 text-yellow-400 font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="bg-[#111] border border-yellow-400 px-4 py-3 rounded text-white focus:outline-none"
      />
    </div>
  );
}
