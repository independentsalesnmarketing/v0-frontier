/**
 * Centralized glossary term sets for entity-based SEO.
 * Each key maps to a blog category or topic cluster.
 * Import the relevant set and pass it to <GlossaryTerms />.
 */
import type { GlossaryTerm } from "@/components/GlossaryTerms"

export const fiberInternetTerms: GlossaryTerm[] = [
  { term: "Fiber-Optic Internet", definition: "A broadband technology that transmits data as pulses of light through glass or plastic fiber strands, enabling speeds up to 10 Gbps with very low latency." },
  { term: "FTTP (Fiber to the Premises)", definition: "An architecture where fiber-optic cable runs directly from the provider's central office all the way to the customer's home or building — no copper last mile." },
  { term: "Symmetrical Speeds", definition: "Equal upload and download bandwidth. Frontier Fiber provides symmetrical speeds, unlike cable which typically offers much slower uploads than downloads." },
  { term: "ONT (Optical Network Terminal)", definition: "The device installed at your home that converts the fiber-optic light signal into an electrical signal your router can use. Included free with Frontier Fiber installation." },
  { term: "Latency (Ping)", definition: "The time in milliseconds it takes for a data packet to travel from your device to a server and back. Fiber typically achieves 10–15 ms; critical for gaming and video calls." },
  { term: "Bandwidth", definition: "The maximum data transfer rate of a network connection, measured in Mbps or Gbps. Higher bandwidth allows more simultaneous streams, downloads, and users." },
  { term: "Gbps (Gigabit per second)", definition: "A unit of data transfer speed equal to 1,000 Mbps. Frontier Fiber plans range from 500 Mbps to 7 Gbps." },
  { term: "Unlimited Data", definition: "An internet plan with no monthly data cap or overage charges. All Frontier Fiber plans include unlimited data." },
  { term: "eero Wi-Fi 6 Router", definition: "The mesh Wi-Fi router included free with most Frontier Fiber plans. Wi-Fi 6 supports faster speeds over wireless, reduced congestion, and better range." },
  { term: "ISP (Internet Service Provider)", definition: "A company that provides internet access. Examples include Frontier Communications, Xfinity, Spectrum, and AT&T." },
]

export const wifiTerms: GlossaryTerm[] = [
  { term: "Wi-Fi 6 (802.11ax)", definition: "The sixth generation of Wi-Fi, offering speeds up to 9.6 Gbps, improved multi-device performance, and better battery efficiency for connected devices." },
  { term: "Wi-Fi 7 (802.11be)", definition: "The latest Wi-Fi standard, delivering speeds up to 46 Gbps with multi-link operation (MLO) and 6 GHz band support for ultra-low latency." },
  { term: "Mesh Wi-Fi System", definition: "A network of two or more access points that work together to blanket a home in seamless, overlapping Wi-Fi coverage — eliminating dead zones." },
  { term: "Dead Zone", definition: "An area in a home where Wi-Fi signal is too weak for reliable connection, often caused by walls, distance from the router, or interference." },
  { term: "SSID (Network Name)", definition: "The public name of a Wi-Fi network. Your router broadcasts its SSID so devices can identify and join the correct network." },
  { term: "2.4 GHz Band", definition: "The lower Wi-Fi frequency band offering longer range but slower speeds. Best for devices far from the router or that don't need high bandwidth." },
  { term: "5 GHz Band", definition: "A Wi-Fi frequency offering faster speeds and less interference than 2.4 GHz, but with shorter range. Best for nearby devices requiring high throughput." },
  { term: "6 GHz Band", definition: "A newer Wi-Fi frequency (Wi-Fi 6E/7) with very little congestion, enabling the fastest wireless speeds for compatible devices at close range." },
  { term: "Range Extender (Repeater)", definition: "A device that rebroadcasts an existing Wi-Fi signal to extend its range. Unlike mesh systems, extenders create a separate network and can introduce latency." },
  { term: "Ethernet Backhaul", definition: "Wired connections between mesh nodes using Ethernet cable for maximum speed and reliability across the mesh network." },
]

export const internetSpeedTerms: GlossaryTerm[] = [
  { term: "Mbps (Megabits per second)", definition: "The standard unit for measuring internet speed. 1 Mbps equals one million bits per second. 100 Mbps handles HD streaming; 1,000 Mbps (1 Gbps) suits large households." },
  { term: "Download Speed", definition: "How quickly your connection pulls data from the internet to your device — for streaming, browsing, and downloading files." },
  { term: "Upload Speed", definition: "How quickly your device sends data to the internet — critical for video calls, cloud backups, and live streaming." },
  { term: "Throughput", definition: "The actual data transfer rate achieved in real-world conditions, which may be lower than the advertised maximum speed due to network conditions." },
  { term: "Jitter", definition: "Variability in packet delivery time. High jitter causes choppy audio and video in real-time applications like Zoom and online gaming." },
  { term: "Packet Loss", definition: "The percentage of data packets that fail to reach their destination. Even 1% packet loss noticeably degrades video calls and gaming." },
  { term: "Bandwidth Throttling", definition: "Intentional slowing of your internet speed by your ISP after you exceed a data threshold or during peak hours. Frontier Fiber does not throttle speeds." },
  { term: "Speed Test", definition: "A tool that measures your connection's actual download speed, upload speed, latency, and jitter against a remote server." },
]

