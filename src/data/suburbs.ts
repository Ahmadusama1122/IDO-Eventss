export interface SuburbData {
  slug: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  intro: string;
  nearbySuburbs: string[];
  localVenues: string[];
  testimonial: { text: string; name: string; event: string };
}

export const SUBURBS: SuburbData[] = [
  {
    slug: "oakleigh",
    name: "Oakleigh",
    region: "South East",
    lat: -37.9003,
    lng: 145.0891,
    intro: `Oakleigh sits at the heart of Melbourne's south-east, a suburb that pulses with Hellenic heritage, bustling laneways, and a deep sense of community that makes every celebration here feel like it truly belongs. If you have ever strolled down Eaton Mall on a Saturday morning, you will understand the warmth that runs through this neighbourhood — and that same warmth is exactly what we channel into the events we style here. From intimate engagement dinners at local Greek restaurants to elaborate christening receptions in nearby function centres, IDO Events brings professional prop hire and event styling directly to Oakleigh families who want their milestones to look magazine-worthy without the stress.

What makes styling events in Oakleigh so rewarding is the rich cultural tapestry of the area. Many of our clients here are planning christenings that honour Orthodox traditions while embracing modern design, or first birthday celebrations that blend family customs with on-trend balloon installations and floral arrangements. We understand the importance of these details because we work in this community regularly, delivering setups to venues along Atherton Road, Warrigal Road, and throughout neighbouring Huntingdale and Clayton. Whether your event is at a local reception hall, a family home with a beautiful backyard, or a restaurant you have hired for the evening, our team handles the full delivery, setup, and pack-down so you can focus on your guests.

Our Oakleigh clients often tell us that having a local stylist who genuinely understands the area makes all the difference. We know the parking constraints around Eaton Mall, we know which venues have early access for bump-in, and we know how to style both compact indoor spaces and larger marquee setups in the surrounding streets of Oakleigh South and Hughesdale. From draping and fabric features to dessert table styling and signage, every element we bring is carefully curated to match your colour palette and vision. If you are planning a wedding, birthday, baby shower, or any celebration in the Oakleigh area, request a free quote and let us show you what is possible.`,
    nearbySuburbs: ["Clayton", "Huntingdale", "Carnegie", "Hughesdale", "Chadstone"],
    localVenues: ["Oakleigh Grammar Hall", "Le Montage Reception", "Santoni Pizza Restaurant", "Oakleigh RSL"],
    testimonial: {
      text: "IDO Events completely transformed our backyard in Oakleigh for our daughter's christening. Every detail was perfect, from the floral arch to the dessert table. Our family is still talking about it weeks later.",
      name: "Maria K.",
      event: "Christening in Oakleigh",
    },
  },
  {
    slug: "preston",
    name: "Preston",
    region: "North",
    lat: -37.7453,
    lng: 145.0155,
    intro: `Preston has undergone a remarkable transformation over the past decade, evolving from a quiet northern suburb into one of Melbourne's most vibrant and diverse communities — and the events we style here reflect that energy perfectly. With its mix of young families, long-time residents, and a thriving multicultural food scene along High Street, Preston is a suburb where celebrations are colourful, heartfelt, and always full of character. IDO Events is proud to be the go-to event styling and prop hire service for families across Preston, Reservoir, Thornbury, and the wider Darebin area.

One of the things we love about working in Preston is the sheer variety of events we are asked to create. One weekend we might be styling a modern minimalist engagement party in a converted warehouse space near Bell Station, and the next we are building an elaborate balloon installation for a child's birthday at a local park or community hall. The suburb's diversity means our clients bring us incredible inspiration — from Mediterranean-influenced colour palettes to bright, bold themes that reflect African, Middle Eastern, and South-East Asian traditions. We embrace every brief with the same attention to detail, sourcing premium props, custom signage, and floral arrangements that elevate your event from ordinary to unforgettable.

Preston's accessibility is another reason our team loves servicing this area. Situated along the South Moray rail line with excellent freeway access, it is easy for us to deliver and set up large-scale styling packages efficiently. We regularly work with venues along Plenty Road and High Street, as well as in private homes across Preston South, East Preston, and neighbouring Reservoir. Whether you need a simple backdrop and dessert table or a complete venue transformation with draping, centrepieces, and lighting, we handle everything end to end. Setup and pack-down are always included, so you never have to worry about the logistics on your special day.`,
    nearbySuburbs: ["Reservoir", "Thornbury", "Northcote", "Coburg", "Bundoora"],
    localVenues: ["Preston City Hall", "Bell Tower Function Centre", "All Nations Park", "Preston Shire Hall"],
    testimonial: {
      text: "We hired IDO Events for our son's first birthday in Preston and the setup was absolutely stunning. The balloon garland and backdrop matched our safari theme perfectly. Setup and cleanup were seamless.",
      name: "Ahmed & Fatima R.",
      event: "1st Birthday in Preston",
    },
  },
  {
    slug: "coburg",
    name: "Coburg",
    region: "North",
    lat: -37.7437,
    lng: 144.9656,
    intro: `Coburg is one of Melbourne's most characterful northern suburbs — a place where heritage architecture meets contemporary culture, where Sydney Road's eclectic shop fronts give way to leafy residential streets, and where families from all walks of life come together to celebrate life's biggest moments. IDO Events has styled dozens of events throughout Coburg and its neighbouring pockets of Pascoe Vale, Brunswick, and Fawkner, and we understand the unique blend of tradition and modernity that Coburg families bring to their celebrations.

Event styling in Coburg often reflects the suburb's multicultural identity. We work closely with families planning traditional Lebanese, Turkish, Italian, and Greek celebrations alongside clients who prefer clean, contemporary Scandinavian-inspired aesthetics or rustic boho themes. This diversity is something we genuinely celebrate in our work. Whether you are hosting a lavish wedding reception at a function hall on Sydney Road, an intimate baby shower at home near Merri Creek, or a milestone birthday at one of the local parks, IDO Events brings the same level of professionalism and creative vision to every project. Our prop hire catalogue includes everything from elegant plinths and floral towers to neon signs, letter lights, and balloon installations — all delivered, set up, and packed down by our team.

What sets us apart for Coburg clients is our understanding of the area's practical considerations. We know that parking along Sydney Road can be tight, that some of the beautiful period homes in the area have narrow hallways that require careful planning for large props, and that Coburg Lake Reserve is a popular spot that needs permits for styled events. We factor all of these details into our planning so that your event day runs smoothly from start to finish. If you are looking for a professional, reliable event stylist in the Coburg area who will treat your celebration with the care it deserves, get in touch for a free quote.`,
    nearbySuburbs: ["Brunswick", "Pascoe Vale", "Fawkner", "Thornbury", "Reservoir"],
    localVenues: ["Coburg Town Hall", "Coburg Lake Reserve", "Coburg Civic Centre", "Mercedes-Benz Function Centre"],
    testimonial: {
      text: "IDO Events styled our engagement party at a hall in Coburg and it looked like something out of a magazine. The draping, the flowers, the personalised signage — everything was flawless. Could not recommend them more highly.",
      name: "Sophie & Daniel M.",
      event: "Engagement Party in Coburg",
    },
  },
  {
    slug: "doncaster",
    name: "Doncaster",
    region: "East",
    lat: -37.7840,
    lng: 145.1267,
    intro: `Nestled in Melbourne's leafy eastern suburbs, Doncaster is a suburb defined by its elegant homes, manicured gardens, and a community that values quality and attention to detail in everything they do — including their celebrations. IDO Events has become a trusted name among Doncaster families looking for premium event styling and prop hire that matches the polished aesthetic of this beautiful area. From Doncaster Hill down to the tree-lined streets of Doncaster East and neighbouring Templestowe, we bring sophisticated, tailored styling to weddings, birthdays, christenings, and every occasion worth celebrating.

The events we style in Doncaster tend to lean towards elegance and refinement. Our clients here often gravitate towards soft, muted colour palettes — think champagne, ivory, sage, and dusty rose — paired with lush floral arrangements, quality fabric draping, and statement centrepieces. We have styled beautiful wedding receptions at local venues with sweeping views of the Dandenong Ranges, intimate christening luncheons in private dining rooms, and elaborate milestone birthdays in the generous backyards and entertaining areas that Doncaster homes are known for. Every setup is designed to complement the space and create an atmosphere that feels both luxurious and personal.

Beyond the aesthetics, our Doncaster clients appreciate that we handle every logistical detail. We coordinate delivery windows with venues and body corporates, we plan setups that work around existing landscaping and outdoor features, and we ensure that every prop and styling element is securely installed and safely removed at the end of the night. Doncaster's proximity to the Eastern Freeway and Doncaster Road makes it a straightforward area for our delivery team to service, and we regularly extend our reach to nearby Box Hill, Donvale, and Bulleen. If you are planning an event in Doncaster and want styling that reflects the calibre of this wonderful suburb, we would love to hear from you.`,
    nearbySuburbs: ["Templestowe", "Box Hill", "Donvale", "Bulleen", "Balwyn"],
    localVenues: ["Manningham Function Centre", "The Pines Function Centre", "Doncaster RSL", "Westerfolds Park"],
    testimonial: {
      text: "We wanted our wedding reception in Doncaster to feel timeless and elegant, and IDO Events delivered beyond our expectations. The floral installations and draping transformed the entire venue. Truly world-class styling.",
      name: "Jessica & Andrew L.",
      event: "Wedding in Doncaster",
    },
  },
  {
    slug: "epping",
    name: "Epping",
    region: "North",
    lat: -37.6500,
    lng: 145.0333,
    intro: `Epping has grown from a semi-rural fringe suburb into one of Melbourne's most dynamic northern communities, and the celebrations here match that energy. With new housing estates sitting alongside established family homes, a thriving town centre anchored by Pacific Epping, and easy access to the Hume Freeway and South Moray rail line, Epping is a suburb where families are building their lives and marking their milestones in style. IDO Events is proud to service Epping and the surrounding suburbs of South Morang, Mill Park, Lalor, and Wollert with professional event styling and prop hire that turns any venue into something spectacular.

What we find exciting about styling events in Epping is the wide range of spaces we get to work with. Some of our favourite setups have been in the generous open-plan living areas of newer homes in Aurora and Lyndarum estates, where we create stunning balloon arches, feature walls, and dessert table displays for birthdays and baby showers. We also regularly style events at local function centres, community halls, and restaurant private dining rooms throughout the area. Epping's multicultural community means we are frequently asked to style celebrations that honour Italian, Indian, Assyrian, and Arabic traditions, and we love the creative challenge of blending cultural elements with modern event design.

Our commitment to Epping clients goes beyond beautiful styling. We understand that many families in the northern suburbs are working to a budget, and we offer flexible packages that deliver maximum visual impact without unnecessary extras. Every package includes full delivery, professional setup, and pack-down after your event — you never have to worry about returning props or dismantling displays at the end of a long night. Whether you are hosting fifty guests or two hundred, in a backyard or a ballroom, IDO Events brings the same dedication to making your Epping celebration look and feel extraordinary.`,
    nearbySuburbs: ["South Morang", "Mill Park", "Lalor", "Wollert", "Thomastown"],
    localVenues: ["Epping Club", "Pacific Epping Function Room", "Epping Memorial Hall", "Lalor Living & Learning Centre"],
    testimonial: {
      text: "IDO Events styled our baby shower in Epping at home and it was absolutely magical. The pastel balloon garland and floral centrepieces were gorgeous. Everything was set up before guests arrived and packed away after — so easy.",
      name: "Priya S.",
      event: "Baby Shower in Epping",
    },
  },
  {
    slug: "craigieburn",
    name: "Craigieburn",
    region: "North",
    lat: -37.6000,
    lng: 144.9500,
    intro: `Craigieburn is one of Melbourne's fastest-growing suburbs, and the community here celebrates with a passion that is truly infectious. Situated at the northern edge of metropolitan Melbourne, just off the Hume Freeway, Craigieburn has blossomed into a thriving family-friendly area with excellent amenities, new schools, and a growing number of event venues that are perfect for everything from weddings to first birthdays. IDO Events is the leading event styling and prop hire service for Craigieburn families, and we are deeply familiar with the venues, homes, and community spaces throughout Craigieburn, Mickleham, Roxburgh Park, and Greenvale.

Styling events in Craigieburn is something our team genuinely enjoys because of the enthusiasm and warmth of the local community. Our Craigieburn clients are not afraid of bold choices — vibrant colour palettes, dramatic balloon installations, towering floral arrangements, and feature walls that make a real statement. We have styled spectacular Assyrian and Chaldean christenings, vibrant Indian and Sri Lankan birthday celebrations, elegant Turkish engagement parties, and classic Australian weddings all within the Craigieburn area. Each event is a reflection of the family's personality and heritage, and we take great pride in bringing those visions to life with precision and creativity.

One of the practical advantages of working in Craigieburn is the generous space that many homes and venues offer. Newer homes in estates like Highlands, Aston, and Cloverton often have large living areas and alfresco spaces that are ideal for styled events, and we have become experts at maximising these spaces with strategic prop placement, backdrops, and lighting. For larger gatherings, we work with local function centres and community halls that can accommodate hundreds of guests. Our full-service approach means we arrive hours before your event to set up, and we return after the celebration to pack everything down — leaving you free to enjoy every moment with your guests.`,
    nearbySuburbs: ["Roxburgh Park", "Mickleham", "Greenvale", "Donnybrook", "Broadmeadows"],
    localVenues: ["Craigieburn Club", "Highlands Community Hall", "Hume Global Learning Centre", "Roxburgh Park Community Centre"],
    testimonial: {
      text: "We had over 200 guests at our wedding reception in Craigieburn and IDO Events made the venue look absolutely incredible. The ceiling draping and table centrepieces were breathtaking. Worth every single dollar.",
      name: "Sara & George B.",
      event: "Wedding in Craigieburn",
    },
  },
  {
    slug: "point-cook",
    name: "Point Cook",
    region: "West",
    lat: -37.8892,
    lng: 144.7472,
    intro: `Point Cook is Melbourne's western jewel — a coastal suburb that has rapidly evolved into one of the most sought-after family-friendly communities in the city. With its proximity to the bay, modern housing estates, excellent schools, and a growing dining and retail scene centred around Saltwater Coast and Sanctuary Lakes, Point Cook is a suburb where young families are putting down roots and celebrating every milestone with style. IDO Events provides premium event styling and prop hire throughout Point Cook, Williams Landing, Laverton, and the broader Wyndham area, helping local families create celebrations that are as beautiful as the coastal sunsets this suburb is known for.

Event styling in Point Cook often draws on the suburb's contemporary aesthetic. Homes here tend to be modern, open-plan, and filled with natural light — which provides a wonderful canvas for our styling work. We frequently create setups featuring clean lines, neutral colour palettes accented with metallics or pastels, and organic floral arrangements that complement the bright, airy interiors. Our Point Cook clients love statement pieces like oversized balloon garlands, custom name signs, and elegant dessert table displays that photograph beautifully. For outdoor events, the nearby Point Cook Coastal Park and homestead grounds offer a stunning natural backdrop that we enhance rather than compete with.

Working in Point Cook requires an understanding of the suburb's layout and logistics. We know that traffic on the Princes Freeway and Point Cook Road can be heavy during peak times, so we plan our delivery and setup schedules accordingly to ensure we are always on time and ready well before your first guest arrives. Many of our clients here host events at home, taking advantage of their generous alfresco areas and landscaped backyards, while others choose local restaurants and function rooms that we have styled many times before. Whether it is a gender reveal, a wedding celebration, a corporate event, or a milestone birthday, IDO Events brings a level of professionalism and artistry that Point Cook families trust and recommend.`,
    nearbySuburbs: ["Williams Landing", "Laverton", "Werribee", "Hoppers Crossing", "Sanctuary Lakes"],
    localVenues: ["Saltwater Function Centre", "Sanctuary Lakes Club", "Eagle Stadium Function Room", "Point Cook Community Hall"],
    testimonial: {
      text: "IDO Events transformed our open-plan living area in Point Cook into the most beautiful baby shower setting. The balloon arch, the florals, the personalised touches — every guest was blown away. Absolutely flawless service.",
      name: "Emily T.",
      event: "Baby Shower in Point Cook",
    },
  },
  {
    slug: "werribee",
    name: "Werribee",
    region: "West",
    lat: -37.9000,
    lng: 144.6600,
    intro: `Werribee is the bustling heart of Melbourne's western growth corridor, a suburb that offers the perfect blend of heritage charm and modern convenience. With the Werribee River winding through town, historic Werribee Park and Mansion providing a grand backdrop, and a rapidly expanding city centre brimming with new dining and entertainment options, Werribee is a suburb that knows how to celebrate in style. IDO Events is the trusted event styling partner for families across Werribee, Hoppers Crossing, Wyndham Vale, and Tarneit, delivering beautifully designed celebrations that turn your vision into reality.

The event styling landscape in Werribee is wonderfully diverse. We have created romantic, garden-inspired wedding setups that draw on the elegance of Werribee Mansion and its surrounding parklands, as well as bold, colourful birthday celebrations in family homes and local halls that are full of energy and personality. Werribee's growing Indian, Filipino, and African communities bring incredible vibrancy to the events we style here, with rich colour palettes, intricate detailing, and a love of grand-scale celebrations that we find deeply inspiring. At the same time, many of our Werribee clients prefer pared-back, contemporary styling — sage greens, warm whites, and natural textures — that we execute with the same level of care and precision.

Werribee's position at the intersection of the Princes Freeway and the regional rail network makes it an accessible hub for guests travelling from across Melbourne, and our delivery team takes advantage of the same transport links to ensure smooth, punctual service every time. We are experienced in working with both the grand, established venues near Werribee Park and the modern function rooms and community spaces that are popping up throughout the suburb's newer precincts. Every IDO Events package in Werribee includes full delivery, professional setup, and complete pack-down, so the only thing you need to think about on the day is enjoying your celebration.`,
    nearbySuburbs: ["Hoppers Crossing", "Wyndham Vale", "Tarneit", "Point Cook", "Manor Lakes"],
    localVenues: ["Werribee Mansion", "Lancemore Mansion Hotel", "Wyndham Cultural Centre", "Werribee RSL"],
    testimonial: {
      text: "Our engagement party at a venue in Werribee was styled to perfection by IDO Events. The floral towers, the neon sign, and the draped ceiling created such a romantic atmosphere. Our guests thought we had hired a celebrity event planner!",
      name: "Jasmine & Marco D.",
      event: "Engagement Party in Werribee",
    },
  },
  {
    slug: "dandenong",
    name: "Dandenong",
    region: "South East",
    lat: -37.9875,
    lng: 145.2153,
    intro: `Dandenong is one of Melbourne's most culturally rich and vibrant suburbs, a place where over 150 nationalities come together and where celebrations are infused with the traditions, flavours, and aesthetics of communities from around the world. Located in the heart of Melbourne's south-east, Dandenong is a major commercial and cultural hub servicing a vast catchment area that includes Noble Park, Springvale, Keysborough, and Doveton. IDO Events has been styling celebrations throughout the Dandenong area for years, and we bring a deep understanding of the diverse needs of this remarkable community to every event we create.

What makes Dandenong a truly special area for event styling is the incredible diversity of celebrations we are invited to be part of. In a single month, our team might style an Afghan wedding reception with rich jewel tones and opulent draping, a Vietnamese first birthday with traditional red and gold accents alongside modern balloon installations, an Indian haldi ceremony overflowing with marigolds and turmeric-yellow details, and an Australian christening with soft pastels and elegant florals. This breadth of experience has made us exceptionally versatile stylists who can adapt to any cultural requirement, colour palette, or design aesthetic while maintaining the high production values that IDO Events is known for.

Dandenong's central location in the south-east, connected by the Monash Freeway, EastLink, and the Cranbourne-Pakenham rail line, means our delivery team can service events efficiently across the entire region. We work regularly with function centres along Thomas Street, community halls in Dandenong North, and restaurants and venues throughout the area. Many of our Dandenong clients also host celebrations at home, and we are experienced in creating showstopping setups in a variety of home layouts — from compact courtyards to large entertaining areas. Our all-inclusive service means you never have to worry about setup or pack-down, no matter the size or complexity of your event.`,
    nearbySuburbs: ["Noble Park", "Springvale", "Keysborough", "Doveton", "Dandenong North"],
    localVenues: ["Dandenong RSL", "Drum Theatre", "Dandenong Civic Centre", "Springvale Town Hall"],
    testimonial: {
      text: "IDO Events understood exactly what we wanted for our son's first birthday party in Dandenong. The theme, the colours, the balloon arch — everything was on point. They made the whole process stress-free and the results were amazing.",
      name: "Linh & Tuan N.",
      event: "1st Birthday in Dandenong",
    },
  },
  {
    slug: "cranbourne",
    name: "Cranbourne",
    region: "South East",
    lat: -38.0996,
    lng: 145.2834,
    intro: `Cranbourne sits at the southern edge of Melbourne's sprawling south-east corridor, a suburb that has grown enormously over the past two decades and now boasts a thriving community of young families who love to celebrate life's milestones with flair. Surrounded by the natural beauty of the Royal Botanic Gardens Cranbourne and the rolling green expanses of Casey Fields, Cranbourne offers a wonderful mix of suburban convenience and semi-rural charm that our team at IDO Events finds endlessly inspiring. We service Cranbourne, Clyde, Narre Warren, Berwick, and the wider City of Casey with premium event styling and prop hire that brings your celebration to life.

Event styling in Cranbourne is characterised by a growing appetite for professional, polished celebrations that rival anything you would find closer to the city. Our clients here are savvy, style-conscious, and know exactly what they want — whether that is a boho-chic baby shower with pampas grass and earthy tones, a glamorous 21st birthday with gold accents and a champagne tower, or a heartfelt christening celebration with hand-lettered signage and soft floral arrangements. We have watched the Cranbourne event scene mature significantly over the years, and we are proud to have played a role in raising the bar for styling in the outer south-east.

Cranbourne's newer estates, including Cranbourne East, Botanic Ridge, and Clyde North, feature modern homes with spacious living and entertaining areas that are perfect for styled home events. We have built an excellent working knowledge of these estates and their layouts, allowing us to plan our setups efficiently and make the most of the available space. For larger events, Cranbourne has a growing selection of function centres and community spaces that we have styled many times over. Our complete service covers delivery, setup, and pack-down, and we always arrive with ample time to ensure everything is picture-perfect before your first guest walks through the door. Reach out for a free quote and discover why Cranbourne families keep choosing IDO Events for their most important celebrations.`,
    nearbySuburbs: ["Narre Warren", "Berwick", "Clyde", "Clyde North", "Botanic Ridge"],
    localVenues: ["Casey Fields Function Room", "Cranbourne Turf Club", "Royal Botanic Gardens Cranbourne", "Cranbourne Community Hall"],
    testimonial: {
      text: "From our first conversation to the final pack-down, IDO Events was incredible. They styled our daughter's christening in Cranbourne with the most beautiful white and gold theme. The photos turned out absolutely stunning.",
      name: "Christina & Peter V.",
      event: "Christening in Cranbourne",
    },
  },
];
