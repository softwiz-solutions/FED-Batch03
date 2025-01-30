// const app = document.getElementById('app');

// // Create a new H1 element
// const header = document.createElement('h1');

// // Create a new text node for the H1 element
// const text = 'Develop. Preview. Ship.';
// const headerContent = document.createTextNode(text);

// // Append the text to the H1 element
// header.appendChild(headerContent);

// // Place the H1 element inside the div
// app.appendChild(header);

const app = document.getElementById("app");

function Header(props) {
  //   console.log("propr", props.title);
  const { title, heading } = props;
  console.log("title");
  //   return <h1>Develop. Pre  view. Ship.</h1>;
  return <h1>{heading}</h1>;
}

// function checkTitle(title) {
//   if (title) {
//     return title;
//   }
//   return "Default Title";
// }

function Para(props) {
  const { title } = props;
  // console.log("title" + title);
  // template literals
  console.log(`Title ${title}`);
  // return <p>{`Cool ${checkTitle(title)}`}</p>;

  // 0,"",null,undefined,false
  return <p>{`Cool ${title ? title : "defualt value"}`}</p>;
}

function List(props) {
  const { list, color } = props;
  console.log("🚀 ~ List ~ color:", color);
  console.log("🚀 ~ FruitsList ~ list:", list);
  // var fruits = ["mango", "orange", "banan", "apple"];

  // fruits.map((item) => {
  //   console.log("item", item);
  // });
  return (
    <ul>
      {/* <li>Mango</li>
      <li>Orange</li> */}
      {list.map((item, index) => {
        return (
          <li
            className={color == "red" || index == 3 ? "list-red" : "list"}
            key={index}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}
function HomePage() {
  return (
    <div>
      <Para title="My favourite books" />
      <List list={["math", "eng", "urdu", "bio"]} />
      <Header heading="Heading 1" />
      <Header heading="Heading 2" />
      <Header heading="Heading 3" />
      <Para />
      <Para title="My favourite fruits" />
      <List list={["mango", "orange", "banan", "apple"]} />
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
