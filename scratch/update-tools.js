const fs = require('fs');

const file = 'd:\\UnemployedTeam\\UTeamWeb\\lib\\tools-data.ts';
let content = fs.readFileSync(file, 'utf8');

// Update interfaces
content = content.replace(
  `export type PlanType = 'home' | 'pro'\nexport type DurationType = '1-month' | '3-months' | '6-months' | 'lifetime'\n\nexport interface PlanPricing {\n  '1-month': number\n  '3-months': number\n  '6-months': number\n  'lifetime': number\n}\n\nexport interface ToolPricing {\n  home: PlanPricing\n  pro: PlanPricing\n}`,
  `export type DurationType = '1-month' | '3-months' | '6-months' | 'lifetime'\n\nexport interface PlanPricing {\n  '1-month': number\n  '3-months': number\n  '6-months': number\n  'lifetime': number\n}`
);

content = content.replace(
  `export interface Tool {\n  id: string\n  slug: string\n  name: string\n  description: string\n  fullDescription: string\n  pricing: ToolPricing\n  plans: {\n    home: PlanInfo\n    pro: PlanInfo\n  }\n  image: string\n  demoVideoId: string\n  setupGuides: SetupGuide[]\n}`,
  `export interface Tool {\n  id: string\n  slug: string\n  name: string\n  description: string\n  fullDescription: string\n  pricing: PlanPricing\n  plan: PlanInfo\n  image: string\n  demoVideoId: string\n  setupGuides: SetupGuide[]\n}`
);

content = content.replace(
  `export function getLowestPrice(pricing: ToolPricing): number {\n  const allPrices = [\n    ...Object.values(pricing.home),\n    ...Object.values(pricing.pro),\n  ]\n  return Math.min(...allPrices)\n}`,
  `export function getLowestPrice(pricing: PlanPricing): number {\n  const allPrices = Object.values(pricing);\n  return Math.min(...allPrices)\n}`
);

// We need to replace pricing and plans for all 4 tools.
// We'll use a regex to match pricing and plans blocks and replace them.

const toolRegex = /pricing:\s*\{\s*home:\s*(\{\s*['\w-]+:\s*[\d.]+(?:,\s*['\w-]+:\s*[\d.]+)*\s*,?\s*\}),\s*pro:\s*(\{\s*['\w-]+:\s*[\d.]+(?:,\s*['\w-]+:\s*[\d.]+)*\s*,?\s*\})\s*,?\s*\},\s*plans:\s*\{\s*home:\s*\{[\s\S]*?\}\s*,\s*pro:\s*(\{\s*name:\s*'[^']+',\s*description:\s*'[^']+',\s*features:\s*\[[\s\S]*?\]\s*,?\s*\})\s*,?\s*\}/g;

content = content.replace(toolRegex, (match, homePricing, proPricing, proPlan) => {
  // We'll use the pro plan features and home pricing (or pro pricing? let's use pro pricing to ensure all features are covered, or actually let's use home pricing to be affordable).
  // I'll use homePricing but change plan name to 'Tiêu chuẩn'
  let newPlan = proPlan.replace(/name:\s*'[^']+'/, "name: 'Tiêu chuẩn'");
  newPlan = newPlan.replace(/description:\s*'[^']+'/, "description: 'Đầy đủ tính năng'");
  return `pricing: ${homePricing},\n    plan: ${newPlan}`;
});

fs.writeFileSync(file, content);
console.log('Done');
