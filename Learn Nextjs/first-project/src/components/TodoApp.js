"use client";
import { useState } from "react";
import MainButton from "./MainButton";

export default function TodoApp() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [selectedTodo, setSelectedTodo] = useState({
    id: "",
    text: "",
  });

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
  const editTodo = (index, item) => {
    setInput(item);
    setSelectedTodo({
      id: index,
      text: item,
    });
    console.log("🚀 ~ TodoApp ~ index, item:", index, item);
  };
  const updateTodo = () => {
    console.log("handle update", input);
    console.log("seletec update", selectedTodo);
    console.log("todo", todo);
    var updatedTodo = todo.map((item, index) => {
      console.log("index", index);
      console.log("🚀 ~ updatedTodo ~ item:", item);
      if (index == selectedTodo.id) {
        return input;
      }
      return item;
    });
    // console.log("🚀 ~ updatedTodo ~ updatedTodo:", updatedTodo);
    setTodo(updatedTodo);
    setInput("");
    setSelectedTodo({
      id: "",
      text: "",
    });
  };
  console.log("seletec", selectedTodo);
  console.log("input", input);
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
        <MainButton type="button" onUserClick={updateTodo} title="Update" />
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
                <MainButton
                  type="button"
                  title="Edit"
                  bgColor="blue"
                  onUserClick={() => {
                    editTodo(index, item);
                  }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
