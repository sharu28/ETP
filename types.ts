
export interface PricingTier {
  title: string;
  price: string;
  features: string[];
  isHighlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  iconName: 'Map' | 'Train' | 'TreePalm' | 'Users';
}

export interface ItineraryItem {
  day: number;
  date: string;
  title: string;
  activities: string[];
  stay: string;
  highlight?: boolean;
  icon?: any;
}
