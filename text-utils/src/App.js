import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [theme, setTheme] = useState("light");

  const changeMode = () => {
    console.log("dark click");
    if (theme === "light") {
      setTheme("dark");
      document.body.style.background = "#18191A";
      document.body.style.color = "white";
    } else {
      setTheme("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={theme} toggleMode={changeMode} />
        <Routes>
          <Route
            path="/"
            element={<TextForm heading="Enter Text To Analyze" mode={theme} />}
          />
          <Route path="/about" element={<About mode={theme} />} />
          <Route path="/contact" element={<Contact mode={theme} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
