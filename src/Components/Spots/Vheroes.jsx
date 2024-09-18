import React from "react";
import styles from "./vhero.module.css";
import { Link } from "react-router-dom"; // Certifique-se de ter react-router-dom instalado

const Vheroes = () => {
  const [heroes, setHeroes] = React.useState([]); // Inicializa como array vazio
  const [loading, setLoading] = React.useState(true); // Adiciona estado de carregamento
  const [error, setError] = React.useState(null); // Adiciona estado de erro

  React.useEffect(() => {
    fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setHeroes(data.data || []); // Ajusta conforme a estrutura da resposta
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching heroes:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Mensagem de carregamento
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Mensagem de erro
  }

  return (
    <section className="container">
      <div className={styles.heroSec}>
        <h1>Escolha o Herói</h1>
        <section className={`${styles.heroes} animeLeft`}>
          {heroes.length === 0 ? (
            <p>No heroes found.</p> // Mensagem caso não haja heróis
          ) : (
            heroes.map((hero) => (
              <Link to={`/Spots/Champion/${hero.uuid}`} key={hero.uuid}>
                <img
                  src={hero.displayIcon}
                  alt={hero.displayName}
                  className={styles.heroImage}
                />
              </Link>
            ))
          )}
        </section>
      </div>
    </section>
  );
};

export default Vheroes;
