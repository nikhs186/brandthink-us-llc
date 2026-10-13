import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ClockIcon, GlobeIcon, MailIcon } from "@/components/Icons";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with BrandThink to discuss your website, web app or maintenance project.",
};

const details = [
  {
    Icon: MailIcon,
    title: "Email us",
    text: "For project enquiries, quotes and support.",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    Icon: ClockIcon,
    title: "Response time",
    text: "We reply to every message personally.",
    value: "Within 1 business day",
  },
  {
    Icon: GlobeIcon,
    title: "Where we work",
    text: "Remote-first, collaborating with clients worldwide.",
    value: "Mon – Fri, 9am – 6pm",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let&apos;s start your <span className="text-gradient">next big thing</span>
          </>
        }
        subtitle="Tell us a little about your project and we'll get back to you with ideas, a realistic timeline and a transparent quote. No pressure, no jargon."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <aside className="space-y-6 lg:col-span-5">
            {/* Story */}
            <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-slate-300 sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-600/40 blur-3xl" />
              <div className="relative">
                <span className="eyebrow border-white/10 bg-white/5 text-brand-200">Every project starts with a conversation</span>
                <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-white">
                  We started with small projects. We never stopped caring about them.
                </h2>
                <p className="mt-4 leading-relaxed">
                  In 2022, BrandThink was a single freelancer taking on small website projects for local businesses.
                  Those clients kept coming back and kept referring their friends, until we had to build a team to
                  keep up. That is how a freelance practice became an agency.
                </p>
                <p className="mt-4 leading-relaxed">
                  Since then, every one of our 120+ projects has started exactly the same way: someone with an idea,
                  a challenge or a half-finished plan, sending us a message just like the one you&apos;re about to
                  write. We read every enquiry ourselves, and there&apos;s no such thing as a project that&apos;s too
                  small or an idea that&apos;s too early.
                </p>
                <p className="mt-4 font-medium text-white">Your story could be the next one we tell.</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              {details.map(({ Icon, title, text, value, href }) => (
                <div key={title} className="card flex items-start gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-0.5 text-sm">{text}</p>
                    {href ? (
                      <a href={href} className="mt-2 inline-block font-semibold text-brand-600 hover:text-brand-700">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-2 font-semibold text-ink">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="lg:col-span-7">
            <div className="card p-8 sm:p-10">
              <h2 className="text-2xl font-extrabold tracking-tight">Send us a message</h2>
              <p className="mt-2 text-sm">
                Fill in the form below, or email us directly at{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-brand-600 hover:text-brand-700">
                  {site.email}
                </a>
                .
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
