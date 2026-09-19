import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import potteryVase from "../assets/pottery-vase.png";
import woodenElephant from "../assets/wooden-elephant.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Meet Team Daredevils — Kalavya" },
      { name: "description", content: "Meet the six-member Team Daredevils behind Kalavya." },
      { property: "og:title", content: "Meet Team Daredevils — Kalavya" },
      { property: "og:description", content: "The people creating Kalavya and celebrating India's artisan communities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Ishita Babbar", role: "Team Leader", initials: "IB" },
  { name: "Kirti Singhal", role: "Frontend Developer", initials: "KS" },
  { name: "Harshit Singhal", role: "Backend Developer", initials: "HS" },
  { name: "Jatin Singhal", role: "QA/Testing", initials: "JS" },
  { name: "Vidit Chauhan", role: "-- ", initials: "VC" },
  { name: "Venkata Rammana Reddy", role: "--", initials: "V" },
];

function AboutPage() {
  return (
    <main className="relative flex h-dvh min-h-[620px] overflow-hidden bg-background px-[8%] py-6">
      <div className="absolute inset-0 bg-paper opacity-80" />
      <img src={potteryVase} alt="Hand-painted vase" width={816} height={816} className="absolute -left-10 bottom-[-5rem] w-64 -rotate-12 opacity-80 drop-shadow-piece" />
      <img src={woodenElephant} alt="Hand-painted wooden elephant" width={816} height={816} className="absolute -right-10 top-16 w-60 rotate-12 opacity-75 drop-shadow-piece" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between rounded-full border border-border/60 bg-surface/90 px-5 shadow-soft backdrop-blur-md">
          <Link to="/" className="flex items-center gap-3" aria-label="Back to Kalavya">
            <img src="/icon-512x512.png" alt="Kalavya Icon" className="size-10 rounded-full" />
            <span className="font-display text-xl font-bold">Kalavya</span>
          </Link>
          <nav className="flex items-center gap-1 rounded-full bg-muted p-1 text-sm font-semibold">
            <Link to="/explore" className="rounded-full px-5 py-2 text-muted-foreground">Explore</Link>
            <Link to="/about" className="rounded-full bg-primary px-5 py-2 text-primary-foreground shadow-sm">About</Link>
          </nav>
        </header>
        <section className="flex min-h-0 flex-1 flex-col justify-center py-7">
          <Link to="/explore" className="mb-4 inline-flex w-fit items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="size-4" /> Back to Explore</Link>
          <div className="mb-6">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">The people behind Kalavya</p>
            <h1 className="mt-2 font-display text-[clamp(3rem,6vw,6rem)] font-black leading-none text-foreground">TEAM DAREDEVILS</h1>
          </div>
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {team.map((member, index) => (
              <article key={member.name} className="flex min-h-32 items-center gap-4 rounded-lg border border-border bg-surface/90 p-4 shadow-soft backdrop-blur-sm">
                <span className="grid size-14 shrink-0 place-items-center bg-secondary rounded-full font-display text-lg text-white">{member.initials}</span>
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground">{member.name}</h2>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}