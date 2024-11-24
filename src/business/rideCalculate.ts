import axios from "axios";
import GoogleMapsResponse from "../interfaces/responseInterface";
import dotenv from "dotenv";

dotenv.config();

export class RideCalculate {
    calculateRoute = async (origin: string, destination: string): Promise<GoogleMapsResponse | null> => {
        try {
            const apiKey = process.env.GOOGLE_API_KEY;
            console.log(`Chave da API: ${apiKey}`)

            const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;

            const response = await axios.get<GoogleMapsResponse>(url); 
            return response.data;

        } catch (error: any) {
            throw new error(error.message)
        }
    }
}