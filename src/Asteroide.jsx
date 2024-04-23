import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import rocket from "./assets/rocket.json";

const Asteroide = () => {
  const { id } = useParams();
  const [asteroide, setAsteroide] = useState(null);
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    setCarregando(true)
    const buscarAsteroide = async () => {
      const url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=fSCyJd4Ei4ccJm0OkWnKZaZ0AI7to1tXA1bGonyh`

      const response = await axios.get(url);
      const dadosNASA = response.data

      setAsteroide(dadosNASA);

      setCarregando(false)
    };

    buscarAsteroide();
  }, []);

  const nome = asteroide?.name;
  const perigo = asteroide?.is_potentially_hazardous_asteroid;
  const diam = asteroide?.estimated_diameter?.kilometers.estimated_diameter_max;
  const velc = asteroide?.close_approach_data[0]?.relative_velocity?.kilometers_per_hour;
  const magn = asteroide?.absolute_magnitude_h;

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {carregando ? (
          <>

            <h1>Carregando...</h1>
            <div style={{ width: "400px" }}>
              <Lottie animationData={rocket} loop={true} />
            </div>

          </>
        ) : (
          <>
            <h1 style={{ color: "#16d666", }}>Detalhe do asteroide</h1>
            <div >
              <p>Nome do Objeto: <span style={{ color: "#16d666" }}>{nome} </span> </p>
              <p>O objeto é perigoso? : <span style={{ color: "#16d666" }}>{ perigo ? 'sim' : 'não'}</span> </p>
              <p>Diametro MÁXIMO estimado em quilômetros: <span style={{ color: "#16d666" }}>{diam}</span> </p>
              <p>A velocidade relativa desse objeto é de: <span style={{ color: "#16d666" }}>{velc} km/h</span> </p>
              <p>A Magnitude dele é de: <span style={{ color: "#16d666" }}>{magn}</span> </p>
            </div>

          </>
        )}
      </div>
    </>

  );
};

export default Asteroide;




