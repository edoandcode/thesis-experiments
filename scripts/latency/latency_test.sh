#!/bin/bash

# ==============================
# CONFIGURAZIONE
# ==============================

URL="https://edoandcode.com/protected" # URL da testare (corrispondente all'endpoint scelto)
ENDPOINT_NAME="protected_authenticated"     # welcome | images_small | images_large | protected | protected_authenticated
SCENARIO="cdn"                   # cdn | no-cdn
RUNS=50

# Token opzionale (lascia vuoto per test senza autenticazione)
AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWE2YWY5MGQ4NWE3ZmFhYTgyZmUwNzMiLCJlbWFpbCI6ImVkb2FuZGNvZGVAZ21haWwuY29tIiwiaWF0IjoxNzcyNTMxNjI2fQ.-__7uA2wqEYu6CCotkbfJIWssLJchGsBAGdMOMqidaQ"   # es: AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# ==============================
# PATH RISULTATI
# ==============================

BASE_DIR="$(cd "$(dirname "$0")/../../" && pwd)"
RESULTS_DIR="$BASE_DIR/experiments/latency/$ENDPOINT_NAME"

mkdir -p "$RESULTS_DIR"

OUTPUT_FILE="$RESULTS_DIR/latency_${SCENARIO}_raw.csv"

# ==============================
# HEADER CSV
# ==============================

echo "run;scenario;status;ttfb_ms;rtt_ms;total_ms" > "$OUTPUT_FILE"

# ==============================
# TEST LOOP
# ==============================

for ((i=1;i<=RUNS;i++))
do

  # Costruzione comando curl con token opzionale
  if [ -n "$AUTH_TOKEN" ]; then
    CURL_CMD=(curl -s -o /dev/null \
      -H "x-auth-token: $AUTH_TOKEN" \
      -w "%{http_code},%{time_connect},%{time_starttransfer},%{time_total}" \
      "$URL")
  else
    CURL_CMD=(curl -s -o /dev/null \
      -w "%{http_code},%{time_connect},%{time_starttransfer},%{time_total}" \
      "$URL")
  fi

  RESULT=$("${CURL_CMD[@]}")

  STATUS=$(echo "$RESULT" | cut -d',' -f1)
  RTT=$(echo "$RESULT" | cut -d',' -f2)
  TTFB=$(echo "$RESULT" | cut -d',' -f3)
  TOTAL=$(echo "$RESULT" | cut -d',' -f4)

  RTT_MS=$(echo "$RTT * 1000" | bc -l)
  TTFB_MS=$(echo "$TTFB * 1000" | bc -l)
  TOTAL_MS=$(echo "$TOTAL * 1000" | bc -l)

  # Salvataggio CSV
  echo "$i;$SCENARIO;$STATUS;$TTFB_MS;$RTT_MS;$TOTAL_MS" >> "$OUTPUT_FILE"

  # Output realtime dettagliato
  echo "----------------------------------------"
  echo "Run: $i"
  echo "Status: $STATUS"
  echo "RTT:    $RTT_MS ms"
  echo "TTFB:   $TTFB_MS ms"
  echo "TOTAL:  $TOTAL_MS ms"
  echo "----------------------------------------"

  sleep 1
done

echo ""
echo "Test completed."
echo "File saved in:"
echo "$OUTPUT_FILE"
