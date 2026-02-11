import { Shield, Award, Lock, BadgeCheck, Zap, Clock } from "lucide-react"

export function TrustBadgesSection() {
  const badges = [
    {
      icon: Shield,
      title: "SSL Encrypted",
      description: "All transactions secured with industry-standard 256-bit encryption.",
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Frontier Fiber exceeds FCC broadband standards for speed and reliability.",
    },
    {
      icon: Lock,
      title: "Data Safe",
      description: "Your personal data is protected with advanced security protocols.",
    },
    {
      icon: Zap,
      title: "99.9% Uptime SLA",
      description: "Service-level guarantee ensures consistent, reliable connectivity.",
    },
    {
      icon: BadgeCheck,
      title: "FCC Compliant",
      description: "Full compliance with Federal Communications Commission regulations.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for any issues or questions.",
    },
  ]

  const certifications = [
    {
      name: "BBB Accredited",
      rating: "A+",
      description: "Better Business Bureau accredited with excellent customer reviews.",
    },
    {
      name: "SOC 2 Compliant",
      description: "Security, availability, and confidentiality of customer data certified.",
    },
    {
      name: "HIPAA Compliant",
      description: "Protected health information security standards met for enterprise clients.",
    },
  ]

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Thousands, Backed by Industry Leaders
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your security and satisfaction are our top priorities. We maintain the highest standards of service quality,
            data protection, and customer support.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {badges.map((badge, idx) => {
            const Icon = badge.icon
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-colors"
              >
                <Icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
                <p className="text-sm text-gray-300">{badge.description}</p>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Certifications & Compliance</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
                    <BadgeCheck className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">
                    {cert.name}
                    {cert.rating && <span className="text-cyan-400 ml-2">{cert.rating}</span>}
                  </h4>
                  <p className="text-sm text-gray-300">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment to Quality */}
        <div className="mt-12 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Our Commitment to Excellence</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-4">
            We stand behind Frontier Fiber with our industry-leading 99.9% uptime guarantee and 24/7 customer support. 
            Your satisfaction is our priority, which is why we offer flexibility with no long-term contracts.
          </p>
          <p className="text-sm text-gray-400">No data caps, no hidden fees, just fast and reliable internet service.</p>
        </div>
      </div>
    </section>
  )
}
