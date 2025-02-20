export default function MainButton({
  title = "submit",
  type = "button",
  onUserClick,
}) {
  return (
    <button
      style={{ background: "red", padding: "6px 3px" }}
      type={type}
      onClick={onUserClick}
    >
      {title}
    </button>
  ); // Button with blue background
}
