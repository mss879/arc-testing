import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import https from 'https';

const images = [
  { url: 'https://framerusercontent.com/images/a26OzkC4NwHAkKLOWrAmK8WyvDg.png', name: 'compass.webp' },
  { url: 'https://framerusercontent.com/images/XQgiis7gGdUPSeOOrtqD2Wy81Qg.png', name: 'brush.webp' },
  { url: 'https://framerusercontent.com/images/S9EGmxAIAkL8CpVbIxsP49rQKc.jpg', name: 'workspace.webp' },
  { url: 'https://framerusercontent.com/images/Anr44n9P3s2LFGs5EurkQxKVKdE.jpg', name: 'drafts.webp' },
  { url: 'https://framerusercontent.com/images/UzRaWx7txCAaMyeaMOgrNtRtaY.jpg', name: 'sketches.webp' },
  { url: 'https://framerusercontent.com/images/zoIInaosVMRrQmmsA0vfTGt9I.png', name: 'why-us-bg.webp' },
  { url: 'https://cdn.prod.website-files.com/692d319ab5e6b6dca5920d01/69317a56db9a6a740288171e_252006152a966d2b3076b337bca32f72_Comp%202.lottie', name: 'collaborative.lottie', raw: true }
];

const destDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function downloadAndOptimize() {
  for (const img of images) {
    const destPath = path.join(destDir, img.name);
    console.log(`Downloading ${img.url}...`);
    try {
      const buffer = await fetchUrl(img.url);
      if (img.raw) {
        fs.writeFileSync(destPath, buffer);
        console.log(`Saved raw file to ${img.name}`);
      } else {
        await sharp(buffer)
          .webp({ quality: 80, effort: 6 })
          .toFile(destPath);
        console.log(`Optimized and saved ${img.name}`);
      }
    } catch (err) {
      console.error(`Failed to process ${img.name}:`, err.message);
    }
  }
}

downloadAndOptimize();
