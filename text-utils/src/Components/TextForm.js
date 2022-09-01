import React, { useState, useEffect } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("Text Utils | Home");

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert To Upper Case", "success");
  };
  const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert To Lower Case", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Spaces Remove Done", "success");
  };
  const handleCopy = () => {
    let newText = document.getElementById("mybox");
    newText.select();
    newText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied", "success");
  };
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Space Done", "success");
  };
  const handleHtml = () => {
    console.log(text);
    let newText = text.replace(/<\/?[^>]+(>|$)/g, "");
    setText(newText);
    props.showAlert("Convert Html To Text", "success");
  };
  const handleVowelCheck = () => {
    let count = text.match(/[aeiou]/gi).length;
    alert(`You have  ${count} no of vowels`);
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
              id="mybox"
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button
            className="btn btn-primary btn-sm mx-1 my-1"
            onClick={handleUpper}
            disabled={text.length === 0}
          >
            Convert Uppercase
          </button>
          <button
            className="btn btn-primary btn-sm mx-1 my-1"
            onClick={handleLower}
            disabled={text.length === 0}
          >
            Convert Lowercase
          </button>
          <button
            className="btn btn-primary btn-sm mx-1 my-1"
            onClick={handleClear}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary btn-sm mx-1 my-1"
            onClick={handleCopy}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary btn-sm mx-1 my-1"
            onClick={handleHtml}
            disabled={text.length === 0}
          >
            Convert Html To Text
          </button>
          <button
            className="btn btn-primary btn-sm mx-1"
            onClick={handleVowelCheck}
            disabled={text.length === 0}
          >
            Check Vowles
          </button>
          <button
            className="btn btn-primary btn-sm mx-1"
            onClick={handleSpaces}
            disabled={text.length === 0}
          >
            Remove Spaces
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
              {
                text.split(" ").filter((element) => {
                  return element.length != 0;
                }).length
              }{" "}
              Words, {text.length} Characters, {0.008 * text.split(" ").length}{" "}
              Minutes Read
            </b>
          </p>
        </div>
      </div>
    </>
  );
}
