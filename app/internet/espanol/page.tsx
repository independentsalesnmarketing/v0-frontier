import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Wifi, Shield, CheckCircle, ArrowRight, Globe, Zap, Users, Monitor, Clock } from "lucide-react"
import { PageOrderButton } from "@/components/PageInteractions"
import Breadcrumbs from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Frontier Internet en Español | Planes de Fibra desde $34.99/mes",
  description:
    "Planes de internet de fibra óptica de Frontier desde $34.99/mes. Velocidades hasta 7 Gbps, datos ilimitados, sin contratos. Llame para ordenar en español.",
  alternates: { canonical: "/internet/espanol" },
  openGraph: {
    title: "Frontier Internet en Español | Planes de Fibra desde $34.99/mes",
    description:
      "Planes de internet de fibra óptica de Frontier desde $34.99/mes. Velocidades hasta 7 Gbps, datos ilimitados, sin contratos.",
  },
  keywords: [
    "frontier internet español",
    "frontier en español",
    "frontier internet en español",
    "numero de telefono de frontier internet",
    "frontier communications español",
    "internet de fibra óptica",
    "planes de internet frontier",
    "frontier servicio en español",
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el internet de Frontier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los planes de internet de fibra de Frontier comienzan desde $34.99 al mes para 500 Mbps. No hay contratos anuales y los precios son fijos — no suben después de un periodo promocional.",
      },
    },
    {
      "@type": "Question",
      name: "¿Frontier tiene servicio al cliente en español?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Puede llamar al 1-855-558-5014 para hablar con un representante de ventas. Nuestro equipo puede ayudarle a escoger un plan y completar su orden por teléfono.",
      },
    },
    {
      "@type": "Question",
      name: "¿Frontier requiere contrato?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Todos los planes de Frontier Fiber son sin contrato. Puede cancelar en cualquier momento sin cargos por cancelación anticipada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay límite de datos con Frontier Fiber?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Todos los planes de Frontier Fiber incluyen datos ilimitados sin cargos adicionales ni reducción de velocidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda la instalación de Frontier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La instalación típicamente se programa dentro de 3 a 7 días después de ordenar. Un técnico profesional instala la fibra en su hogar sin costo adicional.",
      },
    },
  ],
}

