import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Check, Phone, Shield, Clock, Info, Star, Headphones, Zap } from "lucide-react"
import { PageOrderButton } from "@/components/PageInteractions"
import Breadcrumbs from "@/components/Breadcrumbs"
import RelatedServices from "@/components/RelatedServices"

export const metadata: Metadata = {
  title: "Home Phone Service from $9.99/mo | Frontier Deals",
  description: "Frontier Digital Unlimited Voice: unlimited local & long-distance calling, HD voice quality, 20+ features. Bundle with fiber internet and save $25/mo.",
  keywords: "home phone service, frontier home phone, unlimited calling, digital voice, VoIP phone service, home phone plans",
  alternates: { canonical: "/home-phone" },
  openGraph: {
    title: "Home Phone Service from $9.99/mo | Frontier Deals",
    description: "Frontier Digital Unlimited Voice: unlimited calling, HD quality, 20+ features. Bundle with fiber and save $25/mo.",
    url: "https://frontier-deals.com/home-phone",
    siteName: "Frontier Deals",
    images: [{ url: "/images/og-frontier-internet.jpg", width: 1200, height: 630, alt: "Frontier Home Phone Service" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Phone Service from $9.99/mo | Frontier Deals",
    description: "Unlimited local & long-distance calling. Bundle with Frontier fiber and save $25/mo.",
    images: ["/images/og-frontier-internet.jpg"],
  },
}

const productSchema = {
  "@context": "https://schema.org", "@type": "Product",
  name: "Frontier Digital Unlimited Voice",
  description: "Unlimited nationwide calling with crystal-clear HD voice quality and 20+ popular calling features.",
  brand: { "@type": "Brand", name: "Frontier Communications" },
  offers: { "@type": "Offer", price: "25.00", priceCurrency: "USD", availability: "https://schema.org/InStock" },
}

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can I keep my current phone number?", acceptedAnswer: { "@type": "Answer", text: "Yes, in most cases you can transfer your existing phone number to Frontier Digital Unlimited Voice through our simple number porting process." } },
    { "@type": "Question", name: "Do I need special equipment?", acceptedAnswer: { "@type": "Answer", text: "Frontier provides a Voice-over-IP (VoIP) adapter that connects your existing phones to our digital network." } },
    { "@type": "Question", name: "Is international calling included?", acceptedAnswer: { "@type": "Answer", text: "While unlimited nationwide calling is included, international calls are billed separately at competitive rates." } },
    { "@type": "Question", name: "How much can I save by bundling with internet?", acceptedAnswer: { "@type": "Answer", text: "You can save $25 per month on Unlimited Digital Voice when you bundle it with a Frontier internet plan." } },
    { "@type": "Question", name: "Does Frontier Digital Voice work during power outages?", acceptedAnswer: { "@type": "Answer", text: "With battery backup, Frontier Digital Voice can continue to function during power outages." } },
    { "@type": "Question", name: "What calling features are included?", acceptedAnswer: { "@type": "Answer", text: "Frontier Digital Voice includes 20+ features such as Caller ID, Call Waiting, Call Forwarding, Three-Way Calling, Anonymous Call Rejection, Voicemail, and Voicemail-to-Email." } },
  ],
}

