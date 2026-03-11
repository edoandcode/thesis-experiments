import pandas as pd
import os

# ---------------------------
# CONFIGURATION
# ---------------------------

# Target endpoint to analyze (folder name within experiments/throughput)
ENDPOINT_NAME = "protected"  # welcome | images_small | images_large | protected | protected_authenticated

# Set project root (BASE_DIR) two levels up from this script for portability
BASE_DIR = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "../../")
)

# Path to the specific endpoint results
RESULTS_DIR = os.path.join(
    BASE_DIR,
    "experiments",
    "throughput",
    ENDPOINT_NAME
)

# ---------------------------

def compute_metrics(csv_file):
    """
    Calculates throughput metrics from a JMeter raw CSV file.
    
    Returns a dict with: rps, received_kb_sec, sent_kb_sec, error_rate.
    """
    df = pd.read_csv(csv_file)

    # Test duration in seconds (timestamps are in ms)
    duration = (df["timeStamp"].max() - df["timeStamp"].min()) / 1000

    # Requests Per Second (RPS)
    rps = len(df) / duration

    # Bandwidth calculations (bytes to KB/sec)
    received_kb_sec = df["bytes"].sum() / 1024 / duration
    sent_kb_sec = df["sentBytes"].sum() / 1024 / duration

    # Percentage of failed requests
    error_rate = (df["success"] == False).sum() / len(df) * 100

    return {
        "rps": round(rps, 2),
        "received_kb_sec": round(received_kb_sec, 2),
        "sent_kb_sec": round(sent_kb_sec, 2),
        "error_rate": round(error_rate, 2)
    }


def main():
    """
    Iterates through 'cdn' and 'no-cdn' scenarios to generate a summary.csv.
    """
    rows = []

    for scenario in ["cdn", "no-cdn"]:
        csv_file = os.path.join(RESULTS_DIR, f"raw_{scenario}.csv")

        if not os.path.exists(csv_file):
            print(f"Skipping missing file: {csv_file}")
            continue

        metrics = compute_metrics(csv_file)
        
        # Merge scenario name with the calculated metrics
        rows.append({
            "scenario": scenario,
            **metrics
        })

    # Aggregate results and export to CSV
    summary_df = pd.DataFrame(rows)
    output_file = os.path.join(RESULTS_DIR, "summary.csv")
    summary_df.to_csv(output_file, index=False)

    print(f"Summary generated at: {output_file}")
    print(summary_df)


if __name__ == "__main__":
    main()