// This script validates all internal links in the codebase
// Run with: node scripts/validate-links.js

const fs = require("fs");
const path = require("path");

const VALID_ROUTES = [
  "/",
  "/internet",
  "/internet/pricing",
  "/tv-netflix",
  "/tv-and-bundles",
  "/bundles",
  "/home-phone",
  "/wifi",
  "/internet-speed-test",
  "/coverage",
  "/order",
  "/about",
  "/support",
  "/support/faq",
  "/business",
  "/business/internet",
  "/business/phone",
  "/business/managed-services",
  "/terms",
  "/privacy",
  "/blog",
  "/blog/fiber-vs-cable",
  "/blog/what-is-fiber-internet",
  "/blog/how-much-internet-speed-do-i-need",
  "/blog/work-from-home-internet-guide",
  "/blog/streaming-internet-requirements",
  "/blog/gaming-internet-guide",
  "/blog/smart-home-internet-guide",
  "/blog/what-to-expect-internet-installation",
  "/blog/symmetrical-vs-asymmetrical-speeds",
  "/blog/wifi-dead-zones-fix",
  "/blog/internet-speed-test-explained",
  "/blog/data-caps-explained",
  "/blog/switching-internet-providers",
  "/blog/multi-gig-internet-worth-it",
  "/blog/fiber-internet-availability-guide",
  "/blog/internet-tv-bundle-save-money",
  "/blog/home-network-setup-guide",
  "/blog/home-internet-security-tips",
  "/blog/rural-internet-options",
  "/blog/best-internet-for-large-families",
  "/compare/fiber-vs-cable",
  "/compare/fiber-vs-cable-vs-dsl",
];

// Dynamic routes that are validated by pattern
const DYNAMIC_ROUTES = [
  /^\/fiber-internet-in\/[^/]+\/[^/]+$/, // City pages
];

function isValidRoute(href) {
  // Skip external links
  if (href.startsWith("http") || href.startsWith("//")) return true;

  // Skip tel: and mailto:
  if (href.startsWith("tel:") || href.startsWith("mailto:")) return true;

  // Skip hash links (they're page anchors)
  if (href === "#" || href.startsWith("#")) return true;

  // Check if it's in valid routes
  if (VALID_ROUTES.includes(href)) return true;

  // Check dynamic routes
  for (const pattern of DYNAMIC_ROUTES) {
    if (pattern.test(href)) return true;
  }

  return false;
}

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const hrefRegex = /href=["']([^"']+)["']/g;

  const invalidLinks = [];
  let match;

  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];
    if (!isValidRoute(href)) {
      invalidLinks.push(href);
    }
  }

  return invalidLinks;
}

function scanDirectory(dir) {
  const allInvalidLinks = {};

  function walk(currentPath) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (file.startsWith(".")) continue; // Skip hidden files
      if (file === "node_modules") continue;

      if (stat.isDirectory()) {
        walk(filePath);
      } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        const invalidLinks = scanFile(filePath);
        if (invalidLinks.length > 0) {
          allInvalidLinks[filePath] = [...new Set(invalidLinks)]; // Deduplicate
        }
      }
    }
  }

  walk(dir);
  return allInvalidLinks;
}

// Run validation
const appDir = path.join(__dirname, "..", "app");
const invalidLinks = scanDirectory(appDir);

if (Object.keys(invalidLinks).length === 0) {
  console.log("✓ All internal links are valid!");
  process.exit(0);
} else {
  console.error("✗ Found invalid links:\n");
  for (const [filePath, links] of Object.entries(invalidLinks)) {
    console.error(`${filePath}:`);
    for (const link of links) {
      console.error(`  - ${link}`);
    }
  }
  process.exit(1);
}
