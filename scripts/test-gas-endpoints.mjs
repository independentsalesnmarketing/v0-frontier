/**
 * Tests each Google Apps Script endpoint by simulating an exact browser form POST.
 * Uses native fetch (Node 18+) — no dependencies needed.
 *
 * Run: node scripts/test-gas-endpoints.mjs
 */

const endpoints = [
  {
    label: "OrderForm.tsx — Residential Modal",
    url: "https://script.google.com/macros/s/AKfycbyWQRdA-mfqRnkCWmGDlgyzeI6SOu7P-EeA8Ypt61dIME7gZELySKtRw_s_Wf6HVJCX/exec",
    payload: {
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
    },
  },
  {
    label: "BusinessOrderForm.tsx — Business Modal",
    url: "https://script.google.com/macros/s/AKfycbx4TS3QR-ZEgYcTrK7DQ5Ab2YN4Tfeh-Ah9hrlmr8e3GsEzsuhUkRI8M7fUMl2Wfo04/exec",
    payload: {
      order: "Business",
      firstName: "Test",
      lastName: "User",
      phoneNumber: "2175550200",
      email: "biz@example.com",
      serviceAddress: "456 Business Ave, Springfield, IL",
      zipCode: "62701",
      companyName: "Test Company LLC",
      businessType: "Small Business",
      federalTaxId: "12-3456789",
      internetPlan: "Fiber 2 Gig for Business",
      voipService: "No",
    },
  },
  {
    label: "OrderPageClient.tsx — /order Page",
    url: "https://script.google.com/macros/s/AKfycbw90YQbzaXHUL8HeOuARdVrNToq37J03Dmbn-U4G3cpPngkRBMLPnBgvDdEZQPPXcqD/exec",
    payload: {
      order: "Residential",
      firstName: "Test",
      lastName: "User",
      serviceAddress: "789 Order Page Rd, Springfield, IL",
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
    },
  },
];

async function testEndpoint({ label, url, payload }) {
  console.log("\n" + "─".repeat(60));
  console.log(`Testing : ${label}`);
  console.log(`URL     : ${url}`);

  // ── GET probe — checks if the deployment exists at all ──────────────────
  let getStatus, getBody;
  try {
    const getRes = await fetch(url, { redirect: "follow" });
    getStatus = getRes.status;
    getBody = await getRes.text();
  } catch (err) {
    console.log(`\nGET probe  ❌  Network error: ${err.message}`);
    getStatus = null;
    getBody = "";
  }

  // ── POST — exact simulation of the hidden iframe form POST ───────────────
  const formBody = new URLSearchParams({ data: JSON.stringify(payload) });

  let postStatus, postBody;
  try {
    const postRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody.toString(),
      redirect: "follow",
    });
    postStatus = postRes.status;
    postBody = await postRes.text();
  } catch (err) {
    console.log(`POST probe ❌  Network error: ${err.message}`);
    postStatus = null;
    postBody = "";
  }

  // ── Diagnosis ────────────────────────────────────────────────────────────
  console.log(`\nGET  → HTTP ${getStatus ?? "ERROR"}`);
  console.log(`POST → HTTP ${postStatus ?? "ERROR"}`);

  const isPageNotFound = (body) =>
    body.includes("Page Not Found") || body.includes("page-not-found");

  const diagnose = (status, body, method) => {
    if (status === 200) {
      const lc = body.toLowerCase();
      const hasSuccess = /success|ok|saved|appended|result/.test(lc);
      console.log(
        `  ✅  ${method} 200 OK — deployment is LIVE${hasSuccess ? " and reported success" : ""}`
      );
      if (!hasSuccess) {
        console.log(`  ⚠️   Response body (first 300 chars):`);
        console.log("  " + body.slice(0, 300).replace(/\n/g, "\n  "));
      }
    } else if (status === 405 && isPageNotFound(body)) {
      console.log(
        `  ❌  ${method} 405 "Page Not Found" — deployment ID does not exist (deleted or unpublished)`
      );
    } else if (status === 403) {
      console.log(
        `  ❌  ${method} 403 Forbidden — deployment exists but requires Google login (not public)`
      );
    } else if (status === 404) {
      console.log(
        `  ❌  ${method} 404 — script or deployment not found`
      );
    } else if (status === 500) {
      console.log(`  ❌  ${method} 500 — GAS script threw an exception`);
      console.log(`  Response body (first 300 chars):`);
      console.log("  " + body.slice(0, 300).replace(/\n/g, "\n  "));
    } else if (status != null) {
      console.log(`  ⚠️   ${method} ${status} — unexpected status`);
      console.log("  " + body.slice(0, 300).replace(/\n/g, "\n  "));
    }
  };

  diagnose(getStatus, getBody, "GET ");
  diagnose(postStatus, postBody, "POST");
}

// Run all tests sequentially so output is readable
(async () => {
  console.log("GAS Endpoint Verification");
  console.log("=".repeat(60));

  for (const ep of endpoints) {
    await testEndpoint(ep);
  }

  console.log("\n" + "=".repeat(60));
  console.log("Done.");
})();
