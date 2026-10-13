import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Returns & Refunds Policy",
  description: "BrandThink's returns, cancellations and refunds policy for web design, development and maintenance services.",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "deposits", label: "Deposits & project payments" },
  { id: "cancellations", label: "Project cancellations" },
  { id: "revisions", label: "Revisions & satisfaction" },
  { id: "maintenance", label: "Maintenance plans" },
  { id: "non-refundable", label: "Non-refundable items" },
  { id: "process", label: "How to request a refund" },
  { id: "contact", label: "Contact us" },
];

export default function ReturnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Returns & Refunds Policy"
        subtitle="We want every client to be confident working with us. This policy explains how cancellations, returns and refunds work for our digital services."
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
              BrandThink provides custom digital services including website design, website development, web
              application development and website maintenance. Because our work is custom-made for each client and
              cannot be &ldquo;returned&rdquo; in the way a physical product can, this policy explains when and how
              refunds are available at each stage of a project.
            </p>
            <p>
              Where a signed proposal or service agreement includes different terms, the terms of that agreement take
              precedence over this policy.
            </p>

            <h2 id="deposits">2. Deposits &amp; project payments</h2>
            <p>Most projects are billed in milestones:</p>
            <ul>
              <li>
                <strong>Project deposit (typically 40–50%)</strong> is due before work begins and secures your place in
                our schedule.
              </li>
              <li>
                <strong>Milestone payments</strong> are due on approval of agreed stages (for example, design sign-off).
              </li>
              <li>
                <strong>Final payment</strong> is due before the website or application is launched or transferred to
                your hosting.
              </li>
            </ul>

            <h2 id="cancellations">3. Project cancellations</h2>
            <p>You may cancel a project at any time by notifying us in writing. Refunds are calculated as follows:</p>
            <ul>
              <li>
                <strong>Within 7 days of paying the deposit and before work has started:</strong> full refund of the
                deposit.
              </li>
              <li>
                <strong>After work has started:</strong> the deposit is refunded minus the cost of work completed to
                date, calculated at our standard hourly rate and supported by a time report.
              </li>
              <li>
                <strong>After a milestone has been approved:</strong> payments for approved milestones are
                non-refundable, as that work has been delivered and accepted.
              </li>
            </ul>
            <p>
              On cancellation, you will receive all completed work (designs, code and assets) that has been paid for.
            </p>

            <h2 id="revisions">4. Revisions &amp; satisfaction</h2>
            <p>
              Your satisfaction matters to us. Each project includes a set number of revision rounds as outlined in your
              proposal. If a deliverable does not meet the agreed specification, we will revise it at no extra cost
              until it does. Refunds are not issued for subjective preferences after a stage has been approved, but we
              will always work with you to find a fair solution.
            </p>
            <p>
              If we are unable to deliver the agreed scope due to reasons within our control, you will be entitled to a
              refund for the undelivered portion of the project.
            </p>

            <h2 id="maintenance">5. Maintenance plans</h2>
            <ul>
              <li>Maintenance plans are billed monthly or annually in advance and can be cancelled at any time.</li>
              <li>
                <strong>Monthly plans:</strong> cancellation takes effect at the end of the current billing period. No
                partial-month refunds are issued.
              </li>
              <li>
                <strong>Annual plans:</strong> cancelled within the first 14 days receive a full refund. After 14 days,
                unused full months are refunded on a pro-rata basis, minus any discount applied for annual billing.
              </li>
              <li>Unused monthly support hours do not roll over and are non-refundable.</li>
            </ul>

            <h2 id="non-refundable">6. Non-refundable items</h2>
            <p>The following are not eligible for a refund:</p>
            <ul>
              <li>Third-party costs paid on your behalf, such as domain names, hosting, premium plugins, fonts or stock imagery.</li>
              <li>Work and milestones that have been approved by you in writing (including by email).</li>
              <li>Projects that have been launched or transferred to your hosting environment.</li>
              <li>Rush or expedited delivery fees once the expedited work has begun.</li>
            </ul>

            <h2 id="process">7. How to request a refund</h2>
            <p>To request a cancellation or refund, please email us with:</p>
            <ul>
              <li>Your full name and company name</li>
              <li>Your project name or invoice number</li>
              <li>The reason for your request</li>
            </ul>
            <p>
              We will acknowledge your request within 2 business days. Approved refunds are processed within{" "}
              <strong>7–10 business days</strong> to the original payment method. Depending on your bank or card
              provider, it may take a few additional days for the funds to appear.
            </p>

            <h2 id="contact">8. Contact us</h2>
            <p>
              If you have any questions about this policy, please contact us at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-brand-600 hover:text-brand-700">
                {site.email}
              </a>{" "}
              or use our{" "}
              <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">
                contact form
              </Link>
              . We&apos;re always happy to talk things through.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
