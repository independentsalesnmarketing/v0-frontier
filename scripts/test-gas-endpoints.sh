#!/usr/bin/env bash
# Test each Google Apps Script endpoint by simulating an actual form submission.
# Sends a POST with a "data" field (JSON string) matching each form's payload shape.
# Uses -L to follow the GAS redirect chain.

set -euo pipefail

PASS="✅"
FAIL="❌"
WARN="⚠️ "

test_endpoint() {
  local label="$1"
  local url="$2"
  local payload="$3"

  echo ""
  echo "──────────────────────────────────────────────"
  echo "Testing: $label"
  echo "URL: $url"
  echo ""

  # Encode the JSON as a form field value
  RESPONSE=$(curl -s -L \
    --max-time 20 \
    --write-out "\n__HTTP_STATUS__%{http_code}" \
    -X POST "$url" \
    --data-urlencode "data=$payload" \
    2>&1) || { echo "$FAIL  curl failed (network error or timeout)"; return; }

  HTTP_STATUS=$(echo "$RESPONSE" | grep '__HTTP_STATUS__' | sed 's/__HTTP_STATUS__//')
  BODY=$(echo "$RESPONSE" | sed '/__HTTP_STATUS__/d')

  echo "HTTP Status: $HTTP_STATUS"

  if [[ "$HTTP_STATUS" == "200" ]]; then
    echo "$PASS  Endpoint is ACTIVE (200 OK)"
    # Check if it looks like a GAS success response
    if echo "$BODY" | grep -qi "success\|result\|ok\|saved\|appended\|sheet"; then
      echo "$PASS  Response contains success indicator"
    else
      echo "${WARN} Response body does not contain obvious success text"
    fi
    echo ""
    echo "Response body (first 500 chars):"
    echo "$BODY" | head -c 500
  elif [[ "$HTTP_STATUS" == "302" || "$HTTP_STATUS" == "301" ]]; then
    echo "${WARN} Redirect returned (did curl not follow it?)"
  elif [[ "$HTTP_STATUS" == "403" ]]; then
    echo "$FAIL  403 Forbidden — GAS deployment may be restricted (not public)"
  elif [[ "$HTTP_STATUS" == "404" ]]; then
    echo "$FAIL  404 Not Found — script ID may be wrong or deployment deleted"
  elif [[ "$HTTP_STATUS" == "500" ]]; then
    echo "$FAIL  500 Server Error — GAS script threw an exception"
    echo ""
    echo "Response body (first 500 chars):"
    echo "$BODY" | head -c 500
  else
    echo "${WARN} Unexpected status: $HTTP_STATUS"
    echo ""
    echo "Response body (first 500 chars):"
    echo "$BODY" | head -c 500
  fi
  echo ""
}

# ── 1. OrderForm (residential/business modal) ────────────────────────────────
ORDERFORM_PAYLOAD='{
  "order": "Residential",
  "firstName": "Test",
  "lastName": "User",
  "serviceAddress": "123 Test St, Springfield, IL",
  "zipCode": "62701",
  "phoneNumber": "2175550100",
  "email": "test@example.com",
  "dateOfBirth": "1990-01-01",
  "preferredInstallDate": "2026-04-10",
  "preferredInstallTime": "Morning (8am - 12pm)",
  "internetPlan": "Fiber 2 Gig",
  "digitalVoice": "No",
  "totalShield": "No",
  "unbreakableWiFi": "No",
  "identityProtection": "No",
  "premiumTechPro": "No"
}'

test_endpoint \
  "OrderForm.tsx — Residential Modal" \
  "https://script.google.com/macros/s/AKfycbyWQRdA-mfqRnkCWmGDlgyzeI6SOu7P-EeA8Ypt61dIME7gZELySKtRw_s_Wf6HVJCX/exec" \
  "$ORDERFORM_PAYLOAD"

# ── 2. BusinessOrderForm ─────────────────────────────────────────────────────
BIZFORM_PAYLOAD='{
  "order": "Business",
  "firstName": "Test",
  "lastName": "User",
  "phoneNumber": "2175550200",
  "email": "biz@example.com",
  "serviceAddress": "456 Business Ave, Springfield, IL",
  "zipCode": "62701",
  "companyName": "Test Company LLC",
  "businessType": "Small Business",
  "federalTaxId": "12-3456789",
  "internetPlan": "Fiber 2 Gig for Business",
  "voipService": "No"
}'

test_endpoint \
  "BusinessOrderForm.tsx — Business Modal" \
  "https://script.google.com/macros/s/AKfycbx4TS3QR-ZEgYcTrK7DQ5Ab2YN4Tfeh-Ah9hrlmr8e3GsEzsuhUkRI8M7fUMl2Wfo04/exec" \
  "$BIZFORM_PAYLOAD"

# ── 3. OrderPageClient (/order page) ─────────────────────────────────────────
ORDERPAGE_PAYLOAD='{
  "order": "Residential",
  "firstName": "Test",
  "lastName": "User",
  "serviceAddress": "789 Order Page Rd, Springfield, IL",
  "zipCode": "62701",
  "phoneNumber": "2175550300",
  "email": "orderpage@example.com",
  "dateOfBirth": "1985-06-15",
  "lastFourSSN": "",
  "preferredInstallDate": "",
  "preferredInstallTime": "",
  "promoCode": "",
  "addPhoneService": "No",
  "internetPlan": "Fiber 1 Gig",
  "netflixBundle": "No",
  "wholeHomeWiFi": "No",
  "movedLastYear": "No",
  "previousAddress": "",
  "previousCity": "",
  "previousState": "",
  "previousZipCode": "",
  "totalShield": "No",
  "unbreakableWiFi": "No",
  "identityProtection": "No",
  "premiumTechPro": "No",
  "wifiSecurity": "No",
  "digitalVoice": "No"
}'

test_endpoint \
  "OrderPageClient.tsx — /order Page" \
  "https://script.google.com/macros/s/AKfycbw90YQbzaXHUL8HeOuARdVrNToq37J03Dmbn-U4G3cpPngkRBMLPnBgvDdEZQPPXcqD/exec" \
  "$ORDERPAGE_PAYLOAD"

echo "──────────────────────────────────────────────"
echo "Done."
