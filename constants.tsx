import { FaqItem, PricingTier, HighlightItem } from './types.ts';

export const COMPANY_INFO = {
  name: "Escape to Paradise (ETP)",
  organizerName: "ETP Organizing Committee",
  committeeName: "Rotaract Sri Lanka",
  email: "hello@etpsrilanka.com",
  instagram: "@etpsrilanka",
  whatsappLink: "https://wa.me/94770000000", 
  nextTripDates: "March 2026",
  googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSck_oolYjYQ_l-r26yAS5ZM9m7lFDl_qOpEbLo1UwPW0u-a2A/viewform?fbzx=-7975462463569768430",
};

// CENTRALIZED ASSET MANAGEMENT
// Switched to hosted Imgur URLs as requested.
export const IMAGES = {
  hero: "https://i.imgur.com/cSiNAQy.jpeg",
  organizer: "https://i.imgur.com/DH3sDed.jpeg", // Using a culture shot for the organizer avatar
  credibility: {
    flags: "https://i.imgur.com/m82GwgT.jpeg", // Main credibility shot
    groupIndependence: "https://i.imgur.com/rmOfE8c.jpeg",
    groupSigiriya: "https://i.imgur.com/Foa5kxq.jpeg",
    groupElla: "https://i.imgur.com/z4PrtuA.jpeg",
  },
  gallery: [
    { src: 'https://i.imgur.com/q1G0PbE.jpeg', alt: 'Safari Adventure', span: 'md:col-span-2' },
    { src: 'https://i.imgur.com/PUIFDCB.jpeg', alt: 'Surfing Lessons', span: 'md:col-span-1' },
    { src: 'https://i.imgur.com/KVj5q03.jpeg', alt: 'River Kayaking', span: 'md:col-span-1' },
    { src: 'https://i.imgur.com/76m6bEb.jpeg', alt: 'Breathtaking Scenery', span: 'md:col-span-2' },
    { src: 'https://i.imgur.com/OhzVRLW.jpeg', alt: 'Island Views', span: 'md:col-span-1' },
    { src: 'https://i.imgur.com/gFwU5Ym.jpeg', alt: 'Nature Trails', span: 'md:col-span-1' },
    { src: 'https://i.imgur.com/DH3sDed.jpeg', alt: 'Cultural Immersion', span: 'md:col-span-1' },
  ]
};

export const PRICING_TIERS: PricingTier[] = [
  {
    title: "Early Bird",
    price: "$650 USD",
    features: [
      "Submit on/before 31st Jan 2026",
      "Shared Accommodation",
      "All Transport & Entrance Fees",
      "3 Meals per Day",
      "Selection Interview Required"
    ],
    isHighlight: true,
  },
  {
    title: "Regular",
    price: "$700 USD",
    features: [
      "Submitted after 31st Jan 2026",
      "Shared Accommodation",
      "All Transport & Entrance Fees",
      "3 Meals per Day",
      "Selection Interview Required"
    ],
    isHighlight: false,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Is this only for Rotaractors?",
    answer: "Primarily yes! It's designed for Rotaractors, Rotarians, and friends of Rotary. If you vibe with the community spirit, service, and adventure, you're exactly who we're looking for.",
  },
  {
    question: "What’s the age range / vibe?",
    answer: "Most attendees are between 20-35. The vibe is adventurous, social, and chilled. It's about authentic connections—no stuffy tour buses here, just a solid crew exploring the island together.",
  },
  {
    question: "How does the selection process work?",
    answer: "We’re the ETP organizing committee, and every year we’re fired up to make ETP the best one yet! 🌴✨ To ensure a high-energy group, we select participants through a friendly interview process. Your package price is locked in based on when you submit your form!",
  },
  {
    question: "I've been selected! What are the next steps?",
    answer: "Congrats! If you're selected, you'll need to pay a USD 100 non-refundable confirmation fee within 7 days. You’ll then have another week to submit your paid return airfare ticket as final proof of confirmation.",
  },
  {
    question: "What about the remaining balance?",
    answer: "The remaining USD 550 (Early Bird) or USD 600 (Regular) must be deposited on or before 22nd February 2026. We’ll be in touch regularly to make sure you're fully ready for the ETP experience!",
  },
  {
    question: "What if I’m coming solo?",
    answer: "No problem! Most of our travelers come solo. We'll pair you up with a roommate of the same gender. By the end of day one, you'll feel like you've known the crew for years.",
  },
  {
    question: "Is Sri Lanka safe for travelers?",
    answer: "Absolutely. Tourism is thriving, and our committee provides local hosts and guides 24/7. We handle the logistics so you can focus on the paradise.",
  },
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    title: "Curated Route",
    description: "Explore the most fantastic destinations across our beautiful island, from Sigiriya to the South Coast.",
    iconName: "Map",
  },
  {
    title: "All-Inclusive Base",
    description: "Transport, entry fees, and 3 meals daily are all handled by us. Just bring your energy.",
    iconName: "Train",
  },
  {
    title: "Immersive Experiences",
    description: "Featuring unique sessions like the Grizzly storytelling lunch in Weligama.",
    iconName: "TreePalm",
  },
  {
    title: "The ETP Spirit",
    description: "We're fired up to make this the best ETP yet. You're traveling with the best committee in the island.",
    iconName: "Users",
  },
];