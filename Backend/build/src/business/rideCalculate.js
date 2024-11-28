"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideCalculate = void 0;
const axios_1 = __importDefault(require("axios"));
const responseSimulado_json_1 = __importDefault(require("../interfaces/responseSimulado.json"));
const getDrivers_1 = require("../data/getDrivers");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class RideCalculate {
    constructor() {
        this.calculateRoute = (request) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { origin, destination, customer_id } = request;
                if (!origin || !destination) {
                    throw new Error("Os campos origem e destino são obrigatórios.");
                }
                if (!customer_id) {
                    throw new Error("O ID do usuário deve ser informado.");
                }
                if (origin == destination) {
                    throw new Error("Os campos origem e destino não podem ser os mesmos.");
                }
                const responseJson = responseSimulado_json_1.default;
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
                
                let response;
                try {
                    const responseGoogleApi = yield axios_1.default.post(url, requestBody, { headers });
                    if (responseGoogleApi.data && responseGoogleApi.data.routes && responseGoogleApi.data.routes.length > 0) {
                        response = responseGoogleApi.data;
                    }
                    else {
                        response = responseJson;
                    }
                }
                catch (error) {
                    console.error("Erro ao chamar a API do Google:", error);
                    response = responseJson;
                }
                // Extrair informações relevantes da resposta da API
                const route = response.routes[0];
                //Recebendo dados de motoristas:
                const drivers = new getDrivers_1.GetDrivers;
                const driversData = yield drivers.getDrivers();
                // Processar e ordenar os dados dos motoristas
                const sortedDrivers = driversData
                    .map((driver) => ({
                    id: driver.id,
                    name: driver.name,
                    description: driver.description,
                    vehicle: driver.vehicle,
                    review: driver.review,
                    value: driver.value
                }))
                    .sort((a, b) => a.value - b.value);
                // Criar a resposta para o usuário
                const userResponse = {
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
            }
            catch (error) {
                throw new Error(error.message || error);
            }
        });
    }
}
exports.RideCalculate = RideCalculate;
