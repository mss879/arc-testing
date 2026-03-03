const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, 'public');

// All portfolio images referenced in portfolio/page.tsx
const portfolioImages = [
    'javagap.jpg',
    'sponge-global.png',
    'delft-tours.png',
    'secertery-services.png',
    'halo.png',
    'exim.png',
    'core-craft-screenshot.png',
    'Ontriq-screenshot.png',
    'orkestrate-screenshot.png',
    'KeysPlease-Screenshot.png',
    'dek-studio-screenshot.png',
    'vibewebstudio.png',
    'yboagency.png',
    'carrush.png',
    'cararenaceylon.png',
    'hiltopglobal.png',
    'islandjerky.png',
    'digitalkade.png',
    'jacobday.png',
    'mouttakicoaching.png',
    'arc crm system.png',
    'fitbite.png',
    'ceylontealandwebsite.png',
    'cosmic-dusk.png',
    'hijabboutiquestore.png',
    'mellifluous-jalebi.png',
    'essentialmarketing.png',
    'ceylonmotors.png',
    'prismatic-mooncake.png',
    // Template images
    'luxary restaurent.png',
    'travelagency.png',
    'real-estate.png',
    'Corporate website.png',
    'Musicradio website.png',
    'traveltourism.png',
    // Other large images
    'dek-studio.png',
    'nexusart.png',
    'S&S-Traders.jpeg',
    'Sponge-global.jpeg',
    'arcaiportfolio.png',
    'halo-logo.png',
    'java-logo.jpeg',
    'exim-logo.png',
];

async function compressToWebP(filename) {
    const inputPath = path.join(publicDir, filename);
    if (!fs.existsSync(inputPath)) {
        console.log(`⏭ Skip (not found): ${filename}`);
        return;
    }

    const ext = path.extname(filename);
    const baseName = path.basename(filename, ext);
    // Keep the same name but change extension to .webp
    const outputName = baseName + '.webp';
    const outputPath = path.join(publicDir, outputName);

    try {
        const inputStats = fs.statSync(inputPath);
        const inputSizeKB = (inputStats.size / 1024).toFixed(1);

        await sharp(inputPath)
            .webp({ quality: 82 })
            .toFile(outputPath);

        const outputStats = fs.statSync(outputPath);
        const outputSizeKB = (outputStats.size / 1024).toFixed(1);
        const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(0);

        console.log(`✓ ${filename} (${inputSizeKB}KB) → ${outputName} (${outputSizeKB}KB) [${savings}% smaller]`);
    } catch (err) {
        console.error(`✗ Failed: ${filename} - ${err.message}`);
    }
}

async function main() {
    console.log('=== Compressing portfolio images to WebP ===\n');

    let totalInputSize = 0;
    let totalOutputSize = 0;

    for (const img of portfolioImages) {
        const inputPath = path.join(publicDir, img);
        if (fs.existsSync(inputPath)) {
            totalInputSize += fs.statSync(inputPath).size;
        }
        await compressToWebP(img);
    }

    // Calculate total savings
    for (const img of portfolioImages) {
        const ext = path.extname(img);
        const baseName = path.basename(img, ext);
        const outputPath = path.join(publicDir, baseName + '.webp');
        if (fs.existsSync(outputPath)) {
            totalOutputSize += fs.statSync(outputPath).size;
        }
    }

    console.log(`\n=== Summary ===`);
    console.log(`Total input:  ${(totalInputSize / 1024 / 1024).toFixed(1)} MB`);
    console.log(`Total output: ${(totalOutputSize / 1024 / 1024).toFixed(1)} MB`);
    console.log(`Total saved:  ${((totalInputSize - totalOutputSize) / 1024 / 1024).toFixed(1)} MB (${((1 - totalOutputSize / totalInputSize) * 100).toFixed(0)}%)`);
}

main().catch(console.error);
