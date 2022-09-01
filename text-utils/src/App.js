import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const changeMode = () => {
    console.log("dark click");
    if (theme === "light") {
      setTheme("dark");
      document.body.style.background = "#18191A";
      document.body.style.color = "white";
      document.title = "TextUtils | Dark";
      showAlert("Dark Mode Enable", "success");
      setInterval(() => {
        showAlert("", "");
      }, 8000);
    } else {
      setTheme("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      document.title = "TextUtils | Light";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={theme} toggleMode={changeMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter Text To Analyze"
                mode={theme}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<About mode={theme} />} />
          <Route path="/contact" element={<Contact mode={theme} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
