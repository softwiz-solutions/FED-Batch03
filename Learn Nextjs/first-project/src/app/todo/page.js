import Header from "@/components/Header";
import Todo from "@/components/Todo";

export default function Home() {
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
        <Header title="Todo List" />
        <Todo />
      </div>
    </div>
  );
}
