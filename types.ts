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
  iconName: 'Map' | 'Train' | 'Palmtree' | 'Users';
}