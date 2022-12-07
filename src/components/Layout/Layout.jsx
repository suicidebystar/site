import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./layout.scss";
import { MDXProvider } from "@mdx-js/react";
import { AlbumItem } from "../AlbumList";

const shortcodes = { AlbumItem };

export const Layout = ({ children }) => (
  <MDXProvider components={shortcodes}>
    <Header />
    <main className="container">
      <article>{children}</article>
      <Footer />
    </main>
  </MDXProvider>
);
