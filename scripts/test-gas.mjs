import https from "https";
import querystring from "querystring";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw3v1WwweiCkaBNIOAPQbvFV2XdqAHggh6na67uXKy2wh9b-klNm9Ruo66cQzIn4ch1EA/exec";

async function post(label, payload) {
  return new Promise((resolve, reject) => {
    const body = querystring.stringify({ data: JSON.stringify(payload) });
    const url = new URL(SCRIPT_URL);

    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(body),
      },
    };

    let responseBody = "";
    const req = https.request(options, (res) => {
      res.on("data", (chunk) => (responseBody += chunk));
      res.on("end", () => {
        console.log(`\n=== ${label} ===`);
        console.log("Status:", res.statusCode);
        try {
          console.log("Response:", JSON.stringify(JSON.parse(responseBody), null, 2));
        } catch {
          console.log("Response (raw):", responseBody);
        }
        resolve(responseBody);
      });
    });

    req.on("error", (err) => {
      console.error(`\n=== ${label} ERROR ===`, err.message);
      reject(err);
    });

    req.write(body);
    req.end();
  });
}

// Residential test
await post("RESIDENTIAL TEST", {
  order: "Residential",
  firstName: "Jane",
  lastName: "Smith",
  email: "jane.smith@example.com",
  phoneNumber: "(555) 867-5309",
  dateOfBirth: "1988-06-15",
  serviceAddress: "456 Oak Ave, Brooklyn, NY 11201",
  zipCode: "11201",
  preferredInstallDate: "2026-04-20",
  preferredInstallTime: "Morning (8am-12pm)",
  internetPlan: "Fiber 1 Gig",
  digitalVoice: "yes",
  totalShield: "Yes",
  unbreakableWiFi: "No",
  identityProtection: "Yes",
  premiumTechPro: "No",
});

// Business test
await post("BUSINESS TEST", {
  order: "Business",
  firstName: "Robert",
  lastName: "Chen",
  email: "rchen@acmecorp.com",
  phoneNumber: "(212) 555-0198",
  companyName: "Acme Corp",
  businessType: "LLC",
  federalTaxId: "12-3456789",
  serviceAddress: "100 Business Blvd, New York, NY 10001",
  zipCode: "10001",
  internetPlan: "Fiber 2 Gig",
  voipService: "Yes",
});

console.log("\nDone. Check the sheet and gamblerspassion@gmail.com for both emails.");
