"use client";
import { useState } from "react";
import MainButton from "./MainButton";

export default function CounterApp() {
  const [counter, setCouter] = useState(0);
  const handleIncrement = () => {
    setCouter(counter + 1);
  };
  const handleDecrement = () => {
    setCouter(counter - 1);
  };
  const handleReset = () => {
    setCouter(0);
  };
  return (
    <div>
      <p>{counter}</p>
      <MainButton title="+" />
      <MainButton title="-" />
      <MainButton title="Reset" />
    </div>
  );
}
