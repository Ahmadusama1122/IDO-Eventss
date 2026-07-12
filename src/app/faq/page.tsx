import type { Metadata } from "next";
import Link from "next/link";
import { buildFaqSchema, buildBreadcrumbSchema, BASE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ — Event Styling Melbourne",
  description:
    "iDo Events answers the most common questions about event styling and prop hire in Melbourne. Pricing, inclusions, setup, booking timelines, and more.",
  alternates: { canonical: "https://idoeventss.com/faq" },
  openGraph: {
    title: "Event Styling FAQ | iDo Events Melbourne",
    description:
      "Answers to common questions about event styling costs, what is included, setup timelines, and how prop hire works in Melbourne.",
  },
};

const faqs = [
  {
    category: "Pricing & Costs",
    questions: [
      {
        q: "How much does event styling cost in Melbourne?",
        a: "Event styling in Melbourne ranges from $350 for a simple birthday balloon garland and backdrop to $3,500+ for a full wedding reception transformation. At iDo Events, our most popular packages sit between $650 and $1,800. Birthday prop hire starts from $350, baby shower styling from $350, engagement parties from $450, wedding ceremony-only from $650, and full wedding styling from $1,800. All prices include delivery, setup, and pack-down — no hidden fees.",
      },
      {
        q: "What is included in event styling prices?",
        a: "All iDo Events prices include: a consultation to plan your setup, delivery to your venue or home, full professional setup on the day, any adjustments needed, and complete pack-down and collection after your event. You do not need to transport, assemble, or return anything. The only thing not included is the venue hire itself.",
      },
      {
        q: "Is there a delivery fee for event styling in Melbourne?",
        a: "No. Delivery is included in all our quotes for suburbs within our service area (30+ Melbourne suburbs from Brunswick to Werribee, Craigieburn to Dandenong). There is no separate delivery line item — what we quote is what you pay.",
      },
      {
        q: "Do event stylists charge extra for pack-down?",
        a: "Not at iDo Events. Pack-down and prop collection are included in every package. We return after your event (usually the same evening or next morning) to disassemble and collect everything. Some competitors charge 15–20% extra for this — we include it as standard.",
      },
      {
        q: "How much does backdrop hire cost in Melbourne?",
        a: "Backdrop hire at iDo Events starts from $200 for a simple fabric draping backdrop, $300–$450 for a floral or balloon backdrop, and $500+ for large-scale installations with lighting. Our most popular option is the balloon garland backdrop combo at $350, which includes a 3-metre garland on a frame with a sheer draping backdrop behind it.",
      },
    ],
  },
  {
    category: "Setup & Logistics",
    questions: [
      {
        q: "Do event stylists set up and pack down?",
        a: "Yes — at iDo Events, full setup and pack-down are included in every booking. Our team arrives 1.5–4 hours before your event (depending on complexity), sets up all props and styling elements, makes any adjustments, and returns after the event to collect everything. You never have to lift, assemble, or return a single prop.",
      },
      {
        q: "How far in advance should I book an event stylist in Melbourne?",
        a: "We recommend booking 4–8 weeks ahead for birthdays and baby showers, 3–6 months for weddings and large events, and 2–4 weeks for corporate events. Peak season (October–March) and school holidays book up faster. Last-minute bookings under 1 week may be possible — contact us to check availability.",
      },
      {
        q: "How long does event styling setup take?",
        a: "Setup times vary by complexity: birthday parties take 60–90 minutes, baby showers and bridal showers take 60–90 minutes, engagement parties take 1.5–2 hours, and full wedding styling takes 3–5 hours. We always arrive with enough buffer time to ensure everything is perfect before guests arrive.",
      },
      {
        q: "Can event stylists set up at my home?",
        a: "Absolutely. Home setups are one of our most common bookings. We style living rooms, backyards, garages, undercover patios, and front yards. All our props are freestanding — no wall mounting, drilling, or permanent fixtures required. We just need clear access to the space and a flat surface to work with.",
      },
      {
        q: "What happens if it rains and my event is outdoors?",
        a: "For outdoor events, we always discuss a wet-weather backup plan during consultation. If rain is forecast, we can relocate freestanding installations under cover within 30 minutes. For fully outdoor events with no backup, we monitor weather 48 hours ahead and contact you to discuss options.",
      },
    ],
  },
  {
    category: "Props & Services",
    questions: [
      {
        q: "What is the difference between DIY party props and hiring a stylist?",
        a: "DIY decorations require you to purchase supplies (often $200–$500 for a decent setup), spend hours assembling, and dispose of everything after. Hiring a stylist like iDo Events means you get professional-quality props (worth thousands), expert placement and design, zero effort on the day, and nothing to throw away — because we collect everything. Most clients find that once you factor in the time, stress, and disposal cost of DIY, professional styling is comparable in value.",
      },
      {
        q: "What props can I hire for an event in Melbourne?",
        a: "iDo Events offers: balloon garlands and installations (3m–7m), ceremony and photo arches (rustic, gold hexagonal, round moongate), backdrop draping (sheer, satin, custom colours), floral arrangements (towers, centrepieces, wall installations), lighting (fairy lights, festoon strings, uplights), signage (neon signs, welcome signs, letter light-ups), furniture (plinths, cake stands, easels), and dessert/grazing table styling. Browse our full collection at idoeventss.com/hire.",
      },
      {
        q: "Do Melbourne event stylists provide flowers?",
        a: "iDo Events provides high-quality silk and artificial floral arrangements as part of our prop hire. These look realistic in photos, last all day without wilting, and are more sustainable than fresh flowers. For fresh flower additions, we can recommend local florist partners. Our silk florals are available in 20+ colour families.",
      },
      {
        q: "Can I customise my event styling package?",
        a: "Yes. Every iDo Events booking is custom-quoted based on your specific needs. We do not have rigid packages — you choose the props and styling elements you want, and we quote accordingly. Start with a base package and add individual items, or tell us your vision and budget and we will design a setup that works.",
      },
    ],
  },
  {
    category: "Weddings",
    questions: [
      {
        q: "How much does wedding styling cost in Melbourne?",
        a: "Wedding styling in Melbourne varies widely. At iDo Events: ceremony-only packages (arch, aisle styling, signage) start from $650, combined ceremony + reception styling starts from $1,800, and full venue transformations with draping, lighting, and extensive table styling range from $2,500–$5,000. The average iDo Events wedding sits around $1,500–$2,500.",
      },
      {
        q: "What Melbourne venues allow external event stylists?",
        a: "Most Melbourne venues allow external stylists. Function centres (Al Alamy, Le Montage, Vogue Ballroom), RSLs, community halls, golf clubs, and private homes all welcome external styling. Some premium venues (Werribee Mansion, luxury hotels) have preferred supplier lists — check with your venue. Restaurants and unique spaces generally allow it with prior arrangement. We work with 50+ venues across Melbourne.",
      },
      {
        q: "Do I need a wedding stylist if my venue is already decorated?",
        a: "It depends on the venue. If your venue has existing decor (e.g., a restaurant or winery), you may only need accent pieces — a ceremony arch, a few plinths, signage. If your venue is a blank canvas (community hall, marquee, warehouse), styling makes a significant visual difference. We offer consultations to advise on what your specific venue needs.",
      },
    ],
  },
  {
    category: "Cultural Events",
    questions: [
      {
        q: "Do you provide mehndi night styling in Melbourne?",
        a: "Yes. iDo Events provides mehndi night styling across Melbourne, particularly in western and northern suburbs. Our mehndi packages include: bride's stage setup with coloured draping and lighting, seating area styling, photo backdrop, and decorative marigold elements. Packages start from $1,200. We carry draping in 30+ colours to match your outfit.",
      },
      {
        q: "Can you style a nikkah ceremony in Melbourne?",
        a: "Yes. We provide nikkah ceremony styling with elegant stage/seating setups for bride and groom, floral arch or backdrop, Quran stand styling, and guest seating area decoration. We coordinate colours with the bride's outfit and can accommodate both traditional and modern aesthetic preferences.",
      },
      {
        q: "Do you understand cultural requirements for South Asian events?",
        a: "Yes. A significant portion of our work involves Pakistani, Indian, Afghan, and Lebanese celebrations. We understand colour significance, stage requirements, spatial layouts for family events, and the photo-intensive nature of these celebrations. Every cultural detail is discussed during consultation — nothing is assumed.",
      },
    ],
  },
  {
    category: "Booking & Payment",
    questions: [
      {
        q: "How do I book event styling with iDo Events?",
        a: "Request a free quote at idoeventss.com/quote or contact us at 0406 179 786. We respond within 1 hour during business hours. After discussing your requirements, we send a detailed quote. To confirm your booking, a $200 deposit secures your date. The balance is due 1 week before your event.",
      },
      {
        q: "Do you offer payment plans for event styling?",
        a: "Yes. For bookings over $800, we offer a 3-payment plan: $200 deposit to secure your date, 50% of the remaining balance 4 weeks before your event, and the final payment 1 week before. This makes larger styling packages more manageable.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Cancellations more than 4 weeks before your event receive a full deposit refund. Cancellations 2–4 weeks before receive a 50% deposit refund. Cancellations under 2 weeks are non-refundable. Date changes (rescheduling) are free if requested more than 2 weeks in advance, subject to availability.",
      },
    ],
  },
];

const allFaqs = faqs.flatMap((cat) => cat.questions);
const faqLd = buildFaqSchema(allFaqs);
const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", url: BASE_URL },
  { name: "FAQ" },
]);

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <section className="bg-charcoal px-6 py-20 text-center">
        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Everything you need to know about event styling and prop hire in Melbourne — pricing, what is included, setup logistics, and how to book.
        </p>
      </section>

      {/* FAQ Sections */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        {faqs.map((category) => (
          <div key={category.category} className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-charcoal">
              {category.category}
            </h2>
            <div className="mt-6 space-y-4">
              {category.questions.map((faq) => (
                <details key={faq.q} className="group rounded-lg border border-cream bg-white p-6">
                  <summary className="cursor-pointer font-semibold text-charcoal group-open:text-sage">
                    {faq.q}
                  </summary>
                  <p className="mt-3 leading-relaxed text-charcoal/80">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-sage px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Get in touch — we respond within the hour.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/quote" className="btn-white px-8 py-3">
              Get a Free Quote
            </Link>
            <Link href="/contact" className="rounded-lg border-2 border-white px-8 py-3 font-medium text-white transition hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
