import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-4">
              <Link className="nav-link" aria-current="page" to="/">ALL</Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/full">FULL STACK DEVELOPMENT</Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/datascience">DATA SCIENCE</Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/cybersecurity">CYBER SECURITY</Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/career">CAREER</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

