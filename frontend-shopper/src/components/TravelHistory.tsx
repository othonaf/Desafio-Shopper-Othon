import React, { useState } from 'react';
import axios from 'axios';

interface Ride {
  date: string;
  driver: string;
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  value: number;
}

const TravelHistory: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [driverId, setDriverId] = useState('');
  const [rides, setRides] = useState<Ride[]>([]);
  const [error, setError] = useState('');

  const handleFilter = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiLink = "http://localhost:8080/rides";
    try {
      const response = await axios.get(apiLink, {
        params: {
          userId: userId,
          driverId: driverId
        }
      });

      if (response.data) {
        setRides(response.data); // Supondo que a API retorne uma lista de viagens
        setError(''); // Limpar qualquer erro anterior
      } else {
        throw new Error("Nenhuma resposta da API.");
      }
    } catch (error) {
      setRides([]);
      setError("Houve um erro ao buscar o histórico de viagens. Tente novamente.");
      console.error("Erro ao buscar o histórico de viagens:", error);
    }
  };

  return (
    <div>
      <h2>Histórico de Viagens</h2>
      <form onSubmit={handleFilter}>
        <input type="text" placeholder="ID do Usuário" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <input type="text" placeholder="ID do Motorista" value={driverId} onChange={(e) => setDriverId(e.target.value)} />
        <button type="submit">Aplicar Filtro</button>
      </form>
      {error && <p>{error}</p>}
      <div>
        {rides.length > 0 ? rides.map((ride, index) => (
          <div key={index}>
            <p>Data: {ride.date}</p>
            <p>Motorista: {ride.driver}</p>
            <p>Origem: {ride.origin}</p>
            <p>Destino: {ride.destination}</p>
            <p>Distância: {ride.distance} km</p>
            <p>Tempo: {ride.duration}</p>
            <p>Valor: {ride.value} R$</p>
          </div>
        )) : (
          <p>Nenhum registro encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default TravelHistory;
