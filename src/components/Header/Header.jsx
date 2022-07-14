import { Link } from "gatsby";
import React from "react";
import "./header.scss";

export const Header = () => (
  <>
    <nav>
      <Link to="/" className="nav-link active" aria-current="page">
        <h1 className="logo">
          Suicide<span className="logo__accent">By</span>Star
        </h1>
      </Link>
      <ul>
        <li>
          <Link to="/posts" className="nav-link">
            Posts
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </>
);
