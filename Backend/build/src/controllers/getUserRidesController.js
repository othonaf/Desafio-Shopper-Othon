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
exports.GetUsersRidesController = void 0;
const getUsersRides_1 = require("../business/getUsersRides");
class GetUsersRidesController {
    constructor() {
        this.getUserRidesController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { customer_id } = req.params;
                const driver_id = req.query.driver_id;
                const request = { customer_id, driver_id };
                const getUsersRides = new getUsersRides_1.GetUsersRides();
                const result = yield getUsersRides.getUsersRides(request);
                if (result.status === 200) {
                    res.status(200).send(result.body);
                }
                else {
                    res.status(result.status).send(result.body);
                }
            }
            catch (error) {
            }
        });
    }
}
exports.GetUsersRidesController = GetUsersRidesController;
