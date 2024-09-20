import React from "react";
import styles from "./vhero.module.css";
import { Link } from "react-router-dom";

const Vheroes = () => {
  const [heroes, setHeroes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setHeroes(data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching heroes:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section>
      <div className={styles.heroSec}>
        <section className={styles.heroes}>
          {heroes.length === 0 ? (
            <p>No heroes found.</p>
          ) : (
            heroes.map((hero) => (
              <Link to={`/Spots/Champion/${hero.uuid}`} key={hero.uuid}>
                <div className={styles.heroWrapper}>
                  <img
                    src={hero.displayIcon}
                    alt={hero.displayName}
                    className={styles.heroImage}
                  />
                </div>
              </Link>
            ))
          )}
        </section>
        <section className={styles.heroestext}>
          <h1>
            Escolha o seu campeão favorito para aprender <br></br>
            os seus melhores spots em cada mapa
          </h1>
        </section>
      </div>
    </section>
  );
};

export default Vheroes;