export const buyingGuideTerms: GlossaryTerm[] = [
  { term: "Contract / Early Termination Fee (ETF)", definition: "A penalty charged when you cancel service before a contract period ends. Frontier Fiber plans require no annual contract." },
  { term: "AutoPay Discount", definition: "A monthly bill credit for enrolling in automatic payment. Frontier offers a $10/month discount with AutoPay and paperless billing." },
  { term: "Promotional Rate", definition: "A discounted price offered for an introductory period. After the promo ends, the standard rate applies — always check what the standard rate is before signing up." },
  { term: "Data Cap", definition: "A monthly limit on the amount of data you can use. Once exceeded, speeds are reduced or overage fees apply. Frontier Fiber plans have no data caps." },
  { term: "Modem vs. Router", definition: "A modem connects your home to your ISP's network; a router distributes that connection to your devices via Wi-Fi or Ethernet. Fiber uses an ONT instead of a traditional modem." },
  { term: "Equipment Fee", definition: "A monthly charge for renting a router or modem from your ISP. Frontier Fiber includes a free eero router with no monthly equipment rental fee." },
  { term: "Installation Fee", definition: "A one-time charge for a technician to set up your internet service. Frontier Fiber installation is included at no cost." },
  { term: "Authorized Retailer", definition: "A company authorized to sell a provider's services. Frontier-deals.com is an authorized Frontier retailer — plans and prices are identical to ordering direct." },
]

export const gamingTerms: GlossaryTerm[] = [
  { term: "Ping (Latency)", definition: "The round-trip time in milliseconds between your device and a game server. Under 20 ms is excellent; over 100 ms causes noticeable lag." },
  { term: "Lag", definition: "A delay or stutter in gameplay caused by high latency, packet loss, or insufficient bandwidth between your device and the game server." },
  { term: "Jitter", definition: "Inconsistent latency — when ping fluctuates rapidly. Jitter causes rubber-banding and unpredictable behavior in fast-paced games." },
  { term: "NAT Type", definition: "Network Address Translation type affects your ability to connect with other players. NAT Type 1 (Open) allows all connections; NAT Type 3 (Strict) can block multiplayer." },
  { term: "QoS (Quality of Service)", definition: "A router feature that prioritizes traffic from specific applications (e.g., a game console) to reduce lag during household peak-usage hours." },
  { term: "Wired vs. Wireless Gaming", definition: "Ethernet connections deliver lower and more stable latency than Wi-Fi — critical for competitive gaming. A fiber line supports both equally well." },
  { term: "Dedicated Server", definition: "A remote server that hosts a game independently of any player's machine, delivering more stable and fair connectivity than peer-to-peer connections." },
]

export const streamingTerms: GlossaryTerm[] = [
  { term: "4K Ultra HD Streaming", definition: "Video playback at 3840×2160 resolution. Netflix and YouTube recommend at least 25 Mbps per 4K stream." },
  { term: "8K Streaming", definition: "8K video at 7680×4320 resolution, requiring 50–100 Mbps per simultaneous stream — only practical with a multi-gig fiber plan." },
  { term: "Buffering", definition: "A pause in video playback while the stream loads additional data. Caused by insufficient bandwidth relative to the stream's bitrate." },
  { term: "CDN (Content Delivery Network)", definition: "A geographically distributed network of servers that cache and deliver streaming content closer to the viewer, reducing buffering and latency." },
  { term: "Bitrate", definition: "The amount of data transferred per second for a video stream, measured in Mbps. Higher bitrate = better quality but requires more bandwidth." },
  { term: "Live Streaming (Upload)", definition: "Broadcasting real-time video to platforms like YouTube Live or Twitch. Requires consistent upload speed — at least 6 Mbps for 1080p 60fps." },
  { term: "Simultaneous Streams", definition: "The number of devices streaming at the same time through one internet connection. A 500 Mbps fiber plan supports 10+ simultaneous 4K streams." },
]

/** Map blog category strings to the appropriate glossary terms */
export const categoryGlossaryMap: Record<string, GlossaryTerm[]> = {
  "Internet Technology": fiberInternetTerms,
  "WiFi Tips": wifiTerms,
  "Buying Guide": buyingGuideTerms,
  Gaming: gamingTerms,
  Streaming: streamingTerms,
  "Home Office": [...internetSpeedTerms.slice(0, 4), ...buyingGuideTerms.slice(0, 4)],
  "Smart Home": [...wifiTerms.slice(0, 5), ...fiberInternetTerms.slice(0, 5)],
  "Getting Started": [...fiberInternetTerms.slice(0, 5), ...buyingGuideTerms.slice(3, 8)],
  Security: [...fiberInternetTerms.slice(0, 4), ...wifiTerms.slice(0, 4)],
  Review: fiberInternetTerms,
}
