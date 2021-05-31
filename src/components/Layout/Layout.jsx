import React from "react";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => (
  <>
    <Header />
    <main className="container">
      <article>{children}</article>
      <section>footer</section>
    </main>
  </>
);
