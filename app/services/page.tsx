import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, ClockIcon } from "@/components/Icons";
import { CtaBanner, PageHero, SectionHeading, serviceIcons } from "@/components/Sections";
import { process, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, website design, web app development and website maintenance services from BrandThink.",
};

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Most marketing websites range from $2,500 to $12,000 depending on page count, functionality and integrations. After a short discovery call we send a fixed quote, so you always know the total cost up front.",
  },
  {
    q: "How long does a typical project take?",
    a: "A design-and-build website usually takes 4–8 weeks. Web applications range from 8–16 weeks for an MVP. We share a detailed timeline with milestones before work begins.",
  },
  {
    q: "Will I be able to update the website myself?",
    a: "Yes. We connect your site to an easy-to-use CMS and provide a recorded training session, so your team can edit pages, publish blog posts and swap images without touching code.",
  },
  {
    q: "Do you work with clients outside your time zone?",
    a: "Absolutely. We're a remote-first team working with clients across North America, Europe, the Middle East and Asia-Pacific, with overlapping hours for calls and a shared Slack channel.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Digital services built to <span className="text-gradient">grow your business</span>
          </>
        }
        subtitle="Whether you need a brand-new website, a custom web app or a reliable partner to look after what you already have, we've got you covered."
      />

      {/* Quick nav */}
      <div className="container-x -mt-4 mb-4 flex flex-wrap justify-center gap-3">
        {services.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
          >
            {s.title}
          </a>
        ))}
      </div>

      <section className="section pt-12">
        <div className="container-x space-y-10">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.key];
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="card scroll-mt-28 grid gap-10 overflow-hidden p-8 sm:p-12 lg:grid-cols-12"
              >
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow-glow">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="font-display text-sm font-bold text-slate-300">0{i + 1}</span>
                  </div>
                  <h2 className="mt-6 text-3xl font-extrabold tracking-tight">{s.title}</h2>
                  <p className="mt-4 leading-relaxed">{s.description}</p>

                  <div className="mt-8 flex flex-wrap gap-6 text-sm">
                    <div>
                      <p className="text-slate-500">Starting at</p>
                      <p className="font-display text-2xl font-extrabold text-ink">{s.startingAt}</p>
                    </div>
                    <div className="border-l border-slate-200 pl-6">
                      <p className="text-slate-500">Typical timeline</p>
                      <p className="mt-1 inline-flex items-center gap-1.5 font-display text-lg font-bold text-ink">
                        <ClockIcon className="h-4 w-4 text-brand-600" /> {s.timeline}
                      </p>
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary mt-8">
                    Get a quote <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>

                <div className="space-y-6 lg:col-span-5">
                  <div className="rounded-2xl bg-slate-50 p-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-ink">What&apos;s included</h3>
                    <ul className="mt-4 space-y-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.5} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-ink">You&apos;ll receive</h3>
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="section bg-slate-50/70">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our process"
            title="Four steps to a website you'll love"
            subtitle="Every project follows the same proven framework, adapted to your goals and budget."
          />
          <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="card p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                  {p.step}
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Common questions"
              subtitle="Can't find what you're looking for? Drop us a line and we'll be happy to help."
            />
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200 lg:col-span-8">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold text-ink">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-xl leading-none text-brand-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
