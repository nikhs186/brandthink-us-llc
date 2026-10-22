import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions that apply to BrandThink's website and web design, development and maintenance services.",
};

const sections = [
  { id: "acceptance", label: "Acceptance of terms" },
  { id: "services", label: "Our services" },
  { id: "proposals", label: "Proposals & scope" },
  { id: "payments", label: "Fees & payments" },
  { id: "client", label: "Client responsibilities" },
  { id: "revisions", label: "Revisions & approvals" },
  { id: "ip", label: "Intellectual property" },
  { id: "third-party", label: "Third-party services" },
  { id: "maintenance", label: "Maintenance & support" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "liability", label: "Limitation of liability" },
  { id: "termination", label: "Termination" },
  { id: "website-use", label: "Use of this website" },
  { id: "law", label: "Governing law" },
  { id: "changes", label: "Changes to these terms" },
  { id: "contact", label: "Contact us" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="These terms explain how we work together. Please read them carefully before using our website or engaging our services."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav className="sticky top-28 space-y-1 text-sm" aria-label="Terms sections">
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
            <p className="text-sm text-slate-500">Last updated: October 22, 2026</p>

            <h2 id="acceptance">1. Acceptance of terms</h2>
            <p>
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) apply to your use of the BrandThink website and to all
              services provided by BrandThink (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). By using our
              website, accepting a proposal or paying an invoice, you (&ldquo;the Client&rdquo;) agree to these Terms.
            </p>
            <p>
              If a signed proposal or service agreement contains terms that differ from these, the signed agreement
              takes precedence.
            </p>

            <h2 id="services">2. Our services</h2>
            <p>BrandThink provides the following services:</p>
            <ul>
              <li>Website design</li>
              <li>Website development</li>
              <li>Web application development</li>
              <li>Website maintenance and support</li>
            </ul>
            <p>The exact services for each project are described in the proposal you accept.</p>

            <h2 id="proposals">3. Proposals &amp; scope of work</h2>
            <p>
              Before work begins, we send a written proposal describing the scope, deliverables, timeline and fees.
              Proposals are valid for 30 days from the date they are issued.
            </p>
            <p>
              Any work outside the agreed scope, such as new pages, features or integrations, is treated as a change
              request. We will provide a separate quote and timeline for approval before starting additional work.
            </p>

            <h2 id="payments">4. Fees &amp; payments</h2>
            <ul>
              <li>
                <strong>Deposit:</strong> a deposit (typically 40–50% of the project fee) is required before work
                begins.
              </li>
              <li>
                <strong>Milestones:</strong> remaining payments are due on the milestones set out in your proposal.
              </li>
              <li>
                <strong>Final payment:</strong> the balance must be paid in full before the website or application is
                launched or handed over.
              </li>
              <li>
                <strong>Due date:</strong> invoices are payable within 7 days of issue unless stated otherwise.
              </li>
              <li>
                <strong>Late payments:</strong> we may pause work on projects with overdue invoices until payment is
                received. Timelines will be adjusted accordingly.
              </li>
              <li>All fees are exclusive of applicable taxes, which will be added to invoices where required.</li>
            </ul>
            <p>
              Refunds and cancellations are covered by our{" "}
              <Link href="/returns-and-refunds" className="font-semibold text-brand-600 hover:text-brand-700">
                Returns &amp; Refunds Policy
              </Link>
              .
            </p>

            <h2 id="client">5. Client responsibilities</h2>
            <p>To keep your project on schedule, you agree to:</p>
            <ul>
              <li>Provide content, images, logins and feedback within the agreed timeframes</li>
              <li>Make sure you own or have permission to use all content and materials you supply</li>
              <li>Nominate one point of contact who can approve work on your behalf</li>
              <li>Review deliverables carefully and report any issues promptly</li>
            </ul>
            <p>
              Delays in providing content or feedback may shift the project timeline. If a project is on hold for more
              than 30 days because we are waiting on the Client, we may treat it as complete and invoice for the work
              done to date.
            </p>

            <h2 id="revisions">6. Revisions &amp; approvals</h2>
            <p>
              Each project includes the number of revision rounds stated in your proposal. Further revisions are billed
              at our standard hourly rate. Once you approve a stage in writing (including by email), further changes to
              that stage are treated as change requests.
            </p>

            <h2 id="ip">7. Intellectual property</h2>
            <ul>
              <li>
                <strong>Ownership:</strong> once all fees are paid in full, you own the final designs, code and content
                created specifically for your project.
              </li>
              <li>
                <strong>Before full payment:</strong> all work remains the property of BrandThink until the final
                invoice is paid.
              </li>
              <li>
                <strong>Our tools:</strong> we keep ownership of our pre-existing tools, code libraries and know-how,
                and grant you a permanent licence to use them as part of your project.
              </li>
              <li>
                <strong>Portfolio:</strong> unless you ask us not to in writing, we may show the finished project in our
                portfolio and marketing materials.
              </li>
            </ul>

            <h2 id="third-party">8. Third-party services</h2>
            <p>
              Projects may rely on third-party services such as hosting, domains, plugins, fonts, payment gateways or
              APIs. These are subject to their providers&apos; own terms and pricing. We are not responsible for
              outages, price changes or policy changes made by third-party providers.
            </p>

            <h2 id="maintenance">9. Maintenance &amp; support</h2>
            <p>
              After launch, we fix any bugs in our own work free of charge for 30 days. Ongoing updates, monitoring and
              support are available through our website maintenance plans, which are billed separately and can be
              cancelled at any time in line with our Returns &amp; Refunds Policy.
            </p>

            <h2 id="confidentiality">10. Confidentiality</h2>
            <p>
              Both parties agree to keep each other&apos;s confidential information private and to use it only for the
              purposes of the project. This includes business plans, login details, customer data and unreleased
              products. How we handle personal data is described in our{" "}
              <Link href="/privacy-policy" className="font-semibold text-brand-600 hover:text-brand-700">
                Privacy Policy
              </Link>
              .
            </p>

            <h2 id="liability">11. Limitation of liability</h2>
            <p>
              We take great care in everything we build, but we cannot guarantee that a website or application will be
              free of errors or uninterrupted at all times. To the fullest extent permitted by law:
            </p>
            <ul>
              <li>
                We are not liable for indirect or consequential losses, such as lost profits, lost data or loss of
                business opportunities.
              </li>
              <li>Our total liability for any claim is limited to the fees you paid for the project concerned.</li>
              <li>We do not guarantee specific search rankings, traffic levels or sales results.</li>
            </ul>

            <h2 id="termination">12. Termination</h2>
            <p>
              Either party may end a project by giving written notice. You will pay for all work completed up to the
              termination date, and we will hand over any paid-for work. We may also end a project immediately if
              these Terms are seriously breached, for example through non-payment or abusive conduct.
            </p>

            <h2 id="website-use">13. Use of this website</h2>
            <p>
              The content on this website, including text, graphics, logos and designs, belongs to BrandThink and may
              not be copied or reused without our written permission. You agree not to misuse the website, attempt to
              gain unauthorised access to it or use it for any unlawful purpose.
            </p>

            <h2 id="law">14. Governing law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes will first be addressed through good-faith
              discussion and, if unresolved, will be subject to the jurisdiction of the courts of India.
            </p>

            <h2 id="changes">15. Changes to these terms</h2>
            <p>
              We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top of this page
              shows when they were last changed. Changes do not affect projects that are already under a signed
              agreement.
            </p>

            <h2 id="contact">16. Contact us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
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
