import Link from "next/link";
import { ArrowRightIcon, CheckIcon, StarIcon } from "@/components/Icons";
import { LogoMark } from "@/components/Logo";
import {
  CtaBanner,
  ProjectCard,
  SectionHeading,
  ServiceCard,
  TestimonialCard,
} from "@/components/Sections";
import ClientLogo from "@/components/ClientLogo";
import { process, projects, services, stats, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Client logos */}
      <section className="border-y border-slate-100 bg-slate-50/60 py-10">
        <div className="container-x">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Trusted by ambitious brands and fast-growing startups
          </p>
          <div className="mt-7 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {projects.map((p) => (
              <span
                key={p.slug}
                className="flex items-center justify-center gap-2 font-display text-base font-extrabold tracking-tight text-slate-400 transition-colors hover:text-slate-600"
              >
                <ClientLogo slug={p.slug} size={26} />
                {p.client.split(" ")[0]}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Everything you need to <span className="text-gradient">win online</span>
              </>
            }
            subtitle="From the first sketch to years of ongoing care, we're the single partner behind your digital presence."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us + stats */}
      <section className="section bg-slate-50/70">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why BrandThink"
              title="A small, senior team that treats your business like our own"
              subtitle="No hand-offs to juniors, no surprise invoices. You work directly with the designers and engineers building your product."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Fixed, transparent pricing agreed before we start",
                "Weekly demos and a live staging link from week one",
                "Performance, SEO and accessibility built in, not bolted on",
                "You own 100% of the code, designs and content",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                    <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-secondary mt-10">
              Our story <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`card p-8 ${i === 1 ? "bg-brand-600 text-white" : ""} ${i % 2 === 1 ? "sm:translate-y-8" : ""}`}
              >
                <p className={`font-display text-4xl font-extrabold tracking-tight ${i === 1 ? "text-white" : "text-ink"}`}>
                  {s.value}
                </p>
                <p className={`mt-2 text-sm ${i === 1 ? "text-brand-100" : ""}`}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              eyebrow="Featured work"
              title="Recent projects we're proud of"
              subtitle="A selection of websites and web apps we've designed, built and launched for our clients."
            />
            <Link href="/work" className="btn-secondary shrink-0">
              View all projects <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section relative overflow-hidden bg-ink">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow border-white/10 bg-white/5 text-brand-200">How we work</span>
            <h2 className="heading-lg mt-5 text-white">A proven process, from idea to launch</h2>
            <p className="mt-4 text-lg text-slate-400">
              Clear steps, honest timelines and constant communication, so there are never any surprises.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-brand-400/50 hover:bg-white/[0.06]"
              >
                <span className="font-display text-sm font-bold text-brand-300">{p.step}</span>
                <h3 className="mt-4 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by the teams we work with"
            subtitle="Don't just take our word for it. Here's what our clients say about working with BrandThink."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative -mt-[72px] overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-400/30 via-violet-400/25 to-fuchsia-300/25 blur-3xl" />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Now booking new projects
          </span>
          <h1 className="heading-xl mt-6">
            We design &amp; build websites that make brands <span className="text-gradient">think bigger.</span>
          </h1>
          <p className="lead mt-6 max-w-xl">
            BrandThink is a web development agency helping startups and growing businesses launch fast, beautiful and
            high-converting websites and web apps, and keeping them running flawlessly long after launch.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary px-6 py-3.5">
              Start your project <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/work" className="btn-secondary px-6 py-3.5">
              View our work
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["HR", "DO", "PN", "ML"].map((i, idx) => (
                <span
                  key={i}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white ${
                    ["bg-brand-600", "bg-violet-600", "bg-fuchsia-500", "bg-sky-600"][idx]
                  }`}
                >
                  {i}
                </span>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-amber-400">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-0.5 text-slate-500">
                <strong className="text-ink">4.9/5</strong> from 60+ happy clients
              </p>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <div className="card relative overflow-hidden p-0">
        <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 flex-1 rounded-md bg-slate-100 px-3 py-1 text-[11px] text-slate-400">
            yourbrand.com
          </span>
        </div>
        <div className="space-y-5 p-6">
          <div className="rounded-xl bg-gradient-to-br from-brand-600 via-violet-600 to-fuchsia-500 p-6 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">New launch</p>
            <p className="mt-2 font-display text-xl font-bold leading-snug">Your brand, beautifully online.</p>
            <span className="mt-4 inline-block rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-brand-700">
              Get started
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { k: "Speed", v: "99" },
              { k: "SEO", v: "100" },
              { k: "A11y", v: "98" },
            ].map((m) => (
              <div key={m.k} className="rounded-xl border border-slate-100 p-3 text-center">
                <p className="font-display text-lg font-extrabold text-emerald-600">{m.v}</p>
                <p className="text-[11px] text-slate-500">{m.k}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <span className="block h-2 w-full rounded-full bg-slate-100" />
            <span className="block h-2 w-5/6 rounded-full bg-slate-100" />
            <span className="block h-2 w-2/3 rounded-full bg-slate-100" />
          </div>
        </div>
      </div>

      <div className="card absolute -bottom-6 -left-4 flex items-center gap-3 px-4 py-3 sm:-left-10">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 font-display text-sm font-extrabold text-emerald-600">
          +64%
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">Conversion lift</p>
          <p className="text-xs text-slate-500">after redesign</p>
        </div>
      </div>

      <div className="card absolute -right-3 -top-6 flex items-center gap-2.5 px-4 py-3 sm:-right-8">
        <LogoMark size={28} id="hero-mark" />
        <div>
          <p className="text-xs font-semibold text-ink">Launched on time</p>
          <p className="text-[11px] text-slate-500">Every single sprint</p>
        </div>
      </div>
    </div>
  );
}
