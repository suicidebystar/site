import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./layout.scss";
import { MDXProvider } from "@mdx-js/react";
import { AlbumItem, AlbumList } from "../AlbumList";
import CookieConsent from "react-cookie-consent";

const shortcodes = { AlbumItem, AlbumList };

export const Layout = ({ children }) => {
  return (
    <>
      <MDXProvider components={shortcodes}>
        <Header />
        <main className="container">
          <article>{children}</article>
          <Footer />
        </main>
      </MDXProvider>
      <CookieConsent
        tyle={{ background: "#444" }}
        buttonStyle={{ backgroundColor: "#00b473" }}
        buttonText="Acepto"
        onAccept={() => window.location.reload()}
      >
        Este sitio web utiliza cookies para mejorar la experiencia del usuario.
      </CookieConsent>
    </>
  );
};
