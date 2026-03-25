import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2, ArrowRight, Gamepad2, Tv, Briefcase, Home, Users, Heart, Wifi, Shield, Zap, Globe, MonitorPlay, Download } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { PageOrderButton } from "@/components/PageInteractions"

const useCases: Record<string, {
  title: string; subtitle: string; icon: React.ReactNode; heroDesc: string;
  recPlan: string; recPlanKey: string; recSpeed: string; recPrice: string;
  whyMatters: { title: string; desc: string; icon: React.ReactNode }[];
  requirements: { activity: string; minSpeed: string; recommended: string }[];
  tips: string[];
  faq: { q: string; a: string }[];
}> = {
  gaming: {
    title: "Internet for Gaming",
    subtitle: "Low Latency. Fast Downloads. Zero Excuses.",
    icon: <Gamepad2 className="h-8 w-8" />,
    heroDesc: "Whether you play competitive shooters or stream on Twitch, Frontier Fiber delivers the speed and low latency gamers need.",
    recPlan: "Fiber 1 Gig", recPlanKey: "fiber-1-gig", recSpeed: "1,000/1,000 Mbps", recPrice: "49.99",
    whyMatters: [
      { title: "Low Latency", desc: "Fiber delivers single-digit ping times — critical for competitive FPS and real-time strategy games.", icon: <Zap className="h-6 w-6" /> },
      { title: "Fast Downloads", desc: "Download a 100GB game in under 15 minutes. No more waiting hours for updates.", icon: <Download className="h-6 w-6" /> },
      { title: "Symmetrical Upload", desc: "Stream to Twitch or YouTube at full quality while playing — upload matches download.", icon: <Globe className="h-6 w-6" /> },
    ],
    requirements: [
      { activity: "Casual gaming (Minecraft, Roblox)", minSpeed: "25 Mbps", recommended: "200 Mbps" },
      { activity: "Competitive FPS (Valorant, CoD)", minSpeed: "50 Mbps", recommended: "500 Mbps" },
      { activity: "Game streaming (Twitch, YouTube)", minSpeed: "100 Mbps", recommended: "1 Gig" },
      { activity: "Cloud gaming (GeForce NOW, Xbox Cloud)", minSpeed: "35 Mbps", recommended: "500 Mbps" },
      { activity: "VR gaming", minSpeed: "100 Mbps", recommended: "1 Gig" },
    ],
    tips: [
      "Use a wired ethernet connection for competitive gaming — Wi-Fi adds latency",
      "Enable QoS on your router to prioritize gaming traffic",
      "Fiber's symmetrical speeds mean you can stream and game simultaneously",
      "Frontier's eero routers include built-in QoS optimization",
    ],
    faq: [
      { q: "Is fiber better than cable for gaming?", a: "Yes. Fiber delivers lower latency (typically 5-15ms vs 15-40ms for cable), more consistent speeds, and symmetrical upload for streaming gameplay." },
      { q: "What internet speed do I need for online gaming?", a: "While most games only require 25-50 Mbps, we recommend at least 500 Mbps for gaming households to account for other devices, downloads, and streaming." },
      { q: "Does Frontier have data caps that affect gaming?", a: "No. All Frontier Fiber plans include truly unlimited data with no caps, throttling, or overage charges." },
    ],
  },
  streaming: {
    title: "Internet for Streaming",
    subtitle: "Buffer-Free 4K on Every Screen.",
    icon: <Tv className="h-8 w-8" />,
    heroDesc: "Netflix, Disney+, YouTube TV, and more — stream in 4K on every TV in your home without buffering or quality drops.",
    recPlan: "Fiber 500", recPlanKey: "fiber-500", recSpeed: "500/500 Mbps", recPrice: "29.99",
    whyMatters: [
      { title: "Multi-Screen 4K", desc: "Stream 4K content on 4+ screens simultaneously with plenty of bandwidth to spare.", icon: <MonitorPlay className="h-6 w-6" /> },
      { title: "No Data Caps", desc: "Binge entire series without worrying about data limits. Truly unlimited.", icon: <Shield className="h-6 w-6" /> },
      { title: "Consistent Speeds", desc: "Fiber doesn't slow down during peak evening hours like cable. Same speed at 8PM as 8AM.", icon: <Zap className="h-6 w-6" /> },
    ],
    requirements: [
      { activity: "Standard HD (1080p) streaming", minSpeed: "5 Mbps", recommended: "25 Mbps" },
      { activity: "4K Ultra HD streaming", minSpeed: "25 Mbps", recommended: "50 Mbps" },
      { activity: "Multiple 4K streams (2-3 TVs)", minSpeed: "75 Mbps", recommended: "200 Mbps" },
      { activity: "Whole-home 4K (4+ TVs)", minSpeed: "100 Mbps", recommended: "500 Mbps" },
      { activity: "Live TV streaming (YouTube TV, Hulu Live)", minSpeed: "25 Mbps", recommended: "200 Mbps" },
    ],
    tips: [
      "A 4K stream uses about 25 Mbps — multiply by the number of TVs in your home",
      "Use your free eero router for whole-home Wi-Fi coverage",
      "Frontier has no data caps — stream as much as you want",
      "Consider the 500 Mbps plan if you have 3+ people streaming",
    ],
    faq: [
      { q: "How much internet speed do I need to stream 4K?", a: "A single 4K stream requires about 25 Mbps. For a household streaming on multiple screens, we recommend 500 Mbps to ensure buffer-free viewing." },
      { q: "Can I cut the cord with Frontier?", a: "Absolutely. With Frontier Fiber's unlimited data and fast speeds, you can replace cable TV entirely with streaming services like Netflix, Hulu, YouTube TV, and more." },
      { q: "Will streaming slow down other devices?", a: "With 500 Mbps or higher, you have more than enough bandwidth for streaming on multiple TVs while others browse, video call, or work from home." },
    ],
  },
  "work-from-home": {
    title: "Internet for Working From Home",
    subtitle: "Professional-Grade Internet. Home Office Ready.",
    icon: <Briefcase className="h-8 w-8" />,
    heroDesc: "Video calls, VPN, cloud storage, and file sharing — all running smoothly on symmetrical fiber that never slows down.",
    recPlan: "Fiber 500", recPlanKey: "fiber-500", recSpeed: "500/500 Mbps", recPrice: "29.99",
    whyMatters: [
      { title: "Symmetrical Upload", desc: "Upload speeds match download — critical for video calls, screen sharing, and cloud backups.", icon: <Globe className="h-6 w-6" /> },
      { title: "VPN Friendly", desc: "High speeds through VPN tunnels. No lag, no dropped connections, no IT tickets.", icon: <Shield className="h-6 w-6" /> },
      { title: "Always-On Reliability", desc: "99.9% uptime. Fiber is more reliable than cable with no shared neighborhood bandwidth.", icon: <Wifi className="h-6 w-6" /> },
    ],
    requirements: [
      { activity: "Email and web browsing", minSpeed: "10 Mbps", recommended: "100 Mbps" },
      { activity: "Zoom / Teams video calls", minSpeed: "25 Mbps", recommended: "200 Mbps" },
      { activity: "VPN connection", minSpeed: "50 Mbps", recommended: "500 Mbps" },
      { activity: "Large file transfers (design, video)", minSpeed: "100 Mbps", recommended: "1 Gig" },
      { activity: "Two people WFH + kids streaming", minSpeed: "200 Mbps", recommended: "1 Gig" },
    ],
    tips: [
      "Symmetrical upload speeds mean your video quality in Zoom is just as good as your download",
      "Position your eero router near your home office for optimal Wi-Fi signal",
      "Consider a wired ethernet connection for mission-critical calls",
      "Frontier's no-contract plans adapt as your work needs change",
    ],
    faq: [
      { q: "Is fiber better than cable for working from home?", a: "Yes. Fiber offers symmetrical speeds (upload = download), lower latency, and more consistent performance — all critical for video calls, VPN, and cloud-based work." },
      { q: "What speed do I need for Zoom and Teams?", a: "Zoom recommends 3.8 Mbps for HD video. However, for reliable performance with screen sharing and other devices, we recommend at least 200-500 Mbps." },
      { q: "Can two people work from home on the same connection?", a: "Absolutely. Frontier Fiber 500 or higher provides plenty of bandwidth for two home offices plus streaming and other household use." },
    ],
  },
  "smart-home": {
    title: "Internet for Smart Homes",
    subtitle: "Power Every Connected Device in Your Home.",
    icon: <Home className="h-8 w-8" />,
    heroDesc: "Cameras, doorbells, thermostats, lights, speakers, locks — keep every smart device connected and responsive with fiber.",
    recPlan: "Fiber 500", recPlanKey: "fiber-500", recSpeed: "500/500 Mbps", recPrice: "29.99",
    whyMatters: [
      { title: "Upload for Cameras", desc: "Security cameras upload 24/7. Symmetrical fiber means crisp, real-time footage.", icon: <Shield className="h-6 w-6" /> },
      { title: "Low Latency Control", desc: "Instant response when you tap a light switch or check a camera. No delays.", icon: <Zap className="h-6 w-6" /> },
      { title: "Device Capacity", desc: "Average smart homes have 20+ devices. Fiber handles them all without slowdowns.", icon: <Wifi className="h-6 w-6" /> },
    ],
    requirements: [
      { activity: "Smart speakers & lights (5-10 devices)", minSpeed: "25 Mbps", recommended: "200 Mbps" },
      { activity: "Security cameras (2-4 cameras)", minSpeed: "50 Mbps", recommended: "200 Mbps" },
      { activity: "Full smart home (20+ devices)", minSpeed: "100 Mbps", recommended: "500 Mbps" },
      { activity: "Smart home + family streaming + WFH", minSpeed: "200 Mbps", recommended: "1 Gig" },
      { activity: "Advanced setup (NVR, home server)", minSpeed: "500 Mbps", recommended: "2 Gig" },
    ],
    tips: [
      "Each security camera uses 2-5 Mbps of upload bandwidth — fiber's symmetrical speeds handle this",
      "eero routers create a mesh network that covers every corner of your home",
      "Group smart devices on a separate network band for better performance",
      "The 500 Mbps plan handles most smart homes — upgrade to 1 Gig for 30+ devices",
    ],
    faq: [
      { q: "Why does my smart home need fast internet?", a: "Smart devices constantly communicate with the cloud. Security cameras upload video 24/7, and slow internet causes lag in device response, buffering in camera feeds, and connection drops." },
      { q: "How many smart devices can Frontier handle?", a: "Frontier Fiber 500 comfortably supports 20+ smart devices. For homes with 40+ devices, the 2 Gig plan provides maximum headroom." },
      { q: "Do smart home devices use a lot of data?", a: "Security cameras and video doorbells can use significant data. With Frontier's unlimited, no-cap plans, you never have to worry about overages." },
    ],
  },
  "large-families": {
    title: "Internet for Large Families",
    subtitle: "Enough Speed for Everyone. No Compromises.",
    icon: <Users className="h-8 w-8" />,
    heroDesc: "Kids streaming, parents working, teens gaming — all at once. Frontier Fiber keeps every family member connected without slowdowns.",
    recPlan: "Fiber 1 Gig", recPlanKey: "fiber-1-gig", recSpeed: "1,000/1,000 Mbps", recPrice: "49.99",
    whyMatters: [
      { title: "Bandwidth for Everyone", desc: "1 Gbps supports 20+ devices — enough for the whole family doing everything at once.", icon: <Users className="h-6 w-6" /> },
      { title: "No Peak Slowdowns", desc: "Cable slows down when the neighborhood gets online. Fiber is a dedicated line to your home.", icon: <Zap className="h-6 w-6" /> },
      { title: "Whole-Home Wi-Fi", desc: "Free eero mesh router covers every room — upstairs, basement, backyard.", icon: <Wifi className="h-6 w-6" /> },
    ],
    requirements: [
      { activity: "Family of 3-4 (basic use)", minSpeed: "100 Mbps", recommended: "500 Mbps" },
      { activity: "Family of 5-6 (mixed use)", minSpeed: "200 Mbps", recommended: "1 Gig" },
      { activity: "Family of 7+ (heavy use)", minSpeed: "500 Mbps", recommended: "2 Gig" },
      { activity: "Kids gaming + parents WFH + streaming", minSpeed: "300 Mbps", recommended: "1 Gig" },
      { activity: "Teens content creation + 4K streaming", minSpeed: "500 Mbps", recommended: "2 Gig" },
    ],
    tips: [
      "Count your devices: phones, tablets, laptops, TVs, game consoles, smart speakers all use bandwidth",
      "The eero Pro 6 included with 1 Gig covers homes up to 3,000 sq ft",
      "Set up parental controls through the eero app to manage kids' screen time",
      "Frontier's no-contract plans let you upgrade if your family grows",
    ],
    faq: [
      { q: "What speed does a large family need?", a: "For families of 5+, we recommend at least 1 Gig (1,000 Mbps). This provides enough bandwidth for simultaneous gaming, streaming, video calls, and homework across 20+ devices." },
      { q: "Will everyone's speed slow down if we're all online?", a: "With fiber, no. Unlike cable, Frontier Fiber is a dedicated connection. Everyone gets consistent speeds regardless of how many family members are online." },
      { q: "Is there a data cap for heavy family use?", a: "No. All Frontier plans include truly unlimited data. Stream, game, download, and video call as much as you want with no caps or overage fees." },
    ],
  },
  seniors: {
    title: "Internet for Seniors",
    subtitle: "Simple. Reliable. Affordable.",
    icon: <Heart className="h-8 w-8" />,
    heroDesc: "Stay connected with family through video calls, enjoy streaming entertainment, and keep your home secure — all with hassle-free fiber internet.",
    recPlan: "Fiber 500", recPlanKey: "fiber-500", recSpeed: "500/500 Mbps", recPrice: "29.99",
    whyMatters: [
      { title: "Easy Setup", desc: "Free professional installation — a technician handles everything. Just plug in and go.", icon: <Home className="h-6 w-6" /> },
      { title: "Video Calls", desc: "Crystal-clear FaceTime and Zoom with grandkids. Symmetrical speeds mean you look great on camera.", icon: <Users className="h-6 w-6" /> },
      { title: "No Surprises", desc: "Simple pricing, no contracts, no data caps, no hidden fees. Cancel anytime.", icon: <Shield className="h-6 w-6" /> },
    ],
    requirements: [
      { activity: "Email and web browsing", minSpeed: "10 Mbps", recommended: "100 Mbps" },
      { activity: "Video calls with family", minSpeed: "15 Mbps", recommended: "200 Mbps" },
      { activity: "Streaming TV shows and movies", minSpeed: "25 Mbps", recommended: "200 Mbps" },
      { activity: "Telehealth appointments", minSpeed: "15 Mbps", recommended: "200 Mbps" },
      { activity: "Video calls + streaming + smart devices", minSpeed: "50 Mbps", recommended: "200 Mbps" },
    ],
    tips: [
      "The eero router included free is one of the simplest to set up — managed through an easy app",
      "Frontier 500 Mbps is plenty for video calls, streaming, and everyday browsing",
      "No contracts means you can cancel anytime if your needs change",
      "Free professional installation means you don't have to set up anything yourself",
    ],
    faq: [
      { q: "What's the simplest plan for basic internet use?", a: "The Frontier Fiber 500 plan at $29.99/mo is perfect. It provides 500 Mbps — more than enough for video calls, streaming, email, and browsing." },
      { q: "Do I need to set up the equipment myself?", a: "No. All Frontier plans include free professional installation. A technician will set up your router and make sure everything works before leaving." },
      { q: "Is there a contract or cancellation fee?", a: "No. Frontier Fiber plans have no annual contracts and no cancellation fees. You can change or cancel your plan at any time." },
    ],
  },
  "existing-customers": {
    title: "Internet for Existing Customers",
    subtitle: "Already a Customer? Upgrade and Save.",
    icon: <Heart className="h-8 w-8" />,
    heroDesc: "Frontier regularly updates plans and pricing. If you signed up a year ago, there may be a faster plan available at a lower price. Here's how to upgrade.",
    recPlan: "Fiber 1 Gig", recPlanKey: "fiber-1-gig", recSpeed: "1,000/1,000 Mbps", recPrice: "49.99",
    whyMatters: [
      { title: "Faster Plans Available", desc: "Frontier has added 5 Gig and 7 Gig tiers since launch. Even the base plan is now 500 Mbps with a free eero router.", icon: <Zap className="h-6 w-6" /> },
      { title: "Price Lock Guarantee", desc: "New plan pricing is locked for 12 months. If your promotional rate expired, upgrading may actually lower your bill.", icon: <Shield className="h-6 w-6" /> },
      { title: "Free Router Upgrade", desc: "Upgrading to a higher tier often includes a better eero router — Wi-Fi 6E or Wi-Fi 7 — at no extra charge.", icon: <Wifi className="h-6 w-6" /> },
    ],
    requirements: [
      { activity: "Current plan expired (regular price)", minSpeed: "Any", recommended: "Upgrade to current promo" },
      { activity: "Added devices since signup", minSpeed: "200 Mbps", recommended: "500+ Mbps" },
      { activity: "Started working from home", minSpeed: "200 Mbps", recommended: "500 Mbps - 1 Gig" },
      { activity: "Kids now gaming & streaming", minSpeed: "300 Mbps", recommended: "1 Gig" },
      { activity: "Smart home expansion (cameras, etc.)", minSpeed: "200 Mbps", recommended: "500 Mbps - 1 Gig" },
    ],
    tips: [
      "Check if your 12-month price lock has expired — upgrading during regular pricing often saves money",
      "Ask about a free router upgrade when switching to a higher plan tier",
      "Frontier has no contracts, so you can upgrade or downgrade at any time",
      "If you're on a legacy Verizon Fios plan, Frontier's current plans may be significantly cheaper",
    ],
    faq: [
      { q: "Can I upgrade my Frontier plan without a new contract?", a: "Yes. Frontier Fiber plans have no contracts. You can upgrade to a faster plan at any time and your new price will be locked for 12 months from the change date." },
      { q: "Will I need new equipment if I upgrade?", a: "It depends on the tier. Upgrading from 500 Mbps to 1 Gig may not require new hardware. Moving to 5 Gig or 7 Gig may include a free eero Max 7 router upgrade." },
      { q: "My promotional price expired. What are my options?", a: "Contact us to switch to a current plan. Frontier's current promotional pricing is often lower than the regular rate on your existing plan, even for faster speeds." },
    ],
  },
  rural: {
    title: "Internet for Rural Areas",
    subtitle: "Fiber Is Expanding to Rural America.",
    icon: <Globe className="h-8 w-8" />,
    heroDesc: "Frontier is investing $10 billion to bring fiber to underserved and rural communities. If fiber isn't available yet, here's what to know about your options.",
    recPlan: "Fiber 500", recPlanKey: "fiber-500", recSpeed: "500/500 Mbps", recPrice: "29.99",
    whyMatters: [
      { title: "Fiber Expansion", desc: "Frontier is building fiber to 10+ million new homes and businesses, with a focus on underserved rural communities.", icon: <Globe className="h-6 w-6" /> },
      { title: "Symmetrical Speeds", desc: "Unlike satellite or DSL, fiber delivers the same speed up and down — critical for telehealth, remote work, and video calls.", icon: <Zap className="h-6 w-6" /> },
      { title: "No Data Caps", desc: "Rural satellite plans have strict data caps (15-100 GB). Frontier Fiber is truly unlimited — no caps, no throttling.", icon: <Shield className="h-6 w-6" /> },
    ],
    requirements: [
      { activity: "Basic email and browsing", minSpeed: "10 Mbps", recommended: "200 Mbps" },
      { activity: "Telehealth video appointments", minSpeed: "15 Mbps", recommended: "200 Mbps" },
      { activity: "Farm management software & IoT", minSpeed: "25 Mbps", recommended: "200 Mbps" },
      { activity: "Remote work from a rural home", minSpeed: "50 Mbps", recommended: "500 Mbps" },
      { activity: "Family streaming + remote school", minSpeed: "100 Mbps", recommended: "500 Mbps" },
    ],
    tips: [
      "Check availability at your address — Frontier adds new fiber areas monthly",
      "If fiber isn't available yet, sign up for expansion notifications at frontier.com",
      "Fiber 500 at $29.99/mo is significantly cheaper and faster than most satellite plans",
      "The free eero router provides excellent Wi-Fi coverage for larger rural properties",
    ],
    faq: [
      { q: "Is Frontier Fiber available in rural areas?", a: "It depends on your specific address. Frontier is rapidly expanding fiber to rural communities across its 25-state footprint. Check your address to see current availability — new areas are added regularly." },
      { q: "What if fiber isn't available at my address yet?", a: "Frontier's $10 billion fiber expansion plan is actively building out to underserved areas. You can check availability and sign up for notifications when fiber reaches your address." },
      { q: "How does Frontier Fiber compare to satellite internet?", a: "Fiber is vastly superior: 500 Mbps vs 25-100 Mbps, no data caps vs 15-100 GB caps, 5ms latency vs 600ms latency, and $29.99/mo vs $50-150/mo. There's no comparison." },
    ],
  },
  "single-person": {
    title: "Internet for One Person",
    subtitle: "Fast, Affordable Fiber Just for You.",
    icon: <Heart className="h-8 w-8" />,
    heroDesc: "Living alone doesn't mean settling for slow internet. Frontier Fiber 500 at $29.99/mo gives a single person more speed than they'll ever need — at a price that beats cable.",
    recPlan: "Fiber 500", recPlanKey: "fiber-500", recSpeed: "500/500 Mbps", recPrice: "29.99",
    whyMatters: [
      { title: "Massive Overkill (In a Good Way)", desc: "500 Mbps is far more than a single person needs — which means zero slowdowns, ever, regardless of what you're doing.", icon: <Zap className="h-6 w-6" /> },
      { title: "Best Price per Mbps", desc: "At $29.99/mo for 500 Mbps, Frontier Fiber delivers the best price-per-megabit of any major ISP.", icon: <Shield className="h-6 w-6" /> },
      { title: "No Contract Flexibility", desc: "Moving soon? No problem. Frontier has no annual contracts — cancel or pause anytime without fees.", icon: <Wifi className="h-6 w-6" /> },
    ],
    requirements: [
      { activity: "Streaming Netflix / YouTube", minSpeed: "5 Mbps", recommended: "50 Mbps" },
      { activity: "Video calls (Zoom, FaceTime)", minSpeed: "3 Mbps", recommended: "50 Mbps" },
      { activity: "Online gaming", minSpeed: "15 Mbps", recommended: "200 Mbps" },
      { activity: "Working from home", minSpeed: "25 Mbps", recommended: "200 Mbps" },
      { activity: "4K streaming + gaming simultaneously", minSpeed: "50 Mbps", recommended: "200 Mbps" },
    ],
    tips: [
      "For a single person, even 100 Mbps is overkill — Frontier Fiber 500 gives you extreme headroom",
      "The free eero router is great for an apartment or small home",
      "No data caps means you can stream as much as you want with no overage charges",
      "Frontier's no-contract policy is perfect if you're renting or planning to move",
    ],
    faq: [
      { q: "What internet speed does one person need?", a: "A single person typically only needs 25-100 Mbps for comfortable browsing, streaming, and gaming. Frontier Fiber 500 at $29.99/mo gives you 5x that minimum, ensuring you're never limited." },
      { q: "Is 500 Mbps too much for one person?", a: "In terms of what you actively use at once — yes, one person won't use 500 Mbps simultaneously. But having extra headroom means you'll never experience slowdowns, and you get symmetrical upload speed for video calls and backups." },
      { q: "What's the cheapest Frontier plan for a single person?", a: "Frontier Fiber 500 at $29.99/mo is the entry-level plan and more than sufficient for one person. There's no reason to spend more unless you're a heavy gamer or content creator who uploads large files." },
    ],
  },
  "multiple-devices": {
    title: "Internet for Multiple Devices",
    subtitle: "One Network. Every Device. Zero Slowdowns.",
    icon: <Wifi className="h-8 w-8" />,
    heroDesc: "Phones, laptops, tablets, smart TVs, cameras, thermostats, speakers — the modern home has 15-30 connected devices. Frontier Fiber handles them all without breaking a sweat.",
    recPlan: "Fiber 500", recPlanKey: "fiber-500", recSpeed: "500/500 Mbps", recPrice: "29.99",
    whyMatters: [
      { title: "Bandwidth for All Devices", desc: "500 Mbps divided across 30 devices gives every device 16 Mbps — enough for 4K streaming on every screen simultaneously.", icon: <Wifi className="h-6 w-6" /> },
      { title: "eero Handles the Load", desc: "The free eero Wi-Fi 6 router is built for dense device environments. It uses OFDMA to efficiently serve many devices at once.", icon: <Zap className="h-6 w-6" /> },
      { title: "No Network Congestion", desc: "Unlike cable, which shares neighborhood bandwidth, fiber is a dedicated line. More devices on YOUR network doesn't mean slow speeds.", icon: <Shield className="h-6 w-6" /> },
    ],
    requirements: [
      { activity: "5-10 devices (typical starter home)", minSpeed: "100 Mbps", recommended: "200 Mbps" },
      { activity: "10-20 devices (active household)", minSpeed: "200 Mbps", recommended: "500 Mbps" },
      { activity: "20-30 devices (smart home + family)", minSpeed: "300 Mbps", recommended: "500 Mbps" },
      { activity: "30-50 devices (power user / home office)", minSpeed: "500 Mbps", recommended: "1 Gig" },
      { activity: "50+ devices (tech enthusiast / business)", minSpeed: "1 Gig", recommended: "2 Gig" },
    ],
    tips: [
      "Count your devices: phones, laptops, tablets, smart TVs, game consoles, cameras, smart speakers, smart lights, thermostats, doorbells",
      "eero routers handle 32+ simultaneous devices per node — add eero pods for larger homes",
      "Use the 5 GHz band for bandwidth-heavy devices (streaming, gaming) and 2.4 GHz for IoT devices",
      "Frontier Fiber's 500 Mbps upload means your security cameras and cloud backups don't slow everyone else down",
    ],
    faq: [
      { q: "How many devices can 500 Mbps handle?", a: "500 Mbps can comfortably support 30+ simultaneous devices. In practice, most devices use bursts of bandwidth rather than constant streams, so 500 Mbps handles far more than 30 devices in real-world use." },
      { q: "Does having more devices slow down my internet?", a: "Only if your total bandwidth is being fully consumed. With 500 Mbps, it would take dozens of devices all simultaneously streaming 4K to run into the limit. The free eero router also helps manage traffic efficiently." },
      { q: "What internet speed do I need for 20 devices?", a: "We recommend at least 300-500 Mbps for 20 devices to ensure all devices get adequate bandwidth even when used simultaneously. Frontier Fiber 500 at $29.99/mo statisfies this comfortably." },
    ],
  },
}

