"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon } from "./Icons";

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { firstName: "", lastName: "", email: "", phone: "", message: "" };

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (!v.firstName.trim()) e.firstName = "Please enter your first name.";
  if (!v.lastName.trim()) e.lastName = "Please enter your last name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Please enter a valid email address.";
  if (!v.phone.trim()) e.phone = "Please enter your phone number.";
  else if (!/^[+()\-\s\d]{7,20}$/.test(v.phone)) e.phone = "Please enter a valid phone number.";
  if (v.message.trim().length < 10) e.message = "Please tell us a little more (at least 10 characters).";
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckIcon className="h-8 w-8" strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 text-2xl font-bold">Thanks, message received!</h3>
        <p className="mt-3 max-w-sm">
          We&apos;ll review your details and get back to you within one business day.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-secondary mt-8">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="First name" error={errors.firstName} htmlFor="firstName" required>
        <input
          id="firstName"
          name="firstName"
          autoComplete="given-name"
          className="input"
          placeholder="Jane"
          value={values.firstName}
          onChange={update("firstName")}
          aria-invalid={!!errors.firstName}
        />
      </Field>
      <Field label="Last name" error={errors.lastName} htmlFor="lastName" required>
        <input
          id="lastName"
          name="lastName"
          autoComplete="family-name"
          className="input"
          placeholder="Doe"
          value={values.lastName}
          onChange={update("lastName")}
          aria-invalid={!!errors.lastName}
        />
      </Field>
      <Field label="Email" error={errors.email} htmlFor="email" required>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="input"
          placeholder="jane@company.com"
          value={values.email}
          onChange={update("email")}
          aria-invalid={!!errors.email}
        />
      </Field>
      <Field label="Phone" error={errors.phone} htmlFor="phone" required>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="input"
          placeholder="+1 (555) 000-0000"
          value={values.phone}
          onChange={update("phone")}
          aria-invalid={!!errors.phone}
        />
      </Field>
      <div className="sm:col-span-2">
        <Field label="Message" error={errors.message} htmlFor="message" required>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="input resize-none"
            placeholder="Tell us about your project, goals, timeline and budget..."
            value={values.message}
            onChange={update("message")}
            aria-invalid={!!errors.message}
          />
        </Field>
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          We&apos;ll never share your details. See our{" "}
          <Link href="/privacy-policy" className="font-medium text-brand-600 hover:text-brand-700">
            Privacy Policy
          </Link>
          .
        </p>
        <button type="submit" disabled={status === "sending"} className="btn-primary px-7 disabled:opacity-60">
          {status === "sending" ? "Sending..." : "Send message"}
          {status !== "sending" && <ArrowRightIcon className="h-4 w-4" />}
        </button>
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700 sm:col-span-2" role="alert">
          Something went wrong sending your message. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-brand-600">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-rose-600">{error}</p>}
    </div>
  );
}
