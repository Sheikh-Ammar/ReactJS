import React, { useState, useEffect } from "react";
import "../css/Nav.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      <div className={`nav ${show && "nav-black"}`}>
        <img
          className="nav-logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          alt="netflix-logo"
        />

        <img
          className="nav-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix-avatar"
        />
      </div>
    </>
  );
}

export default Navbar;
