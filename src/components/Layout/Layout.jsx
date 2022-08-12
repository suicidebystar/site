import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./layout.scss";

export const Layout = ({ children }) => (
  <>
    <Header />
    <main className="container">
      <article>{children}</article>
      <Footer />
    </main>
  </>
);
