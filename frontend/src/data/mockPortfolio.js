// Mock Portfolio Data
export const portfolioCompanies = [
  {
    id: 1,
    name: "TechVenture AI",
    industry: "Artificial Intelligence",
    status: "outperforming",
    metrics: {
      revenue: { value: "$45.2M", change: 28.5, trend: "up" },
      ebitda: { value: "$12.8M", change: 32.1, trend: "up" },
      growthRate: { value: "28.5%", change: 5.2, trend: "up" },
      irr: { value: "42.3%", change: 3.1, trend: "up" },
      valuation: { value: "3.2x", change: 0.4, trend: "up" }
    },
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 2,
    name: "HealthCare Plus",
    industry: "Healthcare Technology",
    status: "on-track",
    metrics: {
      revenue: { value: "$62.7M", change: 18.3, trend: "up" },
      ebitda: { value: "$18.5M", change: 15.7, trend: "up" },
      growthRate: { value: "18.3%", change: -2.1, trend: "down" },
      irr: { value: "35.8%", change: 1.2, trend: "up" },
      valuation: { value: "2.8x", change: 0.2, trend: "up" }
    },
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: 3,
    name: "FinTech Solutions",
    industry: "Financial Services",
    status: "outperforming",
    metrics: {
      revenue: { value: "$38.9M", change: 42.7, trend: "up" },
      ebitda: { value: "$11.2M", change: 45.3, trend: "up" },
      growthRate: { value: "42.7%", change: 8.9, trend: "up" },
      irr: { value: "48.5%", change: 6.2, trend: "up" },
      valuation: { value: "3.5x", change: 0.6, trend: "up" }
    },
    color: "from-violet-500 to-purple-600"
  },
  {
    id: 4,
    name: "EcoEnergy Corp",
    industry: "Renewable Energy",
    status: "on-track",
    metrics: {
      revenue: { value: "$91.3M", change: 22.1, trend: "up" },
      ebitda: { value: "$24.7M", change: 19.8, trend: "up" },
      growthRate: { value: "22.1%", change: 1.5, trend: "up" },
      irr: { value: "31.2%", change: -1.8, trend: "down" },
      valuation: { value: "2.5x", change: 0.1, trend: "up" }
    },
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 5,
    name: "CloudNine SaaS",
    industry: "Enterprise Software",
    status: "attention",
    metrics: {
      revenue: { value: "$28.4M", change: 8.2, trend: "up" },
      ebitda: { value: "$6.1M", change: 5.5, trend: "up" },
      growthRate: { value: "8.2%", change: -12.3, trend: "down" },
      irr: { value: "18.7%", change: -8.5, trend: "down" },
      valuation: { value: "2.1x", change: -0.3, trend: "down" }
    },
    color: "from-orange-500 to-red-600"
  },
  {
    id: 6,
    name: "RetailTech Innovations",
    industry: "E-commerce & Retail",
    status: "outperforming",
    metrics: {
      revenue: { value: "$73.8M", change: 35.9, trend: "up" },
      ebitda: { value: "$19.3M", change: 38.2, trend: "up" },
      growthRate: { value: "35.9%", change: 7.8, trend: "up" },
      irr: { value: "44.1%", change: 5.3, trend: "up" },
      valuation: { value: "3.0x", change: 0.5, trend: "up" }
    },
    color: "from-pink-500 to-rose-600"
  }
];

export const portfolioSummary = {
  totalValue: "$340.3M",
  totalInvested: "$215.0M",
  averageIRR: "36.8%",
  portfolioMultiple: "2.9x"
};