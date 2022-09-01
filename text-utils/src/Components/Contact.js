import React, { useState, useEffect } from "react";
export default function Contact(props) {
  const [title, setTitle] = useState("Text Utils | Contact");

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <div
        className="container mt-4 p-3"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#242526",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="mx-5">
          <h2 className="my-2">Contact Component Call</h2>
        </div>
      </div>
    </>
  );
}
