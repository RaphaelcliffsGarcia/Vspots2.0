import React from "react";
import styles from "../Components/Header.module.css";
import { Link } from "react-router-dom";
import Vlogo from "../Assets/logov1.svg?react";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className="container">
        <Link to="/">
          <Vlogo />
        </Link>
        <Link to="/Spots">Spots</Link>
      </nav>
    </div>
  );
};

export default Header;
