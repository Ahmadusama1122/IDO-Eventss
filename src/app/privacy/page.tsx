import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "IDO Events privacy policy. How we collect, use, and protect your personal information when you use our event styling and prop hire services in Melbourne.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream-light px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold text-charcoal sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-charcoal/50">
            Last updated: 1 June 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-10 text-charcoal/70 leading-relaxed [&_h2]:mb-4 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-charcoal [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-charcoal [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1.5">
            <div>
              <h2>Introduction</h2>
              <p>
                IDO Events (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed
                to protecting your privacy. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your personal information when you visit our
                website, use our services, or interact with us in any way.
              </p>
              <p>
                We operate in accordance with the Australian Privacy Principles (APPs)
                contained in the Privacy Act 1988 (Cth). By using our website or engaging
                our services, you consent to the practices described in this policy.
              </p>
            </div>

            <div>
              <h2>Information We Collect</h2>
              <h3>Information you provide to us</h3>
              <p>
                When you request a quote, make a booking, fill out a contact form, or
                communicate with us, we may collect the following personal information:
              </p>
              <ul>
                <li>Your name and contact details (email address, phone number)</li>
                <li>Event details including date, venue, type of event, and styling preferences</li>
                <li>Delivery address for prop hire and event setup</li>
                <li>Payment information (processed securely through our payment provider)</li>
                <li>Any photographs or images you share with us for styling reference</li>
                <li>Communications between you and our team, including emails and messages</li>
              </ul>

              <h3>Information collected automatically</h3>
              <p>
                When you visit our website, we may automatically collect certain information
                about your device and browsing activity, including:
              </p>
              <ul>
                <li>IP address and approximate geographic location</li>
                <li>Browser type, device type, and operating system</li>
                <li>Pages visited, time spent on pages, and navigation paths</li>
                <li>Referring website or search terms that led you to our site</li>
              </ul>
            </div>

            <div>
              <h2>How We Use Your Information</h2>
              <p>We use the personal information we collect for the following purposes:</p>
              <ul>
                <li>To provide, manage, and deliver our event styling and prop hire services</li>
                <li>To respond to your enquiries and provide quotes</li>
                <li>To process bookings and payments</li>
                <li>To coordinate delivery, setup, and pack-down logistics</li>
                <li>To communicate with you about your event, including confirmations and updates</li>
                <li>To improve our website, services, and customer experience</li>
                <li>To send you marketing communications (only with your consent, and you can opt out at any time)</li>
                <li>To comply with legal obligations and resolve disputes</li>
              </ul>
            </div>

            <div>
              <h2>Third-Party Services</h2>
              <p>
                We may share your personal information with trusted third parties who
                assist us in operating our business and delivering our services. These
                include:
              </p>
              <ul>
                <li>
                  <strong>Payment processors:</strong> To securely process your payments.
                  We do not store your full credit card details on our servers.
                </li>
                <li>
                  <strong>Email service providers:</strong> To send booking confirmations,
                  quotes, and communications.
                </li>
                <li>
                  <strong>Website analytics:</strong> We use analytics tools to understand
                  how visitors use our website and to improve our services.
                </li>
                <li>
                  <strong>Social media platforms:</strong> If you interact with us through
                  social media, those platforms may collect information in accordance
                  with their own privacy policies.
                </li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to third parties
                for marketing purposes.
              </p>
            </div>

            <div>
              <h2>Cookies and Tracking Technologies</h2>
              <p>
                Our website uses cookies and similar tracking technologies to enhance your
                browsing experience. Cookies are small text files stored on your device
                that help us recognise you and remember your preferences.
              </p>
              <p>We use the following types of cookies:</p>
              <ul>
                <li>
                  <strong>Essential cookies:</strong> Required for the website to function
                  properly, including session management and security.
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how visitors
                  interact with our website so we can improve content and functionality.
                </li>
                <li>
                  <strong>Marketing cookies:</strong> Used to deliver relevant
                  advertisements and track the effectiveness of our marketing campaigns.
                </li>
              </ul>
              <p>
                You can control cookies through your browser settings. Disabling certain
                cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2>Your Rights</h2>
              <p>
                Under Australian privacy law, you have the following rights regarding
                your personal information:
              </p>
              <ul>
                <li>
                  <strong>Access:</strong> You can request access to the personal
                  information we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> You can request that we correct any
                  inaccurate or incomplete personal information.
                </li>
                <li>
                  <strong>Opt-out:</strong> You can opt out of receiving marketing
                  communications at any time by clicking the unsubscribe link in our
                  emails or contacting us directly.
                </li>
                <li>
                  <strong>Complaint:</strong> If you believe we have breached the
                  Australian Privacy Principles, you can lodge a complaint with us or
                  with the Office of the Australian Information Commissioner (OAIC).
                </li>
              </ul>
            </div>

            <div>
              <h2>Data Security</h2>
              <p>
                We take reasonable steps to protect your personal information from
                unauthorised access, modification, disclosure, or destruction. This
                includes using secure hosting, encrypted connections (SSL/TLS), and
                access controls within our team. However, no method of electronic
                transmission or storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </div>

            <div>
              <h2>Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfil
                the purposes for which it was collected, including to satisfy legal,
                accounting, or reporting requirements. Booking and event records are
                typically retained for seven years in accordance with Australian tax
                and business record-keeping requirements.
              </p>
            </div>

            <div>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes
                in our practices or applicable laws. Any changes will be posted on this
                page with an updated revision date. We encourage you to review this
                policy periodically.
              </p>
            </div>

            <div>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, want to access or
                correct your personal information, or wish to make a complaint, please
                contact us:
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:hello@idoevents.com.au"
                    className="text-sage hover:text-sage-dark"
                  >
                    hello@idoevents.com.au
                  </a>
                </li>
                <li>Location: Melbourne, VIC, Australia</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-xl bg-cream-light p-6 text-center">
            <p className="text-sm text-charcoal/60">
              Have questions about our privacy practices?
            </p>
            <Link href="/contact" className="mt-3 inline-block text-sm font-semibold text-sage hover:text-sage-dark">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
