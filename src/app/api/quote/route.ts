import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || "");
}


function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface QuoteItem {
  name: string;
  price: string;
}

interface QuoteBody {
  eventType: string;
  date: string;
  guestCount: string;
  venue: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
  items: QuoteItem[];
}

export async function POST(request: Request) {
  try {
    const body: QuoteBody = await request.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!body.name || !body.email || !body.eventType || !body.date || !body.guestCount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Build cart items HTML
    const itemsHtml = body.items.length > 0
      ? `<h3 style="margin-top:24px;color:#1C1A17;">Items Requested</h3>
         <table style="width:100%;border-collapse:collapse;margin-top:8px;">
           <thead>
             <tr style="background:#F5F7F2;">
               <th style="text-align:left;padding:8px 12px;font-size:13px;">Item</th>
               <th style="text-align:left;padding:8px 12px;font-size:13px;">Price</th>
             </tr>
           </thead>
           <tbody>
             ${body.items.map((item) => `
               <tr style="border-bottom:1px solid #eee;">
                 <td style="padding:8px 12px;font-size:14px;">${item.name}</td>
                 <td style="padding:8px 12px;font-size:14px;color:#6C7E5A;">${item.price}</td>
               </tr>
             `).join("")}
           </tbody>
         </table>`
      : "<p style='color:#999;font-size:14px;'>No specific items selected — general enquiry.</p>";

    // Send owner notification email
    const ownerEmail = process.env.OWNER_EMAIL || "";
    if (ownerEmail && process.env.RESEND_API_KEY) {
      const resend = getResend();
      await resend.emails.send({
        from: "IDO Events <quotes@updates.idoevents.com.au>",
        to: ownerEmail,
        subject: `New Quote Request — ${body.eventType} on ${body.date}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#8AA275;padding:24px;text-align:center;">
              <h1 style="color:#fff;margin:0;font-size:24px;">New Quote Request</h1>
            </div>
            <div style="padding:24px;background:#fff;">
              <h2 style="color:#1C1A17;margin-top:0;">Event Details</h2>
              <table style="width:100%;font-size:14px;">
                <tr><td style="padding:6px 0;color:#666;width:140px;">Event Type</td><td style="padding:6px 0;font-weight:600;">${body.eventType}</td></tr>
                <tr><td style="padding:6px 0;color:#666;">Date</td><td style="padding:6px 0;font-weight:600;">${body.date}</td></tr>
                <tr><td style="padding:6px 0;color:#666;">Guests</td><td style="padding:6px 0;font-weight:600;">${body.guestCount}</td></tr>
                <tr><td style="padding:6px 0;color:#666;">Venue/Suburb</td><td style="padding:6px 0;font-weight:600;">${body.venue || "Not specified"}</td></tr>
              </table>

              <h2 style="color:#1C1A17;margin-top:24px;">Contact</h2>
              <table style="width:100%;font-size:14px;">
                <tr><td style="padding:6px 0;color:#666;width:140px;">Name</td><td style="padding:6px 0;font-weight:600;">${body.name}</td></tr>
                <tr><td style="padding:6px 0;color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${body.email}" style="color:#8AA275;">${body.email}</a></td></tr>
                <tr><td style="padding:6px 0;color:#666;">Phone</td><td style="padding:6px 0;">${body.phone || "Not provided"}</td></tr>
              </table>

              ${body.message ? `<h3 style="margin-top:24px;color:#1C1A17;">Message</h3><p style="font-size:14px;background:#F5F7F2;padding:12px;border-radius:8px;">${body.message}</p>` : ""}

              ${itemsHtml}
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
                We've received your enquiry for your <strong>${body.eventType}</strong> on <strong>${body.date}</strong>.
                Our team is already looking into the best options for you.
              </p>
              <p style="font-size:14px;color:#666;line-height:1.6;">
                <strong>We'll be in touch within the hour.</strong> If you need anything urgent,
                feel free to call us or message us on WhatsApp.
              </p>
              <div style="margin:24px 0;text-align:center;">
                <a href="https://wa.me/61400000000" style="display:inline-block;background:#25D366;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;">
                  Message us on WhatsApp
                </a>
              </div>
              ${body.items.length > 0 ? `
                <p style="font-size:14px;color:#666;">Items you're interested in:</p>
                <ul style="font-size:14px;color:#1C1A17;">
                  ${body.items.map((item) => `<li style="padding:4px 0;">${item.name} — ${item.price}</li>`).join("")}
                </ul>
              ` : ""}
            </div>
            <div style="background:#F5F7F2;padding:16px;text-align:center;font-size:12px;color:#999;">
              IDO Events — Melbourne's Event Styling & Prop Hire Specialists
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json({ error: "Failed to send quote request" }, { status: 500 });
  }
}
