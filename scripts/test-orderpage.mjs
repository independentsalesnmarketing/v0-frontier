/**
 * Tests only the OrderPageClient.tsx (/order page) endpoint.
 * Run: node scripts/test-orderpage.mjs
 */

const URL =
  "https://script.google.com/macros/s/AKfycbw90YQbzaXHUL8HeOuARdVrNToq37J03Dmbn-U4G3cpPngkRBMLPnBgvDdEZQPPXcqD/exec";

const payload = {
  order: "Residential",
  firstName: "Test",
  lastName: "User",
  serviceAddress: "789 Order Page Rd, Apt 2B, Springfield, IL",
  zipCode: "62701",
  phoneNumber: "2175550300",
  email: "orderpage@example.com",
  dateOfBirth: "1985-06-15",
  lastFourSSN: "",
  preferredInstallDate: "",
  preferredInstallTime: "",
  promoCode: "",
  addPhoneService: "No",
  internetPlan: "Fiber 1 Gig",
  netflixBundle: "No",
  wholeHomeWiFi: "No",
  movedLastYear: "No",
  previousAddress: "",
  previousCity: "",
  previousState: "",
  previousZipCode: "",
  totalShield: "No",
  unbreakableWiFi: "No",
  identityProtection: "No",
  premiumTechPro: "No",
  wifiSecurity: "No",
  digitalVoice: "No",
};

console.log("Target URL:", URL);
console.log("Payload:", JSON.stringify(payload, null, 2));
console.log("\n--- Sending POST ---\n");

const body = new URLSearchParams({ data: JSON.stringify(payload) });

const res = await fetch(URL, {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: body.toString(),
  redirect: "follow",
});

console.log("HTTP Status:", res.status);
console.log("Headers:");
for (const [k, v] of res.headers.entries()) {
  console.log(`  ${k}: ${v}`);
}

const text = await res.text();
console.log("\nFull Response Body:");
console.log(text);
