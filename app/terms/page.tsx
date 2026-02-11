import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Frontier Deals",
  description: "Review the terms of service for Frontier Deals. Understand the terms and conditions governing your use of our website and services.",
  alternates: { canonical: "/terms" },
}

export default function TermsOfService() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        Welcome to Frontier Deals, a Frontier Communications Authorized Sales Agent. These Terms of Service govern your
        use of our website and services. By accessing or using our website, you agree to comply with these terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using our website, you agree to these Terms of Service. If you do not agree, please do not use our website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Changes to Terms</h2>
      <p className="mb-4">
        We may modify these Terms of Service at any time. Your continued use of our website after any such modification
        constitutes your acceptance of the new Terms of Service.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Use of Website</h2>
      <p className="mb-4">
        You agree to use our website only for lawful purposes. You may not use our website to transmit any material that
        is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive
        of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
      <p className="mb-4">
        The content on our website, including text, graphics, logos, and images, is owned by us or our licensors and is
        protected by copyright and other intellectual property laws. You may not use our content without our express
        written permission.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
      <p className="mb-4">
        Our website is provided on an "as is" and "as available" basis. We make no warranties, express or implied,
        regarding the operation of our website or the information, content, materials, or products included on our
        website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
      <p className="mb-4">
        We will not be liable for any damages of any kind arising from the use of our website, including, but not
        limited to direct, indirect, incidental, punitive, and consequential damages.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
      <p className="mb-4">
        These Terms of Service shall be governed by and construed in accordance with the laws of the State of [Your
        State].
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
      <p>If you have any questions about these Terms of Service, please contact us at customerservice@frontier.com.</p>
    </div>
  )
}
