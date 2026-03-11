import pandas as pd
import numpy as np
import os

# ==============================
# CONFIGURATION
# ==============================

# Target experiment and scenario for analysis
ENDPOINT_NAME = "protected_authenticated"
SCENARIO = "cdn" # options: cdn | no-cdn

# ==============================
# PATH CONSTRUCTION
# ==============================

# Define base project directory and specific results folder
BASE_DIR = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "../../")
)

RESULTS_DIR = os.path.join(
    BASE_DIR, "experiments", "latency", ENDPOINT_NAME
)

CSV_FILE = os.path.join(
    RESULTS_DIR, f"latency_{SCENARIO}_raw.csv"
)

# Output paths for categorized statistical summaries
OUTPUT_TTFB = os.path.join(RESULTS_DIR, "summary_ttfb.csv")
OUTPUT_RTT = os.path.join(RESULTS_DIR, "summary_rtt.csv")
OUTPUT_TOTAL = os.path.join(RESULTS_DIR, "summary_total.csv")

# ==============================
# DATA LOADING
# ==============================

# Read results using the semicolon separator defined in the Bash script
df = pd.read_csv(CSV_FILE, sep=";")
scenario = df["scenario"].iloc[0]

# ==============================
# STATISTICAL COMPUTATION
# ==============================

def compute_stats(series):
    """Calculates mean, standard deviation, and key percentiles (P50, P95, P99)."""
    return {
        "scenario": scenario,
        "mean_ms": round(series.mean(), 2),
        "std_ms": round(series.std(), 2),
        "p50_ms": round(np.percentile(series, 50), 2),
        "p95_ms": round(np.percentile(series, 95), 2),
        "p99_ms": round(np.percentile(series, 99), 2),
    }

# Compute metrics for each latency component
ttfb_stats = compute_stats(df["ttfb_ms"])
rtt_stats = compute_stats(df["rtt_ms"])
total_stats = compute_stats(df["total_ms"])

# ==============================
# DATA PERSISTENCE
# ==============================

def save_summary(stats_dict, output_file):
    """Saves stats to CSV. If the file exists, appends the new data to it."""
    summary_df = pd.DataFrame([stats_dict])

    if os.path.exists(output_file):
        existing_df = pd.read_csv(output_file)
        # Combine existing records with new results for scenario comparison
        combined_df = pd.concat([existing_df, summary_df], ignore_index=True)
        combined_df.to_csv(output_file, index=False)
    else:
        summary_df.to_csv(output_file, index=False)

# Execute save operations
save_summary(ttfb_stats, OUTPUT_TTFB)
save_summary(rtt_stats, OUTPUT_RTT)
save_summary(total_stats, OUTPUT_TOTAL)

print("Statistics saved to:")
print(f"- {OUTPUT_TTFB}\n- {OUTPUT_RTT}\n- {OUTPUT_TOTAL}")