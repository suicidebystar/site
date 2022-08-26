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
                <a href="/feed" target="_blank">
                  RSS
                </a>
              </li>
              <li>
                <a
                  href="https://suicidebystar.bigcartel.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Merch
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/suicidebystar"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/joinchat/CQjmHENlQLVgGlCChurbXw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://www.ivoox.com/podcast-suicidebystar_sq_f1172814_1.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ivoox
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/show/7uttH3F62RZfg03W28WtvC?si=d02d4a8878c7417a"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://podcasts.apple.com/es/podcast/suicidebystar/id1110408380"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apple podcasts
                </a>
              </li>
              <li>
                <a
                  href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuaXZvb3guY29tL3BvZGNhc3Qtc3VpY2lkZWJ5c3Rhcl9mZ19mMTE3MjgxNF9maWx0cm9fMS54bWw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google podcasts
                </a>
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
                <Link to="/license">Licencia</Link>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </footer>
  );
};
