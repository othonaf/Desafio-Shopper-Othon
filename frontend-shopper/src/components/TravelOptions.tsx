import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface DriverOption {
  id: number;
  name: string;
  description: string;
  vehicle: string;
  rating: number;
  value: number;
}

const TravelOptions: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Acessar os dados passados através do estado
  const options = location.state?.options as { drivers: DriverOption[] };

  const handleChoose = async (driver: DriverOption) => {
    try {
      const apiLink = "http://localhost:8080/ride/confirm";
      const response = await axios.post(apiLink, {
        driver_id: driver.id,
        // Adicione aqui outros parâmetros necessários
      });

      if (response.data) {
        // Após confirmar a viagem, redirecionar para o histórico de viagens
        navigate('/history');
      } else {
        throw new Error("Resposta inesperada da API.");
      }
    } catch (error) {
      console.error("Erro ao confirmar a viagem:", error);
      // Você pode adicionar tratamento de erro aqui, exibindo uma mensagem ao usuário
    }
  };

  return (
    <div>
      <h2>Opções de Viagem</h2>
      <div id="map">Mapa Estático com a Rota</div>
      {options?.drivers.map((driver, index) => (
        <div key={index}>
          <p>Nome: {driver.name}</p>
          <p>Descrição: {driver.description}</p>
          <p>Veículo: {driver.vehicle}</p>
          <p>Avaliação: {driver.rating}</p>
          <p>Valor: {driver.value}</p>
          <button onClick={() => handleChoose(driver)}>Escolher</button>
        </div>
      ))}
    </div>
  );
}

export default TravelOptions;
