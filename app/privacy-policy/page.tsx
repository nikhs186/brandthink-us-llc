import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BrandThink collects, uses and protects your personal information.",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "information", label: "Information we collect" },
  { id: "use", label: "How we use your information" },
  { id: "sharing", label: "Sharing your information" },
  { id: "cookies", label: "Cookies & analytics" },
  { id: "retention", label: "Data retention" },
  { id: "security", label: "Data security" },
  { id: "rights", label: "Your rights" },
  { id: "client-data", label: "Client project data" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your privacy matters to us. This policy explains what information we collect, why we collect it and how we keep it safe."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav className="sticky top-28 space-y-1 text-sm" aria-label="Policy sections">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">On this page</p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block rounded-lg px-3 py-2 text-slate-600 transition hover:bg-slate-50 hover:text-brand-700"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="prose-policy card p-8 sm:p-12 lg:col-span-9 [&_h2]:scroll-mt-28">
            <p className="text-sm text-slate-500">Last updated: October 1, 2026</p>

            <h2 id="overview">1. Overview</h2>
            <p>
              This Privacy Policy describes how BrandThink (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;)
              collects, uses and protects personal information when you visit our website, contact us or use our
              website design, development, web application and maintenance services.
            </p>
            <p>By using our website or services, you agree to the practices described in this policy.</p>

            <h2 id="information">2. Information we collect</h2>
            <p>
              <strong>Information you give us.</strong> When you fill in our contact form, email us or become a client,
              we may collect:
            </p>
            <ul>
              <li>Your first and last name</li>
              <li>Email address and phone number</li>
              <li>Company name and project details you share in your message</li>
              <li>Billing information needed to issue invoices and process payments</li>
            </ul>
            <p>
              <strong>Information collected automatically.</strong> When you browse our website, we may collect
              technical information such as your IP address, browser type, device type, pages visited and the time
              spent on each page.
            </p>

            <h2 id="use">3. How we use your information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to your enquiries and send you quotes or proposals</li>
              <li>Plan, deliver and support the projects you hire us for</li>
              <li>Send invoices and manage payments</li>
              <li>Improve our website, content and services</li>
              <li>Meet our legal, tax and accounting obligations</li>
            </ul>
            <p>
              We will only send you marketing emails if you have agreed to receive them, and you can unsubscribe at any
              time.
            </p>

            <h2 id="sharing">4. Sharing your information</h2>
            <p>
              <strong>We do not sell your personal information.</strong> We only share it with trusted third parties
              when necessary to run our business, such as:
            </p>
            <ul>
              <li>Hosting, email and cloud storage providers</li>
              <li>Payment processors and accounting software</li>
              <li>Project management and communication tools used during your project</li>
              <li>Professional advisers, or authorities where required by law</li>
            </ul>
            <p>These providers may only use your information to perform services on our behalf.</p>

            <h2 id="cookies">5. Cookies &amp; analytics</h2>
            <p>
              Our website may use cookies and similar technologies to keep the site working properly and to understand
              how visitors use it. Analytics data is collected in aggregate and is not used to identify you personally.
              You can block or delete cookies through your browser settings at any time, though some parts of the site
              may not work as intended.
            </p>

            <h2 id="retention">6. Data retention</h2>
            <p>
              We keep personal information only for as long as needed for the purposes described in this policy.
              Enquiries that do not lead to a project are deleted within 24 months. Client and billing records are kept
              for as long as required by tax and accounting laws.
            </p>

            <h2 id="security">7. Data security</h2>
            <p>
              We use appropriate technical and organisational measures to protect your information, including encrypted
              connections (HTTPS), access controls and secure, reputable service providers. No method of transmission or
              storage is completely secure, but we work hard to protect your data.
            </p>

            <h2 id="rights">8. Your rights</h2>
            <p>Depending on where you live, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Ask us to correct inaccurate or incomplete information</li>
              <li>Ask us to delete your information</li>
              <li>Object to or restrict how we use your information</li>
              <li>Withdraw your consent to marketing at any time</li>
            </ul>
            <p>To exercise any of these rights, email us. We will respond within 30 days.</p>

            <h2 id="client-data">9. Client project data</h2>
            <p>
              While building or maintaining a website or application, we may have access to data belonging to you or
              your customers. We treat that data as confidential, use it only to deliver the agreed work and never share
              it with anyone outside the project. On request, we will delete or return it when the project ends.
            </p>

            <h2 id="changes">10. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. When we do, we will change the &ldquo;Last updated&rdquo;
              date at the top of this page. We encourage you to review it periodically.
            </p>

            <h2 id="contact">11. Contact us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-brand-600 hover:text-brand-700">
                {site.email}
              </a>{" "}
              or use our{" "}
              <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">
                contact form
              </Link>
              .
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
