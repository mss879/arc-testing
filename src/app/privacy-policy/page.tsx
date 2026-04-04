import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ARC AI — How We Protect Your Data",
  description: "ARC AI privacy policy — how we collect, use, and protect your personal data in compliance with GDPR and UK data protection laws.",
  openGraph: {
    title: "Privacy Policy | ARC AI",
    description: "Learn how ARC AI collects, uses, and protects your personal data. GDPR and UK data protection compliant.",
    url: "https://www.arcai.agency/privacy-policy",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Privacy Policy",
        type: "image/jpeg",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arcaiagency",
    title: "Privacy Policy | ARC AI",
    description: "Learn how ARC AI collects, uses, and protects your personal data.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 py-32 lg:py-40">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-white/50 mb-12">Last updated: March 12, 2026</p>

        <div className="space-y-10 text-white/80 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Who We Are</h2>
            <p>
              ARC AI (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a digital agency registered in Sri Lanka
              (Registration Number: PV00352581) with operations in the United Kingdom and Sri Lanka.
              We provide web design, AI automation, branding, and digital marketing services.
            </p>
            <p className="mt-2">
              <strong className="text-white">Data Controller:</strong> ARC AI<br />
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:support@arcai.agency" className="text-[#FF4925] hover:underline">
                support@arcai.agency
              </a>
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of personal data:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong className="text-white">Contact information:</strong> name, phone number, email address, company name</li>
              <li><strong className="text-white">Usage data:</strong> pages visited, time on site, browser type, IP address (anonymised)</li>
              <li><strong className="text-white">Communication data:</strong> messages submitted via our contact form or AI chat widget</li>
              <li><strong className="text-white">Analytics data:</strong> collected via Google Analytics (GA4) for website improvement purposes</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p>We use your personal data to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to enquiries submitted through our contact form</li>
              <li>Provide quotes, proposals, and service information</li>
              <li>Improve our website, services, and user experience</li>
              <li>Send relevant updates if you have subscribed to our newsletter</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Legal Basis for Processing (GDPR)</h2>
            <p>We process your personal data under the following legal bases:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong className="text-white">Consent:</strong> when you submit a contact form or subscribe to our newsletter</li>
              <li><strong className="text-white">Legitimate interest:</strong> to improve our services and website performance</li>
              <li><strong className="text-white">Contractual necessity:</strong> to fulfil service agreements with clients</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Sharing</h2>
            <p>We do not sell your personal data. We may share data with:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong className="text-white">Service providers:</strong> Supabase (database), Google Analytics (analytics), Resend (email delivery), Make.com (workflow automation)</li>
              <li><strong className="text-white">Legal authorities:</strong> if required by law or to protect our rights</li>
            </ul>
            <p className="mt-2">All third-party providers are contractually required to protect your data.</p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy.
              Contact form submissions are retained for up to 24 months. Analytics data is retained according
              to Google Analytics default settings.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p>Under GDPR and UK data protection law, you have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (&quot;right to be forgotten&quot;)</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability — receive your data in a structured format</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:support@arcai.agency" className="text-[#FF4925] hover:underline">
                support@arcai.agency
              </a>.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Cookies</h2>
            <p>
              Our website uses essential cookies for functionality and analytics cookies (Google Analytics)
              to understand how visitors interact with our site. You can control cookie preferences through
              your browser settings.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. International Data Transfers</h2>
            <p>
              As we operate in both the UK and Sri Lanka, your data may be transferred between these
              jurisdictions. We ensure appropriate safeguards are in place for all international transfers
              in compliance with GDPR requirements.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page
              with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <p className="mt-2">
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:support@arcai.agency" className="text-[#FF4925] hover:underline">
                support@arcai.agency
              </a>
              <br />
              <strong className="text-white">Phone (UK):</strong> +44 7466 368427
              <br />
              <strong className="text-white">Phone (Sri Lanka):</strong> +94 771852522
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
