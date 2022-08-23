import React from "react";

import { Layout, Page, Content } from "../components";

export default function Staff() {
  return (
    <Layout>
      <Page title="Licencia">
        <Content>
          <p>
            Todos los textos de esta web están bajo una licencia{" "}
            <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es">
              Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND
              4.0)
            </a>
          </p>
        </Content>
      </Page>
    </Layout>
  );
}
