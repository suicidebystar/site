import * as React from "react";
import { Link } from "gatsby";
import { Layout, Page, Content, Card } from "../components";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Page title="Página no encontrada">
        <Content>
          <p>
            <strong>Oops 😰</strong>
          </p>
          <p>
            No hemos encontrado lo que buscabas. Acabamos de cambiar la web y
            muchas cosas se han movido de sitio.
          </p>
          <p>
            <ul>
              <li>
                📖 Si estás buscando un{" "}
                <strong>artículo de la antigua web</strong>, lo puedes encontrar
                en nuestro{" "}
                <strong>
                  <a href="https://archivo.suicidebystar.com">archivo</a>
                </strong>
              </li>
              <li>
                🎙 Para los <strong>podcasts</strong>, dirigete a nuestra{" "}
                <Link to="/">
                  <strong>página principal</strong>
                </Link>
              </li>
            </ul>
          </p>
        </Content>
      </Page>
    </Layout>
  );
};

export default NotFoundPage;
