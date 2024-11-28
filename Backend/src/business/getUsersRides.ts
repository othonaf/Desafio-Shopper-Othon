import { RideSearchQuery } from "../data/rideSearch";
import { RideSearchInterface } from "../interfaces/rideSearchInterface";


export class GetUsersRides {
    public getUsersRides = async (request: RideSearchInterface): Promise<any | null> => {
        try {
            const { customer_id, driver_id } = request;
            
            // Validar se o ID do usuário foi informado
            if (!customer_id) {
                return {
                    status: 400,
                    body: {
                        error_code: "INVALID_DATA",
                        error_description: "O ID do usuário deve ser informado."
                    }

                }
            }

            // Validar se o ID do motorista é válido, se fornecido
            if (driver_id && isNaN(Number(driver_id))) {
                return {
                    status: 400,
                    body: {
                        error_code: "INVALID_DRIVER",
                        error_description: "O ID do motorista informado é inválido."
                    }

                }
            }

            // Query para buscar as viagens:
            const rideSearchQuery = new RideSearchQuery();
            const rides = await rideSearchQuery.rideSearch(request);
            
            // Verificar se foram encontradas viagens:
            if (rides.length === 0) {
                return {
                    status: 400,
                    body: {
                        error_code: "NO_RIDES_FOUND",
                        error_description: "Nenhum registro encontrado."
                    }
                }
            }

            const response = {
                customer_id,
                rides: rides.map((ride: any) => ({
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

        } catch (error: any) {
            return {
                status: 500,
                body: {
                    error_code: "INTERNAL_SERVER_ERROR",
                    error_description: error.message || "Erro interno do servidor."
                }
            };
        }
    }
}
