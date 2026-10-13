import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";
import { CtaBanner, PageHero, TestimonialCard } from "@/components/Sections";
import { projects, stats, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Selected website, web app and design projects delivered by BrandThink.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Projects that deliver <span className="text-gradient">real results</span>
          </>
        }
        subtitle="From e-commerce storefronts to SaaS dashboards, here's a look at some of the digital products we've designed and built for our clients."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-x">
          <WorkGrid projects={projects} />
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50/70 py-16">
        <div className="container-x grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {testimonials.slice(0, 2).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
