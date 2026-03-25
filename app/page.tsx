import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AvailabilityToolbar from "./components/AvailabilityToolbar"
import {
  CheckCircle2,
  Star,
  Shield,
  Zap,
  Users,
  Check,
  ArrowRight,
  Gift,
  Wrench,
  CreditCard,
  Router,
} from "lucide-react"
import Hero from "./components/Hero"
import CityStateAccordion from "./components/CityStateAccordion"
import { FaqItem } from "@/components/HomePageClient"
import { PageOrderButton } from "@/components/PageInteractions"
import SeoFreshnessNote from "@/components/SeoFreshnessNote"
import KeyFacts from "@/components/KeyFacts"
import GlossaryTerms from "@/components/GlossaryTerms"
import { fiberInternetTerms, buyingGuideTerms } from "@/lib/glossary-data"

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://frontier-deals.com/#organization",
  name: "Frontier Deals — Authorized Frontier Retailer",
  url: "https://frontier-deals.com",
  logo: {
    "@type": "ImageObject",
    url: "https://frontier-deals.com/android-chrome-192x192.png",
    width: 192,
    height: 192,
  },
  description:
    "Authorized Frontier retailer offering fiber internet plans, bundles, and business solutions. Order Frontier Fiber online today.",
  areaServed: [
    "California","Texas","Florida","Connecticut","New York","Ohio","Indiana",
    "Minnesota","Pennsylvania","North Carolina","South Carolina","West Virginia",
    "Illinois","Georgia","Arizona","Nevada","Iowa","Nebraska","Tennessee",
  ].map((state) => ({ "@type": "State", name: state })),
  priceRange: "$29.99-$109.99",
  sameAs: [
    "https://en.wikipedia.org/wiki/Frontier_Communications",
    "https://frontier.com",
    "https://www.bbb.org/us/ct/norwalk/profile/telecommunications/frontier-communications-0611-90000001",
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://frontier-deals.com/#website",
  url: "https://frontier-deals.com",
  name: "Frontier Deals",
  description: "Authorized Frontier Internet Retailer",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://frontier-deals.com/coverage?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is fiber internet and how is it different from cable or DSL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fiber internet uses fiber-optic cables to transmit data using light signals, resulting in faster speeds and more reliable connections than traditional copper-based internet. Frontier Fiber offers symmetrical upload and download speeds, meaning you can upload large files just as quickly as you download them.",
      },
    },
    {
      "@type": "Question",
      name: "Is Frontier Fiber available in my area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frontier is expanding its fiber network across the United States. Use the availability checker on our site to see if Frontier Fiber is available at your address. Service is currently available in California, Texas, Florida, Connecticut, New York, and 20+ additional states.",
      },
    },
    {
      "@type": "Question",
      name: "Are there data caps on Frontier Fiber plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All Frontier Fiber plans come with unlimited data. Stream, game, video conference, and download as much as you want without worrying about data caps or overage charges.",
      },
    },
    {
      "@type": "Question",
      name: "What equipment do I need for Frontier Fiber?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frontier installs an Optical Network Terminal (ONT) at no cost. Most plans also include a free eero Pro 6 Wi-Fi router for whole-home coverage.",
      },
    },
    {
      "@type": "Question",
      name: "How do I sign up for Frontier Internet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can order online through our website. We are an authorized Frontier retailer — installation can be scheduled at your convenience.",
      },
    },
  ],
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://frontier-deals.com/#product",
  name: "Frontier Fiber Internet",
  description: "High-speed fiber internet with symmetrical speeds up to 7 Gig",
  brand: { "@type": "Brand", name: "Frontier Communications" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "29.99",
    highPrice: "109.99",
    offerCount: "5",
    url: "https://frontier-deals.com/internet",
    availability: "https://schema.org/InStock",
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Internet Type", value: "Fiber Optic (FTTP)" },
    { "@type": "PropertyValue", name: "Maximum Download Speed", value: "7,000 Mbps" },
    { "@type": "PropertyValue", name: "Maximum Upload Speed", value: "7,000 Mbps" },
    { "@type": "PropertyValue", name: "Speed Symmetry", value: "Symmetrical (equal upload and download)" },
    { "@type": "PropertyValue", name: "Data Cap", value: "None — Unlimited" },
    { "@type": "PropertyValue", name: "Contract Required", value: "No" },
    { "@type": "PropertyValue", name: "Installation Fee", value: "$0" },
    { "@type": "PropertyValue", name: "Equipment Fee", value: "$0 — free eero router included" },
    { "@type": "PropertyValue", name: "AutoPay Discount", value: "$10/month" },
    { "@type": "PropertyValue", name: "Starting Price", value: "$29.99/month" },
  ],
}

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://frontier-deals.com/#webpage",
  speakableSpecification: {
    "@type": "SpeakableSpecification",
    cssSelector: [".faq-section", "h1", ".hero-description"],
  },
}

