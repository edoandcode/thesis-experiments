#!/bin/bash

# ==============================
# CONFIGURAZIONE
# ==============================

URL="https://edoandcode.com/"
ENDPOINT_NAME="welcome"     # welcome | images_small | images_large | jwt
SCENARIO="cdn"              # cdn | no-cdn
RUNS=30

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

echo "run;scenario;ttfb_ms;rtt_ms;total_ms" > "$OUTPUT_FILE"

# ==============================
# TEST LOOP
# ==============================

for ((i=1;i<=RUNS;i++))
do
  RESULT=$(curl -o /dev/null -s -w "%{time_connect},%{time_starttransfer},%{time_total}" "$URL")

  RTT=$(echo "$RESULT" | cut -d',' -f1)
  TTFB=$(echo "$RESULT" | cut -d',' -f2)
  TOTAL=$(echo "$RESULT" | cut -d',' -f3)

  RTT_MS=$(echo "$RTT * 1000" | bc -l)
  TTFB_MS=$(echo "$TTFB * 1000" | bc -l)
  TOTAL_MS=$(echo "$TOTAL * 1000" | bc -l)

  echo "$i;$SCENARIO;$TTFB_MS;$RTT_MS;$TOTAL_MS" >> "$OUTPUT_FILE"

  echo "Run $i completed"

  sleep 1
done

echo "Test completed. File saved in:"
echo "$OUTPUT_FILE"