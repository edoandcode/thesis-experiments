#!/bin/bash

# ==============================
# CONFIGURAZIONE
# ==============================

URL="https://edoandcode.com/"
SCENARIO="cdn"    
RUNS=30
OUTPUT_FILE="latency_${SCENARIO}.csv"

# ==============================
# HEADER CSV
# ==============================

echo "run;scenario;ttfb_ms;rtt_ms;total_ms" > $OUTPUT_FILE

# ==============================
# TEST LOOP
# ==============================

for ((i=1;i<=RUNS;i++))
do
  RESULT=$(curl -o /dev/null -s -w "%{time_connect},%{time_starttransfer},%{time_total}" $URL)

  RTT=$(echo $RESULT | cut -d',' -f1)
  TTFB=$(echo $RESULT | cut -d',' -f2)
  TOTAL=$(echo $RESULT | cut -d',' -f3)

  RTT_MS=$(echo "$RTT * 1000" | bc -l)
  TTFB_MS=$(echo "$TTFB * 1000" | bc -l)
  TOTAL_MS=$(echo "$TOTAL * 1000" | bc -l)

  echo "$i;$SCENARIO;$TTFB_MS;$RTT_MS;$TOTAL_MS" >> $OUTPUT_FILE

  echo "Run $i completed"

  sleep 1
done

echo "Test completed. File saved in $OUTPUT_FILE"