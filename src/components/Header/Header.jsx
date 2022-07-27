import { Link } from "gatsby";
import React from "react";
import "./header.scss";
import { StaticImage } from "gatsby-plugin-image";

export const Header = () => (
  <>
    {/* <nav className="header">
      <Link to="/">
        <h1 className="logo">
          Suicide<span className="logo__accent">By</span>Star
        </h1>
      </Link>
      <ul className="header__menu">
        <li>
          <Link to="/posts" className="header__link">
            Posts
          </Link>
        </li>
        <li>
          <Link to="/about" className="header__link">
            About
          </Link>
        </li>
      </ul>
    </nav> */}
    <nav className="header header--mobile">
      <Link to="/">
        <h1 className="logo logo--mobile">
          <StaticImage
            src="../../images/logo.png"
            alt="logo"
            className="logo__image"
            imgStyle={{ objectFit: "contain" }}
          />
          Suicide<span className="logo__accent">By</span>Star
        </h1>
      </Link>
    </nav>
  </>
);
