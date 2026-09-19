import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Play, Signal, Wifi, BatteryFull } from "lucide-react";
import potteryVase from "../assets/pottery-vase.png";
import artisanShawl from "../assets/artisan-shawl.png";
import bluePottery from "../assets/blue-pottery.png";
import woodenElephant from "../assets/wooden-elephant.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kalavya — Preserving the Human Touch" },
      { name: "description", content: "KALAVYA connects India's artisans with digital markets through an approachable AI-powered business ecosystem." },
      { property: "og:title", content: "Kalavya — Preserving the Human Touch" },
      { property: "og:description", content: "A digital bridge between India's artisan heritage and wider markets, presented by Team Daredevils." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function SiteHeader() {
  return (
    <header className="site-header absolute inset-x-[6%] top-5 z-40 flex h-16 items-center justify-between rounded-full border border-border/70 bg-surface/85 px-5 shadow-soft backdrop-blur-xl">
      <Link to="/" className="flex items-center gap-3" aria-label="Kalavya home">
        <img src="/icon-512x512.png" alt="Kalavya Icon" className="brand-mark size-10 rounded-full" />
        <span className="font-display text-lg font-bold text-foreground">Kalavya</span>
      </Link>
      <nav className="flex items-center gap-1 rounded-full bg-muted/80 p-1 text-sm font-medium" aria-label="Main navigation">
        <Link to="/explore" className="rounded-full px-5 py-2 text-muted-foreground transition-colors hover:text-foreground">Explore</Link>
        <Link to="/about" className="rounded-full px-5 py-2 text-muted-foreground transition-colors hover:text-foreground">About</Link>
      </nav>
    </header>
  );
}

function RealisticPhone() {
  return (
    <div className="phone-wrap relative z-20 mx-auto">
      <div className="phone-button phone-button-volume" />
      <div className="phone-button phone-button-power" />
      <div className="phone-frame relative h-[min(69vh,640px)] aspect-[9/19.2] rounded-[3.25rem] border border-phone-highlight bg-phone p-[9px] shadow-phone">
        <div className="relative flex h-full overflow-hidden rounded-[2.65rem] bg-black">
          <iframe
            className="absolute inset-0 z-10 h-full w-full border-0 pointer-events-auto"
            src="https://www.youtube.com/embed/y6oMutwJQCw?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0&fs=0&loop=1&playlist=y6oMutwJQCw"
            title="Phone preview"
            allow="autoplay; encrypted-media"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <main className="home-page relative h-dvh min-h-[620px] overflow-hidden bg-background selection:bg-secondary/30">
      <SiteHeader />
      <div className="absolute inset-0 bg-paper opacity-80" />
      <div className="home-wordmark pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
        <span className="select-none whitespace-nowrap font-display text-[27vw] italic text-muted/75">Explore</span>
      </div>

      <img src={potteryVase} alt="Hand-painted terracotta vase" className="craft-float craft-vase absolute left-[5%] top-[18%] z-10 w-[9rem] -rotate-6 drop-shadow-piece" />
      <img src={artisanShawl} alt="Handwoven embroidered shawl" className="craft-float craft-shawl absolute right-[4%] top-[15%] z-10 w-[10rem] rotate-6 drop-shadow-piece" />
      <img src={bluePottery} alt="Jaipur blue pottery bowl" className="craft-float craft-bowl absolute bottom-[4%] left-[8%] z-10 w-[10rem] rotate-3 drop-shadow-piece" />
      <img src={woodenElephant} alt="Hand-painted wooden elephant" className="craft-float craft-elephant absolute bottom-[4%] right-[5%] z-10 w-[10rem] -rotate-6 drop-shadow-piece" />

      <section className="relative z-20 grid h-full grid-cols-[1fr_minmax(250px,0.8fr)_1fr] items-center gap-10 px-[8%] pt-24">
        <div className="home-intro self-center">
          <p className="mb-5 text-xs font-medium uppercase text-muted-foreground">Team Daredevils presents</p>
          <h1 className="font-display text-[clamp(4rem,7.4vw,8.5rem)] font-normal italic leading-[0.84] text-foreground">Kalavya</h1>
          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <p className="text-[0.65rem] font-medium uppercase text-primary">Preserving the human touch</p>
          </div>
        </div>

        <RealisticPhone />

        <div className="home-story max-w-sm self-center justify-self-end">
          <h2 className="font-display text-[clamp(1.6rem,2.4vw,2.7rem)] font-normal italic leading-[1.25] text-foreground">
            Heritage in every hand. <span className="text-muted-foreground">Opportunity in every connection.</span>
          </h2>
          <p className="mt-5 max-w-xs text-sm font-light leading-6 text-muted-foreground">KALAVYA helps artisans digitize, showcase, price, connect, sell, and grow—with technology that respects the craft.</p>
          <div className="mt-7 flex gap-5">
            <Link to="/explore" className="group inline-flex items-center gap-3 text-xs font-semibold uppercase text-foreground">
              Explore
              <span className="grid size-8 place-items-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:translate-x-1"><ArrowRight className="size-4" /></span>
            </Link>
            <a href="https://artisans-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-xs font-semibold uppercase text-foreground">
              PROTOTYPE
              <span className="grid size-8 place-items-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:translate-x-1"><ArrowRight className="size-4" /></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}