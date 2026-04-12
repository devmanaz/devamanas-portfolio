import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const input = 'src/assets/profile-no-bg.png';
const output = 'src/assets/profile-clean.png';

const image = sharp(readFileSync(input));
const { data, info } = await image
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = new Uint8Array(data.buffer);
const threshold = 200; // pixels brighter than this get made transparent

for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];
  // If close to white/light grey → transparent
  if (r > threshold && g > threshold && b > threshold) {
    pixels[i + 3] = 0; // alpha = 0
  }
}

await sharp(Buffer.from(pixels.buffer), {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(output);

console.log(`✓ Saved clean image to ${output}`);
