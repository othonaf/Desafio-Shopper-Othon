"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUserRide = void 0;
const getUserRidesController_1 = require("../getUserRidesController");
const express_1 = __importDefault(require("express"));
exports.routerUserRide = express_1.default.Router();
const rideConfirmeController = new getUserRidesController_1.GetUsersRidesController();
exports.routerUserRide.get('/:customer_id', rideConfirmeController.getUserRidesController);
