import { Request, Response } from "express";
import { DriversData } from "../business/getRidersData";

export class TestGetDrivers {
    createRide = async (req: Request, res: Response) => {
        try {
            
            const newDriversData = new DriversData();
            const routeResponse = await newDriversData.getDriversData();

            if (routeResponse) {
                res.status(200).send(routeResponse)
            } else {
                res.status(500).send({ message: "Erro ao calcular a rota." });
            }
            

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}