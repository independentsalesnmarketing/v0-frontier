/**
 * Test each Google Apps Script URL to check which are active.
 * Simulates the exact same POST the order forms send.
 */

const urls = [
  {
    name: "OrderForm (residential/business modal) — components/OrderForm.tsx",
    url: "https://script.google.com/macros/s/AKfycbyWQRdA-mfqRnkCWmGDlgyzeI6SOu7P-EeA8Ypt61dIME7gZELySKtRw_s_Wf6HVJCX/exec",
    payload: {
      order: "Residential",
      firstName: "Test",
      lastName: "User",
      serviceAddress: "123 Test St",
      zipCode: "10001",
      phoneNumber: "5555550100",
      email: "test@example.com",
      dateOfBirth: "01/01/1990",
      preferredInstallDate: "2026-04-10",
      preferredInstallTime: "Morning (8am-12pm)",
      internetPlan: "Fiber 500 Mbps",
      digitalVoice: "No",
      totalShield: "No",
      unbreakableWiFi: "No",
      identityProtection: "No",
      premiumTechPro: "No",
    },
  },
  {
    name: "BusinessOrderForm (business modal) — components/BusinessOrderForm.tsx",
    url: "https://script.google.com/macros/s/AKfycbx4TS3QR-ZEgYcTrK7DQ5Ab2YN4Tfeh-Ah9hrlmr8e3GsEzsuhUkRI8M7fUMl2Wfo04/exec",
    payload: {
      order: "Business",
      firstName: "Test",
      lastName: "User",
      phoneNumber: "5555550100",
      email: "test@example.com",
      serviceAddress: "123 Test St, New York, NY",
      zipCode: "10001",
      companyName: "Test Company LLC",
      businessType: "Small Business",
      federalTaxId: "00-0000000",
      internetPlan: "Fiber 500 Mbps",
      voipService: "No",
    },
  },
  {
    name: "OrderPageClient (/order page) — app/order/OrderPageClient.tsx",
    url: "https://script.google.com/macros/s/AKfycbw90YQbzaXHUL8HeOuARdVrNToq37J03Dmbn-U4G3cpPngkRBMLPnBgvDdEZQPPXcqD/exec",
    payload: {
      order: "Residential",
      firstName: "Test",
      lastName: "User",
      serviceAddress: "123 Test St",
      zipCode: "10001",
      phoneNumber: "5555550100",
      email: "test@example.com",
      dateOfBirth: "01/01/1990",
      lastFourSSN: "",
      preferredInstallDate: "",
      preferredInstallTime: "",
      promoCode: "",
      addPhoneService: "No",
      internetPlan: "Fiber 500 Mbps",
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
    },
  },
];

// GAS endpoints redirect on success — follow redirects and capture final response
async function testUrl({ name, url, payload }) {
  console.log(`\n${"─".repeat(70)}`);
  console.log(`TESTING: ${name}`);
  console.log(`URL: ${url}`);
  console.log(`${"─".repeat(70)}`);

  const body = new URLSearchParams({ data: JSON.stringify(payload) });

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
      redirect: "follow",
    });

    const text = await res.text();
    const status = res.status;
    const finalUrl = res.url;

    console.log(`HTTP Status : ${status}`);
    console.log(`Final URL   : ${finalUrl}`);
    console.log(`Response    : ${text.slice(0, 500)}`);

    if (status >= 200 && status < 400) {
      console.log(`\n✅  ACTIVE — endpoint responded successfully`);
    } else {
      console.log(`\n❌  INACTIVE or ERROR — HTTP ${status}`);
    }
  } catch (err) {
    console.log(`\n❌  FAILED — ${err.message}`);
  }
}

for (const endpoint of urls) {
  await testUrl(endpoint);
}

console.log(`\n${"─".repeat(70)}`);
console.log("Done.");
