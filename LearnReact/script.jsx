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

// function List(props) {
//   const { list, color } = props;
//   console.log("🚀 ~ List ~ color:", color);
//   console.log("🚀 ~ FruitsList ~ list:", list);
//   // var fruits = ["mango", "orange", "banan", "apple"];

//   // fruits.map((item) => {
//   //   console.log("item", item);
//   // });
//   return (
//     <ul>
//       {/* <li>Mango</li>
//       <li>Orange</li> */}
//       {list.map((item, index) => {
//         return (
//           <li
//             className={color == "red" || index == 3 ? "list-red" : "list"}
//             key={index}
//           >
//             {item}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// function NewPara() {
//   return <p>this is para</p>;
// }
// function NewHeader(props) {
//   // console.log("props",props.title)
//   const { title } = props;
//   console.log("🚀 ~ NewHeader ~ title:", title);
//   return <h1 className="list-red">{title}</h1>;
// }

function Card() {
  return (
    <div>
      {/* <NewHeader title="my custome heading" />
      <NewHeader title="my custome heading" />
      <NewHeader title="my custome heading" />
      <NewHeader title="my custome heading" />
      <NewHeader title="my custome heading" />
      <NewHeader title="my custome heading" />
      <NewHeader title="my custome heading" />
      <NewHeader title="my custome heading" />
      <NewHeader title="my custome heading" />
      <NewPara /> */}
    </div>
  );
}

function HomePage() {
  const [counter, setCounter] = React.useState(0);
  const [showPara, setShowPara] = React.useState(true);

  const handleShowPara = () => {
    setShowPara(true); //showPara=true
  };

  const handleHidePara = () => {
    setShowPara(false); // showPara=false
  };
  // var counter = 1;

  const increment = () => {
    // counter++;
    setCounter(counter + 1); // counter++ // counter=100
    console.log("counter inc", counter);
  };
  const decrement = () => {
    // counter--;
    setCounter(counter - 1);
    console.log("counter dec", counter);
  };
  console.log("showpara", showPara);
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>

      {/* {showPara ? (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          doloremque voluptatum neque molestiae soluta? Ipsa eos temporibus
          maxime sequi nostrum voluptatem quos sapiente iure. Incidunt porro non
          eum illo id.
        </p>
      ) : (
        <p></p>
      )} */}

      {showPara && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          doloremque voluptatum neque molestiae soluta? Ipsa eos temporibus
          maxime sequi nostrum voluptatem quos sapiente iure. Incidunt porro non
          eum illo id.
        </p>
      )}

      <button onClick={handleShowPara}>show Para</button>
      <button onClick={handleHidePara}> hide Para</button>
    </div>
  );
}
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
