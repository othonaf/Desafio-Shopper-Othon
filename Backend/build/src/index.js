"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./controllers/app"));
const routerTestDB_1 = require("./controllers/routers/routerTestDB");
const routerRide_1 = require("./controllers/routers/routerRide");
// Rota para o endpoint de adicionar Usuário
app_1.default.use('/', routerTestDB_1.routerTest);
// Rota para o cálculo da viagem
app_1.default.use('/ride', routerRide_1.routerRide);
exports.default = app_1.default;
