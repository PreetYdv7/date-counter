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

  return (
    <div>
      {/* Step adjustment section */}
      <div>
        <button onClick={() => setStep((s) => Math.max(s - 1, 1))}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      {/* Count adjustment section */}
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
};
