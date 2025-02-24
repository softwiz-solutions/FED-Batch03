import Header from "@/components/Header";
import TodoApp from "@/components/TodoApp";

export default function Todo() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Header title="Todo App" />
        <TodoApp />
      </div>
    </div>
  );
}
