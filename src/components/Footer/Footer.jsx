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
            <Link href="/contact">Programas</Link>
          </li>
          <li>
            <Link href="/contact">Monográfico</Link>
          </li>
          <li>
            <Link href="/contact">Sesiones</Link>
          </li>
          <li>
            <Link href="/contact">Archivo</Link>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h4 className="footer__title">Redes sociales</h4>
        <ul>
          <li>
            <Link href="/contact">RSS</Link>
          </li>
          <li>
            <Link href="/contact">Twitter</Link>
          </li>
          <li>
            <Link href="/contact">Ivoox</Link>
          </li>
          <li>
            <Link href="/contact">Spotify</Link>
          </li>
          <li>
            <Link href="/contact">Apple podcasts</Link>
          </li>
          <li>
            <Link href="/contact">Google podcasts</Link>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <h4 className="footer__title">Otra información</h4>
        <ul>
          <li>
            <Link href="/contact">Contacto</Link>
          </li>
          <li>
            <Link href="/contact">Acerca de</Link>
          </li>
          <li>
            <Link href="/contact">Staff</Link>
          </li>
          <li>
            <Link href="/contact">Licencia</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
