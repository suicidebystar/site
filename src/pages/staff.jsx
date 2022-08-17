import React from "react";

import { Layout, Head, Page } from "../components";

export default function Staff() {
  return (
    <>
      <Head title="Staff" />
      <Layout>
        <Page title="Sobre el staff">
          <h2>Tharandur</h2>
          <p>
            El cerebro de SuicideByStar, y el único parlante en lengua binaria.
            Desayuna comics y come helado escuchando a Mono. Debajo de sus
            pisadas se puede leer industrial, electrónica chunga y rock
            alternativo. Si eres afín a los sonidos indie o post-rock, harás
            bien en seguir sus entradas con toques post.
          </p>

          <h2>Rememorama</h2>
          <p>
            El más viej… el mas experimentado de SBS. Si vuestra cultura musical
            se fraguó en los 90 es vuestro hombre. Rock alternativo, grunge e
            indie de calidad son sinónimos de Rememorama, y todo ello sin dejar
            de lado el folk o el hardcore. Cuidado, se rumorea que plantea
            enseñarnos toda su colección de cassettes con clásicos nu-metaleros.
          </p>

          <h2>Jorgenius</h2>
          <p>
            La Mancha connection. Influenciado por el atascaburras, los posos
            del calimocho y el ultrashow de Miguel Noguera. Experto en rock
            vasco y nuestro líder en asuntos visuales y de diseño gráfico. Dice
            que todo comenzó cuando conoció a Satán y a su música, y a pesar de
            ello se tiene ganado el cielo.
          </p>

          <h2>AsbestosDeath</h2>
          <p>
            Alias La Mugre, pasa la mayor parte del tiempo en un frío sótano
            jugando a los médicos con taladros y cintas adhesivas. No sabemos
            muy bien por qué le gusta tanto el vinagre, pero el caso es que se
            pirra por cualquier tipo de música ponzoñosa, desde el black-metal,
            hasta el shoegaze y sludge, pasando por el punk más cafre.
          </p>

          <h2>Psichoboy</h2>
          <p>
            Psichoboy es lo más cercano a la sensatez y sabiduría que tenemos en
            esta santa casa, lo que queda avalado por su Lisensiatura en la
            escuela de la vida y su doctorado en Ruidos Industriales. Entre sus
            hobbies detaca trolear a fans de Blood, elaborar firmas oficiales,
            comentar el Marca y molar.
          </p>
        </Page>
      </Layout>
    </>
  );
}
