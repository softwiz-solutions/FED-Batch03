// import Image from "next/image";
// import styles from "./page.module.css";

import CounterApp from "@/components/CounterApp";
import Header from "../components/Header";
import FruitList from "@/components/FruitList";
import { ServiceCard } from "@/components/ServiceCard";
import MainHeading from "@/components/MainHeading";
import SectionHeader from "@/components/SectionHeader";
export default function Home() {
  const services = [
    {
      title: "App Development",
      description: "emo demo",
      imgSrc:
        "https://www.techloset.com/_next/image?url=%2Ficons%2Fservices%2Fmobile-icon.webp&w=750&q=75",
    },
    {
      title: "Web Development",
      description: "emo demo",
      imgSrc:
        "https://www.techloset.com/_next/image?url=%2Ficons%2Fservices%2Fmobile-icon.webp&w=750&q=75",
    },
    {
      title: "APp Development",
      description: "emo demo",
      imgSrc:
        "https://www.techloset.com/_next/image?url=%2Ficons%2Fservices%2Fmobile-icon.webp&w=750&q=75",
    },
    {
      title: "AI Development",
      description: "emo demo",
      imgSrc:
        "https://www.techloset.com/_next/image?url=%2Ficons%2Fservices%2Fmobile-icon.webp&w=750&q=75",
    },
  ];
  return (
    <div style={{ padding: "23px" }}>
      <CounterApp />
      <Header title="Deo1" />
      <Header title="Deo2" />

      <FruitList
        title="Fruit List"
        list={["apple", "banana", "orange", "strawberry", "pineapple"]}
      />
      {/* <h1>hello this is my first project</h1>
      <Header title="Fruit List" />
      <FruitList />

      <Header title="Counter" />
      <CounterApp /> */}
      <MainHeading title={"Our Srevcies"} />
      <SectionHeader
        title={"SERVICES"}
        description={
          "TechloSet Solutions aspires to enhance the productivity and growth of your business by providing 'Smart Solutions' and 'Digitally Transforming' your business processes. Using latest state-of-the-art Technologies, we're providing the following services to bring life in your product."
        }
      />
      {services.map((item, index) => {
        console.log("🚀 ~ {services.map ~ item:", item);
        return (
          <ServiceCard
            key={index}
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}
          />
        );
      })}
      {/* <ServiceCard
        title="App Development"
        description="demo demo"
        imgSrc="https://www.techloset.com/_next/image?url=%2Ficons%2Fservices%2Fmobile-icon.webp&w=750&q=75"
      />
      <ServiceCard
        bgColor="black"
        title="Web Development"
        description="demo demo"
        imgSrc="https://www.techloset.com/_next/image?url=%2Ficons%2Fservices%2Fmobile-icon.webp&w=750&q=75"
      />
      <ServiceCard
        title="Desktop Development"
        description="demo demo"
        imgSrc="https://www.techloset.com/_next/image?url=%2Ficons%2Fservices%2Fmobile-icon.webp&w=750&q=75"
      />
      <ServiceCard
        title="Ai Based Solutions"
        description="demo demo"
        imgSrc="https://www.techloset.com/_next/image?url=%2Ficons%2Fservices%2Fmobile-icon.webp&w=750&q=75"
      />
      <ServiceCard
        title="Ai Based Solutions 2"
        description="demo demo"
        imgSrc="https://www.techloset.com/_next/image?url=%2Ficons%2Fservices%2Fmobile-icon.webp&w=750&q=75"
      /> */}
    </div>
  );
}
