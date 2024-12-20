import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 8080, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em ${address.address}:${address.port}`);
  } else {
    console.error(`Falha ao iniciar Servidor .`);
  }
});

export default app;