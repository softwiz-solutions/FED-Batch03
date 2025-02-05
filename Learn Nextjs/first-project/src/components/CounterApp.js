"use client";
import { useState } from "react";

export default function CounterApp() {
  const [counter, setCouter] = useState(0);
  const handleIncrement = () => {
    setCouter(counter + 1);
  };
  const handleDecrement = () => {
    setCouter(counter - 1);
  };
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{counter}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
