const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const files = [
  "app/dimas/foto/sertifikat/javascript-essentials-2/1.webp",
  "app/dimas/foto/sertifikat/ui-ux-design/1.webp",
  "app/dimas/foto/sertifikat/digital-marketing/1.webp",
];

Promise.all(files.map(async (file) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  await sharp({
    create: { width: 1200, height: 900, channels: 3, background: { r: 36, g: 37, b: 34 } },
  }).webp().toFile(file);
})).then(() => console.log("Created certificate placeholders"));
