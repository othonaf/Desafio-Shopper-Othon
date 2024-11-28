"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerRide = void 0;
const express_1 = __importDefault(require("express"));
const rideController_1 = require("../rideController");
exports.routerRide = express_1.default.Router();
const userController = new rideController_1.UserRide();
exports.routerRide.post('/estimate', userController.createRide);
