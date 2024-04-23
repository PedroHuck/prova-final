import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { format } from 'date-fns-tz';



function PaginaPrincipal() {

  const dataAtual = new Date()
  const dataBrasil = format(dataAtual, 'yyyy-MM-dd', { timeZone: 'America/Sao_Paulo' });


  const [asteroides, setAsteroides] = useState([]);
  const buscarDadosApi = async () => {

    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dataBrasil}&end_date=${dataBrasil}&api_key=fSCyJd4Ei4ccJm0OkWnKZaZ0AI7to1tXA1bGonyh`
    const response = await axios.get(url);
    const dadosNASA = response.data.near_earth_objects;

    const asteroidesData = dadosNASA[dataBrasil].map(asteroide => ({
      nome: asteroide.name,
      perigo: asteroide.is_potentially_hazardous_asteroid,
      diametro: asteroide.estimated_diameter.kilometers.estimated_diameter_max,
      id: asteroide.id
    }));

    setAsteroides(asteroidesData);

  };

  useEffect(() => {
    buscarDadosApi();
  }, []);

  return (

    <div style={{margin: "80px"}} >
      <ol>
        {asteroides.map((asteroide, index) => (
          <li key={index}>
            <Link to={`/asteroide/${asteroide.id}`}>
              <div>
                <p>Nome do Objeto: <span >{asteroide.nome}</span> </p>
                <p>O objeto é perigoso ? : <span>{asteroide.perigo ? 'sim' : 'não'} </span> </p>
                <p>Diametro MAXIMO estimado em quilômetros: <span> {asteroide.diametro} </span> </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>

  );

}

export default PaginaPrincipal;
