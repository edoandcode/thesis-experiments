import pandas as pd
import numpy as np
import os

# ==============================
# CONFIGURAZIONE
# ==============================

CSV_FILE = "latency_no-cdn.csv"   # Cambia quando analizzi l'altro scenario
OUTPUT_FILE = "summary_latency.csv"

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
        "mean": series.mean(),
        "std": series.std(),
        "p50": np.percentile(series, 50),
        "p95": np.percentile(series, 95),
        "p99": np.percentile(series, 99),
    }

ttfb_stats = compute_stats(df["ttfb_ms"])
rtt_stats = compute_stats(df["rtt_ms"])
total_stats = compute_stats(df["total_ms"])

# ==============================
# CREAZIONE DATAFRAME RIASSUNTIVO
# ==============================

summary_row = {
    "scenario": scenario,
    
    "ttfb_mean_ms": ttfb_stats["mean"],
    "ttfb_std_ms": ttfb_stats["std"],
    "ttfb_p50_ms": ttfb_stats["p50"],
    "ttfb_p95_ms": ttfb_stats["p95"],
    "ttfb_p99_ms": ttfb_stats["p99"],
    
    "rtt_mean_ms": rtt_stats["mean"],
    "rtt_std_ms": rtt_stats["std"],
    "rtt_p50_ms": rtt_stats["p50"],
    "rtt_p95_ms": rtt_stats["p95"],
    "rtt_p99_ms": rtt_stats["p99"],
    
    "total_mean_ms": total_stats["mean"],
    "total_std_ms": total_stats["std"],
    "total_p50_ms": total_stats["p50"],
    "total_p95_ms": total_stats["p95"],
    "total_p99_ms": total_stats["p99"],
}

summary_df = pd.DataFrame([summary_row])

# ==============================
# SALVATAGGIO
# ==============================

if os.path.exists(OUTPUT_FILE):
    existing_df = pd.read_csv(OUTPUT_FILE)
    combined_df = pd.concat([existing_df, summary_df], ignore_index=True)
    combined_df.to_csv(OUTPUT_FILE, index=False)
else:
    summary_df.to_csv(OUTPUT_FILE, index=False)

print(f"Statistiche salvate in {OUTPUT_FILE}")