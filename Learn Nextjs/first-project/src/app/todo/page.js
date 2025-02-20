import FruitList from "@/components/FruitList";
import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import Todo from "@/components/Todo";

export default function Home() {
  return (
    <div
    // style={{
    //   height: "100vh",
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    // }}
    >
      {/* <FruitList
        title="Books List"
        list={["math", "engligh", "bio", "urdu", "chem"]}
      /> */}
      {/* <div>
        <Header title="Todo List" />
        <Todo />
      </div> */}

      {/* <div>
        <div>
          <h1>destkop Devleopment</h1>
          <p>demo demo </p>
        </div>
        <div>
          <img src="https://www.techloset.com/_next/image?url=%2Ficons%2Fservices%2Fmobile-icon.webp&w=750&q=75" />{" "}
        </div>
      </div> */}
      <SectionHeader
        title={"Build. Launch. Grow.Lead by our expertise"}
        description={
          "Do you have an tech-smart idea in your head? Lets give it life together. Following the Your Idea, Our Solution Agenda We'd love to develop your product from scratch. We are capable to serve all niches, and companies of all sizes, from enterprises to small startups. We'd help to achieve your dreams and grow."
        }
      />

      <ServiceCard
        title="Web Development"
        description="Dmo demo"
        imgSrc="https://www.techloset.com/_next/image?url=%2Ficons%2Fservices%2Fmobile-icon.webp&w=750&q=75"
      />
    </div>
  );
}
