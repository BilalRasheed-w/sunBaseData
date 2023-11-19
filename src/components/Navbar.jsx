import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

const Navbar = () => {
  return (
    <nav>
      <div className="main">
        <Link to={"/"} className="logo_link" >
          <h1>SunbaseData</h1>
        </Link>

        <ul className="nav">
          <Link to={"/"}>
            <li> Login </li>
          </Link>

          <Link to={"/signup"}>
            <li>SignUp </li>
          </Link>
          <Link to={"/customers"}>
            <li>Customers </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
