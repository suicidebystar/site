import React from "react";
import { Header } from "../Header/Header";
import "./layout.scss";

export const Layout = ({ children }) => (
  <>
    <Header />
    <main className="container">
      <article>{children}</article>
      <footer>footer</footer>
    </main>
  </>
);
