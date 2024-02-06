import styles from "./tipResult.module.css";

export default function TipResult({
  tipAmount,
  totalPerPerson,
  reset,
  inputsEmpty,
}: {
  tipAmount: string;
  totalPerPerson: string;
  reset: (e: any) => void;
  inputsEmpty: boolean;
}) {
  const showTip = !(tipAmount === "NaN" || tipAmount === "Infinity");
  const showTotal = !(
    totalPerPerson === "NaN" || totalPerPerson === "Infinity"
  );

  return (
    <div className={styles.container}>
      <div className={styles.amountContainer}>
        <div className={styles.text}>
          Tip amount <br /> <span className={styles.person}> / person</span>
        </div>
        <p className={styles.amount}>${showTip ? tipAmount : "0.00"}</p>

        <div className={styles.text}>
          Total <br /> <span className={styles.person}> / person</span>
        </div>
        <p className={styles.amount}>${showTotal ? totalPerPerson : "0.00"}</p>
      </div>

      <button disabled={inputsEmpty} className={styles.button} onClick={reset}>
        RESET
      </button>
    </div>
  );
}
