import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TravelRequest: React.FC = () => {
    const [userId, setUserId] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [output, setOutput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const apiLink = "http://localhost:8080/ride/estimate";
        try {
            const response = await axios.post(apiLink, {
                customer_id: userId,
                origin: origin,
                destination: destination
            });

            if (response.data) {
                const options = response.data.drivers;
                setOutput('Estimativa recebida com sucesso.');
                navigate('/options', { state: { options } });
            } else {
                throw new Error("Resposta inesperada da API.");
            }
        } catch (error) {
            setOutput("Houve um erro ao processar sua solicitação. Tente novamente.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="ID do Usuário" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <input type="text" placeholder="Endereço de Origem" value={origin} onChange={(e) => setOrigin(e.target.value)} />
            <input type="text" placeholder="Endereço de Destino" value={destination} onChange={(e) => setDestination(e.target.value)} />
            <button type="submit">Estimar Viagem</button>
            {output && <p>{output}</p>}
        </form>
    );
}

export default TravelRequest;
