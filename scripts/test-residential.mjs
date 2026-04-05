/**
 * Tests only the residential OrderForm.tsx endpoint.
 * Run: node scripts/test-residential.mjs
 */

const URL =
  "https://script.google.com/macros/s/AKfycbyWQRdA-mfqRnkCWmGDlgyzeI6SOu7P-EeA8Ypt61dIME7gZELySKtRw_s_Wf6HVJCX/exec";

const payload = {
  order: "Residential",
  firstName: "Test",
  lastName: "User",
  serviceAddress: "123 Test St, Springfield, IL",
  zipCode: "62701",
  phoneNumber: "2175550100",
  email: "test@example.com",
  dateOfBirth: "1990-01-01",
  preferredInstallDate: "2026-04-10",
  preferredInstallTime: "Morning (8am - 12pm)",
  internetPlan: "Fiber 2 Gig",
  digitalVoice: "No",
  totalShield: "No",
  unbreakableWiFi: "No",
  identityProtection: "No",
  premiumTechPro: "No",
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
