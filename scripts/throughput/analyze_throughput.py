# Import della libreria pandas.
# Pandas viene usato per leggere e manipolare facilmente file CSV
# e per effettuare operazioni statistiche sui dati.
import pandas as pd

# Import della libreria os per lavorare con percorsi di file e directory
# in modo indipendente dal sistema operativo.
import os


# ---------------------------
# CONFIGURAZIONE
# ---------------------------

# Nome dell'endpoint da analizzare.
# Questa variabile determina quale cartella dentro experiments/throughput
# verrà analizzata.
#
# Esempio struttura directory:
#
# experiments/throughput/
#    images_large/
#        raw_cdn.csv
#        raw_no-cdn.csv
#
# Modificando questa variabile puoi analizzare endpoint diversi
# senza cambiare altro nel codice.
ENDPOINT_NAME = "protected"  # welcome | images_small | images_large | protected | protected_authenticated


# BASE_DIR rappresenta la directory radice del progetto thesis-experiments.
#
# os.path.dirname(__file__)
# → restituisce la directory dove si trova questo script
#
# ../../
# → risale di due livelli nella gerarchia delle directory
#
# In questo modo il codice rimane portabile tra:
# - ambiente locale
# - server remoto
#
BASE_DIR = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "../../")
)


# Costruzione della directory dove si trovano i risultati dei test di throughput.
#
# Struttura finale risultante:
#
# BASE_DIR/experiments/throughput/<endpoint>
#
RESULTS_DIR = os.path.join(
    BASE_DIR,
    "experiments",
    "throughput",
    ENDPOINT_NAME
)

# ---------------------------


def compute_metrics(csv_file):
    """
    Questa funzione calcola le metriche di throughput a partire
    da un file CSV generato da Apache JMeter.

    Parametri
    ----------
    csv_file : str
        Percorso del file CSV contenente i risultati grezzi.

    Ritorna
    -------
    dict
        Dizionario con le metriche calcolate:
        - rps
        - received_kb_sec
        - sent_kb_sec
        - error_rate
    """

    # Lettura del file CSV tramite pandas.
    # Il risultato è un DataFrame, cioè una struttura tabellare simile
    # a una tabella SQL o un foglio Excel.
    df = pd.read_csv(csv_file)

    # Calcolo della durata complessiva del test.
    #
    # Il campo timeStamp è espresso in millisecondi.
    # Per ottenere la durata del test:
    #
    # durata = ultimo_timestamp - primo_timestamp
    #
    # Dividiamo poi per 1000 per convertire in secondi.
    duration = (df["timeStamp"].max() - df["timeStamp"].min()) / 1000

    # Calcolo del throughput in richieste al secondo (RPS).
    #
    # formula:
    #
    # throughput = numero_richieste / durata_test
    #
    rps = len(df) / duration

    # Calcolo della banda ricevuta.
    #
    # Il campo "bytes" indica quanti byte sono stati ricevuti
    # per ogni richiesta HTTP.
    #
    # Sommiamo tutti i byte ricevuti e dividiamo per:
    #
    # 1024 → conversione in kilobyte
    # duration → per ottenere KB/sec
    #
    received_kb_sec = df["bytes"].sum() / 1024 / duration

    # Calcolo della banda inviata.
    #
    # "sentBytes" rappresenta la dimensione della richiesta HTTP.
    #
    sent_kb_sec = df["sentBytes"].sum() / 1024 / duration

    # Calcolo dell'error rate.
    #
    # La colonna "success" contiene:
    #
    # true  → richiesta riuscita
    # false → errore
    #
    # Contiamo quante richieste hanno success = False.
    #
    error_rate = (df["success"] == False).sum() / len(df) * 100

    # Restituiamo le metriche arrotondate a due decimali
    # sotto forma di dizionario.
    return {
        "rps": round(rps, 2),
        "received_kb_sec": round(received_kb_sec, 2),
        "sent_kb_sec": round(sent_kb_sec, 2),
        "error_rate": round(error_rate, 2)
    }


def main():
    """
    Funzione principale dello script.

    Legge i risultati dei test JMeter per i due scenari:

    - cdn
    - no-cdn

    e genera un file summary.csv con le metriche aggregate.
    """

    # Lista che conterrà le metriche dei due scenari.
    rows = []

    # Ciclo sugli scenari sperimentali.
    # Ogni endpoint ha due file:
    #
    # raw_cdn.csv
    # raw_no-cdn.csv
    #
    for scenario in ["cdn", "no-cdn"]:

        # Costruzione del path del file CSV.
        csv_file = os.path.join(
            RESULTS_DIR,
            f"raw_{scenario}.csv"
        )

        # Verifica che il file esista.
        # Se non esiste stampiamo un messaggio e passiamo allo scenario successivo.
        if not os.path.exists(csv_file):
            print("Missing file:", csv_file)
            continue

        # Calcolo delle metriche per il file CSV.
        metrics = compute_metrics(csv_file)

        # Aggiunta delle metriche alla lista dei risultati.
        # Il campo scenario serve per distinguere CDN e No-CDN.
        rows.append({
            "scenario": scenario,
            **metrics
        })

    # Creazione di un DataFrame pandas contenente i risultati aggregati.
    df = pd.DataFrame(rows)

    # Percorso del file summary finale.
    output_file = os.path.join(
        RESULTS_DIR,
        "summary.csv"
    )

    # Salvataggio del summary su disco.
    df.to_csv(output_file, index=False)

    # Stampa di conferma.
    print("Summary generated:", output_file)

    # Stampa dei risultati anche su console.
    print(df)


# Entry point dello script.
# Questo blocco garantisce che la funzione main() venga eseguita
# solo quando lo script è lanciato direttamente da Python.
if __name__ == "__main__":
    main()