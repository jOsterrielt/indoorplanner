/* eslint-disable react/prop-types */
import Modal from "react-modal";
import styles from "./Modal.module.css";

Modal.setAppElement("#root");

const IntroModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Introducción a Indoor Planner"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h2>Bienvenido a Indoor Planner</h2>
      <p>
        Indoor Planner te ayuda a planificar y optimizar el espacio en tu carpa
        de cultivo. Ingresa las dimensiones de tu carpa y el diámetro de tus
        macetas para obtener la cantidad máxima de macetas que puedes utilizar.
      </p>
      <button onClick={onRequestClose}>Entendido</button>
    </Modal>
  );
};

export default IntroModal;
