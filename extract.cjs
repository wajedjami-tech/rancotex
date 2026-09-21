const https = require("https");
const fs = require("fs");

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

async function run() {
  const html = await fetch("https://rancotex.com/");
  
  // Find all images
  const regex = /https:\/\/rancotex\.com\/wp-content\/uploads\/[^\s"'<>\)]+\.(?:jpg|jpeg|png|webp|svg)/gi;
  const matches = [...new Set(html.match(regex) || [])];
  console.log("Total images found:", matches.length);
  fs.writeFileSync("extracted_images.json", JSON.stringify(matches, null, 2));

  // Find all menu links
  const menuRegex = /<a[^>]+href="([^"]+)"[^>]*>(.*?)<\/a>/gi;
  const menuLinks = [];
  let m;
  while ((m = menuRegex.exec(html)) !== null) {
    const text = m[2].replace(/<[^>]+>/g, "").trim();
    if (text && !text.includes("\n") && m[1].includes("rancotex.com")) {
      menuLinks.push({ text, url: m[1] });
    }
  }
  fs.writeFileSync("extracted_links.json", JSON.stringify(menuLinks, null, 2));
  console.log("Extracted links count:", menuLinks.length);
}

run();
