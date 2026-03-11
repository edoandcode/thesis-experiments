#!/bin/bash

# Target endpoint handled by the Cloudflare Worker.
# This endpoint should trigger the Worker logic so that a cold start can occur.
URL="https://tuodominio.com/welcome"

# Wait for a period of inactivity to allow the Worker instance to be unloaded.
# This increases the probability that the next request will trigger a cold start.
echo "Waiting for worker to become idle..."
sleep 120

# First request after inactivity.
# This request is expected to experience a cold start.
echo "COLD REQUEST"
curl -o /dev/null -s \
-w "time_total=%{time_total}\n" \
$URL

# Subsequent requests executed immediately after the cold request.
# These should hit a warm Worker instance and therefore have lower latency.
echo "WARM REQUESTS"

for i in {1..5}
do
  curl -o /dev/null -s \
  -w "time_total=%{time_total}\n" \
  $URL
done