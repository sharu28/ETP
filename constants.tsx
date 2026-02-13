import { FaqItem, PricingTier, HighlightItem, ItineraryItem, TestimonialItem } from './types.ts';

export const COMPANY_INFO = {
  name: "Escape to Paradise (ETP)",
  organizerName: "ETP Organizing Committee",
  committeeName: "Rotaract Sri Lanka",
  email: "hello@etpsrilanka.com",
  instagram: "escape.to.paradise_rcc",
  whatsappLink: "https://wa.me/94742216040", 
  nextTripDates: "March 2026",
  googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSck_oolYjYQ_l-r26yAS5ZM9m7lFDl_qOpEbLo1UwPW0u-a2A/viewform?fbzx=-7975462463569768430",
};

// CENTRALIZED ASSET MANAGEMENT
export const IMAGES = {
  hero: "https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_1600/v1767509172/rotaractcolombo_1741320157_3582775614832756463_3976884400_tgjtsc.jpg",
  organizer: "https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_800/v1767509174/rotaractcolombo_1741320157_3582775614832867948_3976884400_sremto.jpg", 
  credibility: {
    flags: "https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_1600/v1767509180/2023_-_1_ymkkwn.jpg",
    groupIndependence: "https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_1600/v1767509172/rotaractcolombo_1741320157_3582775614816040772_3976884400_ocgbcc.jpg", 
    groupSigiriya: "https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_1600/v1767509179/2023_-_6_bdwzrd.jpg", 
    groupElla: "https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_1600/v1767509173/rotaractcolombo_1741320157_3582775614816011960_3976884400_gx6hs0.jpg", 
  },
  logos: {
    rotary: "https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,fl_strip_profile,dpr_auto,c_scale,w_300/v1768985501/Untitled_design_4_vkt4q9.png",
    rotaract: "https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,fl_strip_profile,dpr_auto,c_scale,w_300/v1768985501/1_xfhwvn.png",
    district: "https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,fl_strip_profile,dpr_auto,c_scale,w_300/v1768984509/logo-300x55_a2lqhv.png"
  },
  gallery: [
    { src: 'https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_1600/v1767509172/rotaractcolombo_1741320157_3582775614816120025_3976884400_akah5h.jpg', alt: 'Breathtaking Scenery', span: 'md:col-span-1' },
    { src: 'https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_1600/v1767521378/IMG_4166_skczxr.jpg', alt: 'Exploring Beaches', span: 'md:col-span-1' },
    { src: 'https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_1600/v1767509179/2023_-_3_ptd5fq.jpg', alt: 'Safari Ride', span: 'md:col-span-1' },
    { src: 'https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_1600/v1767509172/rotaractcolombo_1741320157_3582775614824396353_3976884400_qajrej.jpg', alt: 'Elephant Safari', span: 'md:col-span-2' },
    { src: 'https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_1600/v1767509226/2023_-_8_cqsmsz.jpg', alt: 'Surfing Lessons', span: 'md:col-span-1' },
    { src: 'https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_1600/v1767509179/2023_-_6_bdwzrd.jpg', alt: 'Sigiriya Trek', span: 'md:col-span-1' },
    { src: 'https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_1600/v1767509176/2023_-_7_xzvfcs.jpg', alt: 'Nature Walks', span: 'md:col-span-1' },
    { src: 'https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_1600/v1767509174/rotaractcolombo_1741320157_3582775614832867948_3976884400_sremto.jpg', alt: 'Cultural Immersion', span: 'md:col-span-1' },
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

export const ITINERARY_DAYS: ItineraryItem[] = [
  {
    day: 1,
    date: "21st",
    title: "Welcome to Paradise",
    activities: ["Airport Pickup", "Bolgoda Dinner by the Lake"],
    stay: "Colombo",
    icon: "Navigation"
  },
  {
    day: 2,
    date: "22nd",
    title: "Ancient Wonders",
    activities: ["Cave Temple", "Climbing Sigiriya Rock"],
    stay: "Dambulla",
    icon: "Mountain"
  },
  {
    day: 3,
    date: "23rd",
    title: "Wild & Sacred",
    activities: ["Minneriya Elephant Safari", "Temple of the Tooth Relic"],
    stay: "Kandy",
    icon: "Tent"
  },
  {
    day: 4,
    date: "24th",
    title: "The Scenic Route",
    activities: ["Kandy to Ella Train", "Tea Plantation Visit"],
    stay: "Ella",
    icon: "Train"
  },
  {
    day: 5,
    date: "25th",
    title: "Ella Enchantment",
    activities: ["Ella Town Exploration", "Chill Vibes"],
    stay: "Ella",
    icon: "Coffee"
  },
  {
    day: 6,
    date: "26th",
    title: "Coastal Vibes",
    activities: ["Travel to South Coast", "Sunset Drinks"],
    stay: "Weligama",
    icon: "Sun"
  },
  {
    day: 7,
    date: "27th",
    title: "Surf & Grizzly Cookout",
    activities: ["Surfing Lessons", "Market Visit & Storytelling Cookout", "Club Night"],
    stay: "Weligama",
    highlight: true,
    icon: "Utensils"
  },
  {
    day: 8,
    date: "28th",
    title: "Lagoon Adventure",
    activities: ["Mangrove Kayaking", "Awards Night"],
    stay: "Weligama",
    icon: "Anchor"
  },
  {
    day: 9,
    date: "29th",
    title: "Departure",
    activities: ["Transfer to Colombo", "Farewells"],
    stay: "N/A",
    icon: "Send"
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Timo",
    role: "Rotaract Club Munich International",
    image: "https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_800/v1770973938/WhatsApp_Image_2026-02-11_at_11.01.05_AM_umfms4.jpg",
    quote: "I was part of the ETP in 2024 and it’s been a fantastic journey that I can highly recommend. The trip was an excellent opportunity to not only explore many parts of Sri Lanka, but to also get very interesting insights from the Sri Lankan Rotaractors themselves who have been with us along the journey. This has certainly been the highlight of 2024 for me."
  },
  {
    name: "Justyna",
    role: "Rotaract Brussels Coudenberg International",
    image: "https://res.cloudinary.com/ds4xc6fcf/image/upload/f_auto,q_auto,w_800/v1770973937/WhatsApp_Image_2026-02-11_at_11.02.10_AM_wvbquu.jpg",
    quote: "Amazing nature and very friendly people. I hope I can come back some day, maybe for more surfing classes and tuk tuk rides! I have a great memories of the Sri Lanka trip. We clicked very well together as a group and with our hosts. There are so many fun moments to remember, places and activities we did that it would be really difficult to choose my favourite one!"
  }
];