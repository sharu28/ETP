import { FaqItem, PricingTier, HighlightItem } from './types';

// ==========================================
// 🛠️ EDIT THIS FILE TO UPDATE CONTENT
// ==========================================

export const COMPANY_INFO = {
  name: "Escape to Paradise (ETP)",
  organizerName: "[YOUR NAME]",
  committeeName: "[YOUR ROTARACT CLUB / COMMITTEE]",
  email: "[contact@example.com]",
  instagram: "@[your_handle]",
  whatsappLink: "https://wa.me/1234567890", // Your actual WhatsApp link
  nextTripDates: "Nov 12 - Nov 20, 2024",
  bookingCallLink: "#", // Link to Calendly or similar
};

export const PRICING_TIERS: PricingTier[] = [
  {
    title: "Early Bird",
    price: "$850 USD",
    features: ["Save $100 vs Regular", "Shared Twin/Triple Room", "All Inclusions", "Limited Spots"],
    isHighlight: true,
  },
  {
    title: "Regular",
    price: "$950 USD",
    features: ["Standard Price", "Shared Twin/Triple Room", "All Inclusions", "Flexible Payment Plan"],
    isHighlight: false,
  },
  {
    title: "Solo Upgrade",
    price: "+$300 USD",
    features: ["Private Room Guarantee", "King/Queen Bed", "More Privacy", "Limited Availability"],
    isHighlight: false,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Is this only for Rotaractors?",
    answer: "Primarily yes! It's designed for Rotaractors, Rotarians, and friends of Rotary. If you vibe with the community spirit, you're welcome.",
  },
  {
    question: "Is Sri Lanka safe for travelers?",
    answer: "Absolutely. Tourism is booming, and we have local hosts and guides with us 24/7 to ensure a smooth, safe experience.",
  },
  {
    question: "What’s the age range / vibe?",
    answer: "Most attendees are between 20-35. The vibe is adventurous, social, and chilled. It's not a luxury honeymoon tour, but it's not a backpacker hostel crawl either.",
  },
  {
    question: "Do I need a visa?",
    answer: "Most nationalities need an ETA (Electronic Travel Authorization) which is easy to get online before arrival. We'll send you the guide.",
  },
  {
    question: "What if I’m coming solo?",
    answer: "No problem! 70% of our travelers come solo. We'll pair you up in a shared room with someone of the same gender, or you can book the solo upgrade.",
  },
  {
    question: "How do deposits work?",
    answer: "A $200 non-refundable deposit secures your spot. The rest is paid in installments leading up to the trip.",
  },
  {
    question: "Refund/Cancellation Policy",
    answer: "Deposits are non-refundable to cover booking fees. Full refunds (minus deposit) available up to 45 days before the trip. [EDIT THIS POLICY]",
  },
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    title: "The Perfect Route",
    description: "Colombo → Cultural Triangle → Hill Country → South Coast. The ultimate loop.",
    iconName: "Map",
  },
  {
    title: "Iconic Views",
    description: "That famous blue train ride, tea plantations, and misty mountains.",
    iconName: "Train",
  },
  {
    title: "Tropical Bliss",
    description: "Sunset beach parties, surf lessons (optional), and coconut palms.",
    iconName: "Palmtree",
  },
  {
    title: "Rotaract Crew",
    description: "Travel with people who share your values. Instant friends, zero awkwardness.",
    iconName: "Users",
  },
];
