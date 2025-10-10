"use client";

import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <section className="relative w-full min-h-screen text-white px-6 lg:px-20 py-24 overflow-hidden bg-black">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-light)] via-[color:var(--accent)] to-[color:var(--accent-light)]"
      >
        Terms of Service for Reverie Tech Solutions
      </motion.h1>

      <div className="max-w-4xl mx-auto whitespace-pre-wrap text-white/90 leading-relaxed text-base">
        {`Effective Date: May 1, 2025
Welcome to Reverie Tech Solutions! These Terms of Service ("Terms") govern your access to and use of our website (reverietech.com), services, and any related communications, including SMS messaging. By using our services, you agree to these Terms. We're excited to partner with you in achieving efficient, innovative tech outcomes.

1. Our Services
We provide proactive IT solutions, including monitoring, cybersecurity, and tailored tools for various industries. These help streamline operations and unlock opportunities with minimal disruption.

2. User Accounts and Responsibilities
To access certain features, you may create an account. Keep your credentials secure and use services lawfully. You're responsible for your content and interactions.

3. Communications and SMS
We may send updates via email or SMS with your consent. See our Privacy Policy for details on opt-in/opt-out. This keeps you ahead with actionable insights.

4. Intellectual Property
Our content (e.g., tools, advice) is owned by us or licensors. It is not for reproduction without explicit written permission.

5. Limitations of Liability
We provide services "as is" and aren't liable for indirect damages. We strive for reliability to minimize risks.

6. Termination
We may terminate access for violations, with notice where possible.

7. Governing Law
These Terms are governed by Utah law (based on your incorporation).

8. Changes
Please visit this website for changes.

9. Contact
Reach us at support@reverietech.com.`}
      </div>
    </section>
  );
}
