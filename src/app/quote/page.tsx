"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const EVENT_TYPES = [
  { id: "wedding", label: "Wedding", icon: "💒" },
  { id: "birthday", label: "Birthday", icon: "🎂" },
  { id: "christening", label: "Christening", icon: "✝️" },
  { id: "baby-shower", label: "Baby Shower", icon: "👶" },
  { id: "engagement", label: "Engagement", icon: "💍" },
  { id: "corporate", label: "Corporate", icon: "🏢" },
  { id: "other", label: "Other", icon: "🎉" },
];

const GUEST_RANGES = [
  "Under 30",
  "30 – 50",
  "50 – 100",
  "100 – 200",
  "200+",
];

interface FormData {
  eventType: string;
  date: string;
  guestCount: string;
  venue: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
}

const INITIAL_FORM: FormData = {
  eventType: "",
  date: "",
  guestCount: "",
  venue: "",
  name: "",
  email: "",
  phone: "",
  message: "",
  honeypot: "",
};

export default function QuotePage() {
  const { items, removeItem, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function canAdvance() {
    if (step === 1) return form.eventType !== "";
    if (step === 2) return form.date !== "" && form.guestCount !== "";
    if (step === 3) return form.name !== "" && form.email !== "";
    return false;
  }

  async function handleSubmit() {
    if (form.honeypot) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          items: items.map((i) => ({ name: i.name, price: i.price })),
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      clearCart();
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
            ✓
          </div>
          <h1 className="mb-3 font-heading text-3xl">Quote Request Sent!</h1>
          <p className="mb-2 text-charcoal/60">
            Thanks <strong>{form.name}</strong>, we&apos;ve received your enquiry for your{" "}
            <strong>{form.eventType}</strong> on <strong>{form.date}</strong>.
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
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
      <h1 className="mb-2 font-heading text-3xl sm:text-4xl">Request a Quote</h1>
      <p className="mb-10 text-charcoal/60">
        Tell us about your event and we&apos;ll put together a personalised quote.
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Cart sidebar */}
        <div className="order-2 lg:order-1 lg:col-span-1">
          <div className="rounded-xl border border-black/5 bg-cream-light p-6">
            <h3 className="mb-4 font-heading text-xl">Your Items ({items.length})</h3>
            {items.length === 0 ? (
              <div className="text-center">
                <p className="mb-4 text-sm text-charcoal/50">No items added yet.</p>
                <Link href="/hire" className="text-sm font-semibold text-sage-dark hover:underline">
                  Browse Collection →
                </Link>
              </div>
            ) : (
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between rounded-lg bg-white p-3">
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-charcoal/50">{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-charcoal/40 hover:text-red-500"
                      aria-label={`Remove ${item.name}`}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Form wizard */}
        <div className="order-1 lg:order-2 lg:col-span-2">
          {/* Progress indicator */}
          <div className="mb-8 flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                    s === step
                      ? "bg-sage text-white"
                      : s < step
                        ? "bg-sage/20 text-sage-dark"
                        : "bg-black/5 text-charcoal/30"
                  }`}
                >
                  {s < step ? "✓" : s}
                </div>
                {s < 3 && <div className={`h-0.5 w-8 ${s < step ? "bg-sage/30" : "bg-black/5"}`} />}
              </div>
            ))}
            <span className="ml-2 text-sm text-charcoal/50">Step {step} of 3</span>
          </div>

          {/* Step 1: Event Type */}
          {step === 1 && (
            <div>
              <h2 className="mb-2 font-heading text-2xl">What type of event?</h2>
              <p className="mb-6 text-sm text-charcoal/50">Select the occasion you&apos;re planning.</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {EVENT_TYPES.map((et) => (
                  <button
                    key={et.id}
                    onClick={() => update("eventType", et.label)}
                    className={`flex flex-col items-center gap-2 rounded-xl border-2 p-5 transition-all ${
                      form.eventType === et.label
                        ? "border-sage bg-sage/5"
                        : "border-black/5 hover:border-sage/30"
                    }`}
                  >
                    <span className="text-3xl">{et.icon}</span>
                    <span className="text-sm font-semibold">{et.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Event Details */}
          {step === 2 && (
            <div>
              <h2 className="mb-2 font-heading text-2xl">Event Details</h2>
              <p className="mb-6 text-sm text-charcoal/50">Help us understand the scope of your event.</p>
              <div className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Event Date <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Estimated Guests <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                    {GUEST_RANGES.map((range) => (
                      <button
                        key={range}
                        onClick={() => update("guestCount", range)}
                        className={`rounded-lg border-2 px-3 py-2.5 text-sm font-medium transition-all ${
                          form.guestCount === range
                            ? "border-sage bg-sage/5 text-sage-dark"
                            : "border-black/5 hover:border-sage/30"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Venue / Suburb</label>
                  <input
                    type="text"
                    value={form.venue}
                    onChange={(e) => update("venue", e.target.value)}
                    placeholder="e.g. Brighton Savoy, Oakleigh"
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <div>
              <h2 className="mb-2 font-heading text-2xl">Your Details</h2>
              <p className="mb-6 text-sm text-charcoal/50">So we can send you your personalised quote.</p>
              <div className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Phone (optional)</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="04XX XXX XXX"
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Message (optional)</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={4}
                    placeholder="Tell us about your vision — theme, colours, style..."
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
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
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-4 rounded-lg bg-red-50 p-4 text-sm text-red-600">{error}</div>
          )}

          {/* Navigation buttons */}
          <div className="mt-8 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="text-sm font-semibold text-charcoal/60 hover:text-charcoal"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canAdvance()}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canAdvance() || submitting}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                {submitting ? "Sending..." : "Send Quote Request"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
