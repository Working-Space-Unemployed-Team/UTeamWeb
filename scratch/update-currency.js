const fs = require('fs');

const file = 'd:\\UnemployedTeam\\UTeamWeb\\lib\\tools-data.ts';
let content = fs.readFileSync(file, 'utf8');

// Update pricing for Tool 2
content = content.replace(
  `'1-month': 7.99,\n        '3-months': 19.99,\n        '6-months': 34.99,\n        '1-year': 59.99,\n        '2-years': 99.99,\n        'lifetime': 129.99,`,
  `'1-month': 300000,\n        '3-months': 800000,\n        '6-months': 1500000,\n        '1-year': 2500000,\n        '2-years': 4000000,\n        'lifetime': 6000000,`
);

// Update pricing for Tool 3 & 4 (both have same prices)
content = content.replace(
  /['"]1-month['"]:\s*14\.99,\s*['"]3-months['"]:\s*34\.99,\s*['"]6-months['"]:\s*59\.99,\s*['"]1-year['"]:\s*99\.99,\s*['"]2-years['"]:\s*169\.99,\s*['"]lifetime['"]:\s*229\.99,?\s*/g,
  `'1-month': 600000,\n        '3-months': 1500000,\n        '6-months': 2800000,\n        '1-year': 4500000,\n        '2-years': 8000000,\n        'lifetime': 12000000,\n      `
);

fs.writeFileSync(file, content);
console.log('Done');
