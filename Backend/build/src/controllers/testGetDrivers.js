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
exports.TestGetDrivers = void 0;
const getRidersData_1 = require("../business/getRidersData");
class TestGetDrivers {
    constructor() {
        this.createRide = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newDriversData = new getRidersData_1.DriversData();
                const routeResponse = yield newDriversData.getDriversData();
                if (routeResponse) {
                    res.status(200).send(routeResponse);
                }
                else {
                    res.status(500).send({ message: "Erro ao calcular a rota." });
                }
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.TestGetDrivers = TestGetDrivers;
