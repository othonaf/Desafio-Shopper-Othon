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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideConfirm = void 0;
const getDrivers_1 = require("../data/getDrivers");
const saveRide_1 = require("../data/saveRide");
class RideConfirm {
    constructor() {
        this.rideConfirm = (request) => __awaiter(this, void 0, void 0, function* () {
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
                const drivers = new getDrivers_1.GetDrivers();
                const driversData = yield drivers.getDrivers();
                // Validar se o motorista é válido:
                const driverValidate = driversData.find((d) => d.name === driver.name);
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
                const saveRide = new saveRide_1.SaveRide();
                yield saveRide.saveRide(request);
                return {
                    status: 200,
                    body: {
                        success: true
                    }
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
exports.RideConfirm = RideConfirm;
