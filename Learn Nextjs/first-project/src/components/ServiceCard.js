export function ServiceCard(props) {
  const { title, description, imgSrc, bgColor } = props;
  return (
    <div
      style={{
        background: bgColor == "black" ? "black" : "orange",
        color: bgColor == "black" ? "white" : "black",
        margin: "10px",
        padding: "10px",
        display: "flex",
        // justifyContent: "space-between",
        flexDirection: "row-reverse",
      }}
    >
      <div>
        <h1>{title}</h1>
        <p>{description} </p>
      </div>
      <div>
        <img src={imgSrc} />
      </div>
    </div>
  );
}
