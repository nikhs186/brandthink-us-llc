import Link from "next/link";
import Logo from "./Logo";
import { MailIcon } from "./Icons";
import { services, site } from "@/lib/data";

const company = [
  { href: "/about", label: "About us" },
  { href: "/work", label: "Our work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/returns-and-refunds", label: "Returns & Refunds" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-slate-400">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="container-x relative">
        <div className="grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" id="logo-footer" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              BrandThink is a web development agency crafting high-performing websites and web apps for ambitious
              brands since {site.founded}.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-brand-300"
            >
              <MailIcon className="h-4 w-4" />
              {site.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:pl-12">
            <FooterColumn title="Services">
              {services.map((s) => (
                <FooterLink key={s.slug} href={`/services#${s.slug}`}>
                  {s.title}
                </FooterLink>
              ))}
            </FooterColumn>
            <FooterColumn title="Company">
              {company.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </FooterColumn>
            <FooterColumn title="Legal">
              {legal.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </FooterColumn>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} BrandThink. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/returns-and-refunds" className="hover:text-white">
              Returns & Refunds
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
