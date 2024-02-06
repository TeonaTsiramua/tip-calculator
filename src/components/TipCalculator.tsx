import { useState, useEffect } from "react";
import styles from "./TipCalculator.module.css";
import TipForm from "./TipForm";
import TipResult from "./TipResult";

export default function TipCalculator() {
  const [bill, setBill] = useState<number | null>(null);
  const [people, setPeople] = useState<number | null>(null);
  const [tip, setTip] = useState<number | null>(null);
  const [peopleError, setPeopleError] = useState<string | null>(null);

  const [inputsEmpty, setInputsEmpty] = useState(true);

  const isValidInput = bill !== null && people !== null && tip !== null;
  const tipAmount = isValidInput ? ((bill * tip) / people).toFixed(2) : "0.00";
  const totalPerPerson = isValidInput
    ? ((bill * (1 + tip)) / people).toFixed(2)
    : "0.00";

  useEffect(() => {
    if (people === 0) {
      setPeopleError("Can't be Zero");
    } else {
      setPeopleError("");
    }
  }, [people]);

  useEffect(() => {
    // Check if all input fields are empty
    const allInputsEmpty = bill === null && people === null && tip === null;
    setInputsEmpty(allInputsEmpty);
  }, [bill, people, tip]);

  const reset = (e: any) => {
    e.preventDefault();
    setBill(null);
    setTip(null);
    setPeople(null);
  };

  return (
    <div className={styles.container}>
      <TipForm
        bill={bill}
        setBill={setBill}
        setTip={setTip}
        tip={tip}
        peopleError={peopleError}
        people={people}
        setPeople={setPeople}
      />

      <TipResult
        tipAmount={tipAmount}
        totalPerPerson={totalPerPerson}
        reset={reset}
        inputsEmpty={inputsEmpty}
      />
    </div>
  );
}
