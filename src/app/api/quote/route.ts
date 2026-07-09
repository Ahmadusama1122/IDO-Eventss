import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || "");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    const body: EnquiryBody = await request.json();

    // Honeypot check
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

    const itemLine = body.interestedItem
      ? `<tr><td style="padding:6px 0;color:#666;width:140px;">Interested In</td><td style="padding:6px 0;font-weight:600;">${body.interestedItem}</td></tr>`
      : "";
    const venueLine = body.venue
      ? `<tr><td style="padding:6px 0;color:#666;width:140px;">Venue / Location</td><td style="padding:6px 0;font-weight:600;">${body.venue}</td></tr>`
      : "";

    // Send owner notification email
    const ownerEmail = process.env.OWNER_EMAIL || "";
    if (ownerEmail && process.env.RESEND_API_KEY) {
      const resend = getResend();
      const subjectDate = body.date ? ` on ${body.date}` : "";
      await resend.emails.send({
        from: "IDO Events <quotes@updates.idoevents.com.au>",
        to: ownerEmail,
        subject: `New Enquiry — ${body.eventType}${subjectDate}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#8AA275;padding:24px;text-align:center;">
              <h1 style="color:#fff;margin:0;font-size:24px;">New Enquiry</h1>
            </div>
            <div style="padding:24px;background:#fff;">
              <h2 style="color:#1C1A17;margin-top:0;">Event Details</h2>
              <table style="width:100%;font-size:14px;">
                <tr><td style="padding:6px 0;color:#666;width:140px;">Event Type</td><td style="padding:6px 0;font-weight:600;">${body.eventType}</td></tr>
                <tr><td style="padding:6px 0;color:#666;">Date</td><td style="padding:6px 0;font-weight:600;">${body.date || "Not specified"}</td></tr>
                ${venueLine}
                ${itemLine}
              </table>

              <h2 style="color:#1C1A17;margin-top:24px;">Contact</h2>
              <table style="width:100%;font-size:14px;">
                <tr><td style="padding:6px 0;color:#666;width:140px;">Name</td><td style="padding:6px 0;font-weight:600;">${body.name}</td></tr>
                <tr><td style="padding:6px 0;color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${body.email}" style="color:#8AA275;">${body.email}</a></td></tr>
                <tr><td style="padding:6px 0;color:#666;">Phone</td><td style="padding:6px 0;">${body.phone || "Not provided"}</td></tr>
              </table>

              ${body.message ? `<h3 style="margin-top:24px;color:#1C1A17;">Message</h3><p style="font-size:14px;background:#F5F7F2;padding:12px;border-radius:8px;">${body.message}</p>` : ""}
            </div>
            <div style="background:#F5F7F2;padding:16px;text-align:center;font-size:12px;color:#999;">
              IDO Events — Melbourne's Event Styling & Prop Hire Specialists
            </div>
          </div>
        `,
      });

      // Send customer auto-reply
      await resend.emails.send({
        from: "IDO Events <hello@updates.idoevents.com.au>",
        to: body.email,
        subject: `Thanks ${body.name}! We've received your enquiry`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#8AA275;padding:24px;text-align:center;">
              <h1 style="color:#fff;margin:0;font-size:24px;">Thanks for your enquiry!</h1>
            </div>
            <div style="padding:24px;background:#fff;">
              <p style="font-size:16px;color:#1C1A17;">Hi ${body.name},</p>
              <p style="font-size:14px;color:#666;line-height:1.6;">
                We've received your enquiry for your <strong>${body.eventType}</strong>${body.date ? ` on <strong>${body.date}</strong>` : ""}.
                ${body.interestedItem ? `You're interested in our <strong>${body.interestedItem}</strong>.` : ""}
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
              IDO Events — Melbourne's Event Styling & Prop Hire Specialists
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
