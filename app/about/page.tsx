import type { Metadata } from "next";
import { CtaBanner, PageHero, SectionHeading } from "@/components/Sections";
import { LogoMark } from "@/components/Logo";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind BrandThink, from a one-person freelance practice in 2022 to a full-service web development agency.",
};

const timeline = [
  {
    year: "2022",
    title: "One freelancer, one laptop",
    text: "BrandThink begins as a freelance practice, building small websites, landing pages and fixes for local businesses and first-time founders.",
  },
  {
    year: "2023",
    title: "Clients keep coming back",
    text: "Repeat work and referrals turn a handful of clients into a steady pipeline. Projects grow from simple sites into full redesigns and e-commerce builds.",
  },
  {
    year: "2024",
    title: "Building the team",
    text: "To keep up with demand without compromising on quality, we hire our first designers and developers and officially become an agency.",
  },
  {
    year: "2025",
    title: "From websites to web apps",
    text: "With a larger team in place, we take on custom web applications and SaaS platforms, and launch ongoing website care plans.",
  },
  {
    year: "Today",
    title: "Results that speak for themselves",
    text: "120+ projects delivered and a 98% client retention rate, with the same hands-on care that started it all.",
  },
];

const values = [
  {
    title: "Think before we build",
    text: "Every project starts with strategy. We ask why before how, so what we create serves real business goals.",
  },
  {
    title: "Radical transparency",
    text: "Fixed quotes, honest timelines and open communication. You'll always know where your project stands.",
  },
  {
    title: "Craft in the details",
    text: "Performance, accessibility and polish aren't extras. They're the standard on every page we ship.",
  },
  {
    title: "Partners, not vendors",
    text: "We measure success by your growth. Most of our clients stay with us long after launch day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BrandThink"
        title={
          <>
            From freelancer to agency. <span className="text-gradient">Built on results.</span>
          </>
        }
        subtitle="We're a team of designers, developers and strategists helping ambitious brands build an online presence as remarkable as the work they do."
      />

      {/* Story */}
      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-white">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-600/40 blur-3xl" />
                <LogoMark size={56} id="about-mark" />
                <p className="mt-8 font-display text-6xl font-extrabold tracking-tight">2022</p>
                <p className="mt-2 text-slate-300">The year it all started.</p>
                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p className="font-display text-2xl font-extrabold">{s.value}</p>
                      <p className="mt-1 text-xs text-slate-400">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow">Our story</span>
            <h2 className="heading-lg mt-5">How a one-person freelance practice grew into an agency</h2>
            <div className="mt-8 space-y-6 text-[17px] leading-relaxed text-slate-600">
              <p>
                BrandThink began in 2022 as a one-person freelance practice. The early projects were small: a landing
                page for a local café, a portfolio for a photographer, a quick fix for a store whose checkout had
                stopped working. None of them were glamorous, but each one was treated with the same care, and each
                one was delivered on time.
              </p>
              <p>
                That approach got noticed. Happy clients came back with bigger projects, and then they began
                recommending us to their friends, partners and suppliers. Within a year, a few small jobs had turned
                into a steady stream of redesigns, online stores and long-term support work. There was more demand
                than one person could handle.
              </p>
              <p>
                Rather than turn work away or cut corners, we started building a team. We brought on talented designers
                and developers who shared the same standards, and{" "}
                <strong className="text-ink">BrandThink grew from a freelance practice into a full-service agency</strong>
                . With more people came bigger possibilities, from custom web applications and SaaS platforms to
                ongoing maintenance for businesses that depend on their websites every day.
              </p>
              <p>
                Since then, we have delivered more than 120 projects for startups, clinics, retailers, SaaS companies and
                creative studios around the world, and{" "}
                <strong className="text-ink">we have consistently delivered measurable results</strong>: faster
                websites, more enquiries, higher sales and products that people genuinely enjoy using.
              </p>
              <p>
                We have grown a great deal, but our core principle has not changed. We listen first, build with care
                and stay by our clients&apos; side long after launch, just as we did when it all began.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-slate-50/70">
        <div className="container-x">
          <SectionHeading eyebrow="Our journey" title="From freelance projects to full-service agency" />
          <ol className="relative mx-auto mt-14 max-w-3xl border-l-2 border-brand-100 pl-8 sm:pl-10">
            {timeline.map((t) => (
              <li key={t.year} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[43px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-brand-600 shadow sm:-left-[51px]" />
                <span className="font-display text-sm font-bold text-brand-600">{t.year}</span>
                <h3 className="mt-1 text-xl font-bold">{t.title}</h3>
                <p className="mt-2 leading-relaxed">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we believe"
            title="The values behind every project"
            subtitle="These aren't posters on a wall. They guide how we hire, how we work and how we treat our clients."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="card p-7">
                <span className="font-display text-3xl font-extrabold text-brand-100">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