export default function IndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <AvailabilityToolbar />
      <div className="pt-12">
        <Hero />

        <section className="py-8 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 space-y-4">
            <SeoFreshnessNote />
            <KeyFacts
              title="Frontier Fiber Key Facts"
              facts={[
                { label: "Provider", value: "Frontier Communications" },
                { label: "Service Type", value: "Fiber-optic internet (FTTP)" },
                { label: "Speed Range", value: "500 Mbps to 7 Gig" },
                { label: "Data Policy", value: "Unlimited data, no caps" },
                { label: "Contract", value: "No annual contract required" },
                { label: "Starting Price", value: "$29.99/month with AutoPay" },
              ]}
            />
            <div className="text-sm text-gray-700 flex flex-wrap gap-x-4 gap-y-1">
              <span className="font-semibold text-[#0A1E3C]">Related guides:</span>
              <Link href="/internet" className="text-[#0A1E3C] hover:underline">Internet plans</Link>
              <Link href="/coverage" className="text-[#0A1E3C] hover:underline">Coverage and availability</Link>
              <Link href="/blog/how-much-internet-speed-do-i-need" className="text-[#0A1E3C] hover:underline">Speed guide</Link>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 bg-[#04111f]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "7 Gig", label: "Max Speed Available", color: "text-[#DA202C]" },
                { value: "$29.99", label: "Starting Price / Month", color: "text-[#64ffda]" },
                { value: "Unlimited", label: "Data — No Caps", color: "text-white" },
                { value: "$0", label: "Installation Fee", color: "text-[#00B7C3]" },
              ].map(({ value, label, color }) => (
                <div key={label} className="glass border border-white/10 rounded-2xl p-5 text-center">
                  <div className={`text-2xl md:text-3xl font-black ${color}`}>{value}</div>
                  <p className="text-xs text-white/45 mt-1.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Plans Include */}
        <section className="py-16 bg-[#060f1c] border-t border-white/5" id="plans">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl md:text-3xl font-black text-white mb-10">All Plans Include</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <Router className="h-7 w-7 text-[#DA202C]" />, title: "High-Speed Router", body: "Every plan comes with a high-speed router so you can get the most out of your internet connection." },
                { icon: <Wrench className="h-7 w-7 text-[#DA202C]" />, title: "Free Installation", body: "Professional installation is included with every fiber order at no additional cost." },
                { icon: <CreditCard className="h-7 w-7 text-[#DA202C]" />, title: "AutoPay Discount", body: "Save $10/month when you enroll in and maintain AutoPay." },
                { icon: <CheckCircle2 className="h-7 w-7 text-[#DA202C]" />, title: "Unlimited Data", body: "Enjoy unlimited data with no caps or overage charges." },
              ].map(({ icon, title, body }) => (
                <div key={title} className="text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-[#DA202C]/10 border border-[#DA202C]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#DA202C]/20 transition-colors">
                    {icon}
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1.5">{title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-20 bg-[#04111f] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[260px] rounded-full bg-[#DA202C]/8 blur-[100px] pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-[#DA202C]/15 border border-[#DA202C]/30 text-[#DA202C] font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Choose Your Plan
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-3">
                Frontier Fiber Internet Plans
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                All plans include unlimited data, no contracts, free installation, and a free Wi-Fi router.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <PlanCard
                name="Fiber 500"
                speed="500/500 Mbps"
                price="29.99"
                wasPrice="39.99"
                badge="Limited Time Deal!"
                reward="Claim a $50 Visa® Reward Card"
                features={["Best for 2–4 people", "Stream HD on several devices", "Free eero Wi-Fi 6 router", "Unlimited data, no caps"]}
                popular={false}
                planKey="fiber-500"
              />
              <PlanCard
                name="Fiber 1 Gig"
                speed="1,000/1,000 Mbps"
                price="49.99"
                wasPrice="59.99"
                badge="Best Value"
                reward="Claim a $100 Visa® Reward Card"
                features={["Smart homes with many devices", "4K streaming & gaming", "Work from home without lag", "Free eero Pro router"]}
                popular={false}
                planKey="fiber-1-gig"
              />
              <PlanCard
                name="Fiber 2 Gig"
                speed="2,000/2,000 Mbps"
                price="64.99"
                wasPrice="74.99"
                badge="Most Popular"
                reward="Claim a $150 Visa® Reward Card"
                features={["Ultra-fast for large smart homes", "Ideal for gaming & 4K/8K", "Power dozens of devices", "Free eero Pro 6E router"]}
                popular={true}
                planKey="fiber-2-gig"
              />
              <PlanCard
                name="Fiber 5 Gig"
                speed="5,000/5,000 Mbps"
                price="89.99"
                wasPrice="99.99"
                badge="Fastest Speed"
                reward="Claim a $200 Visa® Reward Card"
                features={["Our fastest available speed", "Power hundreds of devices", "Max performance for power users", "Free eero Max 7 router"]}
                popular={false}
                planKey="fiber-5-gig"
              />
            </div>

            <p className="text-center text-xs text-white/30 mt-6">
              Prices shown w/ Auto Pay &amp; paperless billing. Standard rates apply after promotional period.
            </p>
            <div className="text-center mt-6">
              <Button
                asChild
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 bg-transparent backdrop-blur-sm rounded-xl h-12 px-8"
              >
                <Link href="/internet">See All Plans &amp; Compare →</Link>
              </Button>
            </div>
          </div>
        </section>



        {/* Why Fiber Section */}
        <section className="py-20 bg-white" id="why-fiber">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block text-[#DA202C] font-semibold text-xs uppercase tracking-widest mb-3">The Fiber Advantage</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1E3C] mb-3">
                Why Choose Frontier Fiber?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Fiber-optic technology delivers superior performance compared to cable or DSL at every price point.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <WhyFiberCard
                icon={<Zap className="h-7 w-7 text-[#DA202C]" />}
                title="Symmetrical Speeds"
                description="Upload as fast as you download — essential for video calls, cloud backups, and content creation."
                bullets={["Download a 4K movie in seconds", "Upload large files instantly", "No slowdowns at peak hours"]}
                borderColor="border-[#DA202C]"
                checkColor="text-[#DA202C]"
              />
              <WhyFiberCard
                icon={<Shield className="h-7 w-7 text-[#00B7C3]" />}
                title="99.9% Reliability"
                description="Fiber-optic cables resist interference from weather and electrical noise that degrades cable and DSL."
                bullets={["Consistent speeds 24/7", "Less susceptible to outages", "Built for always-on homes"]}
                borderColor="border-[#00B7C3]"
                checkColor="text-[#00B7C3]"
              />
              <WhyFiberCard
                icon={<Users className="h-7 w-7 text-[#0A1E3C]" />}
                title="Whole-Home Coverage"
                description="Connect 20+ devices at once without compromising speed. Free Wi-Fi 6 router included."
                bullets={["Smart home ready", "Seamless video streaming", "Free eero Pro 6 router"]}
                borderColor="border-[#0A1E3C]"
                checkColor="text-[#0A1E3C]"
              />
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-[#04111f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                Frontier Fiber vs. Cable vs. DSL
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                See why fiber outperforms legacy internet technologies across the board.
              </p>
            </div>

            <div className="overflow-x-auto max-w-4xl mx-auto">
              <table className="w-full min-w-[640px] border-collapse rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#0a1e3c]">
                    <th className="p-4 text-left text-white/55 font-medium text-sm">Feature</th>
                    <th className="p-4 text-center">
                      <span className="inline-block bg-[#DA202C] text-white text-xs font-bold px-4 py-1.5 rounded-full">Frontier Fiber</span>
                    </th>
                    <th className="p-4 text-center text-white/45 font-medium text-sm">Cable</th>
                    <th className="p-4 text-center text-white/45 font-medium text-sm">DSL</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Max Download", "Up to 7 Gbps", "Up to 1.2 Gbps", "Up to 100 Mbps"],
                    ["Upload Speed", "Symmetrical", "~35 Mbps typical", "~10 Mbps typical"],
                    ["Data Caps", "None", "Often 1.2 TB", "Often 1 TB"],
                    ["Reliability", "99.9% uptime", "~98.5% uptime", "~97% uptime"],
                    ["Installation", "Free", "$50–$100", "$50–$100"],
                  ].map(([label, fiber, cable, dsl], i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-white/65 font-medium text-sm">{label}</td>
                      <td className="p-4 text-center bg-[#DA202C]/10 font-bold text-[#64ffda] text-sm">{fiber}</td>
                      <td className="p-4 text-center text-white/35 text-sm">{cable}</td>
                      <td className="p-4 text-center text-white/35 text-sm">{dsl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-10">
              <PageOrderButton className="inline-flex items-center justify-center rounded-xl bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-12 px-8 py-2 shadow-lg glow-red transition-all">
                Switch to Frontier Fiber
                <ArrowRight className="ml-2 h-4 w-4" />
              </PageOrderButton>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-[#060d1a] to-[#04111f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">What Customers Say</h2>
              <p className="text-white/45 text-sm">Real reviews from Frontier fiber customers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <TestimonialCard
                quote="Frontier Fiber has transformed how we work from home. The speeds are incredible and the connection is always stable."
                author="Sarah T."
                location="Tampa, FL"
                rating={5}
              />
              <TestimonialCard
                quote="Switching from cable was the best decision. No more buffering during peak hours, and the upload speed is a game-changer."
                author="Mike R."
                location="Los Angeles, CA"
                rating={5}
              />
              <TestimonialCard
                quote="As a small business owner, reliable internet is crucial. Frontier's business fiber has exceeded every expectation."
                author="Emily L."
                location="Dallas, TX"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section py-20 bg-gray-50" id="faq">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1E3C] mb-3">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <FaqItem
                question="What is Frontier Fiber Internet?"
                answer="Frontier Fiber uses fiber-optic cables to transmit data at light speed. Unlike cable or DSL, it delivers symmetrical upload and download speeds and maintains consistent performance even during peak usage times."
              />
              <FaqItem
                question="Is Frontier Fiber available in my area?"
                answer="Frontier Fiber is available in California, Texas, Florida, Connecticut, New York, and 20+ additional states. Use the availability checker on our site to confirm service at your address."
              />
              <FaqItem
                question="Are there data caps?"
                answer="No. Every Frontier Fiber plan includes unlimited data with no caps and no overage charges."
              />
              <FaqItem
                question="What equipment is included?"
                answer="Frontier installs an Optical Network Terminal (ONT) at no charge. Most plans also include a free eero Pro 6 Wi-Fi 6 router for whole-home wireless coverage."
              />
              <FaqItem
                question="How do I order through this site?"
                answer="We are an authorized Frontier retailer. You can order online using the forms on our site. Installation will be scheduled at your convenience."
              />
            </div>
          </div>
        </section>

        {/* Coverage Accordion */}
        <section className="py-20 bg-white" id="coverage-areas">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1E3C] mb-3">
                Frontier Fiber Coverage Areas
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Browse available cities in your state. We{"'"}re expanding to new communities every month.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <CityStateAccordion />
            </div>
          </div>
        </section>

        {/* Explore More */}
        <section className="py-16 bg-[#f5f7fa]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-10">Explore More</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {[
                { href: "/internet", label: "Internet Plans", desc: "Compare all speeds" },
                { href: "/deals", label: "Current Deals", desc: "Limited-time offers" },
                { href: "/reviews", label: "Customer Reviews", desc: "Rated 4.8/5 stars" },
                { href: "/coverage", label: "Coverage Map", desc: "Check your area" },
                { href: "/blog", label: "Resource Guides", desc: "Tips & comparisons" },
                { href: "/wifi", label: "WiFi Solutions", desc: "Whole-home coverage" },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:shadow-md hover:border-[#DA202C]/20 transition-all group"
                >
                  <h3 className="font-bold text-[#0A1E3C] text-sm group-hover:text-[#DA202C] transition-colors">{label}</h3>
                  <p className="text-xs text-gray-400 mt-1">{desc}</p>
                </Link>
              ))}
            </div>

            {/* Entity glossary for semantic coverage on the homepage */}
            <div className="max-w-5xl mx-auto mt-10">
              <GlossaryTerms
                terms={[...fiberInternetTerms, ...buyingGuideTerms]}
                heading="Understanding Frontier Fiber Internet"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="py-28 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, #DA202C 0%, #0A1E3C 55%, #04111f 100%)",
          }}
        >
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="container mx-auto px-4 text-center relative">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                Ready to Get<br />Frontier Fiber?
              </h2>
              <p className="text-lg text-white/65 mb-10 max-w-xl mx-auto">
                Order through your authorized retailer — same Frontier service, dedicated local support.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <PageOrderButton className="inline-flex items-center justify-center rounded-xl bg-[#DA202C] hover:bg-[#b71c1c] text-white text-lg px-10 py-4 font-bold cta-pulse shadow-2xl">
                  Order Online Now
                </PageOrderButton>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/25 text-white hover:bg-white/10 bg-transparent text-lg px-10 rounded-xl"
                >
                  <Link href="/internet">Compare Plans</Link>
                </Button>
              </div>
            </div>
            <p className="text-xs text-white/35 mt-10">
              frontier-deals.com is an authorized retailer of Frontier Communications services.
              We are not affiliated with Frontier Communications parent company.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

/* ── Helper Components ── */

function PlanCard({ name, speed, price, wasPrice, badge, reward, features, popular, planKey }: {
  name: string; speed: string; price: string; wasPrice?: string; badge?: string; reward?: string; features: string[]; popular: boolean; planKey?: string
}) {
  const dollars = price.split(".")[0]
  const cents = price.split(".")[1] ?? "99"

  return (
    <div
      className={`rounded-2xl overflow-hidden flex flex-col relative border transition-transform duration-300 hover:-translate-y-1 ${
        popular
          ? "bg-[#0A1E3C] border-[#DA202C]/70 shadow-2xl ring-1 ring-[#DA202C]/40 scale-[1.03]"
          : "glass border-white/10 hover:border-white/20"
      }`}
    >
      {/* Top badge strip */}
      <div
        className={`text-center py-2.5 text-xs font-bold uppercase tracking-widest ${
          popular
            ? "bg-[#DA202C] text-white"
            : "bg-white/5 text-white/40 border-b border-white/5"
        }`}
      >
        {badge ?? "\u00a0"}
      </div>

      {/* Main content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-black text-white">{name}</h3>
        <p className="text-sm text-white/45 mb-4">{speed}</p>

        {/* Price block */}
        <div className="mb-1 flex items-end gap-2">
          <div className="flex items-start leading-none">
            <span className="text-lg font-bold text-white/70 mt-1.5">$</span>
            <span className={`font-black text-white ${popular ? "text-5xl" : "text-4xl"}`}>{dollars}</span>
            <span className="text-lg font-bold text-white/70 mt-1.5">.{cents}</span>
          </div>
          {wasPrice && (
            <span className="text-sm text-white/35 line-through mb-1.5">${wasPrice}</span>
          )}
        </div>
        <p className="text-xs text-white/35 mb-6">
          /mo with Auto Pay &amp; paperless billing
        </p>

        {/* Features */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start text-sm">
              <Check
                className={`h-4 w-4 mr-2 mt-0.5 flex-shrink-0 ${
                  popular ? "text-[#DA202C]" : "text-[#64ffda]"
                }`}
              />
              <span className="text-white/70">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={planKey ? `/internet#${planKey}` : "/internet"}
          className={`w-full inline-flex items-center justify-center rounded-xl h-11 px-4 py-2 font-bold transition-all text-sm ${
            popular
              ? "bg-[#DA202C] hover:bg-[#b71c1c] text-white shadow-lg"
              : "bg-white/8 hover:bg-white/15 text-white border border-white/15"
          }`}
        >
          View Plan
        </Link>
      </div>

      {/* Visa reward card footer banner */}
      {reward && (
        <div className={`flex items-center gap-2 px-5 py-3 text-xs font-semibold border-t ${
          popular
            ? "border-[#DA202C]/30 text-[#ffcdd2] bg-[#DA202C]/10"
            : "border-white/8 text-[#64ffda] bg-white/5"
        }`}>
          <Gift className="h-3.5 w-3.5 flex-shrink-0" />
          {reward}
        </div>
      )}
    </div>
  )
}

function WhyFiberCard({ icon, title, description, bullets, borderColor, checkColor }: {
  icon: React.ReactNode; title: string; description: string; bullets: string[]; borderColor: string; checkColor: string
}) {
  return (
    <div className={`bg-white rounded-2xl p-7 border-t-4 ${borderColor} shadow-sm hover:shadow-xl transition-all duration-300`}>
      <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[#0A1E3C] mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-5">{description}</p>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start text-sm">
            <Check className={`h-4 w-4 ${checkColor} mr-2 mt-0.5 flex-shrink-0`} />
            <span className="text-gray-600">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TestimonialCard({ quote, author, location, rating }: {
  quote: string; author: string; location: string; rating: number
}) {
  return (
    <div className="glass border border-white/10 rounded-2xl p-6">
      <div className="flex gap-0.5 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-white/70 text-sm mb-5 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#DA202C] to-[#0a1e3c] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {author[0]}
        </div>
        <div>
          <p className="font-semibold text-white text-sm">{author}</p>
          <p className="text-white/40 text-xs">{location}</p>
        </div>
      </div>
    </div>
  )
}
