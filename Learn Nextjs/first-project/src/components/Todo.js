"use client";
import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  console.log("input", input);
  console.log("todo", todo);

  const addTodo = () => {
    // console.log("input add todo", input);
    // counter++// setCounter(counter+1)
    // todo.push(input);
    setTodo([...todo, input]); //
    // todo=[[todo data],input]
    setInput("");
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter task"
          value={input}
          onChange={(event) => {
            // console.log("event", event.target.value);
            setInput(event.target.value);
          }}
        />
        <button type="button" onClick={addTodo}>
          Add Task
        </button>
      </form>
      <ul>
        {todo.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
