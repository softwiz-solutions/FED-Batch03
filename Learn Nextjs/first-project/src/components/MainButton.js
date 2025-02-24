export default function MainButton({
  title = "submit",
  type = "button",
  onUserClick,
  bgColor = "orange",
}) {
  return (
    <button
      style={{ padding: "6px 3px" }}
      type={type}
      onClick={onUserClick}
      className={`${
        bgColor == "red"
          ? "bg-red"
          : bgColor == "blue"
          ? "bg-blue"
          : "bg-orange"
      }`}
    >
      {title}
    </button>
  ); // Button with blue background
}
