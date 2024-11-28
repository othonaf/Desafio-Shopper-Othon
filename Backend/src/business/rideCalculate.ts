import axios from "axios";
import GoogleMapsResponse from "../interfaces/responseInterface";
import RequestRide from "../interfaces/requestRideInterface";
import UserResponse from "../interfaces/userResponse";
import responseSimulado from "../interfaces/responseSimulado.json";
import { GetDrivers } from "../data/getDrivers";
import dotenv from "dotenv";

dotenv.config();

export class RideCalculate {
    calculateRoute = async (request: RequestRide): Promise<UserResponse | null> => {

        try {
            const { origin, destination, customer_id } = request;

            if (!origin || !destination) {
                throw new Error("Os campos origem e destino são obrigatórios.")
            }

            if (!customer_id) {
                throw new Error("O ID do usuário deve ser informado.")
            }

            if (origin == destination) {
                throw new Error("Os campos origem e destino não podem ser os mesmos.")
            }

            const responseJson: GoogleMapsResponse = responseSimulado;

            const apiKey = process.env.GOOGLE_API_KEY;

            const url = 'https://routes.googleapis.com/directions/v2:computeRoutes';

            const requestBody = {
                origin: {
                    address: origin
                },
                destination: {
                    address: destination
                },
                travelMode: "DRIVE",
                routingPreference: "TRAFFIC_AWARE",
                computeAlternativeRoutes: false,
                routeModifiers: {
                    avoidTolls: false,
                    avoidHighways: false,
                    avoidFerries: false
                },
                languageCode: "pt-BR",
                units: "METRIC"
            };

            const headers = {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': apiKey,
                'X-Goog-FieldMask': 'routes.distanceMeters,routes.duration,routes.polyline.encodedPolyline'
            };

            let response: GoogleMapsResponse;
            try {
                const responseGoogleApi = await axios.post<GoogleMapsResponse>(url, requestBody, { headers });
                if (responseGoogleApi.data && responseGoogleApi.data.routes && responseGoogleApi.data.routes.length > 0) {
                    response = responseGoogleApi.data;
                } else {
                    response = responseJson;
                }
            } catch (error) {
                console.error("Erro ao chamar a API do Google:", error);
                response = responseJson;
            }

            // Extrair informações relevantes da resposta da API
            const route = response.routes[0];

            //Recebendo dados de motoristas:
            const drivers = new GetDrivers;
            const driversData = await drivers.getDrivers();

            // Processar e ordenar os dados dos motoristas
            const sortedDrivers = driversData
                .map((driver: { id: any; name: any; description: any; vehicle: any; review: { rating: any; comment: any; }; value: number; }) => ({
                    id: driver.id,
                    name: driver.name,
                    description: driver.description,
                    vehicle: driver.vehicle,
                    review: driver.review,
                    value: driver.value
                }))
                .sort((a:any, b:any) => a.value - b.value);

            // Criar a resposta para o usuário
            const userResponse: UserResponse = {
                origin: {
                    latitude: route.legs[0].startLocation.latLng.latitude,
                    longitude: route.legs[0].startLocation.latLng.longitude
                },
                destination: {
                    latitude: route.legs[0].endLocation.latLng.latitude,
                    longitude: route.legs[0].endLocation.latLng.longitude
                },
                distance: route.distanceMeters,
                duration: route.duration,
                options: sortedDrivers,
                routeResponse: response
            };

            return userResponse;


        } catch (error: any) {
            throw new Error(error.message || error);
        }
    }
}