import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Play } from "lucide-react";
import potteryVase from "../assets/pottery-vase.png";
import artisanShawl from "../assets/artisan-shawl.png";
import bluePottery from "../assets/blue-pottery.png";
import woodenElephant from "../assets/wooden-elephant.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kalavya — Indian Craft, Reimagined" },
      { name: "description", content: "Discover the stories and skills behind India's artisan-made pottery, textiles, sculptures, and artifacts." },
      { property: "og:title", content: "Kalavya — Indian Craft, Reimagined" },
      { property: "og:description", content: "A digital window into India's living craft traditions, presented by Team Daredevil." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const artisanPieces = [
  { src: potteryVase, alt: "Hand-painted terracotta vase", className: "left-[5%] top-[17%] w-[9.5rem] -rotate-6" },
  { src: artisanShawl, alt: "Handwoven embroidered shawl", className: "right-[6%] top-[14%] w-[10.5rem] rotate-6" },
  { src: bluePottery, alt: "Jaipur blue pottery bowl", className: "left-[7%] bottom-[6%] w-[10rem] rotate-3" },
  { src: woodenElephant, alt: "Hand-painted wooden elephant", className: "right-[4%] bottom-[5%] w-[10rem] -rotate-6" },
];

function Header() {
  return (
    <header className="absolute inset-x-[8%] top-5 z-30 flex h-16 items-center justify-between rounded-full border border-border/60 bg-surface/90 px-5 shadow-soft backdrop-blur-md">
      <Link to="/" className="flex items-center gap-3" aria-label="Kalavya home">
        <span className="grid size-10 place-items-center rounded-full bg-primary text-xl font-black text-primary-foreground">K</span>
        <span className="font-display text-xl font-bold text-foreground">Kalavya</span>
      </Link>
      <nav className="flex items-center gap-1 rounded-full bg-muted p-1 text-sm font-semibold">
        <Link to="/" activeOptions={{ exact: true }} className="rounded-full px-5 py-2 text-muted-foreground transition-colors" activeProps={{ className: "bg-primary text-primary-foreground shadow-sm" }}>Explore</Link>
        <Link to="/about" className="rounded-full px-5 py-2 text-muted-foreground transition-colors" activeProps={{ className: "bg-primary text-primary-foreground shadow-sm" }}>About</Link>
      </nav>
    </header>
  );
}

function Phone() {
  return (
    <div className="phone-shell relative z-20 mx-auto h-[min(68vh,650px)] aspect-[9/18.5] rounded-[3.2rem] border-[8px] border-phone bg-phone p-2 shadow-phone">
      <span className="absolute left-1/2 top-2 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-phone" />
      <div className="relative flex h-full overflow-hidden rounded-[2.5rem] bg-screen p-5">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,var(--pattern)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative m-auto w-full text-center">
          <span className="mx-auto grid size-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow">
            <Play className="ml-1 size-8 fill-current" aria-hidden="true" />
          </span>
          <p className="mt-6 font-display text-2xl font-bold text-foreground">Our story,<br />coming soon.</p>
          <p className="mx-auto mt-3 max-w-44 text-sm leading-6 text-muted-foreground">Your YouTube film will play here.</p>
        </div>
        <div className="absolute inset-x-5 bottom-5 flex items-center justify-between border-t border-border pt-4 text-[0.65rem] font-bold uppercase text-muted-foreground">
          <span>Craft</span><span>Stories</span><span>India</span>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <main className="relative h-dvh min-h-[620px] overflow-hidden bg-background">
      <Header />
      <div className="absolute inset-0 bg-paper opacity-80" />
      <div className="absolute left-1/2 top-1/2 h-[72vh] aspect-square -translate-x-1/2 -translate-y-[43%] rounded-full border border-dashed border-ring/30" />
      {artisanPieces.map((piece) => (
        <img key={piece.alt} src={piece.src} alt={piece.alt} width={816} height={816} className={`absolute z-10 object-contain drop-shadow-piece ${piece.className}`} />
      ))}
      <section className="relative z-20 grid h-full grid-cols-[1fr_minmax(250px,0.72fr)_1fr] items-center gap-8 px-[8%] pt-24">
        <div className="self-center">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.18em] text-foreground/75">Team Daredevil presents</p>
          <h1 className="font-display text-[clamp(4.5rem,7.2vw,8.5rem)] font-black leading-[0.76] text-gradient">KALAVYA</h1>
          <p className="mt-7 max-w-sm text-sm font-medium leading-6 text-muted-foreground">Keeping India’s handmade legacy alive—one artisan, one object, and one story at a time.</p>
        </div>
        <Phone />
        <div className="max-w-md self-center pl-5">
          <p className="font-display text-[clamp(1.25rem,1.65vw,1.8rem)] font-semibold leading-[1.5] text-foreground/80">
            Kalavya brings the soul of Indian craftsmanship closer. Discover pottery, textiles, sculptures, and artifacts through the hands and stories of the people who create them.
          </p>
          <div className="mt-7 flex items-center gap-3 font-display text-sm font-bold text-primary">
            <span className="grid size-9 place-items-center rounded-full border border-primary"><ArrowUpRight className="size-4" /></span>
            Discover the craft
          </div>
        </div>
      </section>
    </main>
  );
}