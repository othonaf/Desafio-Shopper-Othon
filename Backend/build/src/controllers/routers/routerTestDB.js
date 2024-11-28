"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerTest = void 0;
const express_1 = __importDefault(require("express"));
const testGetDrivers_1 = require("../testGetDrivers");
exports.routerTest = express_1.default.Router();
const userController = new testGetDrivers_1.TestGetDrivers();
exports.routerTest.get('/test', userController.createRide);
