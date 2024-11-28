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
exports.GetDrivers = void 0;
const baseDataBase_1 = require("./baseDataBase");
class GetDrivers extends baseDataBase_1.BaseDataBase {
    constructor() {
        super(...arguments);
        this.getDrivers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield baseDataBase_1.BaseDataBase.connection('motorista').select("*");
                return result;
            }
            catch (error) {
                console.error("Erro ao buscar motoristas:", error);
                throw new Error("Erro ao buscar motoristas");
            }
        });
    }
}
exports.GetDrivers = GetDrivers;
