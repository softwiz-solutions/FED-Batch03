import MainHeading from "./MainHeading";
import Para from "./Para";

export default function SectionHeader({ title, description }) {
  console.log("title", title);
  console.log("description", description);
  return (
    <div>
      <MainHeading title={title} />
      <Para title={description} />
    </div>
  );
}
