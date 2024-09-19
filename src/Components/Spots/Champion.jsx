import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Champion.module.css"; // Certifique-se de que este arquivo existe
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Champion = () => {
  const { uuid } = useParams(); // Corrija se o parâmetro na URL for 'uuid'
  const [champion, setChampion] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchChampion(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setChampion(data.data); // Ajuste conforme a estrutura da resposta da API
        setLoading(false);
      } catch (error) {
        console.error("Error fetching champion:", error);
        setError(error);
        setLoading(false);
      }
    }

    fetchChampion(`https://valorant-api.com/v1/agents/${uuid}`);
  }, [uuid]);

  if (loading) {
    return <p>Loading...</p>; // Mensagem de carregamento
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Mensagem de erro
  }

  if (!champion) {
    return <p>Champion not found.</p>; // Mensagem caso o campeão não seja encontrado
  }

  return (
    <section className="container">
      <div className={styles.championContainer}>
        <h1>{champion.displayName}</h1>
        <img
          src={champion.fullPortrait}
          alt={champion.displayName}
          className={styles.championImage}
        />
        <p>{champion.description}</p>
        <Swiper
          style={{
            "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={3}
          pagination={{ clickable: true }}
          spaceBetween={10}
          autoplay={{ delay: 3000 }}
          className={styles.abilitiesContainer}
        >
          {champion.abilities.map((ability) => (
            <SwiperSlide key={ability.slot} className={styles.ability}>
              <img
                src={ability.displayIcon}
                alt={ability.displayName}
                className={styles.abilityIcon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Champion;
