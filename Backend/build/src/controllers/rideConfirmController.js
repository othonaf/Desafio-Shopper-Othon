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
exports.RideConfirmController = void 0;
const rideConfirm_1 = require("../business/rideConfirm");
class RideConfirmController {
    constructor() {
        this.createRide = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                const newRideConfirm = new rideConfirm_1.RideConfirm();
                const routeResponse = yield newRideConfirm.rideConfirm(request);
                if (routeResponse) {
                    res.status(200).send(routeResponse);
                }
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.RideConfirmController = RideConfirmController;
