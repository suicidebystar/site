import { Link } from "gatsby";
import React from "react";
import "./header.scss";

export const Header = () => (
  <>
    <h1>SuicideByStar</h1>
    <ul>
      <li>
        <Link to="/">🏠</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <hr />
  </>
);
