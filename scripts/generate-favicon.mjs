import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const CYAN = "#38bdf8";
const CYAN_LIGHT = "#7dd3fc";

function badgeSvg(rounded) {
  const rx = rounded ? 112 : 0;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d1522"/>
      <stop offset="1" stop-color="#050505"/>
    </linearGradient>
    <linearGradient id="st" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${CYAN_LIGHT}"/>
      <stop offset="1" stop-color="${CYAN}"/>
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="504" height="504" rx="${rx}" fill="url(#bg)" stroke="${CYAN}" stroke-opacity="0.18" stroke-width="4"/>
  <g font-family="Impact, 'Arial Narrow', 'Franklin Gothic Medium', sans-serif" font-size="300" font-weight="700" text-anchor="middle" dominant-baseline="central">
    <text x="256" y="264" fill="url(#st)">ST</text>
  </g>
</svg>`;
}

function render(svg, size) {
  return sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
}

async function writePng(name, size, svg) {
  const png = await render(svg, size);
  fs.writeFileSync(path.join(root, "public", name), png);
}

async function makeIco(sizes) {
  const frames = [];
  let offset = 6 + 16 * sizes.length;
  for (const size of sizes) {
    const png = await render(badgeSvg(true), size);
    frames.push({ size, png, offset });
    offset += png.length;
  }
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(frames.length, 4);
  const entries = Buffer.alloc(16 * frames.length);
  frames.forEach((f, i) => {
    const e = i * 16;
    entries.writeUInt8(f.size >= 256 ? 0 : f.size, e);
    entries.writeUInt8(f.size >= 256 ? 0 : f.size, e + 1);
    entries.writeUInt8(0, e + 2);
    entries.writeUInt8(0, e + 3);
    entries.writeUInt16LE(1, e + 4);
    entries.writeUInt16LE(32, e + 6);
    entries.writeUInt32LE(f.png.length, e + 8);
    entries.writeUInt32LE(f.offset, e + 12);
  });
  return Buffer.concat([header, entries, ...frames.map((f) => f.png)]);
}

const rounded = [16, 32, 48];
const square = [
  { name: "apple-touch-icon.png", size: 180 },
  { name: "favicon-192x192.png", size: 192 },
  { name: "favicon-512x512.png", size: 512 },
];

for (const size of rounded) {
  await writePng(`favicon-${size}x${size}.png`, size, badgeSvg(true));
}
for (const { name, size } of square) {
  await writePng(name, size, badgeSvg(false));
}

const ico = await makeIco([16, 32, 48]);
fs.writeFileSync(path.join(root, "app", "favicon.ico"), ico);
fs.writeFileSync(path.join(root, "public", "favicon.ico"), ico);

console.log("Favicons written:");
for (const size of rounded) console.log(`  public/favicon-${size}x${size}.png`);
for (const { name, size } of square) console.log(`  public/${name} (${size}x${size})`);
console.log("  app/favicon.ico");
console.log("  public/favicon.ico");
