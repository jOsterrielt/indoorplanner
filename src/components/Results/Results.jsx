/* eslint-disable react/prop-types */
import img from "../../assets/maceta2.png";
import styles from "./Results.module.css";

const Results = ({ tentWidth, potDiameter, maxPots }) => {
  const columns = Math.floor(tentWidth / potDiameter);
  const rows = Math.ceil(maxPots / columns);
  const potSize = Math.min(
    (0.5 * window.innerWidth) / columns,
    (0.5 * window.innerHeight) / rows
  );

  return (
    <div className={styles.container}>
      <div className={styles.resultText}>
        {maxPots && (
          <p className={styles.result}>
            Puedes poner como máximo <span>{maxPots}</span> macetas en tu carpa
          </p>
        )}
      </div>

      <div className={styles.resultsContainer}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            width: "400px",
            height: "400px",
            /* boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.4)", */
          }}
        >
          {!maxPots ? <img className={styles.bigPot} src={img} /> : null}
          {Array.from({ length: maxPots }).map((_, index) => (
            <div
              key={index}
              className={styles.pot}
              style={{
                margin: "auto",
                width: `${potSize}px`,
                height: `${potSize}px`,
              }}
            >
              <img
                src="../../../public/maceta1.png"
                alt="Pot"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
