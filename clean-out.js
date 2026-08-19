const fs = require('fs');
const path = require('path');

function hasHtmlFilesRecursively(dirPath) {
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (hasHtmlFilesRecursively(fullPath)) return true;
        } else if (item.endsWith('.html')) {
            return true;
        }
    }
    return false;
}

function removeRscFolders(dirPath) {
    if (!fs.existsSync(dirPath)) return;

    const items = fs.readdirSync(dirPath);

    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // First, process subdirectories
            removeRscFolders(fullPath);

            // After processing subdirectories, check if this directory should be removed.
            
            // 1. Remove if it's a Next.js App Router metadata folder
            if (item.startsWith('__next')) {
                fs.rmSync(fullPath, { recursive: true, force: true });
                console.log(`🗑️ Removed Next.js RSC payload folder: ${fullPath}`);
                continue;
            }

            // 2. If it conflicts with an HTML file and DOES NOT contain any HTML files itself, remove it.
            // For example, /out/courses/cds.html exists, and Next.js creates /out/courses/cds/ for RSC data.
            // We want to delete /out/courses/cds/, but NOT /out/courses/ (because it contains cds.html).
            const htmlFileMatch = path.join(dirPath, `${item}.html`);
            if (fs.existsSync(htmlFileMatch)) {
                if (!hasHtmlFilesRecursively(fullPath)) {
                    fs.rmSync(fullPath, { recursive: true, force: true });
                    console.log(`🗑️ Removed conflicting folder (no .html inside): ${fullPath}`);
                    continue;
                }
            }

            // 3. Remove empty directories
            if (fs.existsSync(fullPath) && fs.readdirSync(fullPath).length === 0) {
                fs.rmdirSync(fullPath);
                console.log(`🗑️ Removed empty directory: ${fullPath}`);
            }
        } else if (item.endsWith('.txt')) {
            // Delete the RSC payload .txt files (like .rsc or Next 14+ .txt metadata files)
            // But be careful not to delete robots.txt
            if (item !== 'robots.txt' && item !== 'sitemap.xml') {
                fs.unlinkSync(fullPath);
                console.log(`🗑️ Removed Next.js internal data file: ${fullPath}`);
            }
        }
    }
}

const outDir = path.join(__dirname, 'out');
console.log('🧹 Cleaning up Next.js export artifacts to ensure flat HTML output...');
removeRscFolders(outDir);
console.log('✅ Cleanup complete! Only static assets and flat HTML files remain.');
