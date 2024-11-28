import { Request, Response } from "express";
import { RideCalculate } from "../business/rideCalculate";
import RequestRide from "../interfaces/requestRideInterface";

export class UserRide {
    createRide = async (req: Request, res: Response) => {
        try {
            const request: RequestRide = req.body;

            const newRide = new RideCalculate();
            const routeResponse = await newRide.calculateRoute(request)

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