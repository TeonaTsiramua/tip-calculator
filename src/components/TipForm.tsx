import styles from "./tipForm.module.css";
import iconPerson from "../assets/images/icon-person.svg";
import iconDollar from "../assets/images/icon-dollar.svg";

export default function TipForm({
  bill,
  setBill,
  setTip,
  tip,
  peopleError,
  people,
  setPeople,
}: {
  bill: number | null;
  setBill: React.Dispatch<React.SetStateAction<number | null>>;
  setTip: React.Dispatch<React.SetStateAction<number | null>>;
  tip: number | null;
  peopleError: string | null;
  people: number | null;
  setPeople: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const inputStyle = {
    borderColor: people === 0 ? "#e17457" : "", // Set border color to red when people is 0
    caretColor: people === 0 ? "#e17457" : "", // Set caret color to red when people is 0
  };

  return (
    <article className={styles.container}>
      {/* Bill Input */}

      <div>
        <img src={iconDollar} alt="dollar icon" className={styles.logo} />
        <label className={styles.label} htmlFor="bill">
          Bill
        </label>

        <input
          className={styles.input}
          placeholder="0"
          id="bill"
          type="number"
          value={bill === null ? "" : bill}
          onKeyDown={(e) => {
            if (e.key === "-") {
              e.preventDefault();
            }
          }}
          onChange={(e) => setBill(e.target.valueAsNumber)}
        />
      </div>

      {/* Buttons */}

      <div className={styles.buttonContainer}>
        <p className={styles.label}>Select Tip %</p>
        {[0.05, 0.1, 0.15, 0.25, 0.5].map((value) => (
          <button
            key={value}
            className={`${styles.button} ${
              tip === value ? styles.selected : ""
            }`}
            onClick={() => setTip(value)}
          >
            {value * 100}%
          </button>
        ))}

        {/* custom input */}

        <input
          className={styles.custom}
          placeholder="Custom"
          type="number"
          max={100}
          value={(tip && tip * 100) || ""}
          onKeyDown={(e) => {
            if (e.key === "." || e.key === "-") {
              e.preventDefault();
            }
          }}
          onChange={(e) => setTip(e.target.valueAsNumber / 100)}
        />
      </div>

      {/* Number of People Input */}

      <div>
        <img src={iconPerson} alt="person icon" className={styles.logo} />
        <label className={styles.label} htmlFor="numberOfPeople">
          Number of People <span className={styles.span}> {peopleError}</span>
        </label>
        <input
          style={inputStyle}
          className={styles.input}
          placeholder="0"
          type="number"
          id="numberOfPeople"
          value={people === null ? "" : people}
          onKeyDown={(e) => {
            if (e.key === "." || e.key === "-") {
              e.preventDefault();
            }
          }}
          onChange={(e) => setPeople(e.target.valueAsNumber)}
        />
      </div>
    </article>
  );
}
