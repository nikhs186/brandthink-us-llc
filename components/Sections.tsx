import Link from "next/link";
import type { ReactNode } from "react";
import { AppIcon, ArrowRightIcon, CodeIcon, PenIcon, QuoteIcon, ShieldIcon, StarIcon } from "./Icons";
import ClientLogo from "./ClientLogo";
import type { Project, Service, ServiceKey, Testimonial } from "@/lib/data";

export const serviceIcons: Record<ServiceKey, typeof CodeIcon> = {
  development: CodeIcon,
  design: PenIcon,
  webapp: AppIcon,
  maintenance: ShieldIcon,
};

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle: string }) {
  return (
    <section className="relative -mt-[72px] overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="container-x relative text-center">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="heading-xl mx-auto mt-6 max-w-4xl">{title}</h1>
        <p className="lead mx-auto mt-6 max-w-2xl">{subtitle}</p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="heading-lg mt-5">{title}</h2>
      {subtitle && <p className="lead mt-4">{subtitle}</p>}
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.key];
  return (
    <Link
      href={`/services#${service.slug}`}
      className="card group relative flex flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-lg font-bold">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed">{service.short}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
        Learn more <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow">
      <div className="flex items-start gap-4">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-soft`}
        >
          <ClientLogo slug={project.slug} size={28} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-bold leading-tight">{project.client}</h3>
          <p className="mt-1 text-xs text-slate-500">
            {project.industry} · {project.location}
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
          {project.category}
        </span>
      </div>

      <h4 className="mt-6 font-display text-base font-bold text-ink">{project.title}</h4>
      <p className="mt-2 text-sm leading-relaxed">{project.summary}</p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {project.results.map((r) => (
          <div key={r} className="rounded-xl bg-emerald-50/70 px-3 py-2.5 text-xs font-semibold leading-snug text-emerald-800">
            {r}
          </div>
        ))}
      </div>

      <div className="mb-6 mt-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">What we did</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.services.map((s) => (
            <span key={s} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
              {s}
            </span>
          ))}
        </div>
      </div>

      <dl className="mt-auto grid grid-cols-3 gap-3 border-t border-slate-100 pt-5 text-xs [&>div]:min-w-0">
        <div>
          <dt className="text-slate-400">Year</dt>
          <dd className="mt-0.5 font-semibold text-ink">{project.year}</dd>
        </div>
        <div>
          <dt className="text-slate-400">Duration</dt>
          <dd className="mt-0.5 font-semibold text-ink">{project.duration}</dd>
        </div>
        <div>
          <dt className="text-slate-400">Built with</dt>
          <dd className="mt-0.5 truncate font-semibold text-ink" title={project.tags.join(", ")}>
            {project.tags.slice(0, 2).join(", ")}
          </dd>
        </div>
      </dl>
    </article>
  );
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="card flex h-full flex-col p-8">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-amber-400">
          {[0, 1, 2, 3, 4].map((i) => (
            <StarIcon key={i} className="h-4 w-4" />
          ))}
        </div>
        <QuoteIcon className="h-8 w-8 text-brand-100" />
      </div>
      <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-slate-700">“{t.quote}”</blockquote>
      <figcaption className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-600 text-sm font-bold text-white">
          {t.initials}
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">{t.name}</p>
          <p className="text-xs text-slate-500">
            {t.role}, {t.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export function CtaBanner() {
  return (
    <section className="section pt-0">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-600/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Have a project in mind? Let&apos;s build something great together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Tell us about your goals and we&apos;ll get back to you within one business day with ideas, a timeline and
              a transparent quote.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-light">
                Start your project <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/work" className="btn border border-white/20 text-white hover:bg-white/10">
                See our work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
