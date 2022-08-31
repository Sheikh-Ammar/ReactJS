import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    console.log("hoc");
    setText(event.target.value);
  };
  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  return (
    <>
      <div className="container mt-4">
        <div className="mx-5">
          <h1 className="my-3">{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="8"
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button className="btn btn-primary btn-sm mx-1" onClick={handleUpper}>
            Convert Uppercase
          </button>
          <button className="btn btn-primary btn-sm mx-1" onClick={handleLower}>
            Convert Lowercase
          </button>
          <button className="btn btn-primary btn-sm mx-1" onClick={handleClear}>
            Clear Text
          </button>
        </div>
      </div>
      <div className="container mt-2">
        <div className="mx-5">
          <h4 className="my-3">Your Text-Preview</h4>
          <p className="text-secondary">
            <i>{text}</i>
          </p>
          <h4 className="my-3">Your Text-Summary Is Here</h4>
          <p className="text-danger">
            <b>
              {text.split(" ").length} Words, {text.length} Characters,{" "}
              {0.008 * text.split(" ").length} Minutes Read
            </b>
          </p>
        </div>
      </div>
    </>
  );
}
