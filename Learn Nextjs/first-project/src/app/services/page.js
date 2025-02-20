"use client";
import MainButton from "@/components/MainButton";
import { useState } from "react";

export default function Services() {
  const [showPara, setShowPara] = useState(true);
  const handlePara = () => {
    setShowPara(!showPara);
  };
  //   const handleHidePara = () => {
  //     setShowPara(false);
  //   };

  return (
    <div>
      {showPara ? <p>lorem ajfkjdsklfj fsdjkfj sldkj fsdj</p> : <p></p>}
      <MainButton
        title={showPara ? "Hide Para" : "Show  Para"}
        onUserClick={handlePara}
      />
      <br />
      <br />
      <br />
      <br />
      {/* <MainButton title="Hide Para" onUserClick={handleHidePara} /> */}
      <MainButton
        title="Testing"
        onUserClick={() => {
          console.log("hello tesitng");
        }}
      />
    </div>
  );
}
