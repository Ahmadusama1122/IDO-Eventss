/**
 * Service × Suburb SEO landing page data.
 * Each combination has unique, non-template content.
 */

export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  keywords: string[];
}

export interface ServiceSuburbData {
  slug: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  nearbySuburbs: string[];
  localVenues: string[];
}

export interface ServiceSuburbContent {
  serviceSlug: string;
  suburbSlug: string;
  intro: string;
  popularProps: string[];
  faqs: { q: string; a: string }[];
  venueNotes: string;
  setupNotes: string;
}

export const SERVICES: ServiceData[] = [
  {
    slug: "wedding-styling",
    name: "Wedding Styling",
    shortName: "Wedding",
    description: "Professional wedding styling and prop hire including ceremony arches, reception table settings, floral installations, draping, and lighting.",
    keywords: ["wedding styling", "wedding decorations", "wedding prop hire", "ceremony arch hire", "reception styling"],
  },
  {
    slug: "engagement-party-styling",
    name: "Engagement Party Styling",
    shortName: "Engagement",
    description: "Engagement party styling with modern arches, neon signs, balloon installations, and elegant table settings to celebrate your milestone.",
    keywords: ["engagement party styling", "engagement decorations", "engagement party setup", "engagement prop hire"],
  },
  {
    slug: "birthday-prop-hire",
    name: "Birthday Decorations & Prop Hire",
    shortName: "Birthday",
    description: "Birthday party styling for all ages — from first birthdays to milestone celebrations. Balloon garlands, themed backdrops, dessert tables and more.",
    keywords: ["birthday decorations", "birthday prop hire", "birthday party styling", "balloon garland hire", "birthday setup"],
  },
  {
    slug: "baby-shower-styling",
    name: "Baby Shower Styling",
    shortName: "Baby Shower",
    description: "Beautiful baby shower styling with pastel balloon installations, custom backdrops, dessert table setups, and gender reveal features.",
    keywords: ["baby shower styling", "baby shower decorations", "baby shower setup", "gender reveal styling"],
  },
  {
    slug: "bridal-shower-setup",
    name: "Bridal Shower Setup",
    shortName: "Bridal Shower",
    description: "Bridal shower and hens party styling with elegant backdrops, grazing table setups, flower walls, and personalised signage.",
    keywords: ["bridal shower setup", "bridal shower styling", "hens party decorations", "bridal party props"],
  },
  {
    slug: "corporate-event-styling",
    name: "Corporate Event Styling",
    shortName: "Corporate",
    description: "Professional corporate event styling for product launches, gala dinners, conferences, and team celebrations with branded prop installations.",
    keywords: ["corporate event styling", "corporate decorations", "product launch styling", "gala dinner setup"],
  },
  {
    slug: "mehndi-nikkah-styling",
    name: "Mehndi & Nikkah Event Styling",
    shortName: "Mehndi/Nikkah",
    description: "Culturally authentic mehndi night, nikkah, and walima styling with vibrant draping, marigold installations, stage setups, and traditional prop hire.",
    keywords: ["mehndi styling", "nikkah decorations", "walima setup", "pakistani wedding styling", "indian wedding decorations", "afghan wedding styling"],
  },
];

export const SERVICE_SUBURBS: ServiceSuburbData[] = [
  {
    slug: "point-cook",
    name: "Point Cook",
    region: "West",
    lat: -37.9013,
    lng: 144.7473,
    nearbySuburbs: ["Werribee", "Tarneit", "Hoppers Crossing", "Williams Landing"],
    localVenues: ["Sanctuary Lakes Club", "Point Cook Community Learning Centre", "Eagle Stadium", "Homestead Run Community Centre"],
  },
  {
    slug: "tarneit",
    name: "Tarneit",
    region: "West",
    lat: -37.8297,
    lng: 144.6952,
    nearbySuburbs: ["Truganina", "Hoppers Crossing", "Werribee", "Point Cook"],
    localVenues: ["Tarneit Community Learning Centre", "Wyndham Cultural Centre", "Baden Powell Reserve", "Tarneit Rise Community Centre"],
  },
  {
    slug: "truganina",
    name: "Truganina",
    region: "West",
    lat: -37.8215,
    lng: 144.7414,
    nearbySuburbs: ["Tarneit", "Hoppers Crossing", "Point Cook", "Williams Landing"],
    localVenues: ["Truganina Community Centre", "Elements at Truganina", "Doherty's Gymnasium Hall", "Truganina South Community Centre"],
  },
  {
    slug: "werribee",
    name: "Werribee",
    region: "West",
    lat: -37.9000,
    lng: 144.6611,
    nearbySuburbs: ["Hoppers Crossing", "Point Cook", "Tarneit", "Wyndham Vale"],
    localVenues: ["Werribee Mansion", "Shadowfax Winery", "Lancemore Werribee", "Werribee RSL"],
  },
  {
    slug: "hoppers-crossing",
    name: "Hoppers Crossing",
    region: "West",
    lat: -37.8826,
    lng: 144.7003,
    nearbySuburbs: ["Werribee", "Tarneit", "Point Cook", "Truganina"],
    localVenues: ["Pacific Werribee Function Room", "Encore St Johns", "Club Inn Function Centre", "Al Alamy Reception"],
  },
  {
    slug: "craigieburn",
    name: "Craigieburn",
    region: "North",
    lat: -37.5998,
    lng: 144.9414,
    nearbySuburbs: ["Roxburgh Park", "Mickleham", "Epping", "Broadmeadows"],
    localVenues: ["Craigieburn Golf Club", "Hume Global Learning Centre", "Vogue Ballroom Craigieburn", "Yallambie Park"],
  },
  {
    slug: "epping",
    name: "Epping",
    region: "North",
    lat: -37.6520,
    lng: 145.0174,
    nearbySuburbs: ["South Morang", "Lalor", "Thomastown", "Mill Park"],
    localVenues: ["Epping Club", "Pacific Epping", "Northern Golf Club", "Le Montage Epping"],
  },
  {
    slug: "dandenong",
    name: "Dandenong",
    region: "South East",
    lat: -37.9867,
    lng: 145.2139,
    nearbySuburbs: ["Noble Park", "Keysborough", "Springvale", "Doveton"],
    localVenues: ["Dandenong RSL", "Drum Theatre Dandenong", "Palm Plaza", "Afghan Adana Restaurant"],
  },
  {
    slug: "clayton",
    name: "Clayton",
    region: "South East",
    lat: -37.9254,
    lng: 145.1190,
    nearbySuburbs: ["Oakleigh", "Springvale", "Mulgrave", "Notting Hill"],
    localVenues: ["Clayton Hall", "Monash University Conference Centre", "Clayton Community Centre", "Sri Lankan Cultural Centre"],
  },
  {
    slug: "glen-waverley",
    name: "Glen Waverley",
    region: "East",
    lat: -37.8793,
    lng: 145.1625,
    nearbySuburbs: ["Mount Waverley", "Wheelers Hill", "Mulgrave", "Burwood East"],
    localVenues: ["The Glen Function Room", "Waverley RSL", "Glen Waverley Library Hall", "Mulgrave Country Club"],
  },
  {
    slug: "doncaster",
    name: "Doncaster",
    region: "East",
    lat: -37.7879,
    lng: 145.1258,
    nearbySuburbs: ["Templestowe", "Box Hill", "Balwyn North", "Bulleen"],
    localVenues: ["Manningham Function Centre", "Westerfolds Park", "Doncaster Pines Senior Citizens", "The Grand on Doncaster"],
  },
  {
    slug: "preston",
    name: "Preston",
    region: "North",
    lat: -37.7453,
    lng: 145.0155,
    nearbySuburbs: ["Reservoir", "Thornbury", "Northcote", "Coburg"],
    localVenues: ["Preston City Hall", "Bell Tower Function Centre", "All Nations Park", "Preston Shire Hall"],
  },
  {
    slug: "brunswick",
    name: "Brunswick",
    region: "North",
    lat: -37.7666,
    lng: 144.9604,
    nearbySuburbs: ["Coburg", "Northcote", "Carlton North", "Parkville"],
    localVenues: ["Brunswick Town Hall", "Merri Creek Trail areas", "Gilpin Park", "Saxon Function Centre"],
  },
  {
    slug: "footscray",
    name: "Footscray",
    region: "West",
    lat: -37.8003,
    lng: 144.9001,
    nearbySuburbs: ["Yarraville", "Seddon", "Braybrook", "Maribyrnong"],
    localVenues: ["Footscray Community Arts Centre", "The Substation", "Footscray RSL", "Victoria University Conference Centre"],
  },
  {
    slug: "sunshine",
    name: "Sunshine",
    region: "West",
    lat: -37.7871,
    lng: 144.8330,
    nearbySuburbs: ["St Albans", "Deer Park", "Albion", "Ardeer"],
    localVenues: ["Sunshine Harvester Works", "Sunshine RSL", "Hampshire Road venues", "Brimbank Community Centre"],
  },
];

