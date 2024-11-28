"use strict";
// import { RideSearchQuery } from "../data/rideSearch";
// import { RideSearchInterface } from "../interfaces/rideSearchInterface";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersRides = void 0;
// export class GetUsersRides {
//     public getUsersRides = async (request: RideSearchInterface): Promise<any | null> => {
//         try {
//             const { customer_id, driver_id } = request;
//             console.log(customer_id)
//             // Validar se o ID do usuário foi informado
//             if (!customer_id) {
//                 return {
//                     status: 400,
//                     body: {
//                         error_code: "INVALID_DATA",
//                         error_description: "O ID do usuário deve ser informado."
//                     }
//                 }
//             }
//             // Validar se o ID do motorista é válido, se fornecido
//             if (driver_id && isNaN(Number(driver_id))) {
//                 return {
//                     status: 400,
//                     body: {
//                         error_code: "INVALID_DRIVER",
//                         error_description: "O ID do motorista informado é inválido."
//                     }
//                 }
//             }
//             // Query para buscar as viagens:
//             const rideSearchQuery = new RideSearchQuery();
//             const rides = await rideSearchQuery.rideSearch(request);
//             console.log(rides)
//             // Verificar se foram encontradas viagens:
//             if (rides.length === 0) {
//                 return {
//                     status: 400,
//                     body: {
//                         error_code: "NO_RIDES_FOUND",
//                         error_description: "Nenhum registro encontrado."
//                     }
//                 }
//             }
//             const response = {
//                 customer_id,
//                 rides: rides.map((ride: any) => ({
//                     id: ride.id,
//                     date: ride.created_at,
//                     origin: ride.origin,
//                     destination: ride.destination,
//                     distance: ride.distance,
//                     duration: ride.duration,
//                     driver: {
//                         id: ride.driver_id,
//                         name: ride.driver_name
//                     },
//                     value: ride.value
//                 }))
//             };
//             return {
//                 status: 200,
//                 body: response
//             };
//         } catch (error: any) {
//             return {
//                 status: 500,
//                 body: {
//                     error_code: "INTERNAL_SERVER_ERROR",
//                     error_description: error.message || "Erro interno do servidor."
//                 }
//             };
//         }
//     }
// }
const rideSearch_1 = require("../data/rideSearch");
class GetUsersRides {
    constructor() {
        this.getUsersRides = (request) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { customer_id, driver_id } = request;
                console.log('Customer ID in Business Logic:', customer_id);
                console.log('Driver ID in Business Logic:', driver_id);
                if (!customer_id) {
                    return {
                        status: 400,
                        body: {
                            error_code: "INVALID_DATA",
                            error_description: "O ID do usuário deve ser informado."
                        }
                    };
                }
                if (driver_id && isNaN(Number(driver_id))) {
                    return {
                        status: 400,
                        body: {
                            error_code: "INVALID_DRIVER",
                            error_description: "O ID do motorista informado é inválido."
                        }
                    };
                }
                const rideSearchQuery = new rideSearch_1.RideSearchQuery();
                const rides = yield rideSearchQuery.rideSearch(request);
                console.log('Rides Found:', rides);
                if (rides.length === 0) {
                    return {
                        status: 404,
                        body: {
                            error_code: "NO_RIDES_FOUND",
                            error_description: "Nenhum registro encontrado."
                        }
                    };
                }
                const response = {
                    customer_id,
                    rides: rides.map((ride) => ({
                        id: ride.id,
                        date: ride.created_at,
                        origin: ride.origin,
                        destination: ride.destination,
                        distance: ride.distance,
                        duration: ride.duration,
                        driver: {
                            id: ride.driver_id,
                            name: ride.driver_name
                        },
                        value: ride.value
                    }))
                };
                return {
                    status: 200,
                    body: response
                };
            }
            catch (error) {
                return {
                    status: 500,
                    body: {
                        error_code: "INTERNAL_SERVER_ERROR",
                        error_description: error.message || "Erro interno do servidor."
                    }
                };
            }
        });
    }
}
exports.GetUsersRides = GetUsersRides;
