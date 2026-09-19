import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown, ArrowRight, BadgeIndianRupee, Building2, Camera, Check,
  ChevronRight, Images, Languages, MessageSquareMore, Mic2,
  PackageCheck, ShoppingBag, Sparkles, Star, Store, TrendingUp, Users,
} from "lucide-react";
import potteryVase from "../assets/pottery-vase.png";
import artisanShawl from "../assets/artisan-shawl.png";
import bluePottery from "../assets/blue-pottery.png";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore KALAVYA — From Craft to Digital Market" },
      { name: "description", content: "See how KALAVYA helps artisans catalogue, price, showcase, and sell traditional crafts through an approachable AI-powered ecosystem." },
      { property: "og:title", content: "Explore KALAVYA — From Craft to Digital Market" },
      { property: "og:description", content: "A quick visual journey through the problem, solution, features, architecture, and impact of KALAVYA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExplorePage,
});

const problems = [
  "Limited year-round market access",
  "Low digital literacy and language barriers",
  "Difficult product cataloguing and presentation",
  "Uncertainty around changing market prices",
  "Limited access to B2B and bulk buyers",
];

const features = [
  { icon: Mic2, title: "AI Smart Cataloguing", text: "Upload an image and speak. AI shapes it into a structured, professional listing.", step: "Image + voice → catalogue" },
  { icon: Images, title: "AI Product Enhancement", text: "Improve presentation and create polished, marketplace-ready product visuals.", step: "Raw image → ready to showcase" },
  { icon: BadgeIndianRupee, title: "Dynamic Pricing Assistant", text: "Bring material cost, inflation, seasonality, and market conditions into one recommendation.", step: "AI suggests → artisan approves" },
  { icon: Building2, title: "B2B Market Linkage", text: "Connect artisans with businesses seeking bulk and customized products.", step: "Discover → connect → source" },
  { icon: MessageSquareMore, title: "B2B Negotiation", text: "Keep requests, artisan responses, negotiation, and final price in one clear flow.", step: "RFQ → negotiate → order" },
  { icon: Star, title: "Reputation-Based Discovery", text: "Turn completed orders and feedback into trust and stronger profile visibility.", step: "Feedback → rating → reputation" },
  { icon: Store, title: "Digital Marketplace", text: "Open year-round access to customers beyond physical exhibitions.", step: "Local craft → wider markets" },
];

function ExploreHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Kalavya home">
          <span className="grid size-10 place-items-center rounded-full bg-primary font-display text-xl font-bold text-primary-foreground">K</span>
          <span className="font-display text-lg font-bold">Kalavya</span>
        </Link>
        <nav className="flex items-center gap-1 rounded-full bg-muted p-1 text-sm font-medium">
          <Link to="/explore" className="rounded-full bg-primary px-5 py-2 text-primary-foreground">Explore</Link>
          <Link to="/about" className="rounded-full px-5 py-2 text-muted-foreground transition-colors hover:text-foreground">About</Link>
        </nav>
      </div>
    </header>
  );
}

function Chapter({ number, label }: { number: string; label: string }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-primary">
      <span className="font-display text-sm italic">{number}</span><span className="h-px w-9 bg-primary" />
      <span className="text-[0.68rem] font-semibold uppercase">{label}</span>
    </div>
  );
}

