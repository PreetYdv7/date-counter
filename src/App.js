import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0); // Tracks the count (days offset from today)
  const [step, setStep] = useState(1); // Tracks the step value for increment/decrement

  const date = new Date();
  date.setDate(date.getDate() + count); // Update date based on count

  const resetValues = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div>
      {/* Step adjustment section */}
      <div>
        <label htmlFor="step-slider">Step:</label>
        <input
          id="step-slider"
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>

      {/* Count adjustment section */}
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          style={{ width: "60px", textAlign: "center" }}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      {/* Date display */}
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day${count > 1 ? "s" : ""} from now will be `
            : `${Math.abs(count)} day${
                Math.abs(count) > 1 ? "s" : ""
              } ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {/* Conditionally render Reset button */}
      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={resetValues}>Reset</button>
        </div>
      )}
    </div>
  );
};