export default function FrontierEspanolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gradient-to-b from-green-950 via-green-900 to-black text-white">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Internet", href: "/internet" },
              { label: "Español" },
            ]}
          />

          {/* Hero Section */}
          <section className="py-12 md:py-20 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-800/50 border border-green-600/40 rounded-full px-4 py-2 mb-6">
              <Globe className="h-4 w-4 text-green-400" />
              <span className="text-sm text-green-300">Servicio disponible en español</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Internet de Fibra Óptica
              <br />
              <span className="text-green-400">Desde $34.99/mes</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Frontier Fiber ofrece velocidades simétricas hasta 7 Gbps, datos ilimitados, sin contratos anuales, e
              instalación gratis — todo con atención en español.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PageOrderButton
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
              >
                Ordenar por Teléfono
              </PageOrderButton>
              <Link href="/check-availability">
                <Button
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-900/50 px-8 py-4 text-lg"
                >
                  Verificar Disponibilidad
                </Button>
              </Link>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Llame al <strong className="text-white">1-855-558-5014</strong> para servicio en español
            </p>
          </section>
        </div>
      </div>

      {/* Plans Section */}
      <section className="py-16 bg-gray-950 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestros Planes de Fibra</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Todos los planes incluyen datos ilimitados, instalación gratis, router Wi-Fi eero gratis, y sin contratos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              { name: "Fiber 500", speed: "500 Mbps", price: "$34.99", ideal: "Ideal para parejas y familias pequeñas" },
              { name: "Fiber 1 Gig", speed: "1,000 Mbps", price: "$49.99", ideal: "Perfecto para familias con muchos dispositivos", popular: true },
              { name: "Fiber 2 Gig", speed: "2,000 Mbps", price: "$64.99", ideal: "Para gaming, streaming 4K y trabajo remoto" },
              { name: "Fiber 5 Gig", speed: "5,000 Mbps", price: "$89.99", ideal: "Para usuarios avanzados y hogares inteligentes" },
              { name: "Fiber 7 Gig", speed: "7,000 Mbps", price: "$109.99", ideal: "La velocidad más rápida disponible" },
            ].map((plan) => (
              <Card
                key={plan.name}
                className={`bg-gray-900 border-gray-800 relative ${plan.popular ? "border-green-500 ring-2 ring-green-500/20" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MÁS POPULAR
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-green-400 text-sm mb-4">{plan.speed} simétricos</p>
                  <p className="text-4xl font-bold text-white mb-1">
                    {plan.price}
                    <span className="text-base text-gray-400 font-normal">/mes</span>
                  </p>
                  <p className="text-sm text-gray-500 mb-4">Precio fijo — no sube</p>
                  <p className="text-sm text-gray-300 mb-6">{plan.ideal}</p>

                  <ul className="text-left text-sm space-y-2 mb-6">
                    {[
                      "Datos ilimitados",
                      "Sin contrato anual",
                      "Router eero Wi-Fi gratis",
                      "Instalación profesional gratis",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <PageOrderButton
                    className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-semibold"
                  >
                    Ordenar Ahora
                  </PageOrderButton>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center mt-8 text-gray-500 text-sm">
            También disponible:{" "}
            <Link href="/internet/fiber-5-gig" className="text-green-400 hover:underline">
              Fiber 5 Gig ($89.99/mes)
            </Link>{" "}
            y{" "}
            <Link href="/internet/fiber-7-gig" className="text-green-400 hover:underline">
              Fiber 7 Gig ($109.99/mes)
            </Link>
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por Qué Elegir Frontier Fiber?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Velocidades Simétricas",
                desc: "La velocidad de subida es igual a la de bajada. Perfecto para videollamadas, subir archivos, y streaming en vivo.",
              },
              {
                icon: Shield,
                title: "Sin Contratos",
                desc: "Puede cancelar cuando quiera sin cargos por cancelación anticipada. Sin letra pequeña.",
              },
              {
                icon: Wifi,
                title: "Router Wi-Fi Gratis",
                desc: "Reciba un router eero Wi-Fi 6 incluido con su plan, con cobertura para toda la casa.",
              },
              {
                icon: Users,
                title: "Datos Ilimitados",
                desc: "Use todo el internet que necesite. Sin límites de datos, sin cargos extra, sin reducción de velocidad.",
              },
              {
                icon: Monitor,
                title: "Instalación Gratis",
                desc: "Un técnico profesional instala la fibra en su hogar sin costo adicional en 3 a 7 días.",
              },
              {
                icon: Clock,
                title: "Precio Fijo Garantizado",
                desc: "Su precio mensual no sube después de 12 meses. El precio que ve es el precio que paga — siempre.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="bg-green-900/50 p-3 rounded-lg shrink-0">
                  <benefit.icon className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Phone Section */}
      <section className="py-16 bg-gray-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-900/40 to-green-950/60 border border-green-800/30 rounded-2xl p-8 md:p-12 text-center">
            <Phone className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">¿Prefiere Ordenar por Teléfono?</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Nuestro equipo de ventas autorizado está listo para ayudarle en español. Llame para verificar
              disponibilidad, comparar planes, y completar su orden.
            </p>

            <PageOrderButton
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg text-xl font-bold inline-flex items-center gap-3"
            >
              Llamar Ahora: 1-855-558-5014
            </PageOrderButton>

            <p className="mt-4 text-sm text-gray-500">
              Lunes a Viernes: 8am – 10pm ET &nbsp;|&nbsp; Sábado: 9am – 8pm ET
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">Preguntas Frecuentes</h2>

          <div className="space-y-6">
            {[
              {
                q: "¿Cuánto cuesta el internet de Frontier?",
                a: "Los planes de internet de fibra de Frontier comienzan desde $34.99 al mes para 500 Mbps. Los precios son fijos y no suben después de un periodo promocional. No hay contratos anuales.",
              },
              {
                q: "¿Frontier tiene servicio al cliente en español?",
                a: "Sí. Puede llamar al 1-855-558-5014 para hablar con un representante de ventas. Nuestro equipo puede ayudarle a escoger un plan y completar su orden por teléfono en español.",
              },
              {
                q: "¿Frontier requiere contrato?",
                a: "No. Todos los planes de Frontier Fiber son sin contrato. Puede cancelar en cualquier momento sin cargos por cancelación anticipada.",
              },
              {
                q: "¿Hay límite de datos con Frontier Fiber?",
                a: "No. Todos los planes de Frontier Fiber incluyen datos ilimitados sin cargos adicionales ni reducción de velocidad.",
              },
              {
                q: "¿Cuánto tarda la instalación de Frontier?",
                a: "La instalación típicamente se programa dentro de 3 a 7 días después de ordenar. Un técnico profesional instala la fibra en su hogar sin costo adicional.",
              },
              {
                q: "¿Qué velocidad necesito para mi hogar?",
                a: "Para 1-3 dispositivos, 500 Mbps es suficiente. Para familias con 5+ dispositivos, recomendamos 1 Gig o 2 Gig. Si tiene gamers o trabaja desde casa con videollamadas constantes, considere 2 Gig o superior.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group border border-gray-800 rounded-lg">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-900/50 rounded-lg">
                  <span className="font-semibold text-white">{faq.q}</span>
                  <ArrowRight className="h-4 w-4 text-gray-500 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* English link */}
      <section className="py-8 bg-gray-950 text-center">
        <Link href="/internet" className="text-green-400 hover:underline text-sm inline-flex items-center gap-1">
          <Globe className="h-4 w-4" />
          View this page in English
        </Link>
      </section>
    </>
  )
}
