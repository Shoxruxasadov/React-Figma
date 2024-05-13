import React from "react";
import "./header.scss";

function Header() {
  return (
    <div id="header">
      <div className="containerhead">
        <a href="/">
          <div className="logo">
            <img src="section-one-images/logo.svg" />
          </div>
        </a>
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <a href="#one">Home</a>
              </li>
              <li>
                <a href="#two">Service</a>
              </li>
              <li>
                <a href="#three">Projects</a>
              </li>
              <li>
                <a href="#four">Pricing</a>
              </li>
              <li>
                <a href="#five">Team</a>
              </li>
            </ul>
          </nav>
          <a className="contact-us" href="#six">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
