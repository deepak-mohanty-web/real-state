import React, { useState } from "react";
import "../Navbar/Navbar.scss";
import Logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        {/* logo png */}
        <a href="/" className="logo">
          <img src={Logo} alt="" width={24} height={24} />
          <span>LandEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="/" className="signup">
          Sign Up
        </a>

        <div className="menuIcon">
          <img
            src={menu}
            alt=""
            width={24}
            onClick={() => setOpen((pre) => !pre)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
