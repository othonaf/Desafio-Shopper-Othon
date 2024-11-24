import app from "./controllers/app";
import { routerRide } from "./controllers/routers/routerRide";


// Rota para o endpoint de adicionar Usuário
app.use('/ride', routerRide);

export default app;