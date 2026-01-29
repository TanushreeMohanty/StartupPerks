export interface Deal {
  id: number;
  title: string;
  description: string;
  category: string;
  isLocked: boolean;
  logo: string;
  value: string;
}

export const DEALS: Deal[] = [
  {
    id: 1,
    title: "AWS for Startups",
    description: "Cloud computing services to help you scale your infrastructure.",
    category: "Cloud",
    isLocked: false,
    logo: "☁️",
    value: "$10,000 Credits"
  },
  {
    id: 2,
    title: "Stripe",
    description: "Payment processing platform with fee-free thresholds for new users.",
    category: "Finance",
    isLocked: true,
    logo: "💳",
    value: "$20k Fee-free"
  },
  {
    id: 3,
    title: "Notion",
    description: "The connected workspace where better, faster work happens.",
    category: "Productivity",
    isLocked: false,
    logo: "📝",
    value: "6 Months Free"
  },
  {
    id: 4,
    title: "HubSpot",
    description: "CRM platform with all the tools you need for marketing and sales.",
    category: "Marketing",
    isLocked: true,
    logo: "🎯",
    value: "90% Discount"
  }
];