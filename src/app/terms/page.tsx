import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "IDO Events terms and conditions for event styling and prop hire services in Melbourne. Covering bookings, payments, cancellations, delivery, and liability.",
};

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream-light px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold text-charcoal sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-charcoal/50">
            Last updated: 1 June 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-10 text-charcoal/70 leading-relaxed [&_h2]:mb-4 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-charcoal [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-charcoal [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1.5">
            <div>
              <h2>1. About These Terms</h2>
              <p>
                These Terms and Conditions (&quot;Terms&quot;) govern your use of the
                services provided by IDO Events (&quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;), including event styling, prop hire, delivery, setup, and
                pack-down services. By making a booking or engaging our services, you
                agree to be bound by these Terms.
              </p>
              <p>
                IDO Events is a Melbourne-based event styling and prop hire business
                operating across the greater Melbourne metropolitan area. We reserve the
                right to update these Terms at any time. The version in effect at the time
                of your booking will apply to your engagement.
              </p>
            </div>

            <div>
              <h2>2. Our Services</h2>
              <p>We provide the following services:</p>
              <ul>
                <li>Event styling and design consultation</li>
                <li>Prop hire including backdrops, draping, balloon installations, table settings, signage, and decorative items</li>
                <li>Delivery of hired items to your event venue</li>
                <li>Professional setup and installation of all styling elements</li>
                <li>Pack-down and collection of all hired items at the conclusion of your event</li>
              </ul>
              <p>
                The specific services, items, and pricing for your event will be outlined
                in your quote and confirmed upon booking. Any changes to the agreed scope
                of services must be communicated in writing and may be subject to
                additional charges.
              </p>
            </div>

            <div>
              <h2>3. Bookings and Confirmations</h2>
              <p>
                A booking is not confirmed until we have received your signed quote
                acceptance and the required deposit payment. We recommend booking as early
                as possible, particularly during peak event season (October through March),
                as popular dates and items may become unavailable.
              </p>
              <p>
                Upon confirmation, we will reserve the agreed items and date exclusively
                for your event. Any changes to your event date, venue, or styling
                requirements should be communicated to us as soon as possible. We will do
                our best to accommodate changes, but availability cannot be guaranteed
                for amended bookings.
              </p>
            </div>

            <div>
              <h2>4. Payments and Deposits</h2>
              <h3>Deposit</h3>
              <p>
                A non-refundable deposit of 30% of the total quoted amount is required to
                secure your booking. This deposit is payable upon acceptance of your quote
                and confirms the reservation of items and the event date.
              </p>

              <h3>Final Payment</h3>
              <p>
                The remaining balance is due no later than seven (7) days prior to your
                event date. If full payment has not been received by this deadline, we
                reserve the right to cancel the booking. In the case of bookings made
                within seven days of the event, full payment is required at the time of
                booking.
              </p>

              <h3>Payment Methods</h3>
              <p>
                We accept payment via bank transfer, credit card, and other methods as
                communicated at the time of booking. All prices are quoted in Australian
                dollars (AUD) and include GST where applicable.
              </p>

              <h3>Additional Charges</h3>
              <p>
                Any additions or changes to the original quote made after booking
                confirmation may incur additional charges. These will be communicated to
                you in writing and are payable prior to the event date.
              </p>
            </div>

            <div>
              <h2>5. Cancellation Policy</h2>
              <p>
                We understand that plans can change. Our cancellation policy is as follows:
              </p>
              <ul>
                <li>
                  <strong>More than 30 days before the event:</strong> You may cancel your
                  booking and receive a refund of the total amount paid, minus the
                  non-refundable deposit (30%).
                </li>
                <li>
                  <strong>15 to 30 days before the event:</strong> A cancellation fee of
                  50% of the total quoted amount applies.
                </li>
                <li>
                  <strong>Less than 15 days before the event:</strong> No refund is
                  available. The full quoted amount is payable.
                </li>
              </ul>
              <p>
                Cancellations must be submitted in writing via email to{" "}
                <a
                  href="mailto:hello@idoevents.com.au"
                  className="text-sage hover:text-sage-dark"
                >
                  hello@idoevents.com.au
                </a>
                . The cancellation date is determined by the date we receive your written
                notice.
              </p>
              <p>
                If we need to cancel a booking due to unforeseen circumstances (such as
                extreme weather events or circumstances beyond our control), we will offer
                you the option to reschedule or receive a full refund including the
                deposit.
              </p>
            </div>

            <div>
              <h2>6. Delivery and Setup</h2>
              <h3>Delivery Area</h3>
              <p>
                We deliver to venues across 30+ Melbourne suburbs. Delivery fees, if
                applicable, will be included in your quote and are based on the distance
                from our base to your event venue. Deliveries outside our standard service
                area may be available upon request and may incur additional fees.
              </p>

              <h3>Venue Access</h3>
              <p>
                You are responsible for ensuring that we have adequate access to the event
                venue for delivery, setup, and pack-down. This includes confirming venue
                access times, parking availability, loading dock access, and any venue-
                specific rules or restrictions. If venue access issues cause delays or
                prevent us from completing setup, additional charges may apply.
              </p>

              <h3>Setup and Pack-Down</h3>
              <p>
                Our service includes full setup and styling of all hired items prior to
                your event and pack-down and collection at the agreed time following your
                event. Setup and pack-down times will be confirmed with you in advance. If
                your event runs overtime and delays our pack-down, an additional fee may
                apply.
              </p>
            </div>

            <div>
              <h2>7. Care of Hired Items</h2>
              <p>
                All props and styling items remain the property of IDO Events. During the
                period of hire, you are responsible for the care and security of all items
                at your event venue. You agree to:
              </p>
              <ul>
                <li>Not remove items from the event venue</li>
                <li>Not modify, alter, paint, or attach anything to hired items</li>
                <li>Take reasonable care to prevent damage, theft, or loss</li>
                <li>Report any damage or issues to us immediately</li>
              </ul>
              <p>
                If hired items are damaged, lost, or stolen during your event, you will
                be liable for the repair or replacement cost. We will provide an itemised
                invoice for any such charges.
              </p>
            </div>

            <div>
              <h2>8. Liability</h2>
              <p>
                While we take every care in the delivery, setup, and styling of your
                event, IDO Events is not liable for:
              </p>
              <ul>
                <li>Damage to the event venue or third-party property caused by guests or attendees</li>
                <li>Injury to any person at the event</li>
                <li>Weather-related impacts on outdoor events, including damage to styling elements</li>
                <li>Changes in the appearance of items due to factors outside our control (such as extreme heat affecting balloon installations)</li>
                <li>Any indirect, consequential, or incidental losses arising from the use of our services</li>
              </ul>
              <p>
                Our total liability in connection with any booking is limited to the total
                amount paid for that booking. We recommend that you arrange appropriate
                event insurance for your celebration.
              </p>
            </div>

            <div>
              <h2>9. Photography and Content</h2>
              <p>
                We may photograph our styling work at your event for use in our portfolio,
                website, social media, and marketing materials. These photographs will
                focus on the styling and decor, not your guests. If you do not wish for
                your event to be photographed, please inform us in writing prior to your
                event date.
              </p>
              <p>
                Any photographs, testimonials, or reviews you share with us may be used
                in our marketing with your permission.
              </p>
            </div>

            <div>
              <h2>10. Force Majeure</h2>
              <p>
                We are not liable for any failure to perform our obligations where such
                failure results from circumstances beyond our reasonable control, including
                but not limited to natural disasters, extreme weather events, pandemics,
                government restrictions, road closures, or supplier failures. In such
                circumstances, we will work with you to find an alternative solution,
                reschedule your event, or provide a full refund.
              </p>
            </div>

            <div>
              <h2>11. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of
                the State of Victoria, Australia. Any disputes arising from these Terms
                or our services will be subject to the exclusive jurisdiction of the
                courts of Victoria.
              </p>
            </div>

            <div>
              <h2>12. Contact</h2>
              <p>
                If you have any questions about these Terms, please contact us:
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
              Ready to book? Questions about our terms?
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-4">
              <Link href="/quote" className="text-sm font-semibold text-sage hover:text-sage-dark">
                Request a Quote →
              </Link>
              <Link href="/contact" className="text-sm font-semibold text-sage hover:text-sage-dark">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
