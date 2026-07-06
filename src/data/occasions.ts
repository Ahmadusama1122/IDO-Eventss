export interface OccasionData {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  whatWeStyle: string[];
  faqs: { q: string; a: string }[];
}

export const OCCASIONS: OccasionData[] = [
  {
    slug: "weddings",
    name: "Weddings",
    tagline: "Your dream wedding, beautifully styled",
    intro: "Your wedding day should be everything you've imagined and more. From intimate garden ceremonies to grand reception halls, we create breathtaking spaces that reflect your unique love story. Our team handles every detail — from the ceremony backdrop to the reception styling — so you can focus on what matters most: celebrating with the people you love.",
    whatWeStyle: ["Ceremony backdrops & arches", "Reception table styling", "Bridal table feature walls", "Floral installations", "Draping & fabric styling", "Signage & welcome boards", "Aisle styling & plinths", "Cake & dessert tables"],
    faqs: [
      { q: "How far in advance should I book?", a: "We recommend booking 3-6 months ahead for weddings, especially during peak season (October-April). However, we can accommodate shorter timelines depending on availability." },
      { q: "Do you provide setup and pack-down?", a: "Yes! All our packages include full delivery, setup, and pack-down. We arrive before your guests and leave after the celebration — you don't need to lift a finger." },
      { q: "Can I customise a package?", a: "Absolutely. Every wedding is unique, and we love tailoring our packages to match your vision, colour palette, and venue. Send us a quote request and we'll work with you." },
      { q: "What areas do you cover?", a: "We service all of Melbourne and surrounding suburbs, including the Mornington Peninsula, Yarra Valley, and Dandenong Ranges." },
      { q: "Is there a bond or deposit required?", a: "A 30% deposit secures your date, with the remaining balance due 7 days before the event. A refundable bond may apply for certain high-value items." },
    ],
  },
  {
    slug: "birthdays",
    name: "Birthdays",
    tagline: "From first birthdays to milestone celebrations",
    intro: "Whether it's a magical first birthday, a sweet sixteen, a big 21st, or a fabulous 40th — every birthday deserves to feel special. We create stunning themed setups with balloon installations, backdrops, dessert tables, and more. Tell us your theme and we'll bring it to life.",
    whatWeStyle: ["Themed backdrops & arches", "Balloon installations & garlands", "Dessert & cake table styling", "Number & letter light-ups", "Table centrepieces", "Welcome signage", "Photo wall setups", "Themed character cutouts"],
    faqs: [
      { q: "What themes can you do?", a: "We can style any theme you imagine — from Disney and farm animals to elegant garden parties and modern minimalist setups. Send us your Pinterest board and we'll make it happen." },
      { q: "How much does a birthday setup cost?", a: "Our birthday packages start from $350 for a simple backdrop setup. Full venue styling ranges from $600-$2,000+ depending on your vision. Request a free quote for an exact price." },
      { q: "Do you provide balloons?", a: "Yes! Balloon installations, garlands, and individual arrangements are a core part of our birthday styling. We use premium quality balloons in your chosen colour palette." },
      { q: "How early do you set up?", a: "We typically arrive 2-3 hours before your event to set up. For larger installations, we may arrive earlier. We coordinate timing with your venue directly." },
      { q: "Can you style at any venue?", a: "We style at homes, restaurants, function centres, parks, and community halls across Melbourne. Just let us know your venue and we'll work out the logistics." },
    ],
  },
  {
    slug: "christenings-baptisms",
    name: "Christenings & Baptisms",
    tagline: "A beautiful beginning, beautifully styled",
    intro: "Your child's christening or baptism is a once-in-a-lifetime celebration. We create elegant, heartfelt setups that honour the significance of the day while giving your family and friends a stunning backdrop to gather around. From soft pastels to bold statement pieces, every detail is handled with care.",
    whatWeStyle: ["Feature backdrops with child's name", "Balloon installations", "Floral arrangements", "Plinth & cake displays", "Table centrepieces", "Welcome signage & boards", "Cross & religious elements", "Draping & fabric features"],
    faqs: [
      { q: "Can you incorporate religious elements?", a: "Of course. We can include crosses, religious symbols, and traditional elements that complement your celebration while keeping the design beautiful and cohesive." },
      { q: "What colours work best?", a: "Classic choices include soft blue and white for boys, pink and white for girls, or neutral creams and golds for a timeless look. We can match any colour palette you prefer." },
      { q: "Do you style the church too?", a: "Our focus is on the reception venue, but we can provide aisle styling and entrance features for the church ceremony as an add-on. Ask us about this when requesting a quote." },
      { q: "What's the lead time?", a: "We recommend booking 4-8 weeks ahead. For popular weekends, earlier is better. We can sometimes accommodate shorter timelines — just ask." },
    ],
  },
  {
    slug: "baby-showers",
    name: "Baby Showers",
    tagline: "Welcoming your little one in style",
    intro: "Celebrate the upcoming arrival of your bundle of joy with a beautifully styled baby shower. Whether it's a gender reveal, a sprinkle, or a full shower celebration, we create dreamy setups with balloon installations, floral arrangements, and themed backdrops that make the moment truly special.",
    whatWeStyle: ["Gender reveal backdrops", "Balloon garlands & installations", "\"Baby\" letter blocks & signage", "Dessert table styling", "Floral arrangements", "High chair styling", "Photo booth setups", "Table centrepieces"],
    faqs: [
      { q: "Can you do gender reveals?", a: "Yes! We love styling gender reveals. We can create setups with both pink and blue elements that look stunning before and after the big reveal moment." },
      { q: "What's the most popular style?", a: "Neutral tones (cream, beige, sage) are trending right now, along with soft pastels. But we can create any colour palette — from bold and bright to soft and dreamy." },
      { q: "Do you provide the cake?", a: "We don't provide catering or cakes, but we style the cake and dessert table beautifully. We can recommend great cake makers in Melbourne if you need one." },
      { q: "Can you style at a home?", a: "Absolutely! Many baby showers are held at home, and we're experienced in styling private residences. We work with your available space to create maximum impact." },
    ],
  },
  {
    slug: "engagements",
    name: "Engagements",
    tagline: "Celebrate your 'yes' moment",
    intro: "You said yes — now let's celebrate! From intimate engagement dinners to lively engagement parties, we style stunning setups that capture the joy of your new chapter. Think dramatic floral installations, elegant draping, and personalised touches that make the evening unforgettable.",
    whatWeStyle: ["Feature backdrops with couple's names", "Floral towers & installations", "Draping & fabric styling", "\"We're Engaged\" signage", "Table centrepieces", "Champagne & drinks table styling", "Neon signs & light-ups", "Dance floor features"],
    faqs: [
      { q: "Can you help with a proposal setup?", a: "Yes! We create beautiful, intimate proposal setups — from rooftop terraces to beach locations. We handle everything so the moment is perfect and stress-free." },
      { q: "What's included in an engagement package?", a: "Our engagement packages typically include a feature backdrop, floral arrangements, signage, and table styling. Every package is customised to your vision and venue." },
      { q: "How quickly can you turn around?", a: "For proposals and smaller setups, we can sometimes accommodate 1-2 weeks notice. For full engagement party styling, 4-6 weeks is ideal." },
      { q: "Do you style the bridal shower too?", a: "Absolutely! Many of our engagement clients book us for their bridal shower as well. We offer returning client discounts for multiple bookings." },
    ],
  },
  {
    slug: "corporate",
    name: "Corporate Events",
    tagline: "Professional events, elevated",
    intro: "Make your next corporate event stand out. From product launches and awards nights to team celebrations and brand activations, we bring professional styling that elevates your brand and impresses your guests. Clean, sophisticated, and always on-brand.",
    whatWeStyle: ["Branded backdrops & signage", "Stage & podium styling", "Table centrepieces", "Entrance & foyer features", "Balloon installations", "Draping & fabric features", "Awards table styling", "Registration desk styling"],
    faqs: [
      { q: "Can you match our brand colours?", a: "Yes, we work with your brand guidelines to ensure every element matches your corporate colours and identity. Send us your brand kit and we'll take care of the rest." },
      { q: "Do you do product launches?", a: "We've styled numerous product launches across Melbourne. We can create eye-catching setups that showcase your product and create social-media-worthy moments." },
      { q: "What's the minimum budget for corporate events?", a: "Our corporate packages start from $500. The final price depends on the venue size, number of elements, and complexity of the styling. Request a quote for an accurate price." },
      { q: "Can you invoice our company?", a: "Yes, we provide professional invoicing with GST for all corporate clients. We can also accommodate purchase orders and multi-stage payment structures." },
    ],
  },
];
