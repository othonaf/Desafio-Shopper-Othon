"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./controllers/app"));
const routerTestDB_1 = require("./controllers/routers/routerTestDB");
const routerRide_1 = require("./controllers/routers/routerRide");
const routerRideConfirm_1 = require("./controllers/routers/routerRideConfirm");
// Rota para o endpoint de adicionar Usuário
app_1.default.use('/', routerTestDB_1.routerTest);
// Rota para o Endpoint de Calcular Viagem:
app_1.default.use('/ride', routerRide_1.routerRide);
// Rota para o Endpoint de Confirmar Viagem:
app_1.default.use('/ride', routerRideConfirm_1.routerRideConfirm);
exports.default = app_1.default;
