"use client";
import { useState } from "react";
import MainButton from "./MainButton";

export default function TodoApp() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    console.log("input add todo", input);
    // counter++// setCounter(counter+1)
    // todo.push(input);// counter++ ..> counter=coutner+1
    setTodo([...todo, input]); //
    // todo=[[todo data],input]
    setInput("");
  };

  const deleTodo = (index) => {
    console.log("🚀 ~ deleTodo ~ index:", index);
    let updatedTodo = todo.filter((item, ind) => ind != index);
    console.log("🚀 ~ deleTodo ~ updatedTodo:", updatedTodo);
    // todo=updatedTodo
    setTodo(updatedTodo);
  };
  console.log("todo", todo);
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
        <MainButton type="button" onUserClick={addTodo} title="Add Task" />
      </form>
      <ul>
        {todo.map((item, index) => {
          return (
            <li key={item}>
              <div>
                {/* <p>Index:{index}</p> */}
                <span> {item}</span>
                <MainButton
                  type="button"
                  title="Delete"
                  bgColor="red"
                  onUserClick={() => {
                    deleTodo(index);
                  }}
                />
                <MainButton type="button" title="Update" bgColor="blue" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
