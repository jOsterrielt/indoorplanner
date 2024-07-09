/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ onCalculate }) => {
  const [tentWidth, setTentWidth] = useState("");
  const [tentLength, setTentLength] = useState("");
  const [potDiameter, setPotDiameter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({
      tentWidth: parseFloat(tentWidth),
      tentLength: parseFloat(tentLength),
      potDiameter: parseFloat(potDiameter),
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <label>Ancho de la carpa (cm):</label>
        <input
          type="number"
          value={tentWidth}
          onChange={(e) => setTentWidth(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Largo de la carpa (cm):</label>
        <input
          type="number"
          value={tentLength}
          onChange={(e) => setTentLength(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Diámetro de la maceta (cm):</label>
        <input
          type="number"
          value={potDiameter}
          onChange={(e) => setPotDiameter(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.calculateButton}>
        Calcular
      </button>
    </form>
  );
};

export default Form;
