const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'tailwind.config.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace hex codes in tailwind.config.ts
const replacements = {
    '#0a0f1c': '#1B2620',
    '#10172a': '#24332B',
    '#d4af37': '#FACC15',
    '#c8a95b': '#FACC15',
    '#1e293b': '#2E4035', // Lighter Navy -> Lighter Army Green
    '#e6c35c': '#FDE047', // Light gold -> Light yellow
    '#b59230': '#EAB308'  // Dark gold -> Dark yellow
};

for (const [search, replace] of Object.entries(replacements)) {
    content = content.split(search).join(replace);
    content = content.split(search.toUpperCase()).join(replace);
}

// Rename some comments
content = content.replace('Army Deep Navy Black', 'Deep Army Green');
content = content.replace('Accent Gold', 'Premium Yellow');
content = content.replace('Deep Navy Black', 'Deep Army Green');
content = content.replace('Lighter Navy', 'Lighter Army Green');

fs.writeFileSync(filePath, content, 'utf8');
console.log('tailwind.config.ts updated!');
