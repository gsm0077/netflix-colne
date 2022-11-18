import React, {useState, useEffect } from "react";
import "./Nav.css";
import logo from "./netflixlogo.png"

function Nav() {
const [show,handleshow] = useState(false)


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    })
    return () => {
      window.removeEventListener("scroll", () => {
        return "scroll"
      });
  }
  }, []);


  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="netflix logo" />
      <img src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg" alt="avatar" className="nav_avatar" />
    </div>
  );
}

export default Nav;
