const fs = require('fs');
const path = require('path');

const replacements = {
    '#0a0f1c': '#1B2620',
    '#10172a': '#24332B',
    '#d4af37': '#FACC15',
    '#c8a95b': '#FACC15',
    '#1e1b4b': '#1B2620' // replace dark blue from bottom nav
};

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && file !== 'node_modules' && file !== '.next' && file !== '.git') {
            processDirectory(fullPath);
        } else if (stat.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css'))) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            
            for (const [search, replace] of Object.entries(replacements)) {
                // simple replace all
                content = content.split(search).join(replace);
                // Also uppercase hex
                content = content.split(search.toUpperCase()).join(replace);
            }
            
            if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated: ' + fullPath);
            }
        }
    }
}

processDirectory('./src');
console.log('Done!');
