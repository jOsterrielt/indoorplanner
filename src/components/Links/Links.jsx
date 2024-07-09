import styles from "./Links.module.css";
const Links = () => {
  return (
    <section className={styles.container}>
      <h2>Enlaces utiles</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href="https://houseofweed.cl/blogs/cultivo/armar-cultivo-indoor">
            Guia para armar un Indoor
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="https://www.envola.cl/contenido/errores-comunes-al-iniciar-cultivando/">
            Errores comunes al inciar cultivando
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="https://houseofweed.cl/blogs/cultivo/tagged/podas-y-tecnicas">
            Podas y técnicas
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Links;
