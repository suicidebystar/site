import { Link } from "gatsby";
import React from "react";
import "./Footer.scss";
import { Card } from "../Card";

export const Footer = () => {
  return (
    <footer className="footer">
      <Card>
        <div className="footer__content">
          <div className="footer__column">
            <h4 className="footer__title">Secciones</h4>
            <ul>
              <li>
                <Link to="/category/regular-show">Programas</Link>
              </li>
              <li>
                <Link to="/category/monograph">Monográfico</Link>
              </li>
              <li>
                <Link to="/category/session">Sesiones</Link>
              </li>
              <li>
                <Link to="https://archivo.suicidebystar.com/" target="_blank">
                  Archivo
                </Link>
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
        </div>
      </Card>
    </footer>
  );
};