// Service × Suburb unique content — each entry has genuinely different copy
export const SERVICE_SUBURB_CONTENT: ServiceSuburbContent[] = [
  // === WEDDING STYLING ===
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "point-cook",
    intro: "Point Cook weddings blend coastal elegance with suburban convenience. Many couples here host their ceremony outdoors at Sanctuary Lakes or Cheetham Wetlands before moving to a reception at one of the lakeside venues. iDo Events styles weddings across Point Cook with ceremony arches positioned to catch the golden-hour light, reception table settings that flow with the natural colour palette of the wetlands, and draping installations that transform community halls into magazine-worthy spaces.",
    popularProps: ["Rustic Arch Backdrop", "Fairy Light Curtain", "White Plinth Set", "Floral Tower Arrangement"],
    venueNotes: "Sanctuary Lakes Club allows external stylists with 3-hour bump-in. Homestead Run Community Centre has a neutral interior that takes well to draping and projection. We bring our own stands — no wall mounting needed.",
    setupNotes: "Point Cook is 30 minutes from our base. We typically arrive at 8am for afternoon ceremonies to ensure every floral piece is positioned, every candle lit, and every detail photographed before guests arrive.",
    faqs: [
      { q: "How much does wedding styling cost in Point Cook?", a: "Our wedding styling packages in Point Cook start from $850 for ceremony-only setups (arch, aisle styling, signage) and from $1,800 for full ceremony + reception styling. The final quote depends on your guest count, venue, and chosen props. We include delivery, setup, and pack-down in all prices." },
      { q: "Do you style outdoor weddings at Sanctuary Lakes?", a: "Yes. We regularly style at Sanctuary Lakes Club and the surrounding parkland. We bring weighted bases for arches to handle the coastal breeze, and all our outdoor setups use secure anchoring systems." },
      { q: "How far in advance should I book wedding styling in Point Cook?", a: "We recommend booking 3–6 months ahead for peak season (October–March). Winter weddings can often be confirmed 6–8 weeks out. A $200 deposit secures your date." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "tarneit",
    intro: "Tarneit is one of Melbourne's fastest-growing suburbs, and its wedding scene reflects the energy and cultural diversity of the community. From intimate nikkah ceremonies in family homes to grand reception celebrations at nearby function centres, iDo Events brings tailored wedding styling that honours tradition while embracing modern design. We work closely with Tarneit couples to understand their cultural requirements — whether that means a vibrant stage setup for a mehndi night or a classic white-and-gold ceremony arch.",
    popularProps: ["Gold Hexagonal Arch", "Ceiling Draping Package", "Neon Sign Custom Text", "Floral Centrepiece Set"],
    venueNotes: "Wyndham Cultural Centre has excellent ceiling height for draping installations. Many Tarneit families host in backyards with marquees — we style inside marquees with the same level of detail as any venue.",
    setupNotes: "Tarneit is within our core service area in Melbourne's west. For backyard weddings, we request clear access to the setup area by 7am. We bring all infrastructure — no power points or wall hooks required.",
    faqs: [
      { q: "Do you provide wedding styling for South Asian weddings in Tarneit?", a: "Absolutely. A large portion of our Tarneit work involves Pakistani, Indian, and Afghan wedding styling. We supply vibrant draping, marigold installations, stage setups, and traditional seating arrangements alongside modern elements like neon signs and floral towers." },
      { q: "Can you style a backyard wedding in Tarneit?", a: "Yes. Many of our Tarneit weddings are in family backyards or front yards. We bring freestanding arches, self-weighted plinths, battery-operated fairy lights, and portable draping frames. No permanent fixtures required." },
      { q: "What is included in your Tarneit wedding styling package?", a: "All packages include a consultation, delivery to Tarneit, full setup on the day, styling adjustments, and complete pack-down after your event. Props are hired for the duration of your event (typically 8–12 hours)." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "truganina",
    intro: "Truganina sits at the intersection of Melbourne's western growth corridor, where new housing estates meet established community spaces. Weddings here range from large-scale cultural celebrations in function halls to intimate garden ceremonies in the quiet pockets along Skeleton Creek. iDo Events provides complete wedding styling across Truganina — from the ceremony arch to the last centrepiece — with a focus on creating cohesive visual stories that photograph beautifully and make guests feel transported from the everyday.",
    popularProps: ["Round Moongate Arch", "Backdrop Draping Set", "Gold Letter Light-Up", "Dessert Table Styling"],
    venueNotes: "Elements at Truganina is a newer venue with clean white walls — ideal for projection and draping. Truganina South Community Centre works well for larger cultural weddings with 150+ guests.",
    setupNotes: "Truganina is easily accessible via the Western Freeway. We schedule bump-in 4 hours before ceremony start for full wedding packages. Our team of 2–3 handles all heavy lifting.",
    faqs: [
      { q: "How early do you set up for weddings in Truganina?", a: "We arrive 4 hours before your ceremony for full styling packages, or 2 hours for ceremony-only setups. This gives us time to style, adjust, and photograph everything before your photographer arrives." },
      { q: "Do you offer payment plans for wedding styling?", a: "Yes. We offer a 3-payment plan: $200 deposit to secure your date, 50% of the balance 4 weeks before, and the remainder 1 week before your wedding." },
      { q: "Can you match my wedding colour scheme exactly?", a: "We carry props in 20+ colour families and can source specific tones for your event. Share your colour palette during consultation and we will curate a selection that matches perfectly." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "werribee",
    intro: "Werribee offers something rare in Melbourne's west — heritage venues like Werribee Mansion and boutique wineries like Shadowfax that bring instant atmosphere to any wedding. iDo Events enhances these venues rather than competing with them, adding ceremony arches that frame garden views, reception table styling that complements existing architecture, and lighting that transitions seamlessly from golden afternoon to candlelit evening. We know these venues intimately — the loading bays, the restricted areas, the angles that photograph best.",
    popularProps: ["Rustic Arch Backdrop", "Festoon Light String", "Floral Tower Arrangement", "Welcome Sign on Easel"],
    venueNotes: "Werribee Mansion requires all suppliers to enter via the rear service road — we coordinate timing with their events manager. Shadowfax Winery allows setup from 10am with a dedicated loading zone. Lancemore has strict ceiling-attachment policies — all our installations are freestanding.",
    setupNotes: "For winery weddings, we factor in 30 minutes for venue access protocol. Heritage venues often restrict wall contact — every piece we bring is freestanding or weighted.",
    faqs: [
      { q: "Can you style at Werribee Mansion?", a: "Yes, we are experienced at Werribee Mansion and understand their supplier protocols. We use freestanding arches, weighted plinths, and non-marking fixtures that comply with heritage venue requirements." },
      { q: "What is the minimum spend for wedding styling in Werribee?", a: "Our minimum engagement for Werribee weddings is $650, which covers a ceremony arch setup with basic florals, delivery, installation, and pack-down. Most couples spend $1,200–$2,500 for a full ceremony and reception package." },
      { q: "Do you work with other Werribee wedding vendors?", a: "We regularly collaborate with local photographers, florists, and caterers across Werribee. We are happy to coordinate timing with your other suppliers to ensure a smooth setup day." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "hoppers-crossing",
    intro: "Hoppers Crossing is home to several well-known reception venues that cater to large wedding celebrations — Al Alamy, Encore St Johns, and Club Inn all host 200+ guest weddings regularly. iDo Events adds the finishing layers that transform these spaces from functional to unforgettable: ceiling draping that softens industrial ceilings, centrepiece towers that create height and drama, and entrance styling that sets the tone from the moment guests walk in. We understand the logistics of large-scale weddings and work efficiently within tight changeover windows.",
    popularProps: ["Ceiling Draping Package", "Floral Centrepiece Set", "Gold Hexagonal Arch", "Balloon Garland Installation"],
    venueNotes: "Al Alamy Reception has a dedicated bump-in window (10am–2pm) with rear loading dock. Encore St Johns allows overnight setups for Saturday weddings. Club Inn has lower ceilings — we adjust draping height accordingly.",
    setupNotes: "Large wedding setups in Hoppers Crossing typically require a team of 3 and a 4–5 hour bump-in window. We coordinate directly with venue managers to align with catering and AV teams.",
    faqs: [
      { q: "Can you style for 200+ guest weddings in Hoppers Crossing?", a: "Absolutely. Large weddings are our strength. We have styled celebrations with up to 350 guests at venues like Al Alamy and Encore St Johns, providing centrepieces for 25+ tables, full ceiling draping, and entrance features." },
      { q: "Do you handle both ceremony and reception styling?", a: "Yes. For Hoppers Crossing venues that host both ceremony and reception in one space, we design a setup that transitions between the two. The ceremony arch often becomes the bridal table backdrop with minimal rearrangement." },
      { q: "What happens to the props after the wedding?", a: "Our team returns after your event (typically the next morning for evening receptions) to pack down and collect all props. This is included in every package — you never have to worry about returns." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "craigieburn",
    intro: "Craigieburn's wedding scene caters to Melbourne's northern multicultural communities with venues designed for large celebrations and rich cultural traditions. iDo Events works with Craigieburn couples to create styling that respects these traditions — from elaborate stage setups for Afghan and Lebanese weddings to contemporary minimalist designs for modern Australian ceremonies. The key is adaptability: understanding that a Craigieburn wedding might need to honour multiple cultural elements within a single cohesive visual design.",
    popularProps: ["Ceiling Draping Package", "Gold Hexagonal Arch", "Floral Tower Arrangement", "Neon Sign Custom Text"],
    venueNotes: "Vogue Ballroom Craigieburn has excellent ceiling height and built-in lighting rigs we can work around. Craigieburn Golf Club offers both indoor and outdoor ceremony spaces — we style both in a single setup.",
    setupNotes: "Craigieburn is 35 minutes from our base via the Hume. We allow extra time for northern suburbs during peak-hour deliveries. Weekend setups start from 8am.",
    faqs: [
      { q: "Do you style Lebanese and Afghan weddings in Craigieburn?", a: "Yes. We have extensive experience with Middle Eastern and Central Asian wedding traditions in Craigieburn. Our prop collection includes items suited to these celebrations — ornate gold frames, rich fabric draping in jewel tones, and stage styling for bride and groom seating." },
      { q: "Can you work with my family's specific cultural requirements?", a: "Always. We schedule a detailed consultation where we discuss cultural elements, colour significance, and family preferences. Nothing is assumed — we listen first and design around your traditions." },
      { q: "What size weddings do you handle in Craigieburn?", a: "From intimate ceremonies of 30 guests to large receptions of 400+. Our pricing scales with event size and complexity. We have a team of 2–4 depending on the scale of your celebration." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "epping",
    intro: "Epping and its neighbouring suburbs — South Morang, Lalor, Thomastown — form a hub for Italian, Greek, and Middle Eastern wedding celebrations in Melbourne's north. iDo Events styles weddings here that balance grandeur with intimacy, using floral towers and draping to create visual warmth in larger function rooms, while keeping ceremony spaces feeling personal and romantic. We regularly work at venues along High Street and the Dalton Road precinct, and understand the specific access requirements of each.",
    popularProps: ["Floral Tower Arrangement", "Ceiling Draping Package", "Rustic Arch Backdrop", "White Plinth Set"],
    venueNotes: "Le Montage Epping has strict setup windows (9am–1pm) and requires all props to be freestanding. The Northern Golf Club allows earlier access and has good natural light for ceremony styling.",
    setupNotes: "Epping is accessible via the Hume Freeway. We coordinate with venue event managers 2 weeks prior to confirm bump-in times and loading dock availability.",
    faqs: [
      { q: "Do you style weddings at Le Montage Epping?", a: "Yes, we have styled multiple weddings at Le Montage. We know their setup protocols, loading access, and ceiling limitations. All our installations are freestanding and comply with their venue policies." },
      { q: "Can you create a traditional yet modern wedding look?", a: "This is one of our most common briefs in Epping. We blend classic elements — white draping, gold accents, floral abundance — with modern touches like geometric arches, neon signage, and clean-lined furniture." },
      { q: "Do you provide a consultation before booking?", a: "Yes. Every Epping wedding starts with a free consultation where we discuss your vision, venue, colour palette, and budget. We then provide a detailed quote with photos of suggested props." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "dandenong",
    intro: "Dandenong is one of Melbourne's most culturally diverse suburbs, and its wedding celebrations reflect this beautifully. From Afghan walimas at Palm Plaza to Sri Lankan ceremonies at community halls, from Vietnamese tea ceremonies to mainstream Australian receptions, iDo Events has the cultural literacy and prop inventory to style any tradition authentically. We approach every Dandenong wedding as a learning opportunity — listening to families about what matters most and designing around those priorities.",
    popularProps: ["Gold Hexagonal Arch", "Ceiling Draping Package", "Balloon Garland Installation", "Dessert Table Styling"],
    venueNotes: "Dandenong RSL has a large function room with 4-hour setup windows. Palm Plaza on Foster Street caters primarily to Afghan celebrations — we coordinate with their in-house team. Drum Theatre is used for smaller, more intimate ceremonies.",
    setupNotes: "Dandenong is in our south-east corridor. For large-scale setups (150+ guests), we send a team of 3 and arrive at first available access time. Parking on main streets can be tight — we use rear loading wherever possible.",
    faqs: [
      { q: "Do you provide styling for Afghan and Middle Eastern weddings?", a: "Yes. We have styled dozens of Afghan, Iraqi, and Lebanese weddings in Dandenong. We supply stage platforms, rich coloured draping, gold-toned props, and large-scale floral installations suited to these celebrations." },
      { q: "What is your delivery range from Dandenong?", a: "We deliver and set up across all of Greater Dandenong including Noble Park, Keysborough, Springvale, and Doveton at no additional delivery charge." },
      { q: "Can you style for 300+ guest weddings?", a: "Yes. Large weddings are common in Dandenong and we are equipped to handle them. We bring additional team members for events over 200 guests and can style 30+ tables, full ceiling installations, and entrance features." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "clayton",
    intro: "Clayton's wedding celebrations often centre around community and family, with many couples choosing local venues or transforming family homes for their special day. The suburb's proximity to Monash University also brings a younger couple demographic who value modern, Instagram-worthy styling combined with cultural elements. iDo Events provides wedding styling across Clayton that works equally well in a polished function room or a family backyard — the same attention to detail, the same quality props, the same full-service approach.",
    popularProps: ["Round Moongate Arch", "Fairy Light Curtain", "Floral Centrepiece Set", "Welcome Sign on Easel"],
    venueNotes: "Clayton Community Centre offers affordable venue hire with a neutral interior that takes well to styling. Monash University venues have stricter booking protocols — we work within their supplier systems.",
    setupNotes: "Clayton is central to our south-east service area. Street parking can be limited — we use the rear access at Clayton Hall when available. Standard setup time is 3 hours for a full wedding package.",
    faqs: [
      { q: "Can you style a small wedding in Clayton (under 50 guests)?", a: "Absolutely. Intimate weddings are some of our favourite projects. We offer scaled packages starting from $650 that include a ceremony arch, signage, and basic table styling — perfect for smaller Clayton celebrations." },
      { q: "Do you work with Sri Lankan wedding traditions?", a: "Yes. Clayton has a vibrant Sri Lankan community and we have styled several ceremonies incorporating traditional elements. We are always happy to learn about your specific customs and design around them." },
      { q: "Is there a travel surcharge for Clayton?", a: "No. Clayton is within our standard delivery zone. Delivery, setup, and pack-down are included in all quoted prices." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "glen-waverley",
    intro: "Glen Waverley weddings tend toward polished sophistication — couples here often choose clean, modern aesthetics with quality over quantity. The suburb's established leafy streets and proximity to the Dandenong Ranges give many venues natural beauty to work with, and our styling enhances rather than overwhelms. iDo Events creates wedding setups in Glen Waverley that lean into elegance: neutral-toned arches with quality silk florals, sleek plinth arrangements, and soft fairy light installations that add warmth without competing with the venue's own character.",
    popularProps: ["Rustic Arch Backdrop", "White Plinth Set", "Fairy Light Curtain", "Floral Tower Arrangement"],
    venueNotes: "Mulgrave Country Club allows bump-in from 9am with dedicated loading access. The Glen function rooms have height restrictions — we use lower-profile installations that still create impact.",
    setupNotes: "Glen Waverley is 25 minutes from our base. We typically send a team of 2 for standard weddings. Venues here generally have good loading access and early setup availability.",
    faqs: [
      { q: "What wedding styling trends work best in Glen Waverley venues?", a: "Glen Waverley venues suit a refined, less-is-more approach. We recommend quality silk florals on elegant arches, soft fairy light canopies, and sleek plinth arrangements. The venues here have good bones — our job is to enhance, not overwhelm." },
      { q: "Do you offer ceremony-only packages in Glen Waverley?", a: "Yes. Our ceremony-only package starts from $650 and includes an arch of your choice, aisle styling, and a welcome sign. Perfect if your venue handles the reception styling or you want to keep things simple." },
      { q: "How do you handle wet weather for outdoor ceremonies?", a: "We always discuss a wet-weather plan during consultation. Most Glen Waverley venues have indoor backup options. Our freestanding arches and installations can be relocated within 30 minutes if weather turns." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "doncaster",
    intro: "Doncaster and the surrounding Manningham area are home to many Greek, Chinese, and Vietnamese families who celebrate weddings with both cultural reverence and contemporary flair. iDo Events styles weddings in Doncaster that bridge tradition and modernity — whether that means incorporating traditional red accents for a Chinese tea ceremony, designing a classic Greek Orthodox-inspired reception, or creating a minimalist modern setup that lets family traditions take centre stage. The leafy surroundings of Manningham provide beautiful natural backdrops for outdoor ceremony components.",
    popularProps: ["Gold Hexagonal Arch", "Floral Centrepiece Set", "Ceiling Draping Package", "Neon Sign Custom Text"],
    venueNotes: "Manningham Function Centre is purpose-built for events and allows full access from 8am. The Grand on Doncaster has a dedicated bridal suite and ceremony garden. Westerfolds Park offers outdoor ceremony options with council permit.",
    setupNotes: "Doncaster is in our eastern corridor, approximately 30 minutes from base. Eastern Freeway access makes morning deliveries efficient. Venues here are generally well-equipped for supplier access.",
    faqs: [
      { q: "Do you style Chinese weddings in Doncaster?", a: "Yes. We understand the importance of colour symbolism and have styled Chinese tea ceremonies and banquet-style receptions in Doncaster. We carry red and gold props, double happiness signage, and can incorporate traditional elements into modern designs." },
      { q: "What is the most popular wedding arch for Doncaster couples?", a: "The Gold Hexagonal Arch is our most requested piece in Doncaster — it photographs beautifully against the green backdrop of local gardens and suits both modern and traditional colour palettes." },
      { q: "Can you style a garden ceremony in Manningham?", a: "Yes. We have styled several outdoor ceremonies at Westerfolds Park and private gardens in Doncaster. We use weighted bases and secure anchoring for all outdoor installations to handle wind conditions." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "preston",
    intro: "Preston weddings are as diverse as the suburb itself — one weekend we might be styling a chic warehouse-style celebration near Bell Station, and the next a colourful Ethiopian or Middle Eastern wedding at a community hall. iDo Events thrives in this variety. We bring the same professionalism and creativity to every setup, whether the brief is 'modern minimalist' or 'bold and vibrant'. Preston's converted industrial spaces offer blank canvases that respond beautifully to large-scale draping and lighting installations.",
    popularProps: ["Backdrop Draping Set", "Festoon Light String", "Balloon Garland Installation", "Gold Letter Light-Up"],
    venueNotes: "Preston City Hall has good ceiling height and a neutral palette. Bell Tower Function Centre allows overnight setups for Sunday weddings. Many Preston venues are BYO-styled — meaning we have full creative control of the space.",
    setupNotes: "Preston is 20 minutes from our base with excellent freeway access. Street parking for our van is generally available in back streets near venues. We coordinate load-in times with venue managers.",
    faqs: [
      { q: "Do you style multicultural weddings in Preston?", a: "Yes — this is one of our strengths in Preston. We have styled Vietnamese, Ethiopian, Turkish, Lebanese, and Indian weddings in the area. Each culture brings unique requirements and we adapt our prop collection and styling approach accordingly." },
      { q: "Can you transform an industrial/warehouse venue in Preston?", a: "Absolutely. Warehouse-style venues are ideal for our draping packages. We soften raw concrete and exposed brick with flowing fabric, add warmth with festoon and fairy lighting, and create defined zones within open-plan spaces." },
      { q: "What is the average cost of wedding styling in Preston?", a: "Most Preston weddings we style range from $1,200 to $3,000 for full ceremony and reception. The variation depends on guest count, prop selection, and venue complexity. Ceremony-only starts from $650." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "brunswick",
    intro: "Brunswick weddings tend to be creative, personal, and unconventional — reflecting the suburb's artistic and progressive character. Couples here often choose non-traditional venues (cafes, art galleries, rooftops, community gardens) and want styling that feels curated rather than formulaic. iDo Events approaches Brunswick weddings with this in mind: we offer modular prop selections, asymmetric arch designs, dried floral arrangements, and vintage-inspired elements that suit the suburb's aesthetic. No two Brunswick weddings we style look the same.",
    popularProps: ["Rustic Arch Backdrop", "Festoon Light String", "White Plinth Set", "Welcome Sign on Easel"],
    venueNotes: "Brunswick Town Hall is heritage-listed — all installations must be freestanding with no wall contact. Merri Creek trail areas require council permits for ceremonies. Local cafes and restaurants often have tight access — we bring collapsible arches that fit through standard doorways.",
    setupNotes: "Brunswick is 15 minutes from our base — one of our closest service areas. Parking can be challenging on Sydney Road so we always identify rear access or permit zones in advance.",
    faqs: [
      { q: "Can you style a non-traditional wedding venue in Brunswick?", a: "Yes — we specialise in unconventional spaces. Cafes, galleries, backyards, rooftops, and parks all work. Our props are designed to be portable and freestanding, so we can style virtually any space without permanent fixtures." },
      { q: "Do you offer eco-friendly or sustainable styling options?", a: "Yes. We prioritise reusable props (which is inherently sustainable), offer potted plants as centrepieces, use dried florals, and can source beeswax candles and cloth napkins. Our hire model means nothing goes to landfill." },
      { q: "What is a realistic budget for a Brunswick wedding setup?", a: "Brunswick weddings typically range from $800 for a simple ceremony setup to $2,000 for full ceremony and intimate reception styling. Because venues here tend to be smaller and more characterful, you often need less to create a strong visual impact." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "footscray",
    intro: "Footscray has transformed into one of Melbourne's most exciting wedding destinations — its mix of industrial warehouse spaces, riverside parkland, and vibrant multicultural character creates endless styling possibilities. iDo Events works with Footscray couples to match their venue's personality: bold, large-scale installations for warehouse receptions; organic, flowing arrangements for riverside ceremonies; and culturally rich styling for celebrations that honour Vietnamese, Ethiopian, and East African traditions. The creative energy of this suburb inspires some of our most original work.",
    popularProps: ["Ceiling Draping Package", "Festoon Light String", "Balloon Garland Installation", "Backdrop Draping Set"],
    venueNotes: "Footscray Community Arts Centre has a raw industrial interior — draping and lighting transform it completely. The Substation allows setup the evening before for weekend weddings. Victoria University Conference Centre offers a more formal setting with built-in AV.",
    setupNotes: "Footscray is 10 minutes from the CBD and easily accessible. Warehouse venues often have generous loading docks. Street parking permits may be required — we confirm logistics in advance.",
    faqs: [
      { q: "Can you style a warehouse wedding in Footscray?", a: "Yes. Warehouses are our favourite canvas. We use ceiling-to-floor draping to create intimate zones, festoon lighting for warmth, and large balloon or floral installations as statement pieces. The raw aesthetic of Footscray warehouses provides incredible contrast." },
      { q: "Do you style Vietnamese weddings in Footscray?", a: "Yes. Footscray's Vietnamese community is one of Melbourne's largest and we have styled tea ceremonies and banquet receptions with traditional red and gold colour schemes, lantern installations, and dual-language signage." },
      { q: "What makes Footscray different for wedding styling?", a: "The raw, characterful venues mean less 'covering up' and more 'enhancing'. You get a moody, editorial aesthetic naturally — our styling amplifies that. Couples save money because the venue does half the visual work." },
    ],
  },
  {
    serviceSlug: "wedding-styling",
    suburbSlug: "sunshine",
    intro: "Sunshine and its surrounding suburbs — St Albans, Deer Park, Albion — are home to large Vietnamese, Filipino, and Pacific Islander communities who celebrate weddings with warmth, colour, and extended family. iDo Events provides wedding styling in Sunshine that accommodates large guest lists, cultural requirements, and venues that range from community halls to established function centres. We understand that in this part of Melbourne, a wedding might serve 300 guests across 30 tables — and every single one needs to look beautiful.",
    popularProps: ["Ceiling Draping Package", "Floral Centrepiece Set", "Gold Hexagonal Arch", "Balloon Garland Installation"],
    venueNotes: "Sunshine Harvester Works is a heritage venue that requires freestanding installations. Hampshire Road venues vary in size — we adjust our team accordingly. Brimbank Community Centre offers affordable hire with flexible access.",
    setupNotes: "Sunshine is in our western corridor, 20 minutes via the Western Ring Road. Large-scale setups (25+ tables) require a team of 3–4 and a 5-hour bump-in window.",
    faqs: [
      { q: "Can you handle weddings with 25+ tables in Sunshine?", a: "Yes. Large-scale weddings are common in Sunshine and we are fully equipped. We bring pre-assembled centrepieces and work systematically through table styling to ensure consistency across all 25–35 tables." },
      { q: "Do you offer bulk pricing for large weddings?", a: "Yes. For weddings over 20 tables, we offer scaled centrepiece pricing. The per-table cost decreases as table count increases. Contact us for a custom large-wedding quote." },
      { q: "Can you incorporate Filipino or Pacific Islander traditions?", a: "Absolutely. We have styled Tongan, Samoan, and Filipino weddings in Melbourne's west. We are always happy to learn about your cultural traditions and incorporate them into the styling — whether that means specific colour requirements, ceremonial elements, or family seating arrangements." },
    ],
  },

  // === BIRTHDAY PROP HIRE (sample entries for variety) ===
  {
    serviceSlug: "birthday-prop-hire",
    suburbSlug: "point-cook",
    intro: "Point Cook families love celebrating birthdays with style — and with the suburb's large proportion of young families, first birthdays, toddler parties, and milestone celebrations are in constant demand. iDo Events provides birthday prop hire across Point Cook with themed setups that turn community centres, backyards, and park shelters into party wonderlands. Our balloon garlands, custom backdrops, and dessert table styling take the stress out of party planning while giving you an event that looks professionally designed.",
    popularProps: ["Balloon Garland Installation", "Dessert Table Styling", "Neon Sign Custom Text", "White Plinth Set"],
    venueNotes: "Point Cook Community Learning Centre has multiple rooms suited to different party sizes. Eagle Stadium birthday party rooms are compact — we use vertical styling (tall balloon garlands, plinths) to maximise impact in small spaces.",
    setupNotes: "For birthday parties, we arrive 1.5–2 hours before party start time. Most Point Cook birthday setups are complete within 90 minutes. Pack-down happens during or after the party — your choice.",
    faqs: [
      { q: "How much does birthday styling cost in Point Cook?", a: "Birthday prop hire in Point Cook starts from $350 for a balloon garland and backdrop combo. Full party packages with dessert table styling, signage, and themed props start from $550. All prices include delivery, setup, and pack-down." },
      { q: "Do you do first birthday styling in Point Cook?", a: "Yes — first birthdays are our most popular birthday booking. We create custom colour-themed setups with balloon garlands, age signage, cake table styling, and photo backdrop areas. Popular themes include teddy bears, safari, and pastels." },
      { q: "Can you set up in a park in Point Cook?", a: "Yes. We regularly style at Sanctuary Lakes parks and Point Cook reserves. We bring freestanding frames, battery-operated lights, and weighted balloon installations that work outdoors. Please confirm the specific park shelter or area you have booked." },
    ],
  },
  {
    serviceSlug: "birthday-prop-hire",
    suburbSlug: "tarneit",
    intro: "Tarneit's young, growing community means birthday parties happen every weekend — and parents here want their celebrations to look incredible without spending hours on DIY. iDo Events delivers complete birthday prop hire setups to homes, parks, and community centres across Tarneit. Whether your child wants a princess palace, a dinosaur jungle, or a simple pastel dream, we build it, set it up, and take it all away when the party is done. No Pinterest fails, no stress, just a beautiful party.",
    popularProps: ["Balloon Garland Installation", "Dessert Table Styling", "Gold Letter Light-Up", "Backdrop Draping Set"],
    venueNotes: "Tarneit Rise Community Centre has a bright, airy interior ideal for birthday styling. Many Tarneit families host at home — backyards and garages are both excellent party spaces when styled.",
    setupNotes: "Tarneit is core to our western service area. We arrive 90 minutes before party time for standard birthday setups. Backyard parties require clear space of 3m × 2m minimum for backdrop installations.",
    faqs: [
      { q: "What age birthday parties do you cater for in Tarneit?", a: "All ages — from first birthdays through to 50th and 60th milestones. Our most common bookings are 1st, 5th, 10th, 18th, 21st, and 30th birthdays. Each age group gets a tailored approach and appropriate prop selection." },
      { q: "Can you do a balloon garland at my home in Tarneit?", a: "Absolutely. Balloon garlands are our most popular birthday prop. We install them on frames (not attached to walls) in living rooms, garages, pergolas, and backyards. Standard garlands are 3m; we also do 5m and 7m for larger spaces." },
      { q: "Do you provide themed birthday setups?", a: "Yes. Popular themes include safari, unicorn, superhero, princess, Bluey, dinosaur, and custom colour palettes. We also create elegant non-themed setups using colour combinations. Tell us the theme or colours and we will design accordingly." },
    ],
  },
  {
    serviceSlug: "birthday-prop-hire",
    suburbSlug: "craigieburn",
    intro: "Craigieburn birthday parties reflect the area's family-focused community — celebrations here tend to be large, warm, and centred around food, family, and fun. iDo Events provides birthday prop hire across Craigieburn that handles the visual wow-factor while you focus on hosting. Our setups range from simple balloon garlands and signage for casual backyard parties to full venue transformations with draping, lighting, and themed zones for milestone celebrations.",
    popularProps: ["Balloon Garland Installation", "Neon Sign Custom Text", "Dessert Table Styling", "Ceiling Draping Package"],
    venueNotes: "Hume Global Learning Centre has affordable party room hire and our styling elevates the space significantly. Craigieburn Golf Club offers indoor/outdoor options for milestone birthdays.",
    setupNotes: "Craigieburn setups require an extra 15 minutes travel time via the Hume. We schedule arrivals 2 hours before party start for full packages. Street access in newer estates is generally good.",
    faqs: [
      { q: "Do you do adult birthday styling in Craigieburn?", a: "Yes. 18th, 21st, 30th, 40th, and 50th birthdays are popular in Craigieburn. Adult milestone setups include neon signs, elegant balloon installations, cocktail-style furniture, and sophisticated colour palettes." },
      { q: "How far in advance should I book birthday styling?", a: "2–4 weeks is ideal. Peak periods (school holidays, November–December) book up faster. Last-minute bookings (under 1 week) may be possible depending on availability — contact us to check." },
      { q: "Can you style a birthday at a park in Craigieburn?", a: "Yes. We style at local parks including Yallambie Park and open reserves. All our outdoor installations are freestanding and wind-resistant. We recommend booking a park shelter for reliable setup conditions." },
    ],
  },

  // === MEHNDI & NIKKAH STYLING ===
  {
    serviceSlug: "mehndi-nikkah-styling",
    suburbSlug: "tarneit",
    intro: "Tarneit has one of Melbourne's largest South Asian communities, and mehndi nights and nikkah ceremonies are celebrated here with the colour, joy, and family involvement they deserve. iDo Events provides specialised mehndi and nikkah styling across Tarneit — vibrant stage setups draped in marigold and rich fabrics, colourful seating arrangements for the bride's mehfil, and photo areas that capture the energy of the night. We understand that these events are about family, music, and tradition — our styling creates the visual frame that holds it all together.",
    popularProps: ["Ceiling Draping Package", "Backdrop Draping Set", "Floral Centrepiece Set", "Gold Hexagonal Arch"],
    venueNotes: "Wyndham Cultural Centre has the ceiling height needed for dramatic draping in traditional colour schemes. Many Tarneit families host mehndi at home with marquee hire — we style inside marquees with full lighting.",
    setupNotes: "Mehndi setups require bold colour matching. We discuss exact fabric tones during consultation. Setup typically requires 3–4 hours for full stage + seating area styling.",
    faqs: [
      { q: "What is included in your mehndi night styling package?", a: "Our mehndi packages include a bride's stage setup with backdrop, seating arrangement, floor cushion area for guests, lighting, and photo area. Prices start from $1,200 for a standard home setup and from $1,800 for a venue transformation." },
      { q: "Can you match specific colours for dholki and mehndi themes?", a: "Yes. We carry draping fabric in 30+ colour options including traditional mehndi colours — yellow, orange, green, fuchsia, and gold. We colour-match to your outfit or theme during consultation." },
      { q: "Do you provide marigold decorations for mehndi?", a: "Yes. We supply artificial marigold garlands and strings that look authentic and last throughout the event without wilting. Real marigold options are available on request with additional lead time." },
    ],
  },
  {
    serviceSlug: "mehndi-nikkah-styling",
    suburbSlug: "craigieburn",
    intro: "Craigieburn's growing Pakistani, Afghan, and Indian communities celebrate nikkah ceremonies and mehndi nights with families of 100–300 guests. iDo Events brings culturally informed styling to these celebrations — understanding the importance of the stage setup, the colour coordination between bride and decor, and the photo-ready aesthetics that families expect. Whether your nikkah is a formal daytime ceremony or your mehndi is an evening of dance and colour, we create the backdrop that makes every moment photograph beautifully.",
    popularProps: ["Ceiling Draping Package", "Gold Hexagonal Arch", "Floral Tower Arrangement", "Backdrop Draping Set"],
    venueNotes: "Vogue Ballroom Craigieburn has staged area ideal for nikkah ceremony positioning. Community halls along Barry Road accommodate large guest lists with flexible setup.",
    setupNotes: "Nikkah ceremonies often require daytime setup starting from 7am. Mehndi nights are typically evening events — we set up from 2pm. We coordinate with catering and DJ teams for spatial planning.",
    faqs: [
      { q: "Can you create a nikkah stage setup in Craigieburn?", a: "Yes. Our nikkah stage packages include a raised or ground-level bride and groom seating area with elegant backdrop, side draping, floral accents, and Quran stand styling. We design to complement the bride's outfit colours." },
      { q: "How much does mehndi styling cost in Craigieburn?", a: "Mehndi packages in Craigieburn start from $1,200 for a standard stage + backdrop setup. Full packages with seating area styling, lighting, and entrance features range from $1,800–$3,500 depending on guest count and venue size." },
      { q: "Do you style walima receptions as well?", a: "Yes. We provide complete walima styling including centrepieces, ceiling draping, entrance features, and bridal table/stage setups. Many families book us for all three events (mehndi, nikkah, walima) at a combined rate." },
    ],
  },
  {
    serviceSlug: "mehndi-nikkah-styling",
    suburbSlug: "dandenong",
    intro: "Dandenong's Afghan and Pakistani communities celebrate mehndi nights and nikkah ceremonies with the richness and scale they deserve. iDo Events is the styling partner these families trust because we understand the cultural weight of these events — the colour coordination with the bride's jora, the importance of the stage presentation, and the need for every corner to be photo-ready for the dozens of family photographers capturing every angle. Our Dandenong mehndi setups are vibrant, generous, and designed to handle 200+ guests while keeping the bride as the visual centrepiece.",
    popularProps: ["Ceiling Draping Package", "Backdrop Draping Set", "Floral Tower Arrangement", "Gold Hexagonal Arch"],
    venueNotes: "Palm Plaza on Foster Street is a primary Afghan wedding and mehndi venue — we coordinate with their team regularly. Afghan Adana and Dandenong RSL also host mehndi and nikkah events.",
    setupNotes: "Dandenong mehndi setups are often large-scale. We bring a team of 3 for events over 150 guests. Setup begins 4–5 hours before guests arrive. We work around catering teams who are often setting up simultaneously.",
    faqs: [
      { q: "Do you style Afghan mehndi nights in Dandenong?", a: "Yes. Afghan mehndi styling is one of our specialities in Dandenong. We create elaborate stage setups with traditional colour palettes (green, gold, red), floral towers, and full ceiling draping. We understand the scale and formality these events require." },
      { q: "Can you coordinate with the bride's dress colour?", a: "Always. We request a photo or fabric swatch of the bride's outfit during consultation and match our draping, floral selections, and accent colours accordingly. The bride and the decor should tell one visual story." },
      { q: "What size mehndi events do you handle in Dandenong?", a: "From intimate gatherings of 50 to large-scale celebrations of 300+. Our pricing scales with event size. For large Dandenong mehndi events, we bring our full team and additional prop inventory to ensure no detail is missed." },
    ],
  },
  {
    serviceSlug: "mehndi-nikkah-styling",
    suburbSlug: "epping",
    intro: "Epping and the surrounding northern suburbs are home to a significant Indian and Pakistani diaspora community that celebrates mehndi and nikkah with full cultural authenticity. iDo Events provides styling for these events that balances traditional requirements with contemporary design — bright marigold installations alongside sleek gold arches, traditional floor seating alongside modern plinth arrangements. We know that every family has their own way of doing things, and we adapt accordingly.",
    popularProps: ["Gold Hexagonal Arch", "Ceiling Draping Package", "Floral Centrepiece Set", "Balloon Garland Installation"],
    venueNotes: "Le Montage Epping handles South Asian weddings regularly and has good stage infrastructure. Northern Golf Club offers a more intimate setting for smaller nikkah ceremonies.",
    setupNotes: "Epping mehndi setups start from 2pm for evening events. We coordinate with dholak/DJ teams to ensure our installations do not interfere with performance areas.",
    faqs: [
      { q: "Do you provide sangeet and mehndi combined packages?", a: "Yes. Many Epping families combine sangeet and mehndi on one night. We create a stage setup that works for both — the mehndi ceremony seating for early evening and a clear performance/dance area with backdrop for the sangeet portion." },
      { q: "Can you style for a small nikkah at home in Epping?", a: "Absolutely. Home nikkah ceremonies are beautiful and intimate. We provide a compact stage setup, backdrop, and floor seating arrangement that works in living rooms or backyards. Starting from $800." },
      { q: "What traditional elements do you include?", a: "We supply marigold garlands, coloured draping (yellow, orange, green, pink, red), cushion seating areas, decorative thalis, and fresh or silk floral arrangements in traditional styles. Every element is discussed and approved during consultation." },
    ],
  },
  {
    serviceSlug: "mehndi-nikkah-styling",
    suburbSlug: "preston",
    intro: "Preston's multicultural character means mehndi nights and nikkah ceremonies are becoming increasingly common in the area's function halls and community spaces. iDo Events brings authentic South Asian event styling to Preston — understanding that these celebrations require specific spatial layouts (stage positioning, family seating, dance floor proximity) and colour coordination that respects cultural significance while creating stunning visual impact.",
    popularProps: ["Backdrop Draping Set", "Ceiling Draping Package", "Gold Hexagonal Arch", "Floral Tower Arrangement"],
    venueNotes: "Preston City Hall has the space and ceiling height for elaborate draping installations. Bell Tower Function Centre accommodates large guest lists with multiple room configurations.",
    setupNotes: "Preston is accessible and central. We arrive 3–4 hours before for mehndi/nikkah setups. Loading dock access at city hall makes large-prop delivery straightforward.",
    faqs: [
      { q: "Can you style both mehndi and nikkah in Preston?", a: "Yes. Many families book us for both events, often at the same venue on consecutive days. We offer package pricing for multi-event bookings that reduces the per-event cost by 10–15%." },
      { q: "Do you provide lighting for mehndi nights?", a: "Yes. Lighting is crucial for mehndi atmosphere. We supply fairy light canopies, uplighting in your colour scheme, and spotlight features for the bride's stage. All battery-operated options are available for venues with limited power points." },
      { q: "How do you handle the dholak/music area?", a: "We plan the spatial layout during consultation so the music area, bride's stage, guest seating, and photo zone all work together. We leave clear sightlines between the stage and performance area." },
    ],
  },

  // === BABY SHOWER STYLING ===
  {
    serviceSlug: "baby-shower-styling",
    suburbSlug: "point-cook",
    intro: "Baby showers in Point Cook are beautiful celebrations of new life, often hosted at home or in local community spaces with close family and friends. iDo Events creates soft, elegant baby shower styling across Point Cook — from balloon arches in gender-reveal colours to beautifully styled dessert tables and photo backdrops. Whether you are planning a surprise shower or organising your own celebration, we handle the visual details so you can focus on the joy.",
    popularProps: ["Balloon Garland Installation", "Dessert Table Styling", "White Plinth Set", "Backdrop Draping Set"],
    venueNotes: "Point Cook Community Learning Centre has a bright, windowed room perfect for daytime baby showers. Many families host at home — living rooms, dining areas, and undercover outdoor spaces all work beautifully.",
    setupNotes: "Baby shower setups typically take 60–90 minutes. We arrive early enough to have everything perfect before the mum-to-be arrives (if it is a surprise) or before guests begin arriving.",
    faqs: [
      { q: "How much does baby shower styling cost in Point Cook?", a: "Baby shower styling in Point Cook starts from $350 for a balloon garland and backdrop combo. Full packages with dessert table, signage, and additional props start from $550. Gender reveal additions (confetti box, balloon pop) add $80–$150." },
      { q: "Can you set up while keeping it a surprise?", a: "Yes. For surprise showers, we coordinate with the organiser on timing. We set up while the guest of honour is elsewhere and ensure everything is camera-ready before their arrival." },
      { q: "Do you provide gender reveal props?", a: "Yes. We offer balloon-pop reveals (black balloon filled with pink or blue confetti), confetti cannons, and colour-reveal backdrops. We set these up discreetly so they are ready when the moment comes." },
    ],
  },
  {
    serviceSlug: "baby-shower-styling",
    suburbSlug: "glen-waverley",
    intro: "Glen Waverley baby showers tend toward refined elegance — soft colour palettes, quality florals, and thoughtful details that create a warm, welcoming atmosphere for celebrating new arrivals. iDo Events designs baby shower setups in Glen Waverley that match this aesthetic: pastel balloon garlands with foliage accents, linen-draped dessert tables, and delicate signage that coordinates with your chosen theme. These are the celebrations your guests will photograph and remember.",
    popularProps: ["Balloon Garland Installation", "White Plinth Set", "Dessert Table Styling", "Welcome Sign on Easel"],
    venueNotes: "Glen Waverley Library event space offers a contemporary setting for baby showers. Local cafes along Kingsway are also popular choices — we style within their existing aesthetic.",
    setupNotes: "Glen Waverley baby showers are typically 60-minute setups. We bring all props pre-prepared and assemble on-site. Balloon garlands are inflated off-site and transported ready to hang.",
    faqs: [
      { q: "What baby shower themes work best in Glen Waverley?", a: "Popular Glen Waverley themes include soft pastels (peach, sage, lavender), teddy bear/woodland, botanical greenery, and 'little star'. We also do bolder themes on request. Share your colour palette and we will design a cohesive setup." },
      { q: "Can you style a baby shower at a cafe in Glen Waverley?", a: "Yes. We work with several local cafes and restaurants. We arrive during their quiet period, set up the styling elements, and pack down after your event. Most cafes allow 2-hour exclusive bookings." },
      { q: "Do you offer boho-style baby shower setups?", a: "Yes. Boho baby showers are popular — featuring dried florals, rattan props, natural textures, and earthy tones. We have a dedicated boho prop collection including pampas grass, macrame, and natural timber elements." },
    ],
  },

  // === ENGAGEMENT PARTY STYLING ===
  {
    serviceSlug: "engagement-party-styling",
    suburbSlug: "doncaster",
    intro: "Doncaster engagement parties celebrate love with elegance — the suburb's established community values quality styling that creates a sophisticated atmosphere. iDo Events provides engagement party setups across Doncaster that focus on the details: a stunning arch as the couple's photo backdrop, elegant table centrepieces, personalised neon signs with the couple's names, and ambient lighting that transitions the space from afternoon cocktails to evening celebration.",
    popularProps: ["Gold Hexagonal Arch", "Neon Sign Custom Text", "Floral Centrepiece Set", "Fairy Light Curtain"],
    venueNotes: "Manningham Function Centre offers dedicated engagement party packages with setup access from 10am. Many Doncaster families host at home in spacious living/dining areas or undercover outdoor entertaining spaces.",
    setupNotes: "Engagement party setups in Doncaster typically take 2 hours. We position the main backdrop/arch first, then build the surrounding elements (table styling, signage, lighting) around it.",
    faqs: [
      { q: "What does engagement party styling include?", a: "Our engagement packages include a feature backdrop (arch or draping), personalised signage, and optional table styling. Starting from $650. Add-ons include neon signs ($150), balloon garlands ($250), and dessert table styling ($200)." },
      { q: "Can you create a photo opportunity area?", a: "Yes. This is standard in our engagement packages. We create a dedicated photo backdrop area where guests can take photos throughout the evening. The arch or feature wall doubles as the couple's main photo setting." },
      { q: "Do you style for Greek engagements in Doncaster?", a: "Yes. Doncaster has a vibrant Greek community and we have styled many engagement parties that incorporate traditional elements — olive branch accents, blue and white colour palettes, and abundant florals." },
    ],
  },
  {
    serviceSlug: "engagement-party-styling",
    suburbSlug: "brunswick",
    intro: "Brunswick engagement parties have their own flavour — relaxed, creative, and often held in unconventional spaces like local bars, rooftops, or shared community gardens. iDo Events brings styling to these celebrations that feels curated rather than cookie-cutter: asymmetric floral installations, hand-lettered signage, festoon-lit corners, and vintage props that match the suburb's character. We understand that Brunswick couples want their engagement to feel like them, not like a template.",
    popularProps: ["Rustic Arch Backdrop", "Festoon Light String", "Welcome Sign on Easel", "White Plinth Set"],
    venueNotes: "Brunswick bars and cafes on Sydney Road often have compact spaces — we bring slim-profile installations. Merri Creek areas allow outdoor setups with council permits. Brunswick Town Hall offers a more formal indoor option.",
    setupNotes: "Brunswick venues often have tight access (narrow doors, stairs). We bring collapsible props and assemble on-site. Setup is typically 90 minutes for engagement parties.",
    faqs: [
      { q: "Can you style a casual engagement at a bar in Brunswick?", a: "Yes. Bar and pub engagements are popular here. We bring compact, impactful pieces — a small arch for photos, a neon sign, some greenery — that add styling without overwhelming the venue's existing character." },
      { q: "Do you do outdoor engagement setups along Merri Creek?", a: "Yes. We have styled picnic-style engagements along Merri Creek with low cushion seating, arch backdrops, and grazing display styling. Council permits are required for structures — we can advise on the process." },
      { q: "What is a good budget for a Brunswick engagement party?", a: "Brunswick engagements typically range from $450 for a simple arch and signage setup to $1,200 for full styling with lighting, props, and table details. The relaxed venues here often need less to look great." },
    ],
  },

  // === CORPORATE EVENT STYLING ===
  {
    serviceSlug: "corporate-event-styling",
    suburbSlug: "footscray",
    intro: "Footscray's warehouse and creative spaces are increasingly popular for corporate events — product launches, team celebrations, brand activations, and end-of-year parties. iDo Events provides corporate styling in Footscray that elevates these spaces with branded installations, statement backdrops, and curated prop arrangements. We work with event managers and marketing teams to ensure every styling element reinforces the brand story and creates shareable photo moments.",
    popularProps: ["Balloon Garland Installation", "Neon Sign Custom Text", "White Plinth Set", "Backdrop Draping Set"],
    venueNotes: "The Substation and Footscray Community Arts Centre offer raw, versatile spaces. Victoria University Conference Centre provides a more traditional setting. Industrial spaces along Whitehall Street suit brand activations.",
    setupNotes: "Corporate setups in Footscray often involve coordination with AV teams, caterers, and event managers. We work within their run-sheets and adjust timing accordingly. Setup is typically 3–4 hours for corporate events.",
    faqs: [
      { q: "Can you incorporate brand colours into the styling?", a: "Yes. We match our prop selection — balloon colours, fabric tones, floral choices — to your brand palette. Provide us with hex codes or a brand guide and we will ensure visual consistency between your styling and brand identity." },
      { q: "Do you provide branded signage or backdrops?", a: "We provide the physical backdrop structure and styling. For custom-printed branded panels or logos, we work with printing partners and can manage the entire process. Lead time is typically 2 weeks for printed elements." },
      { q: "What is the minimum lead time for corporate events?", a: "2 weeks minimum for standard corporate styling. Custom-printed elements, large-scale installations, or bespoke props may require 3–4 weeks. Rush orders (under 1 week) are possible with a 20% surcharge." },
    ],
  },
  {
    serviceSlug: "corporate-event-styling",
    suburbSlug: "dandenong",
    intro: "Dandenong's business district hosts corporate events ranging from product launches at local venues to team celebrations and community engagement events. iDo Events provides professional corporate event styling across Greater Dandenong with a focus on creating polished, on-brand environments that impress clients and motivate teams. Our corporate packages are designed for efficiency — quick setup, maximum impact, and clean pack-down that respects business timelines.",
    popularProps: ["White Plinth Set", "Balloon Garland Installation", "Welcome Sign on Easel", "Festoon Light String"],
    venueNotes: "Drum Theatre Dandenong offers a sophisticated setting for corporate presentations and launches. Dandenong RSL function rooms accommodate team events and end-of-year parties.",
    setupNotes: "Corporate events in Dandenong typically have strict timelines. We arrive during the venue's designated setup window and work efficiently within it. Our team is accustomed to coordinating with catering and AV providers.",
    faqs: [
      { q: "Do you style product launches in Dandenong?", a: "Yes. Product launches require a blend of branding and visual impact. We create feature displays using plinths, custom signage, and balloon or floral installations that draw attention to your product while looking premium and professional." },
      { q: "Can you handle same-day setup and pack-down for corporate events?", a: "Yes. Most corporate events are single-day. We set up 2–3 hours prior, remain on call during the event if needed, and pack down immediately after. Everything is gone before the venue's deadline." },
      { q: "Do you provide quotes for recurring corporate events?", a: "Yes. We offer retainer pricing for businesses that host regular events (monthly team celebrations, quarterly launches). This includes priority booking, reduced per-event pricing, and a dedicated point of contact." },
    ],
  },

  // === BRIDAL SHOWER SETUP ===
  {
    serviceSlug: "bridal-shower-setup",
    suburbSlug: "glen-waverley",
    intro: "Bridal showers in Glen Waverley are elegant, intimate celebrations — usually hosted at a home, cafe, or boutique venue with the bride's closest circle. iDo Events creates bridal shower styling that feels luxurious without being over-the-top: think soft colour palettes, beautiful balloon installations, a styled gift table, and a photo area that captures the joy of this pre-wedding milestone. We handle the aesthetics so the bridesmaids can focus on the surprises.",
    popularProps: ["Balloon Garland Installation", "Welcome Sign on Easel", "White Plinth Set", "Dessert Table Styling"],
    venueNotes: "Local cafes along Kingsway and Springvale Road are popular bridal shower venues. High Tea venues in the area work beautifully with our styling additions. Home celebrations in Glen Waverley typically have generous entertaining spaces.",
    setupNotes: "Bridal shower setups take 60–90 minutes. For surprise events, we coordinate arrival timing with the organiser. We bring everything pre-prepared to minimise noise and setup disruption.",
    faqs: [
      { q: "What does bridal shower styling include?", a: "Our bridal shower packages include a balloon installation (arch or garland), a welcome sign, and a feature piece (plinth arrangement or photo backdrop). Starting from $400. Dessert table styling, grazing display, and additional props are available as add-ons." },
      { q: "Can you style a bridal high tea in Glen Waverley?", a: "Yes. We add styling layers to high tea venues — a feature balloon installation, personalised signage, and table accents that complement the existing setting without overwhelming it." },
      { q: "How many guests do your bridal shower setups suit?", a: "Our standard packages suit gatherings of 10–30 guests. For larger bridal showers, we scale up with additional balloon installations, table centrepieces, and a more expansive photo area." },
    ],
  },
  {
    serviceSlug: "bridal-shower-setup",
    suburbSlug: "point-cook",
    intro: "Point Cook bridal showers bring together the bride's inner circle for an afternoon of celebration before the big day. iDo Events provides complete bridal shower styling across Point Cook — from delicate balloon arches in the bride's wedding colours to personalised signage and Instagram-worthy photo corners. Whether you are hosting at home, at a local cafe, or in a community centre, we create a polished, cohesive setup that makes the bride feel special and gives guests beautiful photo opportunities.",
    popularProps: ["Balloon Garland Installation", "Neon Sign Custom Text", "Dessert Table Styling", "White Plinth Set"],
    venueNotes: "Point Cook cafes and the Sanctuary Lakes Club lounge area both work well for bridal showers. Home setups in living rooms and covered patios are our most common Point Cook bridal shower venue.",
    setupNotes: "We arrive 90 minutes before guest arrival for bridal showers. If it is a surprise, we coordinate with the maid of honour on timing and access. All props are pre-prepared for quiet, efficient assembly.",
    faqs: [
      { q: "Can the bridal shower match the wedding colour scheme?", a: "Absolutely. Many bridesmaids request this. Share the wedding colour palette with us and we will design the bridal shower styling to complement it — a beautiful preview of the wedding aesthetics." },
      { q: "Do you provide games or activity props?", a: "We provide decorative props and styling. For games and activities, we can supply a styled 'advice card' station, a 'date night jar', or a ring-hunt display as add-ons. These start from $50 each." },
      { q: "What is the difference between bridal shower and hens party styling?", a: "Bridal showers tend to be elegant daytime events (pastels, florals, afternoon tea aesthetic). Hens parties are evening celebrations with bolder styling — neon signs, gold and black palettes, cocktail-style setups. We do both." },
    ],
  },
];

/**
 * Get content for a specific service × suburb combination.
 * Returns undefined if no specific content exists (for gradual rollout).
 */
export function getServiceSuburbContent(
  serviceSlug: string,
  suburbSlug: string
): ServiceSuburbContent | undefined {
  return SERVICE_SUBURB_CONTENT.find(
    (c) => c.serviceSlug === serviceSlug && c.suburbSlug === suburbSlug
  );
}

/**
 * Get all service-suburb combinations that have content.
 */
export function getAllServiceSuburbPairs(): { service: string; suburb: string }[] {
  return SERVICE_SUBURB_CONTENT.map((c) => ({
    service: c.serviceSlug,
    suburb: c.suburbSlug,
  }));
}
