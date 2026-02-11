import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Frontier Deals",
  description: "Read the Frontier Deals privacy policy. Learn how we collect, use, and protect your personal information when you use our website and services.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Frontier Deals, a Frontier Communications Authorized Sales Agent, is committed to protecting your privacy. This
        Privacy Policy describes how we collect, use, and share information about you when you use our website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <p className="mb-4">
        We collect information from you when you visit our website, use our services, or contact us. This information
        may include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Your name, address, email address, and phone number</li>
        <li>Demographic information, such as your age, gender, and interests</li>
        <li>Information about your use of our website, such as the pages you visit and the links you click</li>
        <li>Information about your device, such as your IP address, browser type, and operating system</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
      <p className="mb-4">We use this information to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide you with our services</li>
        <li>Improve our website and services</li>
        <li>Send you marketing communications</li>
        <li>Personalize your experience on our website</li>
        <li>Prevent fraud and abuse</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">3. How We Share Your Information</h2>
      <p className="mb-4">We may share your information with:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Our affiliates</li>
        <li>Service providers who help us operate our website and provide our services</li>
        <li>Business partners who offer products or services that may be of interest to you</li>
        <li>Law enforcement agencies or other government officials, if required by law</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
      <p className="mb-4">You have the right to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Access your personal information</li>
        <li>Correct your personal information</li>
        <li>Delete your personal information</li>
        <li>Object to our use of your personal information</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
        However, no method of transmission over the Internet, or method of electronic storage, is 100% secure.
      </p>
    </div>
  )
}
