import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "The Event Diva",
  tagline: "Event florals, grazing tables and Italian inspired holiday catering in Toronto and the GTA.",
  category: "Florals, grazing tables and catering",
  schemaType: "FoodEstablishment",
  area: "Toronto and GTA, ON",
  siteUrl: "https://the-event-diva-ca.vercel.app",

  theme: {
    preset: "catering-events",
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Florals, grazing and catering",
    headline: "Event florals, grazing tables and holiday feasts",
    subhead: "The Event Diva offers event and bridal florals, grazing tables, rentals, and full service styling, setup and event staff for weddings, sacraments and corporate events in Toronto and the GTA. An Italian inspired holiday feast is posted from $35 per person, with pickup available and GTA delivery at an extra cost. Inquire through the form, text 416-825-5176, or send an Instagram message.",
    images: [
      { src: "/images/post-4.jpg", alt: "A Christmas grazing table with a fruit tree centrepiece by The Event Diva", width: 1080, height: 1109 },
      { src: "/images/post-5.jpg", alt: "An Italian inspired grazing table with cheeses, sandwiches and fruit by The Event Diva", width: 640, height: 1136 },
      { src: "/images/post-8.jpg", alt: "A burgundy and green floral arrangement by The Event Diva", width: 720, height: 1280 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Event and bridal florals",
    "Grazing tables and catering",
    "Full service styling, setup and staff",
    "Toronto and the GTA",
  ],

  about: {
    title: "Welcome to The Event Diva",
    body: [
      "The Event Diva provides florals, planning, grazing tables and rentals for weddings, sacraments and corporate events in Toronto and the GTA. Services include event and bridal florals, tablescapes, grazing tables, catering, full service event styling, setup and event staff. Posted grazing tables have included artisan cheeses, Italian charcuterie, focaccia sandwiches, savoury bites and fresh fruit.",
      "A November 16 post offered an Italian inspired holiday feast from $35 per person, pickup price, with complimentary assorted Italian cookies, a minimum of 10 people, and optional add-ons of a charcuterie tray at $50 per tray (feeds 10 to 15 people) and frittura of calamari and shrimp at $20 per person. Delivery in the GTA is available at an extra cost, depending on location, as posted. Inquire through the grazing table form, text 416-825-5176, email eventdivafloral@gmail.com, or send an Instagram message.",
    ],
    image: { src: "/images/post-4.jpg", alt: "A Christmas grazing table with a fruit tree centrepiece by The Event Diva", width: 1080, height: 1109 },
  },

  menu: {
    label: "Services",
    title: "How we can help",
    variant: "list",
    showPrices: false,
    priceNote: "A November 16 post listed an Italian inspired holiday feast from $35 per person, pickup price, with a minimum of 10 people. Send a message or use the form for a quote.",
    groups: [
      {
        title: "Holiday catering",
        items: [
          { name: "Italian inspired holiday feast", description: "Posted from $35 per person, pickup price, with lasagna, chicken cutlets, roasted potatoes, seasonal vegetables, and complimentary assorted Italian cookies. Minimum 10 people." },
          { name: "Charcuterie tray add-on", description: "Posted at $50 per tray, feeding 10 to 15 people." },
          { name: "Frittura add-on", description: "Calamari and shrimp, posted at $20 per person." },
        ],
      },
      {
        title: "Events",
        items: [
          { name: "Grazing tables", description: "Posted spreads have included artisan cheeses, Italian charcuterie, focaccia sandwiches, savoury bites and fresh fruit." },
          { name: "Event and bridal florals and tablescapes" },
          { name: "Full service event styling, setup and event staff" },
          { name: "Rentals" },
        ],
      },
    ],
    footnote: "Pickup is available. Delivery in the GTA is an extra cost, depending on location, as posted.",
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-4.jpg", width: 1080, height: 1109, alt: "A Christmas grazing table with a fruit tree centrepiece by The Event Diva", caption: "A Christmas grazing table", href: "https://www.instagram.com/p/DfH6U1BxlhU/" },
      { src: "/images/post-5.jpg", width: 640, height: 1136, alt: "An Italian inspired grazing table with cheeses, sandwiches and fruit by The Event Diva", caption: "A holiday grazing table", href: "https://www.instagram.com/reel/DfA1EkDRowd/" },
      { src: "/images/post-8.jpg", width: 720, height: 1280, alt: "A burgundy and green floral arrangement by The Event Diva", caption: "Event florals", href: "https://www.instagram.com/reel/DeWrmoxxcKv/" },
      { src: "/images/post-1.jpg", width: 1080, height: 1161, alt: "The Christmas season catering menu from The Event Diva", caption: "Holiday catering", href: "https://www.instagram.com/p/Df0a206R8FR/" },
      { src: "/images/post-7.jpg", width: 576, height: 1024, alt: "An Italian inspired grazing table for a 75th birthday by The Event Diva", caption: "A 75th birthday grazing table", href: "https://www.instagram.com/reel/De7jhTlvbjC/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "the.eventdiva",
    embeds: ["https://www.instagram.com/p/DfH6U1BxlhU/", "https://www.instagram.com/reel/DfA1EkDRowd/", "https://www.instagram.com/p/Df0a206R8FR/"],
  },

  order: {
    label: "How to book",
    title: "Reserve a date",
    intro: "Use the grazing table inquiry form, text 416-825-5176, email eventdivafloral@gmail.com, or send an Instagram message. The Event Diva serves Toronto and the GTA. Pickup is available, and GTA delivery is an extra cost.",
    headerCtaLabel: "Book now",
    dmMessage: "Hi The Event Diva! I would like to inquire.\nDate:\nFlorals, grazing table or holiday feast:\nGuest count:",
    links: [
      { label: "Book now", href: "https://docs.google.com/forms/d/e/1FAIpQLSfW9Nm6WWg2idhFt6fiKEqoBVLh_QiR5iG9CAhTvlyGQIRaWg/viewform" },
      { label: "Text 416-825-5176", href: "tel:+14168255176" },
      { label: "Email The Event Diva", href: "mailto:eventdivafloral@gmail.com" },
      { label: "Message on Instagram", href: "https://ig.me/m/the.eventdiva" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Use the inquiry form, text 416-825-5176, email eventdivafloral@gmail.com, or send an Instagram message." },
    { q: "What does the holiday feast include?", a: "A November 16 post listed an Italian inspired holiday feast from $35 per person, pickup price, with lasagna, chicken cutlets, roasted potatoes, seasonal vegetables, and complimentary assorted Italian cookies, with a minimum of 10 people. Optional add-ons included a charcuterie tray and frittura." },
    { q: "Do you deliver?", a: "Pickup is available, and delivery in the GTA is an extra cost, depending on location, as posted." },
    { q: "Where do you serve?", a: "The Event Diva serves Toronto and the GTA." },
  ],

  contact: {
    title: "Contact",
    area: "Toronto and GTA, ON",
    phone: "416-825-5176",
    email: "eventdivafloral@gmail.com",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/the.eventdiva/" },
    ],
  },

  seo: {
    title: "The Event Diva | Florals, grazing tables and holiday catering in Toronto",
    description: "Event florals, grazing tables, rentals and Italian inspired holiday catering in Toronto and the GTA. Inquire by form, text or Instagram DM.",
    keywords: ["The Event Diva", "grazing tables Toronto", "holiday catering GTA", "bridal florals Toronto"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
