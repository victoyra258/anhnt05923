import React from "react";

export default function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand waves-effect" href="/" target="_blank">
            <strong className="blue-text">MDB</strong>
          </a>
          {/* Collapse */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link waves-effect" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link waves-effect"
                  href="https://mdbootstrap.com/docs/jquery/"
                  target="_blank"
                >
                  About MDB
                </a>
              </li>
            </ul>
            {/* Right */}
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a className="nav-link waves-effect">
                  <span className="badge red z-depth-1 mr-1"> 1 </span>
                  <i className="fas fa-shopping-cart" />
                  <span className="clearfix d-none d-sm-inline-block">
                    {" "}
                    Cart{" "}
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link waves-effect" target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link waves-effect" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar */}
    </div>
  );
}
