import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Frontier FAQ | Frequently Asked Questions About Frontier Internet",
  description: "Find answers to common questions about Frontier fiber internet, installation, billing, speeds, equipment, and troubleshooting.",
  alternates: { canonical: "/support/faq" },
}

export default function FAQPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Breadcrumbs items={[{ label: "Support", href: "/support" }, { label: "FAQ", href: "/support/faq" }]} />
      <section className="bg-gradient-to-r from-[#0a192f] to-[#1d2d50] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl mb-8">Find answers to common questions about Frontier services and support.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What speeds are available for Frontier Fiber?</AccordionTrigger>
              <AccordionContent>
                Frontier offers fiber internet speeds ranging from 500 Mbps to 5 Gbps, depending on your location and
                plan. Our most popular plans include:
                <ul className="list-disc list-inside mt-2">
                  <li>500/500 Mbps</li>
                  <li>1 Gig (1000/1000 Mbps)</li>
                  <li>2 Gig (2000/2000 Mbps)</li>
                  <li>5 Gig (5000/5000 Mbps)</li>
                </ul>
                Check availability in your area to see which speeds are offered at your location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How do I troubleshoot my internet connection?</AccordionTrigger>
              <AccordionContent>
                If you're experiencing internet issues, try these steps:
                <ol className="list-decimal list-inside mt-2">
                  <li>Restart your router: Unplug it, wait 30 seconds, then plug it back in.</li>
                  <li>Check cable connections: Ensure all cables are securely connected.</li>
                  <li>
                    Run a speed test: Use our{" "}
                    <Link href="/internet-speed-test" className="text-blue-400 hover:underline">
                      speed test tool
                    </Link>{" "}
                    to check your connection.
                  </li>
                  <li>Try a wired connection: Connect your device directly to the router with an Ethernet cable.</li>
                  <li>
                    Check for service outages: Visit our{" "}
                    <Link href="/support" className="text-blue-400 hover:underline">
                      support page
                    </Link>{" "}
                    for any reported issues in your area.
                  </li>
                </ol>
                If issues persist after trying these steps, please contact our support team for further assistance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can I bundle internet with other services?</AccordionTrigger>
              <AccordionContent>
                Yes, Frontier offers bundling options that include internet, TV, and phone services for both residential
                and business customers. Popular bundles include:
                <ul className="list-disc list-inside mt-2">
                  <li>Fiber Internet + YouTube TV</li>
                  <li>Fiber Internet + Digital Voice</li>
                  <li>Fiber Internet + Digital Voice + YouTube TV</li>
                </ul>
                Bundling services can often lead to cost savings and simplified billing. Visit our{" "}
                <Link href="/bundles" className="text-blue-400 hover:underline">
                  bundles page
                </Link>{" "}
                to explore available options in your area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How do I pay my Frontier bill?</AccordionTrigger>
              <AccordionContent>
                Frontier offers several convenient ways to pay your bill:
                <ul className="list-disc list-inside mt-2">
                  <li>Online: Log in to your account at frontier.com and pay through our secure portal.</li>
                  <li>AutoPay: Set up automatic monthly payments from your bank account or credit card.</li>
                  <li>By Phone: Call our automated system at 1-800-801-6652 to pay by phone.</li>
                  <li>By Mail: Send a check to the address listed on your bill.</li>
                  <li>In Person: Visit an authorized payment location near you.</li>
                </ul>
                For more information on billing and payment options, visit our{" "}
                <Link href="/support" className="text-blue-400 hover:underline">
                  support page
                </Link>
                .
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What equipment do I need for Frontier Fiber Internet?</AccordionTrigger>
              <AccordionContent>
                For Frontier Fiber Internet, you'll need:
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Optical Network Terminal (ONT): This is installed by a Frontier technician and converts the fiber
                    optic signal to Ethernet.
                  </li>
                  <li>
                    Router: We provide a free eero Pro 6 router with most plans, which offers advanced Wi-Fi 6
                    technology for whole-home coverage.
                  </li>
                  <li>Ethernet Cable: To connect your router to the ONT.</li>
                </ul>
                If you prefer to use your own router, it must be compatible with fiber internet and capable of handling
                the speed tier you've selected. For optimal performance and support, we recommend using our provided
                equipment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>How can I upgrade my current Frontier service?</AccordionTrigger>
              <AccordionContent>
                To upgrade your Frontier service:
                <ol className="list-decimal list-inside mt-2">
                  <li>Log in to your account at frontier.com</li>
                  <li>Navigate to the "Services" or "Plans" section</li>
                  <li>Review available upgrades for your area</li>
                  <li>Select the upgrade you want and follow the prompts</li>
                </ol>
                Alternatively, you can call our customer service at 1-800-921-8101 to speak with a representative about
                upgrade options. They can help you choose the best plan for your needs and schedule any necessary
                equipment upgrades or installations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-[#1d2d50]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Still Have Questions?</h2>
          <p className="text-xl mb-8">
            Our support team is available 24/7 to assist you with any additional questions or concerns.
          </p>
          <Button asChild size="lg" className="bg-[#e10600] hover:bg-[#ff6b6b] text-white">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
