import styles from "./Video.module.css";
const Video = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>¿Es tu primer cultivo?</h2>
      <p className={styles.paragraph}>
        Mira los errores mas comunes que debes tratar de evitar
      </p>
      <iframe
        width="400"
        height="215"
        src="https://www.youtube.com/embed/guEJXPULPqc?si=aWAL1dteqR0HEMEG"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
