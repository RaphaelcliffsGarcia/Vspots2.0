import React from "react";
import styles from "../Components/Header.module.css";
import { Link } from "react-router-dom";
import Vlogo from "../Assets/logov1.svg?react";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} `}>
        <Link className={styles.logo} to="/" aria-label="Vspots- Home">
          <Vlogo />
        </Link>
        <h1>Descubra aqui o Spot Ideal para o seu campeão</h1>
        <Link className={styles.Spotslink} to="/Spots">
          Spots
        </Link>
      </nav>
    </header>
  );
};

export default Header;
