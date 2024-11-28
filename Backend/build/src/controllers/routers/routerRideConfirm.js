"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerRideConfirm = void 0;
const express_1 = __importDefault(require("express"));
const rideConfirmController_1 = require("../rideConfirmController");
exports.routerRideConfirm = express_1.default.Router();
const rideConfirmeController = new rideConfirmController_1.RideConfirmController();
exports.routerRideConfirm.patch('/confirm', rideConfirmeController.createRide);
