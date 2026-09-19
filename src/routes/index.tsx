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
      { property: "og:description", content: "A digital bridge between India's artisan heritage and wider markets, presented by Team Daredevil." },
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
        <span className="brand-mark grid size-10 place-items-center rounded-full bg-primary font-display text-xl font-bold text-primary-foreground">K</span>
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
        <div className="absolute left-1/2 top-3 z-30 flex h-7 w-28 -translate-x-1/2 items-center justify-end gap-2 rounded-full bg-phone px-3">
          <span className="size-2 rounded-full bg-phone-lens" />
        </div>
        <div className="relative flex h-full overflow-hidden rounded-[2.65rem] bg-screen">
          <div className="absolute inset-x-5 top-3 z-20 flex items-center justify-between text-[0.6rem] font-semibold text-foreground">
            <span>9:41</span>
            <span className="flex items-center gap-1"><Signal className="size-3"/><Wifi className="size-3"/><BatteryFull className="size-3.5"/></span>
          </div>
          <div className="absolute inset-0 bg-phone-pattern" />
          <div className="relative m-auto w-full px-6 text-center">
            <p className="mb-4 text-[0.58rem] font-semibold uppercase text-primary">A film by Team Daredevil</p>
            <span className="phone-play mx-auto grid size-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow">
              <Play className="ml-1 size-8 fill-current" aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-display text-2xl font-normal italic leading-tight text-foreground">Craft has a voice.<br/>We help it travel.</h2>
            <p className="mx-auto mt-3 max-w-44 text-xs leading-5 text-muted-foreground">The KALAVYA story is coming soon.</p>
          </div>
          <div className="absolute inset-x-6 bottom-5 h-1 rounded-full bg-foreground/80" />
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
          <p className="mb-5 text-xs font-medium uppercase text-muted-foreground">Team Daredevil presents</p>
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
          <Link to="/explore" className="group mt-7 inline-flex items-center gap-5 text-xs font-semibold uppercase text-foreground">
            Start exploring
            <span className="grid size-12 place-items-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:translate-x-1"><ArrowRight className="size-4" /></span>
          </Link>
        </div>
      </section>
    </main>
  );
}