export default function HomePhone() {
  return (
    <div className="bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ label: "Home Phone", href: "/home-phone" }]} />

      <section
        className="relative bg-cover bg-center py-24"
        style={{
          backgroundImage:
            'url("/images/person-enjoying-home-phone-service-usnozyb56wj5hwxvjsk4-1.png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E3C]/90 to-[#0A1E3C]/70" /> {/* Gradient overlay */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-[#00b7c3] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            RELIABLE HOME PHONE SERVICE
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Frontier Digital Unlimited Voice</h1>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Crystal-clear calls with advanced features and nationwide coverage. Stay connected with the reliability you
            expect and the quality you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PageOrderButton
              size="lg"
              className="bg-[#da202c] hover:bg-[#b71c1c] text-white"
            >
              Get Started
            </PageOrderButton>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <a href="#pricing">View Pricing</a>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <Check className="h-5 w-5 text-[#00b7c3] mr-2 flex-shrink-0" />
              <span className="text-white/90 text-sm">Unlimited Calling</span>
            </div>
            <div className="flex items-center justify-center">
              <Check className="h-5 w-5 text-[#00b7c3] mr-2 flex-shrink-0" />
              <span className="text-white/90 text-sm">HD Voice Quality</span>
            </div>
            <div className="flex items-center justify-center">
              <Check className="h-5 w-5 text-[#00b7c3] mr-2 flex-shrink-0" />
              <span className="text-white/90 text-sm">20+ Features</span>
            </div>
            <div className="flex items-center justify-center">
              <Check className="h-5 w-5 text-[#00b7c3] mr-2 flex-shrink-0" />
              <span className="text-white/90 text-sm">Keep Your Number</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Expert Quote Section */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md mb-16 border-l-4 border-teal-500">
          <div className="flex items-start">
            <div className="mr-4">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Headphones className="w-8 h-8 text-teal-500" />
              </div>
            </div>
            <div>
              <p className="text-lg italic mb-4">
                "Home phone service remains essential for many households, providing reliability during emergencies and
                clear call quality that mobile phones can't always match. Frontier's Digital Voice service combines
                traditional reliability with modern features."
              </p>
              <p className="font-semibold">
                - Sarah Martinez, <span className="text-teal-500">Telecommunications Specialist</span>
              </p>
            </div>
          </div>
        </div>

        {/* Summary Section for Featured Snippets */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-white">What is Frontier Digital Unlimited Voice?</h2>
          <p className="mb-4">
            Frontier Digital Unlimited Voice is a home phone service that uses Voice over Internet Protocol (VoIP)
            technology to deliver crystal-clear calls over Frontier's fiber-optic network. The service includes
            unlimited nationwide calling, 20+ calling features, and the ability to keep your existing phone number when
            switching from another provider.
          </p>
          <p>
            Unlike traditional landlines, Digital Voice offers advanced features like voicemail-to-email, call
            forwarding to mobile devices, and enhanced caller ID. The service costs $25/month when bundled with Frontier
            internet plans, representing a $25 monthly savings compared to the standalone price.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md border-t-2 border-red-600">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Features & Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-teal-500" /> Unlimited nationwide calling to any number
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-teal-500" /> Crystal-clear HD voice quality
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-teal-500" /> 20+ popular calling features included at no extra cost
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-teal-500" /> Keep your existing phone number
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-teal-500" /> Voicemail-to-email functionality
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-teal-500" /> Advanced call filtering and blocking
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-teal-500" /> Online account management
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-teal-500" /> Battery backup available for power outages
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md border-t-2 border-red-600">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Why Choose Frontier Home Phone?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Shield className="w-6 h-6 mr-2 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Reliable Service</h3>
                  <p className="text-gray-400">
                    Stay connected even during power outages with our reliable network and battery backup options.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-6 h-6 mr-2 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">24/7 Customer Support</h3>
                  <p className="text-gray-400">
                    Our U.S.-based dedicated team is always ready to assist you with any issues.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-6 h-6 mr-2 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Bundle and Save</h3>
                  <p className="text-gray-400">
                    Combine with Frontier Fiber Internet for the best value and save $25 monthly.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 mr-2 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Crystal-Clear Quality</h3>
                  <p className="text-gray-400">
                    Experience HD voice quality that makes every conversation sound better.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">How Frontier Digital Voice Compares</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900">
                  <th className="p-4 text-left border-b border-gray-800">Features</th>
                  <th className="p-4 text-center border-b border-gray-800">
                    <span className="text-red-600">Frontier Digital Voice</span>
                  </th>
                  <th className="p-4 text-center border-b border-gray-800">Traditional Landline</th>
                  <th className="p-4 text-center border-b border-gray-800">Mobile Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-900 hover:bg-gray-800">
                  <td className="p-4 border-b border-gray-800">Reliability During Power Outages</td>
                  <td className="p-4 text-center border-b border-gray-800">
                    <Check className="w-5 h-5 mx-auto text-teal-500" />
                    <span className="text-xs text-gray-400">With battery backup</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-800">
                    <Check className="w-5 h-5 mx-auto text-teal-500" />
                  </td>
                  <td className="p-4 text-center border-b border-gray-800">
                    <Check className="w-5 h-5 mx-auto text-yellow-500" />
                    <span className="text-xs text-gray-400">Until battery dies</span>
                  </td>
                </tr>
                <tr className="bg-gray-900 hover:bg-gray-800">
                  <td className="p-4 border-b border-gray-800">Call Quality</td>
                  <td className="p-4 text-center border-b border-gray-800">
                    <div className="flex justify-center">
                      <Star className="w-4 h-4 text-teal-500" />
                      <Star className="w-4 h-4 text-teal-500" />
                      <Star className="w-4 h-4 text-teal-500" />
                      <Star className="w-4 h-4 text-teal-500" />
                      <Star className="w-4 h-4 text-teal-500" />
                    </div>
                    <span className="text-xs text-gray-400">HD Voice</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-800">
                    <div className="flex justify-center">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-gray-600" />
                    </div>
                  </td>
                  <td className="p-4 text-center border-b border-gray-800">
                    <div className="flex justify-center">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-yellow-500" />
                      <Star className="w-4 h-4 text-gray-600" />
                      <Star className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-xs text-gray-400">Varies by coverage</span>
                  </td>
                </tr>
                <tr className="bg-gray-900 hover:bg-gray-800">
                  <td className="p-4 border-b border-gray-800">Advanced Features</td>
                  <td className="p-4 text-center border-b border-gray-800">
                    <Check className="w-5 h-5 mx-auto text-teal-500" />
                    <span className="text-xs text-gray-400">20+ features included</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-800">
                    <Check className="w-5 h-5 mx-auto text-yellow-500" />
                    <span className="text-xs text-gray-400">Limited, often extra cost</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-800">
                    <Check className="w-5 h-5 mx-auto text-teal-500" />
                  </td>
                </tr>
                <tr className="bg-gray-900 hover:bg-gray-800">
                  <td className="p-4 border-b border-gray-800">Monthly Cost</td>
                  <td className="p-4 text-center border-b border-gray-800">
                    <span className="font-semibold text-teal-500">$25/mo</span>
                    <span className="text-xs block text-gray-400">with internet bundle</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-800">
                    <span className="font-semibold">$35-60/mo</span>
                  </td>
                  <td className="p-4 text-center border-b border-gray-800">
                    <span className="font-semibold">$40-90/mo</span>
                    <span className="text-xs block text-gray-400">per line</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Source: Comparative analysis based on average industry pricing and features.
          </p>
        </div>

        <div id="pricing" className="bg-gray-900 p-8 rounded-lg shadow-md mb-16 border-t-4 border-red-600">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Unlimited Digital Voice Pricing</h2>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-3xl font-bold">
                <span className="text-teal-500">$25</span>
                <span className="text-sm font-normal text-gray-400">/mo</span>
              </p>
              <p className="text-sm text-gray-400">when bundled with an internet plan</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xl font-bold line-through text-gray-400">
                $50<span className="text-sm font-normal">/mo</span>
              </p>
              <p className="text-lg font-semibold text-teal-500">Save $25 per month</p>
            </div>
          </div>
          <div className="bg-black/50 p-4 rounded-lg mb-6">
            <p className="text-lg">
              Frontier Unlimited Digital Voice services offer clear call quality day and night so you can have better
              conversations without worrying about dropped calls. With 20+ calling features included at no extra cost,
              you'll enjoy a complete home phone solution.
            </p>
          </div>
          <div className="flex items-center justify-center mb-6">
            <Info className="w-5 h-5 mr-2 text-teal-500" />
            <p className="text-sm text-gray-400">
              Price with Auto Pay and Paperless Billing, plus taxes, equipment charges, and other fees. 12-month
              agreement required.
            </p>
          </div>
          <div className="text-center">
            <PageOrderButton
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Get Unlimited Digital Voice
            </PageOrderButton>
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="pt-4">
                <p className="italic mb-4">
                  "I've had Frontier Digital Voice for over a year now, and the call quality is outstanding. I work from
                  home and need reliable communication. The voicemail-to-email feature has been a game-changer for me."
                </p>
                <div className="flex items-center">
                  <div className="mr-3 w-10 h-10 bg-gray-800 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Maria Johnson</p>
                    <p className="text-sm text-gray-400">Frontier customer since 2022</p>
                  </div>
                </div>
                <div className="flex mt-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <Star className="w-4 h-4 text-yellow-500" />
                  <Star className="w-4 h-4 text-yellow-500" />
                  <Star className="w-4 h-4 text-yellow-500" />
                  <Star className="w-4 h-4 text-yellow-500" />
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="pt-4">
                <p className="italic mb-4">
                  "After switching to Frontier from my old landline provider, I'm saving money every month and getting
                  more features. The call quality is excellent, and I love being able to forward calls to my cell when
                  I'm away from home."
                </p>
                <div className="flex items-center">
                  <div className="mr-3 w-10 h-10 bg-gray-800 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Robert Chen</p>
                    <p className="text-sm text-gray-400">Frontier customer since 2023</p>
                  </div>
                </div>
                <div className="flex mt-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <Star className="w-4 h-4 text-yellow-500" />
                  <Star className="w-4 h-4 text-yellow-500" />
                  <Star className="w-4 h-4 text-yellow-500" />
                  <Star className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-gray-400 max-w-2xl mx-auto">
            Experience the clarity and reliability of Frontier Digital Unlimited Voice today. Keep your existing phone
            number and enjoy crystal-clear calls with 20+ advanced features.
          </p>
<PageOrderButton size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Get Started Today
          </PageOrderButton>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-red-600">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-800 pb-4">
              <h3 className="font-semibold text-lg mb-2">Can I keep my current phone number?</h3>
              <p className="text-gray-400">
                Yes, in most cases you can transfer your existing phone number to Frontier Digital Unlimited Voice
                through our simple number porting process. This ensures you maintain continuity with friends, family,
                and businesses who already have your number.
              </p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <h3 className="font-semibold text-lg mb-2">Do I need special equipment?</h3>
              <p className="text-gray-400">
                Frontier provides a Voice-over-IP (VoIP) adapter that connects your existing phones to our digital
                network. This equipment is typically included with your service at no additional cost. The adapter is
                easy to set up and works with your existing telephone handsets.
              </p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <h3 className="font-semibold text-lg mb-2">Is international calling included?</h3>
              <p className="text-gray-400">
                While unlimited nationwide calling is included, international calls are billed separately at competitive
                rates. We offer international calling plans for frequent international callers that can provide
                significant savings compared to standard international rates.
              </p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <h3 className="font-semibold text-lg mb-2">How much can I save by bundling with internet?</h3>
              <p className="text-gray-400">
                You can save $25 per month on Unlimited Digital Voice when you bundle it with a Frontier internet plan,
                reducing the monthly cost from $50 to just $25. This represents a 50% savings on your home phone
                service.
              </p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <h3 className="font-semibold text-lg mb-2">Does Frontier Digital Voice work during power outages?</h3>
              <p className="text-gray-400">
                With battery backup, Frontier Digital Voice can continue to function during power outages, providing a
                reliable communication option when you need it most. Battery backup units are available to ensure your
                phone service remains operational during emergencies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What calling features are included?</h3>
              <p className="text-gray-400">
                Frontier Digital Voice includes 20+ features such as Caller ID, Call Waiting, Call Forwarding, Three-Way
                Calling, Anonymous Call Rejection, Voicemail, and Voicemail-to-Email functionality. All these features
                are included at no additional cost with your service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <RelatedServices currentPath="/home-phone" dark />
    </div>
  )
}
