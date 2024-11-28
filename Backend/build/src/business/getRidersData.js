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
exports.DriversData = void 0;
const getDrivers_1 = require("../data/getDrivers");
// Classe para lidar com os dados dos motoristas
class DriversData {
    constructor() {
        this.getDriversData = () => __awaiter(this, void 0, void 0, function* () {
            const drivers = new getDrivers_1.GetDrivers();
            const driversData = yield drivers.getDrivers();
            const options = driversData.map((driver, index) => ({
                id: index + 1,
                name: driver.nome,
                description: "Rota padrão calculada",
                vehicle: driver.carro,
                review: {
                    rating: driver.avaliacao,
                    comment: "Boa rota"
                },
                value: driver.taxa
            }));
            return options; // Retorne os dados mapeados
        });
    }
}
exports.DriversData = DriversData;
