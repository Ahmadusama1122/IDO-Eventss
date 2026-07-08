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
  {
    slug: "south-yarra",
    name: "South Yarra",
    region: "Inner South",
    lat: -37.8388,
    lng: 144.9926,
    intro: `South Yarra is one of Melbourne's most prestigious inner-city suburbs, known for its tree-lined boulevards, boutique shopping along Chapel Street and Toorak Road, and a social scene that attracts style-conscious Melbournians from every corner of the city. When it comes to celebrating life's milestones, South Yarra sets the bar high — and IDO Events is here to match that standard with premium event styling and prop hire that brings sophistication, warmth, and personality to every occasion.

The events we style in South Yarra reflect the suburb's refined aesthetic. Our clients here gravitate towards elegant, understated designs — think lush floral installations in muted tones, quality fabric draping, statement centrepieces, and carefully curated signage that feels luxurious without being overdone. We have styled beautiful engagement parties in rooftop apartments overlooking the Yarra, intimate birthday celebrations in heritage homes near Fawkner Park, and christening receptions at some of the area's finest restaurants and private dining rooms. Every detail is tailored to complement the space and create an atmosphere that feels effortlessly chic.

Our team is well-versed in the logistics of working in South Yarra's inner-city environment. We coordinate with building management for apartment access, plan setups that work within compact but beautifully appointed spaces, and ensure that every prop and installation is delivered and removed with minimal disruption. South Yarra's central location, connected by Toorak Road, Chapel Street, and the South Yarra train station, makes it one of the easiest suburbs for our delivery team to service. If you are planning an event in South Yarra and want styling that matches the elegance of this iconic suburb, request a free quote today.`,
    nearbySuburbs: ["Toorak", "Prahran", "Richmond", "Cremorne", "Windsor"],
    localVenues: ["Como House & Garden", "The Royce Hotel", "Carousel Albert Park", "Victoria Barracks Officers Mess"],
    testimonial: {
      text: "IDO Events styled our engagement dinner in South Yarra with the most beautiful floral arrangements and candlelight. It was intimate, elegant, and exactly what we envisioned. Our guests were blown away.",
      name: "Olivia & James W.",
      event: "Engagement Dinner in South Yarra",
    },
  },
  {
    slug: "south-melbourne",
    name: "South Melbourne",
    region: "Inner South",
    lat: -37.8316,
    lng: 144.9568,
    intro: `South Melbourne is a suburb that effortlessly blends industrial heritage with contemporary sophistication, making it one of Melbourne's most exciting locations for events and celebrations. From the iconic South Melbourne Market to the converted warehouses and modern apartments that line its streets, this inner-city neighbourhood offers a unique backdrop for every type of occasion. IDO Events brings professional event styling and prop hire to families and businesses across South Melbourne, Albert Park, Port Melbourne, and the surrounding bayside area.

What makes South Melbourne particularly appealing for event styling is the diversity of spaces available. We have styled events in stunning warehouse conversions with exposed brick and soaring ceilings, in sleek penthouse apartments with sweeping city views, and in intimate restaurant private dining rooms along Clarendon Street. The suburb's industrial-chic character lends itself beautifully to modern styling — think geometric structures, metallic accents, lush greenery, and clean-lined backdrops that make a statement without overwhelming the space. Our team is skilled at reading a room and creating styling that enhances rather than competes with the existing architecture.

South Melbourne's central location makes it incredibly convenient for both our team and your guests. With easy access from the CBD, St Kilda Road, and the Westgate Freeway, and ample parking around the market precinct, logistics are straightforward. We handle everything — delivery, setup, and pack-down — so whether you are hosting a baby shower for twenty or a corporate event for two hundred, you can focus entirely on your guests. Get in touch for a free quote and let us bring your South Melbourne celebration to life.`,
    nearbySuburbs: ["Albert Park", "Port Melbourne", "Southbank", "Middle Park", "St Kilda"],
    localVenues: ["South Melbourne Town Hall", "The Woolshed Pub", "Albert Park Yacht Club", "Carousel Albert Park"],
    testimonial: {
      text: "We hosted our daughter's first birthday in a warehouse venue in South Melbourne and IDO Events absolutely nailed the styling. The balloon installation and dessert table were stunning. So professional and easy to work with.",
      name: "Kate & Ben H.",
      event: "1st Birthday in South Melbourne",
    },
  },
  {
    slug: "narre-warren",
    name: "Narre Warren",
    region: "South East",
    lat: -37.9833,
    lng: 145.3000,
    intro: `Narre Warren is the vibrant heart of Melbourne's outer south-east, a suburb that has grown from a quiet country town into a thriving multicultural community where families celebrate every milestone with genuine enthusiasm and flair. Home to the bustling Westfield Fountain Gate shopping centre, surrounded by beautiful parklands, and connected by the Princes Freeway and Cranbourne-Pakenham rail line, Narre Warren offers an ideal setting for events of every size and style. IDO Events provides premium event styling and prop hire throughout Narre Warren, Narre Warren South, Berwick, and the wider City of Casey.

The celebrations we style in Narre Warren are as diverse as the community itself. We regularly create stunning setups for Samoan and Tongan christenings with bold floral arrangements and traditional elements, elegant Indian engagement parties with rich colour palettes and ornate detailing, classic Australian birthday parties with modern balloon installations, and everything in between. Our team approaches every brief with cultural sensitivity and creative enthusiasm, ensuring that your event reflects your family's traditions while incorporating contemporary styling trends that make the celebration truly memorable.

Narre Warren's newer housing estates feature spacious homes with generous entertaining areas that are perfect for styled home events, and the suburb also boasts several excellent function centres and community halls that we have styled many times. Our all-inclusive service covers delivery, professional setup, and complete pack-down, so you never have to worry about the logistics. We arrive well before your guests and return after the celebration to clear everything away. If you are planning a wedding, birthday, baby shower, christening, or any celebration in the Narre Warren area, reach out for a free quote and discover why Casey families trust IDO Events.`,
    nearbySuburbs: ["Berwick", "Cranbourne", "Hallam", "Endeavour Hills", "Hampton Park"],
    localVenues: ["Fountain Gate Hotel", "Casey Civic Centre", "Bunjil Place", "Narre Warren Mechanics Hall"],
    testimonial: {
      text: "IDO Events styled our son's christening in Narre Warren and it was absolutely beautiful. The white and gold theme was executed perfectly, and the team was so respectful of our cultural traditions. Highly recommend.",
      name: "Sione & Ana M.",
      event: "Christening in Narre Warren",
    },
  },
  {
    slug: "berwick",
    name: "Berwick",
    region: "South East",
    lat: -38.0333,
    lng: 145.3500,
    intro: `Berwick is one of Melbourne's most charming south-eastern suburbs, a place where heritage village character meets modern family living. With its beautiful tree-lined High Street, historic Akoonah Park, and a community that takes pride in celebrating life's important moments, Berwick is a suburb where event styling is genuinely appreciated. IDO Events brings professional prop hire and event styling to families throughout Berwick, Beaconsfield, Officer, and the surrounding Casey-Cardinia corridor.

The events we style in Berwick often reflect the suburb's blend of traditional values and contemporary taste. Many of our clients here are planning milestone celebrations — weddings at heritage venues that require styling to complement period architecture, significant birthday celebrations in beautifully appointed homes, and christenings that balance classic elegance with modern design elements. Berwick families tend to have a clear vision for their events, and we love working collaboratively to bring those visions to life with precision, quality props, and thoughtful attention to every detail.

What makes servicing Berwick particularly rewarding is the strong sense of community in the area. Many of our clients come through word-of-mouth referrals from family and friends we have previously styled for, and we take that trust seriously. We arrive early, set up meticulously, and pack down quietly after your event so that your entire experience is seamless. Berwick's location along the Princes Freeway and close to Beaconsfield station makes it easily accessible for our delivery team. Whether you are planning an intimate gathering at home or a large reception at a local venue, IDO Events delivers beautiful, stress-free event styling every time.`,
    nearbySuburbs: ["Narre Warren", "Officer", "Beaconsfield", "Clyde North", "Pakenham"],
    localVenues: ["Berwick Church of Christ Hall", "Akoonah Park", "Cardinia Cultural Centre", "Berwick Inn"],
    testimonial: {
      text: "IDO Events styled our 40th birthday party in Berwick and it was magazine-worthy. The floral centrepieces and backdrop were gorgeous, and the setup was done so quickly and professionally. Cannot fault them.",
      name: "Rachel T.",
      event: "40th Birthday in Berwick",
    },
  },
  {
    slug: "pakenham",
    name: "Pakenham",
    region: "South East",
    lat: -38.0667,
    lng: 145.4833,
    intro: `Pakenham is one of Melbourne's fastest-growing outer south-east suburbs, a community that is rapidly expanding with new families, new estates, and a vibrant local culture that loves to celebrate. Positioned at the gateway to West Gippsland with the stunning backdrop of the Dandenong Ranges nearby, Pakenham offers a unique blend of semi-rural charm and modern suburban convenience. IDO Events is proud to bring professional event styling and prop hire to families throughout Pakenham, Officer, Beaconsfield Upper, and the wider Cardinia region.

The celebrations we create in Pakenham are full of personality and heart. Our clients here are often styling their first major events in new homes, and we love helping them transform their fresh, spacious living areas into stunning celebration spaces. From farmhouse-chic wedding receptions with rustic timber elements and fairy lights to colourful, fun-filled birthday parties with oversized balloon installations and themed backdrops, we bring creative energy and professional execution to every event. Pakenham's growing multicultural community also brings us wonderful diversity in styling requests, from traditional Maori celebrations to elegant European-inspired events.

Pakenham's position at the end of the Cranbourne-Pakenham rail line and along the Princes Freeway makes it accessible for our delivery team, and we plan our schedules to ensure we always arrive with plenty of time for a thorough setup. Many of the newer homes in estates like Cardinia Lakes, Heritage Springs, and Lakeside offer generous entertaining areas that are perfect for at-home celebrations, while local function centres and community halls provide excellent options for larger gatherings. Every IDO Events package includes full delivery, setup, and pack-down — your only job is to enjoy the celebration.`,
    nearbySuburbs: ["Officer", "Beaconsfield", "Nar Nar Goon", "Berwick", "Cardinia"],
    localVenues: ["Pakenham Hall", "Cardinia Cultural Centre", "Pakenham Racing Club", "Lakeside Community Centre"],
    testimonial: {
      text: "We had IDO Events style our gender reveal party at our new home in Pakenham and it was incredible. The balloon garland and backdrop were breathtaking, and the whole team was lovely to work with. Best decision we made.",
      name: "Jess & Ryan K.",
      event: "Gender Reveal in Pakenham",
    },
  },
  {
    slug: "bundoora",
    name: "Bundoora",
    region: "North",
    lat: -37.6983,
    lng: 145.0600,
    intro: `Bundoora is a well-established northern suburb that combines the leafy serenity of parkland reserves with the energy of two major university campuses, creating a community that values both tradition and innovation. Home to La Trobe University and RMIT Bundoora, surrounded by beautiful open spaces including Bundoora Park and the iconic homestead, this suburb offers a wonderful setting for celebrations of every kind. IDO Events provides premium event styling and prop hire to families across Bundoora, Kingsbury, Watsonia, and the broader Banyule-Whittlesea corridor.

What we enjoy about styling events in Bundoora is the wonderful mix of established and new communities that call this suburb home. Long-time Bundoora families planning golden wedding anniversaries and significant milestone birthdays sit alongside young families from the university community celebrating first birthdays and baby showers, and each brings a unique perspective that keeps our work fresh and exciting. We have styled events in everything from the grand heritage rooms near Bundoora Park to modern apartments and family homes across the suburb, adapting our designs to suit both the space and the client's vision perfectly.

Bundoora's excellent connectivity via Plenty Road, the Metropolitan Ring Road, and nearby Greensborough Highway means our delivery team can service the area efficiently and reliably. We work with local function centres, RSL clubs, and community halls, as well as private residences throughout the suburb. Our full-service approach includes delivery, professional setup, and complete pack-down, ensuring your event day is completely stress-free. If you are planning a celebration in Bundoora and want styling that exceeds your expectations, get in touch for a free quote.`,
    nearbySuburbs: ["Watsonia", "Kingsbury", "Mill Park", "Greensborough", "Macleod"],
    localVenues: ["Bundoora Homestead Art Centre", "La Trobe University Union Hall", "Bundoora Park", "Watsonia RSL"],
    testimonial: {
      text: "IDO Events styled the most beautiful baby shower for us in Bundoora. Soft pinks and whites with the most stunning balloon arch. Everything was set up perfectly when we arrived and cleaned up after. So impressed.",
      name: "Jenny L.",
      event: "Baby Shower in Bundoora",
    },
  },
  {
    slug: "thomastown",
    name: "Thomastown",
    region: "North",
    lat: -37.6833,
    lng: 145.0167,
    intro: `Thomastown is a hardworking, close-knit northern suburb where family and community are at the centre of everything. Known for its strong Italian, Greek, Arabic, and South-East Asian communities, Thomastown is a place where celebrations are generous, warm, and deeply meaningful. IDO Events has been styling events throughout Thomastown, Lalor, Epping, and the wider City of Whittlesea for years, building strong relationships with local families who return to us again and again for their most important occasions.

Event styling in Thomastown is wonderfully diverse. In any given month, our team might create an opulent Italian engagement party with cascading florals and crystal candelabras, a vibrant Assyrian christening with rich gold and white detailing, a fun-filled children's birthday party with character-themed balloon installations, or a modern minimalist baby shower in soft neutral tones. This cultural richness is something we embrace wholeheartedly, and our extensive prop catalogue ensures we can deliver any aesthetic — from grand and traditional to sleek and contemporary.

Thomastown's central northern location, well-connected via the South Moray rail line and Dalton Road, makes it straightforward for our delivery team to service. We frequently work with local function centres and community halls that are well-suited to large gatherings, as well as private homes across the suburb. Many of our Thomastown clients appreciate that we handle absolutely everything — from the initial design consultation through to the final pack-down — so they can focus on being present with their family and guests on the day. Reach out for a free quote and let us style your next celebration.`,
    nearbySuburbs: ["Lalor", "Epping", "Mill Park", "Bundoora", "Reservoir"],
    localVenues: ["Thomastown Recreation Centre", "Thomastown RSL", "Pacific Epping", "Lalor Community Hall"],
    testimonial: {
      text: "IDO Events are amazing! They styled our engagement party in Thomastown and every single detail was perfect. The floral columns, the neon sign, the draping — our guests couldn't stop taking photos. Thank you!",
      name: "Maria & Con S.",
      event: "Engagement Party in Thomastown",
    },
  },
  {
    slug: "broadmeadows",
    name: "Broadmeadows",
    region: "North",
    lat: -37.6833,
    lng: 144.9167,
    intro: `Broadmeadows is a suburb undergoing exciting transformation, evolving into a vibrant northern hub with new infrastructure, improved amenities, and a strong multicultural community that celebrates with passion and generosity. As the administrative centre of the City of Hume, Broadmeadows serves as a gateway to Melbourne's northern corridor, and IDO Events is proud to provide event styling and prop hire to families across Broadmeadows, Dallas, Jacana, Meadow Heights, and Campbellfield.

The celebrations we style in Broadmeadows are some of the most spirited and heartfelt events we work on. This suburb's remarkable cultural diversity — with strong Turkish, Lebanese, Iraqi, Somali, and Pacific Islander communities — means we are constantly inspired by new traditions, colour palettes, and styling approaches. We have created breathtaking henna night setups with rich jewel tones and ornate gold detailing, elaborate Pacific Islander christenings with tropical florals and traditional elements, and modern Australian birthday parties with sleek balloon installations and custom signage. Whatever the occasion and whatever the cultural context, IDO Events brings professionalism, creativity, and genuine respect to every event.

Broadmeadows is well-connected via the Tullamarine Freeway, the Craigieburn rail line, and Western Ring Road, making it easy for our delivery team to service efficiently. The suburb has several excellent function centres and community halls that are popular for large celebrations, and we have built strong working relationships with many of these venues. Our complete service includes delivery, setup, and pack-down, so you never have to worry about a thing. If you are planning a celebration in the Broadmeadows area, request a free quote and let us show you what IDO Events can create.`,
    nearbySuburbs: ["Dallas", "Meadow Heights", "Campbellfield", "Jacana", "Craigieburn"],
    localVenues: ["Hume Global Learning Centre", "Broadmeadows Town Hall", "Broadmeadows Leisure Centre", "Dallas Community Hall"],
    testimonial: {
      text: "Our wedding reception in Broadmeadows was styled so beautifully by IDO Events. The backdrop, the table settings, the floral arrangements — everything was exactly as we discussed. Professional, reliable, and incredibly talented.",
      name: "Fatima & Ali H.",
      event: "Wedding in Broadmeadows",
    },
  },
  {
    slug: "tarneit",
    name: "Tarneit",
    region: "West",
    lat: -37.8333,
    lng: 144.6833,
    intro: `Tarneit is one of Melbourne's fastest-growing western suburbs and a shining example of how new communities come together to create something special. With its modern housing estates, young families, and an increasingly diverse population drawn from across the globe, Tarneit is a suburb where celebrations happen frequently and are always full of life and colour. IDO Events is the trusted event styling and prop hire partner for families across Tarneit, Truganina, Hoppers Crossing, and the greater Wyndham area.

The variety of events we style in Tarneit is truly remarkable. Our client base here includes families from Indian, Sri Lankan, Filipino, African, and Middle Eastern backgrounds, alongside established Australian families — and each brings a unique and beautiful approach to celebrating. We have created stunning sangeet and mehndi night setups with vibrant marigold installations and rich silk draping, elegant christening receptions with classic white and gold themes, and fun-filled children's birthday parties with elaborate themed backdrops and balloon displays. No matter the cultural context or design brief, IDO Events brings the same level of creativity and professionalism.

Tarneit's newer estates feature modern homes with generous living and entertaining areas that are perfect for styled at-home events, and we have become experts at maximising these spaces. The suburb also has a growing number of function centres and restaurants that cater for larger celebrations. Connected by the Princes Freeway and Tarneit station on the regional rail network, the area is easily accessible for our delivery team. Every IDO Events package includes full delivery, setup, and pack-down — we handle everything so you can simply enjoy your special day.`,
    nearbySuburbs: ["Truganina", "Hoppers Crossing", "Werribee", "Point Cook", "Williams Landing"],
    localVenues: ["Tarneit Community Learning Centre", "Wyndham Civic Centre", "Elements at Emerald", "Eagle Stadium"],
    testimonial: {
      text: "IDO Events styled our daughter's first birthday in Tarneit and it was absolutely perfect. The butterfly theme came to life with the most beautiful balloon arch and flower wall. Setup and packdown was seamless. Love their work!",
      name: "Nisha & Ravi P.",
      event: "1st Birthday in Tarneit",
    },
  },
  {
    slug: "melton",
    name: "Melton",
    region: "West",
    lat: -37.6833,
    lng: 144.5833,
    intro: `Melton is a thriving outer western suburb that has grown into a major regional centre, offering families an affordable, community-focused lifestyle without sacrificing access to Melbourne's amenities. With its mix of established neighbourhoods and rapidly expanding new estates in Melton South, Brookfield, and Kurunjang, Melton is a suburb where families are building their lives and celebrating their milestones with genuine enthusiasm. IDO Events provides professional event styling and prop hire across Melton, Bacchus Marsh, Caroline Springs, and the wider City of Melton.

Event styling in Melton reflects the area's warm, family-oriented community. Our clients here plan celebrations with love and care, whether it is a first birthday party with an elaborate themed setup, a milestone anniversary dinner with elegant floral arrangements, or a christening reception that brings extended family together for a day of joy and tradition. We have styled events in Melton's newer homes with spacious living areas perfect for at-home celebrations, as well as at local function centres and community halls that accommodate larger gatherings. Whatever the setting, IDO Events brings a level of quality and professionalism that our Melton clients love.

Melton's position along the Western Freeway and on the Ballarat V/Line corridor makes it accessible for our delivery team, and we schedule our setups to ensure everything is perfect well before your first guest arrives. We understand that families in Melbourne's west value getting excellent quality at a fair price, and our packages are designed to deliver maximum visual impact within your budget. Setup and pack-down are always included, so your only job is to enjoy the celebration. Request a free quote and see what IDO Events can create for you.`,
    nearbySuburbs: ["Brookfield", "Kurunjang", "Bacchus Marsh", "Caroline Springs", "Hillside"],
    localVenues: ["Melton Community Hall", "Tabcorp Park Melton", "Willows Historical Park", "Arnolds Creek Community Centre"],
    testimonial: {
      text: "We hired IDO Events for our son's christening in Melton and couldn't be happier. The blue and white theme was beautifully executed, with the most stunning balloon garland and personalised signage. So professional.",
      name: "Stephanie & David C.",
      event: "Christening in Melton",
    },
  },
  {
    slug: "caroline-springs",
    name: "Caroline Springs",
    region: "West",
    lat: -37.7333,
    lng: 144.7333,
    intro: `Caroline Springs is one of Melbourne's most sought-after western suburbs, a master-planned community that combines modern convenience with beautiful lakeside parklands and a strong sense of neighbourhood. With its excellent schools, well-designed town centre, and family-friendly atmosphere, Caroline Springs has attracted a diverse population of young professionals and families who take pride in celebrating life's important moments beautifully. IDO Events brings premium event styling and prop hire to families across Caroline Springs, Burnside Heights, Deer Park, and the surrounding Brimbank-Melton area.

The events we style in Caroline Springs tend to reflect the suburb's polished, contemporary aesthetic. Our clients here appreciate clean, modern designs with quality materials — think elegant white and gold themes, organic floral arrangements, sleek balloon installations, and custom signage that adds a personal touch. We have styled stunning engagement parties in the beautiful homes overlooking Caroline Springs Lake, intimate baby showers in stylish open-plan living areas, and elaborate birthday celebrations at local function centres. The suburb's well-maintained parks and lakeside areas also provide gorgeous outdoor settings that we love enhancing with careful styling.

Caroline Springs is well-connected via the Western Freeway and Caroline Springs station on the Ballarat line, making it a straightforward area for our delivery team to service. The suburb's modern homes typically feature generous entertaining areas that are ideal for styled events, and we are experienced in making the most of these spaces. Our complete service includes delivery, professional setup, and pack-down after your event — everything is handled so you can be fully present for your celebration. Contact us for a free quote and let us bring your Caroline Springs event to life.`,
    nearbySuburbs: ["Burnside Heights", "Deer Park", "Hillside", "Taylors Hill", "Melton"],
    localVenues: ["Caroline Springs Civic Centre", "The Lakeside", "CS Square Function Room", "Burnside Community Hub"],
    testimonial: {
      text: "IDO Events created the most beautiful engagement party setup for us at our home in Caroline Springs. The lakeside views combined with their floral installations and draping made the whole evening feel magical. Absolutely loved it.",
      name: "Eleni & Michael K.",
      event: "Engagement Party in Caroline Springs",
    },
  },
  {
    slug: "box-hill",
    name: "Box Hill",
    region: "Inner East",
    lat: -37.8167,
    lng: 145.1167,
    intro: `Box Hill is one of Melbourne's most dynamic eastern suburbs, a major activity centre that blends a thriving Asian food and cultural scene with established residential streets and excellent transport connections. As a designated metropolitan activity centre, Box Hill has evolved into a vibrant, cosmopolitan neighbourhood that attracts families from diverse backgrounds — and the celebrations here reflect that wonderful diversity. IDO Events provides professional event styling and prop hire across Box Hill, Box Hill South, Mont Albert, and the surrounding Whitehorse area.

The events we style in Box Hill draw on the suburb's rich cultural mix. We regularly create stunning setups for Chinese and Vietnamese celebrations — from elaborate first birthday banquets with red and gold themes to modern engagement parties that blend Eastern traditions with contemporary Australian styling. We also work with families from Indian, Sri Lankan, and European backgrounds, creating everything from vibrant haldi ceremony setups to elegant, muted-tone reception styling. Our team approaches every cultural brief with respect, research, and creative enthusiasm, ensuring that your celebration authentically reflects your heritage while looking absolutely spectacular.

Box Hill's central eastern location, served by the Belgrave-Lilydale rail line, the Eastern Freeway, and multiple tram routes, makes it one of the most accessible suburbs for our delivery team. We work with restaurants, function centres, and private dining rooms throughout the Box Hill precinct, as well as homes across the wider area. Whether you need a simple backdrop and dessert table or a complete venue transformation, IDO Events delivers with professionalism and care. Setup and pack-down are always included. Get in touch for a free quote.`,
    nearbySuburbs: ["Mont Albert", "Surrey Hills", "Blackburn", "Doncaster", "Balwyn"],
    localVenues: ["Box Hill Town Hall", "Box Hill Community Arts Centre", "Whitehorse Centre", "Golden Dragon Palace"],
    testimonial: {
      text: "IDO Events styled our parents' 50th wedding anniversary dinner in Box Hill and it was absolutely gorgeous. The gold and ivory theme was executed with such attention to detail. Our parents were so happy. Thank you!",
      name: "Michelle C.",
      event: "Anniversary in Box Hill",
    },
  },
  {
    slug: "glen-waverley",
    name: "Glen Waverley",
    region: "East",
    lat: -37.8783,
    lng: 145.1650,
    intro: `Glen Waverley is one of Melbourne's premier eastern suburbs, renowned for its excellent schools, thriving restaurant strip along Kingsway, and a strong multicultural community that brings energy and diversity to every aspect of local life. Families in Glen Waverley set high standards for their celebrations, and IDO Events meets those standards with premium event styling and prop hire that transforms any space into something extraordinary. We service Glen Waverley, Mount Waverley, Wheelers Hill, and the broader Monash area with the same dedication and creativity.

The celebrations we create in Glen Waverley span a wonderful range of styles and traditions. We have styled elegant Chinese wedding banquets with luxurious red and gold installations, modern Australian christenings with soft pastel balloon arches and floral features, vibrant Indian birthday celebrations with marigold garlands and colourful fabric draping, and sophisticated corporate events at local restaurants and function centres. Glen Waverley families often have a keen eye for design and quality, and we consistently deliver styling that exceeds their expectations with premium props, fresh floral arrangements, and meticulous attention to detail.

Glen Waverley's excellent connectivity via the Glen Waverley rail line, Monash Freeway, and Springvale Road makes it highly accessible for our delivery team. The suburb offers a mix of beautiful family homes with spacious entertaining areas and well-appointed function venues that we have styled numerous times. Our complete service covers delivery, professional setup, and pack-down, ensuring that your event day runs seamlessly from start to finish. If you are planning a celebration in Glen Waverley and want event styling that reflects the quality of this outstanding suburb, request a free quote today.`,
    nearbySuburbs: ["Mount Waverley", "Wheelers Hill", "Mulgrave", "Notting Hill", "Burwood"],
    localVenues: ["Glen Waverley RSL", "Monash Civic Centre", "The Glen Hotel", "Century City Walk Function Room"],
    testimonial: {
      text: "IDO Events transformed the function room for our daughter's 21st birthday in Glen Waverley. The rose gold and white theme looked incredible — the balloon arch, the backdrop, the table styling. Everything was perfect. Highly recommended!",
      name: "Wendy & David L.",
      event: "21st Birthday in Glen Waverley",
    },
  },
  {
    slug: "frankston",
    name: "Frankston",
    region: "Bayside",
    lat: -38.1500,
    lng: 145.1167,
    intro: `Frankston is Melbourne's bayside gateway, a suburb that has undergone a remarkable revitalisation in recent years and now offers a vibrant blend of coastal lifestyle, arts and culture, and strong community spirit. With its beautiful foreshore, bustling CBD, and proximity to the stunning Mornington Peninsula, Frankston is a suburb where celebrations are infused with the relaxed, sun-soaked energy of the bay. IDO Events provides professional event styling and prop hire throughout Frankston, Frankston South, Seaford, and the wider bayside region.

Event styling in Frankston often draws on the suburb's coastal setting. Our clients here love styling that feels relaxed yet refined — think natural textures, organic floral arrangements, driftwood and greenery installations, and soft colour palettes that echo the blues and sandy neutrals of the nearby beach. We have styled beautiful beachside-inspired weddings and engagement parties, relaxed boho baby showers in homes overlooking the bay, and vibrant birthday celebrations at local restaurants and function centres. The Frankston Arts Centre and foreshore precinct also provide stunning venues for styled corporate events and private celebrations.

Frankston's position as the last stop on the Frankston rail line and at the junction of the Peninsula Link and EastLink freeways makes it an accessible hub for guests from across Melbourne. Our delivery team services the entire bayside corridor, from Carrum and Seaford through to Mount Eliza and Mornington. We handle full delivery, setup, and pack-down for every event, ensuring that your celebration is stress-free from start to finish. If you are planning an event in the Frankston area and want styling that captures the beauty of the bayside, get in touch for a free quote.`,
    nearbySuburbs: ["Seaford", "Carrum", "Langwarrin", "Mount Eliza", "Frankston South"],
    localVenues: ["Frankston Arts Centre", "Peninsula Docklands", "McClelland Sculpture Park", "Frankston RSL"],
    testimonial: {
      text: "IDO Events styled our wedding reception in Frankston with a beautiful coastal-inspired theme. The combination of greenery, white florals, and timber elements was stunning. They captured exactly the relaxed, elegant vibe we wanted.",
      name: "Sarah & Tom B.",
      event: "Wedding in Frankston",
    },
  },
  {
    slug: "moorabbin",
    name: "Moorabbin",
    region: "Bayside",
    lat: -37.9333,
    lng: 145.0500,
    intro: `Moorabbin is a well-established suburb in Melbourne's south-east bayside region, offering a convenient, family-friendly location with excellent transport links and a strong local community. Known for its proximity to Kingston's shopping and dining precincts, its easy access to Brighton and Mentone beaches, and its position as a commercial hub for the surrounding area, Moorabbin is a suburb where families value quality, reliability, and attention to detail in everything — including their celebrations. IDO Events provides professional event styling and prop hire across Moorabbin, Bentleigh, Highett, and the wider Kingston area.

The events we style in Moorabbin reflect the suburb's unpretentious yet quality-focused community. Our clients here appreciate styling that looks sophisticated without being over the top — clean, well-executed designs with quality props, beautiful floral arrangements, and thoughtful details that make the celebration feel special. We have styled elegant milestone birthday parties, heartfelt christening receptions, and intimate engagement dinners throughout the area, always tailoring our approach to the client's taste and the character of the space. Whether the event is at a local restaurant, a community hall, or a family home, we bring the same level of professionalism.

Moorabbin's central bayside location, connected by the Frankston rail line, Nepean Highway, and South Road, makes it one of the most accessible suburbs for our team to service. We are familiar with local function venues and community spaces throughout the Kingston area, and we work efficiently within these spaces to create maximum impact. Our full-service approach includes delivery, setup, and pack-down, so your event day is completely stress-free. Reach out for a free quote and let IDO Events style your next Moorabbin celebration.`,
    nearbySuburbs: ["Bentleigh", "Highett", "Hampton", "Cheltenham", "Mentone"],
    localVenues: ["Kingston City Hall", "Moorabbin RSL", "Highett Community Centre", "Kingston Arts Centre"],
    testimonial: {
      text: "We used IDO Events for our engagement party at a venue in Moorabbin and could not be happier. The styling was elegant, modern, and exactly what we asked for. The team was punctual, professional, and so easy to deal with.",
      name: "Anna & Chris G.",
      event: "Engagement Party in Moorabbin",
    },
  },
];
