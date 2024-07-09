import styles from "./Info.module.css";

const Info = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>¿Cuantas macetas entran en mi carpa?</h2>
      <p className={styles.paragraph}>
        Es importante que sepas que, el resultado del calculo que hayas hecho,
        con las medidas de tu carpa, y la medida del ancho o el diametro de tus
        macetas. Indicara la cantidad <span>maxima</span> de macetas que podrias
        tener en tu carpa.
        <br />
        <br />
        Sin embargo, esto no significa que tengas que poner todas esas macetas.
        Abajo vas a encontrar mas informacion sobre como saber cuantas macetas
        colocar en tu carpa, segun la tecnica y tipo de cultivo que vayas a
        realizar.{" "}
      </p>
    </div>
  );
};

export default Info;
