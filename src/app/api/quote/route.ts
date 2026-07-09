import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || "");
}

/* ── Security: HTML escape to prevent XSS in email templates ── */
function esc(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/* ── Security: strip newlines to prevent email header injection ── */
function sanitizeHeaderValue(text: string): string {
  return text.replace(/[\r\n]/g, "").trim();
}

function isValidEmail(email: string): boolean {
  if (email.length > 254) return false;
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(email);
}

/* ── Security: in-memory rate limiter ── */
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return true;
  }
  return false;
}

/* ── Security: field length limits ── */
function truncate(text: string, max: number): string {
  return text.length > max ? text.slice(0, max) : text;
}

interface EnquiryBody {
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

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body: EnquiryBody = await request.json();

    // Honeypot check — silently succeed for bots
    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!body.name || !body.email || !body.eventType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Sanitize and truncate all user input
    const safe = {
      name: esc(truncate(body.name, 100)),
      email: esc(truncate(body.email, 254)),
      emailRaw: sanitizeHeaderValue(truncate(body.email, 254)),
      eventType: esc(truncate(body.eventType, 100)),
      date: esc(sanitizeHeaderValue(truncate(body.date || "", 50))),
      venue: esc(truncate(body.venue || "", 200)),
      phone: esc(truncate(body.phone || "", 30)),
      message: esc(truncate(body.message || "", 2000)),
      interestedItem: esc(truncate(body.interestedItem || "", 200)),
    };

    const itemLine = safe.interestedItem
      ? `<tr><td style="padding:6px 0;color:#666;width:140px;">Interested In</td><td style="padding:6px 0;font-weight:600;">${safe.interestedItem}</td></tr>`
      : "";
    const venueLine = safe.venue
      ? `<tr><td style="padding:6px 0;color:#666;width:140px;">Venue / Location</td><td style="padding:6px 0;font-weight:600;">${safe.venue}</td></tr>`
      : "";

    // Send owner notification email
    const ownerEmail = process.env.OWNER_EMAIL || "";
    if (ownerEmail && process.env.RESEND_API_KEY) {
      const resend = getResend();
      const subjectDate = safe.date ? ` on ${safe.date}` : "";
      await resend.emails.send({
        from: "IDO Events <quotes@updates.idoevents.com.au>",
        to: ownerEmail,
        subject: sanitizeHeaderValue(`New Enquiry — ${body.eventType}${subjectDate}`),
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#8AA275;padding:24px;text-align:center;">
              <h1 style="color:#fff;margin:0;font-size:24px;">New Enquiry</h1>
            </div>
            <div style="padding:24px;background:#fff;">
              <h2 style="color:#1C1A17;margin-top:0;">Event Details</h2>
              <table style="width:100%;font-size:14px;">
                <tr><td style="padding:6px 0;color:#666;width:140px;">Event Type</td><td style="padding:6px 0;font-weight:600;">${safe.eventType}</td></tr>
                <tr><td style="padding:6px 0;color:#666;">Date</td><td style="padding:6px 0;font-weight:600;">${safe.date || "Not specified"}</td></tr>
                ${venueLine}
                ${itemLine}
              </table>

              <h2 style="color:#1C1A17;margin-top:24px;">Contact</h2>
              <table style="width:100%;font-size:14px;">
                <tr><td style="padding:6px 0;color:#666;width:140px;">Name</td><td style="padding:6px 0;font-weight:600;">${safe.name}</td></tr>
                <tr><td style="padding:6px 0;color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${safe.email}" style="color:#8AA275;">${safe.email}</a></td></tr>
                <tr><td style="padding:6px 0;color:#666;">Phone</td><td style="padding:6px 0;">${safe.phone || "Not provided"}</td></tr>
              </table>

              ${safe.message ? `<h3 style="margin-top:24px;color:#1C1A17;">Message</h3><p style="font-size:14px;background:#F5F7F2;padding:12px;border-radius:8px;">${safe.message}</p>` : ""}
            </div>
            <div style="background:#F5F7F2;padding:16px;text-align:center;font-size:12px;color:#999;">
              IDO Events — Melbourne's Event Styling &amp; Prop Hire Specialists
            </div>
          </div>
        `,
      });

      // Send customer auto-reply
      await resend.emails.send({
        from: "IDO Events <hello@updates.idoevents.com.au>",
        to: safe.emailRaw,
        subject: sanitizeHeaderValue(`Thanks ${body.name}! We've received your enquiry`),
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#8AA275;padding:24px;text-align:center;">
              <h1 style="color:#fff;margin:0;font-size:24px;">Thanks for your enquiry!</h1>
            </div>
            <div style="padding:24px;background:#fff;">
              <p style="font-size:16px;color:#1C1A17;">Hi ${safe.name},</p>
              <p style="font-size:14px;color:#666;line-height:1.6;">
                We've received your enquiry for your <strong>${safe.eventType}</strong>${safe.date ? ` on <strong>${safe.date}</strong>` : ""}.
                ${safe.interestedItem ? `You're interested in our <strong>${safe.interestedItem}</strong>.` : ""}
                Our team is already looking into the best options for you.
              </p>
              <p style="font-size:14px;color:#666;line-height:1.6;">
                <strong>We'll be in touch within the hour.</strong> If you need anything urgent,
                feel free to call us or message us on WhatsApp.
              </p>
              <div style="margin:24px 0;text-align:center;">
                <a href="https://wa.me/61406179786" style="display:inline-block;background:#25D366;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;">
                  Message us on WhatsApp
                </a>
              </div>
            </div>
            <div style="background:#F5F7F2;padding:16px;text-align:center;font-size:12px;color:#999;">
              IDO Events — Melbourne's Event Styling &amp; Prop Hire Specialists
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send enquiry" },
      { status: 500 }
    );
  }
}
