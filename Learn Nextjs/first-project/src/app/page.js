// import Image from "next/image";
// import styles from "./page.module.css";

import CounterApp from "@/components/CounterApp";
import Header from "../components/Header";
import FruitList from "@/components/FruitList";
export default function Home() {
  return (
    <div style={{ padding: "23px" }}>
      <h1>hello this is my first project</h1>
      <Header title="Fruit List" />
      <FruitList />

      <Header title="Counter" />
      <CounterApp/>
    </div>
  );
}
