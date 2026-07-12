# IDO Events — SEO & AI Visibility Checklist

## Status Key
- [x] = Done (implemented and verified)
- [ ] = Needs manual action from you

---

## Phase 1: Technical SEO

### Metadata & Titles
- [x] Every page has explicit `<title>` via Next.js Metadata API
- [x] Title pattern: "{Service} in {Location} | iDo Events" (under 60 chars)
- [x] Title template set in root layout: `%s | iDo Events`
- [x] Every page has meta description starting with "iDo Events provides..."
- [x] OpenGraph tags on all pages (title, description, image)
- [x] OpenGraph images with dimensions on all pages

### H1 Tags
- [x] Homepage: H1 via TextReveal in Hero component
- [x] Occasion pages (6): H1 via OccasionPage component
- [x] Suburb pages (25): H1 dynamically generated
- [x] Service-suburb pages (31): H1 dynamically generated
- [x] Blog posts (112): H1 dynamically generated
- [x] Hire items (20): H1 dynamically generated
- [x] Static pages (about, contact, blog index, FAQ, etc.): H1 hardcoded

### Canonical URLs
- [x] Global `alternates.canonical` set in root layout
- [x] Per-page canonical URLs on all pages (homepage, occasions, suburbs, hire, blog, service-suburbs)

### Sitemap & Robots
- [x] Auto-generated sitemap.xml at /sitemap.xml (213 URLs)
- [x] robots.txt allows all crawlers + disallows /api/
- [x] AI crawlers explicitly allowed: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, ChatGPT-User

### Structured Data (JSON-LD)
- [x] EventPlanner schema on homepage
- [x] LocalBusiness + EventPlanner on 25 suburb pages
- [x] LocalBusiness + EventPlanner on 31 service-suburb pages
- [x] BlogPosting on 112 blog posts
- [x] FAQPage on 6 occasion pages
- [x] FAQPage on 31 service-suburb pages
- [x] FAQPage on FAQ hub page (26 questions)
- [x] Product on 20 hire items
- [x] BreadcrumbList on all inner pages

### Security Headers
- [x] X-Frame-Options: DENY
- [x] X-Content-Type-Options: nosniff
- [x] Referrer-Policy: strict-origin-when-cross-origin
- [x] Permissions-Policy: camera=(), microphone=(), geolocation=()

---

## Phase 2: Local SEO Pages

### Service × Suburb Pages (31 live)
- [x] /wedding-styling/[suburb] — 15 suburbs
- [x] /birthday-prop-hire/[suburb] — 3 suburbs (Point Cook, Tarneit, Craigieburn)
- [x] /mehndi-nikkah-styling/[suburb] — 5 suburbs (Tarneit, Craigieburn, Dandenong, Epping, Preston)
- [x] /baby-shower-styling/[suburb] — 2 suburbs (Point Cook, Glen Waverley)
- [x] /engagement-party-styling/[suburb] — 2 suburbs (Doncaster, Brunswick)
- [x] /corporate-event-styling/[suburb] — 2 suburbs (Footscray, Dandenong)
- [x] /bridal-shower-setup/[suburb] — 2 suburbs (Glen Waverley, Point Cook)

### Each page includes:
- [x] Unique, non-template intro copy
- [x] Suburb-specific venue notes
- [x] Setup/logistics notes
- [x] 3 unique FAQs with pricing
- [x] Popular props for that service+suburb
- [x] Photo gallery from relevant occasion category
- [x] Nearby suburb internal links
- [x] Quote CTA above fold and at bottom
- [x] LocalBusiness + FAQPage + BreadcrumbList JSON-LD

### Remaining service-suburb content to add:
- [ ] More birthday suburbs (remaining 12 of 15)
- [ ] More baby shower suburbs (remaining 13)
- [ ] More engagement suburbs (remaining 13)
- [ ] More corporate suburbs (remaining 13)
- [ ] More bridal shower suburbs (remaining 13)
- [ ] Add real event photos per suburb (TODO placeholders in gallery section)

---

## Phase 3: AI Search (GEO) Optimisation

- [x] /llms.txt file at site root (business summary for AI crawlers)
- [x] Meta descriptions start with "iDo Events provides..." (directly quotable by AI)
- [x] FAQ hub page at /faq (26 questions across 6 categories)
- [x] FAQ page has FAQPage JSON-LD schema
- [x] Comparison content: "DIY vs hiring a stylist" blog post with real cost data
- [x] Decision content: "Backdrop hire vs custom builds" blog post
- [x] Consistent NAP in footer: iDo Events, 0406 179 786, contact@idoeventss.com, Melbourne VIC Australia
- [x] Footer links to FAQ page

