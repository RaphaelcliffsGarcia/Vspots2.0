import React from "react";
import styles from "../Components/Home.module.css";
import VideoBG from "../Assets/videos/home/Homevideo.mp4";

const Home = () => {
  return (
    <div className={styles.containerHome}>
      <video
        src={VideoBG}
        autoPlay
        loop
        muted
        className={styles.videoBackground}
      />
      <div className={styles.overlay} />
      <div className={styles.texto}>
        <p>Esse Site Foi Criado Para que Você veja Spots para o seu Campeão </p>
        <a href="/Spots">Clique Aqui</a>
      </div>
    </div>
  );
};

export default Home;
