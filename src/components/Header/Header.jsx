import { Link } from "gatsby";
import React from "react";
import "./header.scss";
import { StaticImage } from "gatsby-plugin-image";
import { slide as Menu } from "react-burger-menu";

export const Header = () => {
  return (
    <>
      <nav className="header">
        <Link to="/">
          <h1 className="logo">
            <StaticImage
              src="../../images/logo.png"
              alt="logo"
              className="logo__image"
              imgStyle={{ objectFit: "contain" }}
            />
            Suicide<span className="logo__accent">By</span>Star
          </h1>
        </Link>
        {/* TODO: Move URLS to factory */}
        <div className="header__menu-mobile">
          <Menu right width={"100%"}>
            <Link className="menu-item" to="/">
              Inicio
            </Link>
            <Link className="menu-item" to="/category/regular-show">
              Programas
            </Link>
            <Link className="menu-item" to="/category/monograph">
              Monográficos
            </Link>
            <Link className="menu-item" to="/category/session">
              Archivo
            </Link>
          </Menu>
        </div>
        <div className="header__menu-large">
          <ul>
            <Link className="menu-item" to="/category/regular-show">
              Programas
            </Link>
            <Link className="menu-item" to="/category/monograph">
              Monográficos
            </Link>
            <Link className="menu-item" to="/category/session">
              Archivo
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};
