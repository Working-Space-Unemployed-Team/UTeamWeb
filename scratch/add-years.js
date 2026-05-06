const fs = require('fs');

const file = 'd:\\UnemployedTeam\\UTeamWeb\\lib\\tools-data.ts';
let content = fs.readFileSync(file, 'utf8');

// Update DurationType
content = content.replace(
  `export type DurationType = '1-month' | '3-months' | '6-months' | 'lifetime'`,
  `export type DurationType = '1-month' | '3-months' | '6-months' | '1-year' | '2-years' | 'lifetime'`
);

// Update PlanPricing
content = content.replace(
  `export interface PlanPricing {\n  '1-month': number\n  '3-months': number\n  '6-months': number\n  'lifetime': number\n}`,
  `export interface PlanPricing {\n  '1-month': number\n  '3-months': number\n  '6-months': number\n  '1-year': number\n  '2-years': number\n  'lifetime': number\n}`
);

// Update durationLabels
content = content.replace(
  `export const durationLabels: Record<DurationType, string> = {\n  '1-month': '1 Tháng',\n  '3-months': '3 Tháng',\n  '6-months': '6 Tháng',\n  'lifetime': 'Vĩnh viễn',\n}`,
  `export const durationLabels: Record<DurationType, string> = {\n  '1-month': '1 Tháng',\n  '3-months': '3 Tháng',\n  '6-months': '6 Tháng',\n  '1-year': '1 Năm',\n  '2-years': '2 Năm',\n  'lifetime': 'Vĩnh viễn',\n}`
);

// Update pricing for Tool 1
content = content.replace(
  `'1-month': 9.99,\n        '3-months': 24.99,\n        '6-months': 44.99,\n        'lifetime': 79.99,`,
  `'1-month': 9.99,\n        '3-months': 24.99,\n        '6-months': 44.99,\n        '1-year': 69.99,\n        '2-years': 119.99,\n        'lifetime': 149.99,`
);

// Update pricing for Tool 2
content = content.replace(
  `'1-month': 7.99,\n        '3-months': 19.99,\n        '6-months': 34.99,\n        'lifetime': 59.99,`,
  `'1-month': 7.99,\n        '3-months': 19.99,\n        '6-months': 34.99,\n        '1-year': 59.99,\n        '2-years': 99.99,\n        'lifetime': 129.99,`
);

// Update pricing for Tool 3 & 4 (both have same prices)
// Since they have the same old prices, a global replace will catch both
content = content.replace(
  /['"]1-month['"]:\s*14\.99,\s*['"]3-months['"]:\s*34\.99,\s*['"]6-months['"]:\s*59\.99,\s*['"]lifetime['"]:\s*99\.99,?\s*/g,
  `'1-month': 14.99,\n        '3-months': 34.99,\n        '6-months': 59.99,\n        '1-year': 99.99,\n        '2-years': 169.99,\n        'lifetime': 229.99,\n      `
);

fs.writeFileSync(file, content);
console.log('Done');
