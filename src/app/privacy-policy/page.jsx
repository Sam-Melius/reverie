import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Reverie Tech Solutions",
  description: "Our commitment to your data privacy and protection.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className=" mx-auto px-6 py-20 text-white bg-black">
      <h1 className="text-4xl font-bold mb-6 text-[color:var(--accent-light)]">
        Privacy Policy
      </h1>

      <p className="text-sm text-gray-400 mb-10">
        <strong>Effective Date:</strong> 01/01/2025
      </p>

      <div className="space-y-8 text-white/90">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p>
            We collect personal information you voluntarily provide through forms, email, or direct interactions. This may include name, email, phone, company info, IP address, and browser/device data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>
            We use your information to provide services, respond to inquiries, improve the site, send marketing (with consent), and prevent security issues.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Sharing of Information</h2>
          <p>
            We do not sell or rent your data. We may share it with service providers or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Cookies and Tracking</h2>
          <p>
            We use cookies and analytics tools to enhance site experience. You can manage cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
          <p>
            We use industry-standard security measures to protect your data, but no method is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
          <p>
            You may have rights to access, update, delete, or restrict your data. Contact us{" "}
            <a href="mailto:support@reverietech.com" className="underline text-[color:var(--accent-light)]">
             <Link href="/contact">Here</Link>
            </a>{" "}
            to exercise your rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Third-Party Links</h2>
          <p>
            We are not responsible for the privacy practices of other websites linked from ours.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
          <p>
            Our services are not intended for children under 13. We do not knowingly collect their data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">9. Changes to This Policy</h2>
          <p>
            We may update this policy. Changes will be posted with a revised “Effective Date.”
          </p>
        </section>

      </div>
    </main>
  );
}
