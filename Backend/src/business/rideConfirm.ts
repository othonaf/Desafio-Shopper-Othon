import { GetDrivers } from "../data/getDrivers";
import { RideConfirmInterface } from "../interfaces/rideConfirmInterface";
import { SaveRide } from "../data/saveRide";

export class RideConfirm {
    public rideConfirm = async (request: RideConfirmInterface): Promise<any> => {
        try {
            const { customer_id, origin, destination, distance, duration, driver, value } = request;

            // Validar se o ID do usuário foi informado:
            if (!customer_id) {
                return {
                    status: 400,
                    body: {
                        error_code: "INVALID_DATA",
                        error_description: "O ID do usuário deve ser informado."
                    }
                };
            }

            // Validar se Origem e Destino são diferentes:
            if (origin === destination) {
                return {
                    status: 400,
                    body: {
                        error_code: "INVALID_DATA",
                        error_description: "Os campos origem e destino não podem ser os mesmos."
                    }
                };
            }

            const drivers = new GetDrivers();
            const driversData = await drivers.getDrivers();

            // Validar se o motorista é válido:
            const driverValidate = driversData.find((d: any) => d.name === driver.name);
            if (!driverValidate) {
                return {
                    status: 404,
                    body: {
                        error_code: "DRIVER_NOT_FOUND",
                        error_description: "Motorista não encontrado."
                    }
                };
            }

            // Salvando a Viagem no Banco de Dados:
            const saveRide = new SaveRide();
            await saveRide.saveRide(request);

            return {
                status: 200,
                body: {
                    success: true
                }
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