### Needs manual action:
- [ ] Set up Google Business Profile (name: "iDo Events", matching NAP exactly)
- [ ] Add business to Apple Maps, Bing Places, and Yelp Australia
- [ ] Set up AggregateRating schema once you have Google reviews (5+ reviews minimum)
- [ ] Update About page with founder story, years operating, number of events (TODO)

---

## Phase 4: Non-Slop Content

### Authority Blog Posts (6 new)
- [x] "What Event Styling Actually Costs in Melbourne (2026 Price Guide)" — real pricing ranges
- [x] "Melbourne Event Venues: What Actually Works for Styling" — venue type expertise
- [x] "Mehndi Night Styling in Melbourne: A Complete Planning Guide" — cultural event authority
- [x] "Backdrop Hire vs Custom Builds" — decision content with real quotes
- [x] "A Real Wedding Setup Timeline" — behind-the-scenes process
- [x] "DIY Party Props vs Hiring a Stylist: The Real Cost Comparison" — practical comparison

### What makes these non-slop:
- Real Melbourne pricing ranges (not vague "contact for a quote")
- Specific suburb and venue references
- Practical logistics (parking, loading docks, access windows)
- Cultural event expertise (mehndi, nikkah, walima)
- Internal links to service pages, hire items, and suburb pages

---

## Phase 5: Measurement

### Google Search Console
- [x] Site verified and connected (confirmed in CLAUDE.md)
- [x] Sitemap submitted
- [ ] Check GSC weekly: top queries, pages, CTR, average position
- [ ] Identify pages with high impressions + low CTR → improve titles/descriptions

### Google Analytics
- [ ] Add GA4 tracking code to root layout (need GA4 Measurement ID from you)
- [ ] Set up conversion events: quote form submission, phone click, WhatsApp click

### AI Citation Monitoring
- [ ] Monthly: search ChatGPT for "event styling Melbourne" — check if iDo Events appears
- [ ] Monthly: search Perplexity for "prop hire Melbourne" — check citations
- [ ] Monthly: search Google AI Overview for "wedding styling Melbourne" — check inclusion
- [ ] Track which competitor brands are cited and where their citations come from

---

## Competitor Backlink Strategy (Manual)

### Step 1: Identify competitors
- [ ] Search Google for "event styling Melbourne" — list top 10 organic results
- [ ] Search Google for "prop hire Melbourne" — list top 10 organic results
- [ ] Search Google for "wedding styling Melbourne" — list top 10 organic results

### Step 2: Analyse competitor backlinks
- [ ] Use Ahrefs/SEMrush free tier to check competitor domain ratings
- [ ] Export competitor backlinks and identify replicable links (DR 30–60, real sites)
- [ ] Check if competitors are listed on: StyleMeUp, Easy Weddings, WedShed, Wedding Diaries, The Urban List, Broadsheet

### Step 3: Build backlinks
- [ ] Submit to Melbourne event directories (Easy Weddings, WedShed, Style Me Pretty Melbourne)
- [ ] Submit to local business directories (True Local, Yellow Pages, StartLocal)
- [ ] Reach out to Melbourne lifestyle blogs for guest post or mention
- [ ] Reach out to venue websites to be listed as a preferred/recommended stylist
- [ ] Create a "Melbourne Event Styling" listicle on your own blog mentioning competitors + yourself

### Step 4: Force AI citations
- [ ] Identify which sources ChatGPT/Perplexity cite for event styling queries
- [ ] Contact those sources to include iDo Events (offer exchange, payment, or free content)
- [ ] Create your own listicle content matching the format AI engines prefer

---

## Monthly SEO Routine

1. [ ] Check GSC: new queries, position changes, crawl errors
2. [ ] Check AI citations: test 5 prompts in ChatGPT, Perplexity, Google AI
3. [ ] Publish 2–4 blog posts (non-slop: real data, venue knowledge, pricing)
4. [ ] Build 2–3 backlinks (directories, guest posts, venue partnerships)
5. [ ] Add 1–2 new service-suburb pages with unique content
6. [ ] Update pricing in existing content if rates change
7. [ ] Monitor competitors: any new pages ranking for your target keywords?

---

*Last updated: 2026-07-12*
*Total pages: 213 (homepage + 6 occasions + 25 suburbs + 31 service-suburbs + 20 hire items + 112 blog posts + FAQ + static pages)*
