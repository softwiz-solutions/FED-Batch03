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
  const { title,heading } = props;
  console.log("title");
  //   return <h1>Develop. Pre  view. Ship.</h1>;
  return <h1>{heading}</h1>;
}

function Para(props) {
  const { title } = props;
  return <p>{title}</p>;
}

function HomePage() {
  return (
    <div>
      <Header heading="Heading 1" />
      <Header heading="Heading 2" />
      <Header heading="Heading 3" />
      <Para title="Demo para" />
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
