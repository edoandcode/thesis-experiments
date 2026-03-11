#!/bin/bash

# ==============================
# CONFIGURATION
# ==============================

# Target URL and experiment metadata
URL="https://edoandcode.com/protected" 
ENDPOINT_NAME="protected_authenticated"
SCENARIO="cdn" # options: cdn | no-cdn
RUNS=50

# Optional authentication token (leave empty if not required)
AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWE2YWY5MGQ4NWE3ZmFhYTgyZmUwNzMiLCJlbWFpbCI6ImVkb2FuZGNvZGVAZ21haWwuY29tIiwiaWF0IjoxNzcyNTMxNjI2fQ.-__7uA2wqEYu6CCotkbfJIWssLJchGsBAGdMOMqidaQ"

# ==============================
# PATHS & OUTPUT SETUP
# ==============================

# Set base directory relative to script location and ensure results directory exists
BASE_DIR="$(cd "$(dirname "$0")/../../" && pwd)"
RESULTS_DIR="$BASE_DIR/experiments/latency/$ENDPOINT_NAME"
mkdir -p "$RESULTS_DIR"

OUTPUT_FILE="$RESULTS_DIR/latency_${SCENARIO}_raw.csv"

# Initialize CSV with headers
echo "run;scenario;status;ttfb_ms;rtt_ms;total_ms" > "$OUTPUT_FILE"

# ==============================
# LATENCY TEST LOOP
# ==============================

for ((i=1;i<=RUNS;i++))
do
  # Construct curl command with optional auth header
  # -w (write-out) extracts: http_code, time_connect (RTT), time_starttransfer (TTFB), time_total
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

  # Parse comma-separated values from curl output
  STATUS=$(echo "$RESULT" | cut -d',' -f1)
  RTT=$(echo "$RESULT" | cut -d',' -f2)
  TTFB=$(echo "$RESULT" | cut -d',' -f3)
  TOTAL=$(echo "$RESULT" | cut -d',' -f4)

  # Convert seconds to milliseconds for easier analysis
  RTT_MS=$(echo "$RTT * 1000" | bc -l)
  TTFB_MS=$(echo "$TTFB * 1000" | bc -l)
  TOTAL_MS=$(echo "$TOTAL * 1000" | bc -l)

  # Log raw data to CSV
  echo "$i;$SCENARIO;$STATUS;$TTFB_MS;$RTT_MS;$TOTAL_MS" >> "$OUTPUT_FILE"

  # Real-time console output
  echo "----------------------------------------"
  echo "Run: $i | Status: $STATUS"
  echo "RTT:    $RTT_MS ms"
  echo "TTFB:   $TTFB_MS ms"
  echo "TOTAL:  $TOTAL_MS ms"
  echo "----------------------------------------"

  sleep 1
done

echo -e "\nTest completed. Results saved in:\n$OUTPUT_FILE"