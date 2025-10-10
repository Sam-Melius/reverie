"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <section className="relative w-full min-h-screen text-white px-6 lg:px-20 py-24 overflow-hidden bg-black">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--accent-light)] via-[color:var(--accent)] to-[color:var(--accent-light)]"
      >
        Privacy Policy for Reverie Tech Solutions
      </motion.h1>

      <div className="max-w-4xl mx-auto whitespace-pre-wrap text-white/90 leading-relaxed text-base">
        {`Effective Date: May 1, 2025
At Reverie Tech Solutions, we are committed to protecting your privacy and delivering innovative, secure technology solutions that empower your business. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (reverietech.com), engage with our services, or interact with us through SMS messaging or other channels. By using our services, you agree to the practices described here. We prioritize transparency and data security to foster trust and enable seamless experiences.

1. Information We Collect
We collect information to provide tailored IT solutions, proactive support, and relevant updates. This includes:
* Personal Information: Such as your name, email address, phone number, company details, and job title, provided voluntarily through website forms, consultations, or sign-ups.
* Usage Data: Automatically collected details like IP address, browser type, pages visited, and interaction times to improve our site and services.
* SMS-Specific Data: If you opt in to our SMS programs, we collect your phone number to send updates on service alerts or account updates.
We only collect what's necessary to deliver value, such as streamlining your operations or protecting your data proactively.

2. How We Use Your Information
Your data helps us innovate and support your success:
* To provide and maintain our IT services, including proactive monitoring and customized solutions for industries like healthcare and hospitality.
* To communicate with you, including sending emails or SMS about updates, promotions, or tips that enhance efficiency without disrupting your workflow.
* To analyze trends and improve our offerings, ensuring we stay ahead of security risks and tech overload.
* For SMS messaging: We use your phone number solely for opted-in communications, such as service notifications or educational content, always with your consent.
We never sell your data and focus on uses that drive tangible benefits, like reducing reactive IT issues.

3. SMS Messaging Consent and Opt-In/Opt-Out
We value your control over communications. By providing your phone number and opting in (e.g., via a website checkbox, form submission, or texting "JOIN" to our number), you consent to receive SMS messages from Reverie Tech Solutions. These may include:
* Promotional texts about new tools for automation and decision-making.
* Service alerts to prevent data breaches or system downtime.
Opt-In Process: Consent is obtained clearly— for example, "By checking this box and providing your phone number, you agree to receive SMS updates from Reverie Tech Solutions. Message and data rates may apply. Reply STOP to opt out."
Opt-Out: Text "STOP" at any time to unsubscribe. We'll confirm and cease messages promptly. You can also contact us at support@reverietech.com.
Frequency: Messages are sent sparingly (e.g., 2-4 per month) to provide value without overwhelming you.
Data Rates: Standard message and data rates may apply based on your carrier plan.
This approach ensures compliant, user-friendly texting that keeps you informed and empowered.

4. Sharing Your Information
We share data only when essential for service delivery:
* With trusted partners (e.g., secure cloud providers) to enable features like proactive IT maintenance.
* To comply with legal requirements or protect rights.
* In aggregated, anonymized form for analytics.
We select partners who uphold high security standards, aligning with our commitment to risk reduction.

5. Data Security
Security is at our core. We use industry-leading measures like encryption, access controls, and regular audits to protect your information from unauthorized access or breaches. In the unlikely event of an incident, we'll notify you promptly as required by law.

6. Your Rights and Choices
You can access, update, or delete your data by contacting us. Residents in certain regions (e.g., under GDPR or CCPA) have additional rights, which we honor efficiently.

7. Children's Privacy
Our services are not directed at children under 13, and we do not knowingly collect their data.

8. Changes to This Policy
We'll update this policy as needed and notify you via email or site notice for transparency.

9. Contact Us
Questions? Reach us at:
* Email: privacy@reverietech.com
* Phone: 801-805-6661
* Address: 1224 N US-377 Suite 303 #242, Roanoke, TX 76262

By prioritizing privacy, we help you focus on growth with peace of mind.`}
      </div>
    </section>
  );
}
