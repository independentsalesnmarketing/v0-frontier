import Image from "next/image"
import Link from "next/link"
import { AUTHORS } from "@/lib/authors"

export interface AuthorProps {
  name: string
  role: string
  bio: string
  image: string
  url?: string
  sameAs?: string[]
  credentials?: string[]
  socialLinks?: {
    platform: string
    url: string
  }[]
  publications?: {
    title: string
    url: string
  }[]
}

export default function AuthorBio({
  name,
  role,
  bio,
  image,
  url,
  sameAs = [],
  credentials = [],
  socialLinks = [],
  publications = [],
}: AuthorProps) {
  const registryAuthor = AUTHORS[name]
  const resolvedUrl = url ?? registryAuthor?.url ?? `https://frontler-internet.com/about#${name.toLowerCase().replace(/\s+/g, "-")}`
  const resolvedSameAs = sameAs.length > 0 ? sameAs : (registryAuthor?.sameAs ?? [])

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: role,
    description: bio,
    url: resolvedUrl,
    ...(resolvedSameAs.length > 0 && { sameAs: resolvedSameAs }),
    ...(credentials.length > 0 && { hasCredential: credentials.map((c) => ({ "@type": "EducationalOccupationalCredential", credentialCategory: c })) }),
    worksFor: { "@type": "Organization", name: "Frontier Deals", url: "https://frontler-internet.com" },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg border border-gray-200 my-8">
      <div className="flex-shrink-0">
        {image ? (
          <Image
            src={image}
            alt={`Professional headshot of ${name}, ${role} at Frontier Deals, an authorized Frontier Communications retailer. ${name} specializes in fiber internet technology, ISP comparisons, and consumer broadband guides, helping households choose the right Frontier Fiber plan for their needs.`}
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-3xl font-bold" aria-hidden="true">
            {name.split(" ").map((n) => n[0]).join("")}
          </div>
        )}
      </div>
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-gray-600">{role}</p>
          </div>
          {socialLinks.length > 0 && (
            <div className="flex gap-3 mt-2 md:mt-0">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                  aria-label={`${name}'s ${link.platform} profile`}
                >
                  {link.platform === "LinkedIn" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  )}
                  {link.platform === "Twitter" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>

        <p className="text-gray-700 mb-3">{bio}</p>

        {credentials.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-700 mb-1">Credentials:</h4>
            <ul className="flex flex-wrap gap-2">
              {credentials.map((credential, index) => (
                <li key={index} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                  {credential}
                </li>
              ))}
            </ul>
          </div>
        )}

        {publications.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-1">Recent Publications:</h4>
            <ul className="text-sm">
              {publications.map((pub, index) => (
                <li key={index} className="mb-1">
                  <Link href={pub.url} className="text-blue-600 hover:underline">
                    {pub.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    </>
  )
}
