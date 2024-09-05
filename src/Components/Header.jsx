import React from "react";
import styles from "../Components/Header.module.css";
import { Link } from "react-router-dom";
import Vlogo from "../Assets/logov1.svg?react";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Vspots- Home">
          <Vlogo />
        </Link>
        <Link className={styles.Spotslink} to="/Spots">
          Spots
        </Link>
      </nav>
    </header>
  );
};

export default Header;
