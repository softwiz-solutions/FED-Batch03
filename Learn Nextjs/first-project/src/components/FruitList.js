export default function FruitList({ list, title }) {
  console.log("🚀 ~ FruitList ~ list:", list);
  // const fruits = ["apple", "banana", "orange", "strawberry", "pineapple"];
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {/* <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li> */}

        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
