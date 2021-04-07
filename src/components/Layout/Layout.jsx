import React from 'react';
import { Header } from "../Header/Header"

export const Layout = ({children}) => (
    <main >
      <Header/>
        <article>
          {children}
        </article>
        <section>
          footer
        </section>
    </main>
  );
