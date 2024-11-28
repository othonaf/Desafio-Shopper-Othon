import app from "./controllers/app";
import { routerTest } from "./controllers/routers/routerTestDB";
import { routerRide } from "./controllers/routers/routerRide";
import { routerRideConfirm } from "./controllers/routers/routerRideConfirm";

// Rota para o endpoint de adicionar Usuário
app.use('/', routerTest);

// Rota para o Endpoint de Calcular Viagem:
app.use('/ride', routerRide)

// Rota para o Endpoint de Confirmar Viagem:
app.use('/ride', routerRideConfirm)
export default app;