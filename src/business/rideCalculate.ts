import axios from "axios";
import GoogleMapsResponse from "../interfaces/responseInterface";
import RequestRide from "../interfaces/requestRideInterface";
import dotenv from "dotenv";

dotenv.config();

export class RideCalculate {
    calculateRoute = async (request: RequestRide): Promise<GoogleMapsResponse | null> => {
        
        try {
            const { origin, destination, customer_id } = request;

            if (!origin || !destination) {
                throw new Error("Os campos origem e destino são obrigatórios.")
            }
            if (!customer_id) {
                throw new Error("O ID do usuário deve ser informado.")
            }
            const apiKey = process.env.GOOGLE_API_KEY;

            const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;

            const response = await axios.get<GoogleMapsResponse>(url); 
            return response.data;

        } catch (error: any) {
            throw new Error(error.message || error);
        }
    }
}