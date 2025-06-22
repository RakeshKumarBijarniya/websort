import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navContainer py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-sm-5 col-md-5 col-lg-4">
              <Link to="/" style={{ textDecoration: "none" }}>
                <img
                  src="/assets/header_logo.png"
                  className="logoIcon"
                  alt="header-logo"
                />
              </Link>
            </div>
            <div className="d-none d-lg-block d-lg-flex col-sm-5 col-md-6 col-lg-6 justify-content-center gap-3">
              <Link to="/" style={{ textDecoration: "none" }}>
                <p style={{ fontSize: "30px", color: "#1C395F" }}>About us</p>
              </Link>
              <Link to="/service" style={{ textDecoration: "none" }}>
                <p style={{ fontSize: "30px", color: "#1C395F" }}>Services</p>
              </Link>
              <Link to="/project" style={{ textDecoration: "none" }}>
                <p style={{ fontSize: "30px", color: "#1C395F" }}>Projects</p>
              </Link>
              <Link to="/career" style={{ textDecoration: "none" }}>
                <p style={{ fontSize: "30px", color: "#1C395F" }}>Careers</p>
              </Link>
            </div>

            <div className="d-none d-lg-block col-6 col-sm-2 text-end ">
              <Link to="/contect" style={{ textDecoration: "none" }}>
                <button className="contactButton">Content Us</button>
              </Link>
            </div>
            <div className="d-block d-lg-none col-6  text-end">
              <img
                src="/assets/bar_icon.png"
                className="bar_icon"
                onClick={() => toggleMenu()}
                alt="bar-icon"
              />
            </div>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="container">
          <div className="row">
            <div className="col-4 d-lg-none text-end "></div>
            <div className="col-4 d-lg-none text-end "></div>

            <div className="col-4 d-lg-none text-end productItem">
              <Link to="/" style={{ textDecoration: "none" }}>
                <p style={{ fontSize: "20px", color: "#fff" }}>About us</p>
              </Link>
              <Link to="/service" style={{ textDecoration: "none" }}>
                <p style={{ fontSize: "20px", color: "#fff" }}>Services</p>
              </Link>
              <Link to="/project" style={{ textDecoration: "none" }}>
                <p style={{ fontSize: "20px", color: "#fff" }}>Projects</p>
              </Link>
              <Link to="/career" style={{ textDecoration: "none" }}>
                <p style={{ fontSize: "20px", color: "#fff" }}>Careers</p>
              </Link>
              <Link to="/contect" style={{ textDecoration: "none" }}>
                <p style={{ fontSize: "20px", color: "#fff" }}>Contect</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
