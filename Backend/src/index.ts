import app from "./controllers/app";
import { routerTest } from "./controllers/routers/routerTestDB";
import { routerRide } from "./controllers/routers/routerRide";

// Rota para o endpoint de adicionar Usuário
app.use('/', routerTest);

// Rota para o cálculo da viagem
app.use('/ride', routerRide)
export default app;