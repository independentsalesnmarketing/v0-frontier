import Link from "next/link"
import type { Metadata } from "next"
import ContentMeta from "@/components/ContentMeta"

export const metadata: Metadata = {
  title: "10 Home Internet Security Tips Every Family Should Follow",
  description: "Protect your home network from hackers and malware with these straightforward security practices. No tech degree required.",
  alternates: { canonical: "https://frontier-deals.com/blog/home-internet-security-tips" },
}

export default function InternetSecurityTipsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <ContentMeta date="2026-01-08" readTime={8} category="Security" />
      <h1 className="text-4xl font-bold tracking-tight mb-6">10 Home Internet Security Tips Every Family Should Follow</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Your home network is the gateway to every device your family uses. A few simple practices can dramatically reduce your risk of being hacked, phished, or having your data compromised. Here are ten things you can do today.
      </p>

      <ol className="space-y-6 mb-8">
        <li>
          <h3 className="text-xl font-bold mb-2">1. Change Your Router&apos;s Default Password</h3>
          <p className="text-gray-700 leading-relaxed">
            Most routers ship with a default admin password like &quot;admin&quot; or &quot;password.&quot; Change this immediately. Use a strong, unique password for your router&apos;s admin panel that&apos;s different from your WiFi password.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-bold mb-2">2. Use WPA3 Encryption</h3>
          <p className="text-gray-700 leading-relaxed">
            WPA3 is the latest WiFi security standard. If your router supports it, enable it. If it only supports WPA2, that&apos;s still acceptable, but avoid WEP or open networks entirely.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-bold mb-2">3. Create a Guest Network</h3>
          <p className="text-gray-700 leading-relaxed">
            Set up a separate WiFi network for visitors. This keeps your main network isolated from devices you don&apos;t control. Most modern routers, including Frontier&apos;s included equipment, support guest networks.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-bold mb-2">4. Keep Router Firmware Updated</h3>
          <p className="text-gray-700 leading-relaxed">
            Router manufacturers release firmware updates that patch security vulnerabilities. Enable automatic updates if available, or check for updates monthly.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-bold mb-2">5. Use a DNS Filter</h3>
          <p className="text-gray-700 leading-relaxed">
            Services like Cloudflare&apos;s 1.1.1.3 (family filter) or OpenDNS block known malicious domains at the network level, protecting every device on your network automatically.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-bold mb-2">6. Disable WPS</h3>
          <p className="text-gray-700 leading-relaxed">
            WiFi Protected Setup (WPS) is a convenience feature with known vulnerabilities. Disable it in your router settings and connect devices using your WiFi password instead.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-bold mb-2">7. Use Strong, Unique WiFi Passwords</h3>
          <p className="text-gray-700 leading-relaxed">
            Your WiFi password should be at least 12 characters and include a mix of letters, numbers, and symbols. Avoid dictionary words or personal information.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-bold mb-2">8. Review Connected Devices Regularly</h3>
          <p className="text-gray-700 leading-relaxed">
            Log into your router&apos;s admin panel periodically and review the list of connected devices. If you see something you don&apos;t recognize, change your WiFi password immediately.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-bold mb-2">9. Segment Your IoT Devices</h3>
          <p className="text-gray-700 leading-relaxed">
            Smart home devices like cameras and thermostats are often less secure than computers and phones. Put them on a separate network (or VLAN) to limit the damage if one is compromised.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-bold mb-2">10. Use a VPN for Sensitive Tasks</h3>
          <p className="text-gray-700 leading-relaxed">
            When handling sensitive information like banking, use a reputable VPN. This adds an extra layer of encryption even on your home network.
          </p>
        </li>
      </ol>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-10 mb-8">
        <h3 className="font-bold text-lg mb-2">Secure, Fast Internet from Frontier</h3>
        <p className="text-gray-700 mb-4">
          Frontier Fiber plans include a modern, WPA3-capable router with built-in security features.
        </p>
        <Link href="/internet" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          View Plans
        </Link>
      </div>
    </article>
  )
}