function JourneyFlow() {
  const top = [
    { icon: Camera, label: "Capture product" },
    { icon: Mic2, label: "Describe by voice" },
    { icon: Sparkles, label: "AI engine" },
    { icon: Check, label: "Artisan approval" },
    { icon: Store, label: "Digital storefront" },
  ];
  const bottom = [
    { icon: Users, label: "Customer" },
    { icon: Building2, label: "B2B buyer" },
    { icon: MessageSquareMore, label: "RFQ & negotiate" },
    { icon: ShoppingBag, label: "Sell" },
    { icon: Star, label: "Reputation" },
  ];
  return (
    <div className="architecture-flow mt-8">
      <div className="flow-row">
        {top.map(({ icon: Icon, label }, index) => (
          <div className="contents" key={label}>
            <div className={`flow-node ${label === "AI engine" ? "flow-node-active" : ""}`}><Icon className="size-5"/><span>{label}</span></div>
            {index < top.length - 1 && <ChevronRight className="flow-arrow size-5" />}
          </div>
        ))}
      </div>
      <div className="my-4 flex justify-center"><ArrowDown className="size-5 text-primary" /></div>
      <div className="flow-row">
        {bottom.map(({ icon: Icon, label }, index) => (
          <div className="contents" key={label}>
            <div className={`flow-node ${label === "Reputation" ? "flow-node-active" : ""}`}><Icon className="size-5"/><span>{label}</span></div>
            {index < bottom.length - 1 && <ChevronRight className="flow-arrow size-5" />}
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {["Catalogue", "Image enhancement", "Pricing recommendation"].map((label) => <div key={label} className="rounded-md border border-secondary/35 bg-secondary/10 px-4 py-3 text-center text-xs font-medium text-secondary-foreground">AI output · {label}</div>)}
      </div>
    </div>
  );
}

function ExplorePage() {
  return (
    <main className="explore-page min-h-screen bg-background text-foreground">
      <ExploreHeader />
      <section className="relative overflow-hidden border-b border-border px-5 pb-16 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="absolute inset-0 bg-paper opacity-60" />
        <img src={potteryVase} alt="Hand-painted terracotta vase" className="journey-art absolute -right-10 top-5 w-56 rotate-12 opacity-75 drop-shadow-piece md:right-[5%] md:w-72" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase text-primary">Explore — KALAVYA</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.2rem,7vw,7.5rem)] font-normal italic leading-[0.95]">From gifted hands to wider markets.</h1>
          <p className="mt-7 max-w-xl text-base font-light leading-7 text-muted-foreground">A quick journey through the gap artisans face—and the digital business partner designed to close it.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-5 px-5 py-10 lg:px-8 lg:py-16">
        <section className="explore-grid grid gap-5 lg:grid-cols-12">
          <article className="exhibit-panel relative overflow-hidden bg-foreground p-7 text-background lg:col-span-7 lg:p-10">
            <Chapter number="01" label="The Problem" />
            <h2 className="max-w-xl font-display text-4xl font-normal italic leading-tight lg:text-5xl">Traditional craft.<br/>Limited digital reach.</h2>
            <p className="mt-5 max-w-xl text-sm font-light leading-6 text-background/70">Marginalized artisans possess valuable traditional skills and unique products, but often struggle to enter and manage digital commerce.</p>
            <p className="mt-8 max-w-lg border-l-2 border-primary pl-4 font-display text-xl italic">The gap isn’t the craft. It’s the connection.</p>
          </article>
          <article className="exhibit-panel bg-surface p-7 lg:col-span-5 lg:p-9">
            <ul className="space-y-3">
              {problems.map((problem) => <li key={problem} className="flex items-start gap-3 border-b border-border pb-3 text-sm"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />{problem}</li>)}
            </ul>
            <div className="mt-7 flex items-center gap-3 text-xs text-muted-foreground"><Languages className="size-5 text-secondary"/> Built around language, access, and confidence.</div>
          </article>
        </section>

        <section className="exhibit-panel relative overflow-hidden bg-primary p-7 text-primary-foreground lg:p-10">
          <img src={artisanShawl} alt="Handwoven embroidered shawl" className="absolute -bottom-24 -right-14 w-72 rotate-6 opacity-25" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><Chapter number="02" label="Our Solution" /><h2 className="max-w-3xl font-display text-4xl font-normal italic lg:text-5xl">KALAVYA — your AI-powered digital business partner.</h2><p className="mt-5 max-w-2xl text-sm leading-6 text-primary-foreground/75">A simple digital ecosystem that helps artisans move from creating a product listing to reaching and selling to the right buyers.</p></div>
            <div className="solution-chain flex flex-wrap items-center gap-2 text-xs font-semibold uppercase">{["Digitize", "Showcase", "Price", "Connect", "Sell", "Grow"].map((item, index) => <div className="contents" key={item}><span className="rounded-full border border-primary-foreground/30 px-4 py-2">{item}</span>{index < 5 && <ArrowRight className="size-3.5"/>}</div>)}</div>
          </div>
        </section>

        <section className="py-8 lg:py-12">
          <Chapter number="03" label="Key Features" />
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><h2 className="font-display text-4xl italic lg:text-5xl">Small steps. Serious capability.</h2><p className="max-w-sm text-sm leading-6 text-muted-foreground">Each tool removes friction without taking control away from the artisan.</p></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text, step }, index) => (
              <article key={title} className={`feature-card exhibit-panel flex min-h-64 flex-col bg-surface p-6 ${index === 0 || index === 6 ? "lg:col-span-2" : ""}`}>
                <span className="grid size-11 place-items-center rounded-full bg-secondary/15 text-secondary"><Icon className="size-5"/></span>
                <h3 className="mt-6 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                <p className="mt-auto pt-6 text-[0.68rem] font-semibold uppercase text-primary">{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="exhibit-panel bg-surface p-7 lg:p-10">
          <Chapter number="04" label="How KALAVYA Works" />
          <div className="flex flex-wrap items-end justify-between gap-4"><h2 className="font-display text-4xl italic lg:text-5xl">One connected path.</h2><p className="max-w-sm text-sm leading-6 text-muted-foreground">AI assists at the complex moments. The artisan approves what reaches the market.</p></div>
          <JourneyFlow />
        </section>

        <section className="py-8 lg:py-12">
          <Chapter number="06" label="Impact" />
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              { icon: TrendingUp, who: "For Artisans", path: "Digital presence → Wider reach → More opportunities → Sustainable growth" },
              { icon: PackageCheck, who: "For Customers", path: "Discover authentic crafts → Better information → Trusted purchase" },
              { icon: Building2, who: "For B2B Buyers", path: "Discover artisans → Raise RFQ → Negotiate → Source in bulk" },
            ].map(({ icon: Icon, who, path }) => <article key={who} className="impact-card exhibit-panel bg-foreground p-7 text-background"><Icon className="size-7 text-secondary"/><h3 className="mt-8 font-display text-2xl italic">{who}</h3><p className="mt-4 text-sm leading-7 text-background/70">{path}</p></article>)}
          </div>
        </section>
      </div>
      <footer className="border-t border-border px-5 py-8 text-center text-xs text-muted-foreground">Team Daredevils presents <span className="font-display font-bold text-foreground">KALAVYA</span></footer>
    </main>
  );
}