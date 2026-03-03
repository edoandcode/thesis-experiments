import pandas as pd
import numpy as np
import os

# ==============================
# CONFIGURAZIONE
# ==============================

ENDPOINT_NAME = "welcome"     # welcome | images_small | images_large | protected | protected_authenticated
SCENARIO = "no-cdn"              # cdn | no-cdn

# ==============================
# COSTRUZIONE PATH
# ==============================

BASE_DIR = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "../../")
)

RESULTS_DIR = os.path.join(
    BASE_DIR, "experiments", "latency", ENDPOINT_NAME
)

CSV_FILE = os.path.join(
    RESULTS_DIR, f"latency_{SCENARIO}_raw.csv"
)

OUTPUT_TTFB = os.path.join(RESULTS_DIR, "summary_ttfb.csv")
OUTPUT_RTT = os.path.join(RESULTS_DIR, "summary_rtt.csv")
OUTPUT_TOTAL = os.path.join(RESULTS_DIR, "summary_total.csv")

# ==============================
# LETTURA CSV
# ==============================

df = pd.read_csv(CSV_FILE, sep=";")
scenario = df["scenario"].iloc[0]

# ==============================
# FUNZIONE CALCOLO STATISTICHE
# ==============================

def compute_stats(series):
    return {
        "scenario": scenario,
        "mean_ms": round(series.mean(), 2),
        "std_ms": round(series.std(), 2),
        "p50_ms": round(np.percentile(series, 50), 2),
        "p95_ms": round(np.percentile(series, 95), 2),
        "p99_ms": round(np.percentile(series, 99), 2),
    }

# ==============================
# CALCOLO METRICHE
# ==============================

ttfb_stats = compute_stats(df["ttfb_ms"])
rtt_stats = compute_stats(df["rtt_ms"])
total_stats = compute_stats(df["total_ms"])

# ==============================
# FUNZIONE SALVATAGGIO
# ==============================

def save_summary(stats_dict, output_file):
    summary_df = pd.DataFrame([stats_dict])

    if os.path.exists(output_file):
        existing_df = pd.read_csv(output_file)
        combined_df = pd.concat([existing_df, summary_df], ignore_index=True)
        combined_df.to_csv(output_file, index=False)
    else:
        summary_df.to_csv(output_file, index=False)

# ==============================
# SALVATAGGIO
# ==============================

save_summary(ttfb_stats, OUTPUT_TTFB)
save_summary(rtt_stats, OUTPUT_RTT)
save_summary(total_stats, OUTPUT_TOTAL)

print("Statistiche salvate in:")
print(f"- {OUTPUT_TTFB}")
print(f"- {OUTPUT_RTT}")
print(f"- {OUTPUT_TOTAL}")