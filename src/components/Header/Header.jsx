import { Link } from "gatsby";
import React from "react";
import "./header.scss";

export const Header = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          SuicideByStar
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                🏠
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/posts" className="nav-link">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);
