"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { hireItems } from "@/data/hire-items";
import { trackGenerateLead } from "@/lib/analytics";

const EVENT_TYPES = [
  { id: "wedding", label: "Wedding" },
  { id: "birthday", label: "Birthday" },
  { id: "christening", label: "Christening" },
  { id: "baby-shower", label: "Baby Shower" },
  { id: "engagement", label: "Engagement" },
  { id: "corporate", label: "Corporate" },
  { id: "other", label: "Other" },
];

interface FormData {
  interestedItem: string;
  eventType: string;
  date: string;
  venue: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
}

const INITIAL_FORM: FormData = {
  interestedItem: "",
  eventType: "",
  date: "",
  venue: "",
  name: "",
  email: "",
  phone: "",
  message: "",
  honeypot: "",
};

export default function QuotePage() {
  return (
    <Suspense>
      <QuoteForm />
    </Suspense>
  );
}

function QuoteForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const itemSlug = searchParams.get("item");
    if (itemSlug) {
      const item = hireItems.find((i) => i.slug === itemSlug);
      if (item) {
        setForm((prev) => ({ ...prev, interestedItem: item.name }));
      } else {
        setForm((prev) => ({
          ...prev,
          interestedItem: itemSlug.replace(/-/g, " "),
        }));
      }
    }
  }, [searchParams]);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function canSubmit() {
    return form.name !== "" && form.email !== "" && form.eventType !== "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.honeypot) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      trackGenerateLead(form.eventType);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sage/10 text-4xl">
            &#10003;
          </div>
          <h1 className="mb-3 font-heading text-3xl">Enquiry Sent!</h1>
          <p className="mb-2 text-charcoal/60">
            Thanks <strong>{form.name}</strong>, we&apos;ve received your
            enquiry
            {form.interestedItem && (
              <>
                {" "}
                about <strong>{form.interestedItem}</strong>
              </>
            )}
            .
          </p>
          <p className="mb-8 text-charcoal/60">
            We&apos;ll be in touch within the hour.
          </p>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal px-4 py-16 text-center sm:px-6 lg:px-10">
        <span className="mb-2 block font-script text-xl text-sage-light">
          we&apos;d love to hear from you
        </span>
        <h1 className="mx-auto mb-4 max-w-3xl font-heading text-4xl font-bold text-white sm:text-5xl">
          Enquire Now
        </h1>
        <p className="mx-auto max-w-xl text-base text-white/70">
          Tell us about your event and we&apos;ll put together a personalised
          quote. We typically respond within the hour.
        </p>
      </section>

      {/* Form */}
      <section className="bg-warm-white px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Item of interest */}
            {form.interestedItem && (
              <div className="rounded-lg border border-sage/20 bg-sage/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-sage-dark">
                  Enquiring about
                </p>
                <p className="mt-1 font-heading text-lg capitalize">
                  {form.interestedItem}
                </p>
              </div>
            )}

            {/* Event Type */}
            <fieldset>
              <legend className="mb-2 block text-sm font-semibold">
                Event Type <span className="text-red-400">*</span>
              </legend>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                {EVENT_TYPES.map((et) => (
                  <button
                    key={et.id}
                    type="button"
                    onClick={() => update("eventType", et.label)}
                    className={`rounded-lg border-2 px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage ${
                      form.eventType === et.label
                        ? "border-sage bg-sage/5 text-sage-dark"
                        : "border-black/5 hover:border-sage/30"
                    }`}
                  >
                    {et.label}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Event Date */}
            <div>
              <label htmlFor="quote-date" className="mb-1.5 block text-sm font-semibold">
                Event Date
              </label>
              <input
                id="quote-date"
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage"
              />
            </div>

            {/* Venue */}
            <div>
              <label htmlFor="quote-venue" className="mb-1.5 block text-sm font-semibold">
                Venue / Location (optional)
              </label>
              <input
                id="quote-venue"
                type="text"
                name="venue"
                value={form.venue}
                onChange={(e) => update("venue", e.target.value)}
                placeholder="e.g. Brighton Savoy, backyard in Oakleigh\u2026"
                autoComplete="off"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage"
              />
            </div>

            {/* Name */}
            <div>
              <label htmlFor="quote-name" className="mb-1.5 block text-sm font-semibold">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                id="quote-name"
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                autoComplete="name"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="quote-email" className="mb-1.5 block text-sm font-semibold">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="quote-email"
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                spellCheck={false}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="quote-phone" className="mb-1.5 block text-sm font-semibold">
                Phone (optional)
              </label>
              <input
                id="quote-phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="04XX XXX XXX"
                autoComplete="tel"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="quote-message" className="mb-1.5 block text-sm font-semibold">
                Message (optional)
              </label>
              <textarea
                id="quote-message"
                name="message"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={4}
                placeholder="Tell us about your vision — theme, colours, style, venue\u2026"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage"
              />
            </div>

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={form.honeypot}
              onChange={(e) => update("honeypot", e.target.value)}
              className="absolute -left-[9999px] opacity-0"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Error */}
            {error && (
              <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!canSubmit() || submitting}
              className="btn-primary w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-40"
            >
              {submitting ? "Sending\u2026" : "Send Enquiry"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
