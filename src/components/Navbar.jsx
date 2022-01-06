import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Button from "../share/Button";
import openIcon from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";

const Navbar = () => {
  const [navIcon, setNavIcon] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {navIcon ? (
            <img
              onClick={(e) => setNavIcon((prev) => !prev)}
              src={openIcon}
              alt="iconNav"
            />
          ) : (
            <img
              onClick={(e) => setNavIcon((prev) => !prev)}
              src={closeIcon}
              alt="iconNav"
            />
          )}
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/careers">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Button className="nav-link" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