const slugs = Object.keys(useCases)

interface Props { params: Promise<{ usecase: string }> }

export async function generateStaticParams() {
  return slugs.map((usecase) => ({ usecase }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { usecase } = await params
  const uc = useCases[usecase]
  if (!uc) return {}
  return {
    title: `Frontier Fiber for ${uc.title} | Best Plans 2026 from $${uc.recPrice}/mo`,
    description: `Best Frontier Fiber plan for ${usecase.replace(/-/g, " ")}: ${uc.recPlan} (${uc.recSpeed}) at $${uc.recPrice}/mo. Free router, unlimited data, no contracts. Order online today.`,
    alternates: { canonical: `/internet-for/${usecase}` },
    openGraph: {
      title: `Frontier Fiber for ${usecase.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} — From $${uc.recPrice}/mo`,
      description: `${uc.recSpeed} symmetrical fiber speeds from $${uc.recPrice}/mo. Free installation, unlimited data, no contracts.`,
      type: "website",
    },
  }
}

export default async function UseCasePage({ params }: Props) {
  const { usecase } = await params
  const uc = useCases[usecase]
  if (!uc) notFound()

  const otherUseCases = slugs.filter((s) => s !== usecase)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: uc.faq.map(({ q, a }) => ({
      "@type": "Question", name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[
        { label: "Internet Plans", href: "/internet" },
        { label: uc.title },
      ]} />

      {/* Hero */}
      <section className="bg-[#0A1E3C] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="w-16 h-16 rounded-full bg-[#DA202C]/20 text-[#DA202C] flex items-center justify-center mx-auto mb-6">{uc.icon}</div>
          <h1 className="text-3xl md:text-5xl font-black mb-4">{uc.title}</h1>
          <p className="text-xl text-[#64ffda] font-semibold mb-2">{uc.subtitle}</p>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">{uc.heroDesc}</p>
          <div className="inline-block bg-white/10 rounded-xl p-6 mb-8">
            <p className="text-sm text-white/40 mb-1">Our Recommendation</p>
            <p className="text-2xl font-black">{uc.recPlan} — {uc.recSpeed}</p>
            <p className="text-3xl font-black mt-2">${uc.recPrice}<span className="text-base font-normal text-white/40">/mo</span></p>
          </div>
          <div className="block">
            <PageOrderButton planName={uc.recPlanKey} className="bg-[#DA202C] hover:bg-[#b71c1c] text-white font-bold h-14 px-10 rounded-xl text-lg shadow-xl cta-pulse">
              Get {uc.recPlan} Now <ArrowRight className="ml-2 h-5 w-5" />
            </PageOrderButton>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1E3C] text-center mb-12">
            Why Fiber Matters for {usecase.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {uc.whyMatters.map(({ title, desc, icon }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#0A1E3C] text-white flex items-center justify-center mx-auto mb-4">{icon}</div>
                <h3 className="font-bold text-[#0A1E3C] mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed Requirements */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-black text-[#0A1E3C] text-center mb-8">Speed Requirements</h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1E3C] text-white">
                  <th className="text-left p-4 font-semibold">Activity</th>
                  <th className="text-center p-4 font-semibold">Minimum</th>
                  <th className="text-center p-4 font-semibold">Recommended</th>
                </tr>
              </thead>
              <tbody>
                {uc.requirements.map(({ activity, minSpeed, recommended }, i) => (
                  <tr key={activity} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-gray-700">{activity}</td>
                    <td className="p-4 text-center text-gray-500">{minSpeed}</td>
                    <td className="p-4 text-center font-semibold text-[#0A1E3C]">{recommended}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-black text-[#0A1E3C] text-center mb-8">Pro Tips</h2>
          <div className="space-y-3">
            {uc.tips.map((tip) => (
              <div key={tip} className="flex items-start gap-3 p-4 bg-[#f5f7fa] rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-black text-[#0A1E3C] text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {uc.faq.map(({ q, a }) => (
              <details key={q} className="bg-white rounded-xl p-4 shadow-sm group">
                <summary className="cursor-pointer font-bold text-[#0A1E3C] group-open:mb-3">{q}</summary>
                <p className="text-gray-600 text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Use Cases */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-[#0A1E3C] text-center mb-6">Internet Plans For Every Need</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {otherUseCases.map((s) => (
              <Link key={s} href={`/internet-for/${s}`} className="bg-gray-50 hover:bg-gray-100 text-[#0A1E3C] px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize">
                {s.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#DA202C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-8">{uc.recPlan} — {uc.recSpeed} for just ${uc.recPrice}/mo.</p>
          <PageOrderButton className="bg-white text-[#DA202C] font-bold h-14 px-10 rounded-xl text-lg hover:bg-gray-100">
            Order Now <ArrowRight className="ml-2 h-5 w-5" />
          </PageOrderButton>
        </div>
      </section>
    </>
  )
}
