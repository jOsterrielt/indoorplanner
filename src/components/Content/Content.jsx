import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Entonces, ¿cuántas macetas debo poner?</h2>
      <p className={styles.paragraph}>
        Para decidir la cantidad de macetas que debes usar, considera varios
        factores más, además de la cantidad máxima de macetas que pueden entrar
        en tu carpa.
        <br />
        <br />
        Uno de los puntos más importantes que debes tener en cuenta es el tipo
        de cultivo que vas a realizar. Por ejemplo, si quieres usar la técnica{" "}
        <a href="https://www.royalqueenseeds.es/content/44-sog-y-scrog-con-cual-nos-quedamos#sog">
          SOG (<span>S</span>ea <span>O</span>f <span>G</span>reen)
        </a>
        , probablemente quieras llegar a la cantidad máxima de macetas posible.
        <br />
        <br />
        De otro modo, si por ejemplo usas{" "}
        <a href="https://houseofweed.cl/blogs/cultivo/lst-cultivo-marihuana">
          LST (<span>L</span>ow <span>S</span>
          tress <span>T</span>raining)
        </a>
        , vas a querer usar menos macetas que la cantidad máxima que podrías
        meter, dejando más espacio para que tus plantas crezcan horizontalmente.
        <br />
        <br />
        Estos son solo algunos de los muchos puntos que debemos considerar para
        decidir la cantidad de plantas que pondremos en nuestra carpa. Puedes
        visitar los enlaces de abajo para profundizar en el tema.
      </p>
    </div>
  );
};

export default Content;
