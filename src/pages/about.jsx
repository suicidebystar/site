import React from "react";

import { Layout, Head, Page } from "../components";

export default function About() {
  return (
    <>
      <Head title="Sobre nosotros" />
      <Layout>
        <Page title="Sobre SuicideByStar">
          <>
            <p>
              <strong>SuicideByStar</strong> somos un grupo de amigos que en
              abril de 2007 y tras varios años escribiendo en el extinto foro de
              Ociojoven decide crear un blog de descargas para la difusión del
              nu-metal, aunque realmente lo nuestro comenzó en serio con la
              cresta de la ola del post rock y el metalcore, en un lejano pasado
              en el que escuchar drone con gafas de pasta aún no era moda. En
              los últimos años se ha vivido una gran serie de cambios dentro del
              disfrute de la música a través de internet: el auge del ya casi
              difunto MySpace, el nacimiento de Bandcamp y demás plataformas de
              libre distribución de música (Spotify, Grooveshark, etc) y las
              descargas directas como constante forma de intercambio de archivos
              más efectivo tras la agonía del Soulseek. En 2011, sin embargo,
              decidimos expandirnos y cambiar la fórmula cada vez más desgastada
              del blog de descargas, ampliando la plantilla y decidiendo
              suprimir las descargas no autorizadas por los grupos, aunque
              siempre permitiéndoos escuchar el disco sin salir de nuestra
              página gracias a Grooveshark, eso sí, con el mismo objetivo que
              cuando comenzamos. Y es que desde que nacimos como blog hace más
              de 6 años ya, siempre hemos tenido claro que lo más importante
              para nosotros es hablar de la música que nos gusta, sin más
              pretensiones que las de daros a conocer música y disfrutar de
              ella.
            </p>
            <p>
              Para cualquier duda, escribid a{" "}
              <a
                href="https://mailhide.io/e/Yfx7zAlz"
                target="_blank"
                rel="noreferrer"
              >
                c......@suicidebystar.com
              </a>
            </p>
          </>
        </Page>
      </Layout>
    </>
  );
}
