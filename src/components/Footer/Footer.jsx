import { Link } from "gatsby";
import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column">
        <h4 className="footer__title">Secciones</h4>
        <ul>
          <li>
            <Link to="/contact">Programas</Link>
          </li>
          <li>
            <Link to="/contact">Monográfico</Link>
          </li>
          <li>
            <Link to="/contact">Sesiones</Link>
          </li>
          <li>
            <Link to="/contact">Archivo</Link>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h4 className="footer__title">Redes sociales</h4>
        <ul>
          <li>
            <Link to="/contact">RSS</Link>
          </li>
          <li>
            <Link to="/contact">Twitter</Link>
          </li>
          <li>
            <Link to="/contact">Ivoox</Link>
          </li>
          <li>
            <Link to="/contact">Spotify</Link>
          </li>
          <li>
            <Link to="/contact">Apple podcasts</Link>
          </li>
          <li>
            <Link to="/contact">Google podcasts</Link>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h4 className="footer__title">Otra información</h4>
        <ul>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/staff">Staff</Link>
          </li>
          <li>
            <Link to="/contact">Licencia</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
