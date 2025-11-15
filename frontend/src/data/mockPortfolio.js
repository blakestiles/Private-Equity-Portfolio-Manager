// Mock Portfolio Data with enhanced metrics
export const portfolioCompanies = [
  {
    id: 1,
    name: "TechVenture AI",
    industry: "Artificial Intelligence",
    status: "outperforming",
    acquisitionDate: "Jan 2022",
    holdingPeriod: "34 months",
    investmentAmount: "$28.5M",
    currentValue: "$91.2M",
    sector: "Technology",
    stage: "Growth",
    riskLevel: "low",
    teamSize: 145,
    metrics: {
      revenue: { value: "$45.2M", change: 28.5, trend: "up" },
      ebitda: { value: "$12.8M", change: 32.1, trend: "up" },
      growthRate: { value: "28.5%", change: 5.2, trend: "up" },
      irr: { value: "42.3%", change: 3.1, trend: "up" },
      valuation: { value: "3.2x", change: 0.4, trend: "up" },
      margin: { value: "28.3%", change: 2.1, trend: "up" },
      runway: { value: "24 mo", change: 2, trend: "up" }
    },
    sparklineData: [20, 25, 22, 30, 35, 32, 40, 45, 42, 48, 52, 45],
    quarterlyRevenue: [32, 38, 41, 45],
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 2,
    name: "HealthCare Plus",
    industry: "Healthcare Technology",
    status: "on-track",
    acquisitionDate: "Mar 2021",
    holdingPeriod: "46 months",
    investmentAmount: "$42.0M",
    currentValue: "$117.6M",
    sector: "Healthcare",
    stage: "Late Stage",
    riskLevel: "medium",
    teamSize: 220,
    metrics: {
      revenue: { value: "$62.7M", change: 18.3, trend: "up" },
      ebitda: { value: "$18.5M", change: 15.7, trend: "up" },
      growthRate: { value: "18.3%", change: -2.1, trend: "down" },
      irr: { value: "35.8%", change: 1.2, trend: "up" },
      valuation: { value: "2.8x", change: 0.2, trend: "up" },
      margin: { value: "29.5%", change: 1.8, trend: "up" },
      runway: { value: "36 mo", change: 0, trend: "stable" }
    },
    sparklineData: [45, 48, 50, 52, 55, 54, 58, 60, 61, 62, 63, 62],
    quarterlyRevenue: [55, 58, 61, 62],
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: 3,
    name: "FinTech Solutions",
    industry: "Financial Services",
    status: "outperforming",
    acquisitionDate: "Sep 2022",
    holdingPeriod: "26 months",
    investmentAmount: "$22.0M",
    currentValue: "$77.0M",
    sector: "FinTech",
    stage: "Growth",
    riskLevel: "low",
    teamSize: 98,
    metrics: {
      revenue: { value: "$38.9M", change: 42.7, trend: "up" },
      ebitda: { value: "$11.2M", change: 45.3, trend: "up" },
      growthRate: { value: "42.7%", change: 8.9, trend: "up" },
      irr: { value: "48.5%", change: 6.2, trend: "up" },
      valuation: { value: "3.5x", change: 0.6, trend: "up" },
      margin: { value: "28.8%", change: 3.2, trend: "up" },
      runway: { value: "18 mo", change: 1, trend: "up" }
    },
    sparklineData: [15, 18, 22, 25, 28, 30, 32, 35, 36, 37, 38, 39],
    quarterlyRevenue: [28, 32, 36, 39],
    color: "from-violet-500 to-purple-600"
  },
  {
    id: 4,
    name: "EcoEnergy Corp",
    industry: "Renewable Energy",
    status: "on-track",
    acquisitionDate: "Jun 2020",
    holdingPeriod: "53 months",
    investmentAmount: "$65.0M",
    currentValue: "$162.5M",
    sector: "Energy",
    stage: "Mature",
    riskLevel: "medium",
    teamSize: 340,
    metrics: {
      revenue: { value: "$91.3M", change: 22.1, trend: "up" },
      ebitda: { value: "$24.7M", change: 19.8, trend: "up" },
      growthRate: { value: "22.1%", change: 1.5, trend: "up" },
      irr: { value: "31.2%", change: -1.8, trend: "down" },
      valuation: { value: "2.5x", change: 0.1, trend: "up" },
      margin: { value: "27.1%", change: -0.5, trend: "down" },
      runway: { value: "48 mo", change: 3, trend: "up" }
    },
    sparklineData: [70, 72, 75, 78, 80, 82, 84, 86, 88, 89, 90, 91],
    quarterlyRevenue: [84, 86, 89, 91],
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 5,
    name: "CloudNine SaaS",
    industry: "Enterprise Software",
    status: "attention",
    acquisitionDate: "Nov 2021",
    holdingPeriod: "38 months",
    investmentAmount: "$18.5M",
    currentValue: "$38.9M",
    sector: "Software",
    stage: "Growth",
    riskLevel: "high",
    teamSize: 72,
    metrics: {
      revenue: { value: "$28.4M", change: 8.2, trend: "up" },
      ebitda: { value: "$6.1M", change: 5.5, trend: "up" },
      growthRate: { value: "8.2%", change: -12.3, trend: "down" },
      irr: { value: "18.7%", change: -8.5, trend: "down" },
      valuation: { value: "2.1x", change: -0.3, trend: "down" },
      margin: { value: "21.5%", change: -3.2, trend: "down" },
      runway: { value: "12 mo", change: -2, trend: "down" }
    },
    sparklineData: [32, 30, 31, 29, 28, 27, 26, 27, 28, 27, 28, 28],
    quarterlyRevenue: [27, 28, 28, 28],
    color: "from-orange-500 to-red-600"
  },
  {
    id: 6,
    name: "RetailTech Innovations",
    industry: "E-commerce & Retail",
    status: "outperforming",
    acquisitionDate: "Apr 2022",
    holdingPeriod: "31 months",
    investmentAmount: "$39.0M",
    currentValue: "$117.0M",
    sector: "Retail",
    stage: "Growth",
    riskLevel: "low",
    teamSize: 185,
    metrics: {
      revenue: { value: "$73.8M", change: 35.9, trend: "up" },
      ebitda: { value: "$19.3M", change: 38.2, trend: "up" },
      growthRate: { value: "35.9%", change: 7.8, trend: "up" },
      irr: { value: "44.1%", change: 5.3, trend: "up" },
      valuation: { value: "3.0x", change: 0.5, trend: "up" },
      margin: { value: "26.1%", change: 2.8, trend: "up" },
      runway: { value: "30 mo", change: 4, trend: "up" }
    },
    sparklineData: [42, 45, 48, 52, 55, 58, 62, 65, 68, 70, 72, 74],
    quarterlyRevenue: [62, 65, 70, 74],
    color: "from-pink-500 to-rose-600"
  }
];

export const portfolioSummary = {
  totalValue: "$604.2M",
  totalInvested: "$215.0M",
  averageIRR: "36.8%",
  portfolioMultiple: "2.81x",
  activeDeals: 6,
  totalTeamSize: 1060
};

export const recentActivity = [
  { id: 1, company: "FinTech Solutions", action: "Revenue milestone achieved", time: "2 hours ago", type: "success" },
  { id: 2, company: "CloudNine SaaS", action: "Growth rate declined", time: "5 hours ago", type: "warning" },
  { id: 3, company: "RetailTech Innovations", action: "New funding round closed", time: "1 day ago", type: "success" },
  { id: 4, company: "TechVenture AI", action: "Quarterly report available", time: "2 days ago", type: "info" }
];