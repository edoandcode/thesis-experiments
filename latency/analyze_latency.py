import pandas as pd
import numpy as np
import os

# ==============================
# CONFIGURAZIONE
# ==============================

CSV_FILE = "latency_cdn.csv"   # Cambia per l'altro scenario

OUTPUT_TTFB = "summary_ttfb.csv"
OUTPUT_RTT = "summary_rtt.csv"
OUTPUT_TOTAL = "summary_total.csv"

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
        "mean_ms": series.mean(),
        "std_ms": series.std(),
        "p50_ms": np.percentile(series, 50),
        "p95_ms": np.percentile(series, 95),
        "p99_ms": np.percentile(series, 99),
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
# SALVATAGGIO FILE SEPARATI
# ==============================

save_summary(ttfb_stats, OUTPUT_TTFB)
save_summary(rtt_stats, OUTPUT_RTT)
save_summary(total_stats, OUTPUT_TOTAL)

print("Statistiche salvate in:")
print(f"- {OUTPUT_TTFB}")
print(f"- {OUTPUT_RTT}")
print(f"- {OUTPUT_TOTAL}")