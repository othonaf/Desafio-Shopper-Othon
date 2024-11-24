import { Request, response, Response } from "express";
import { RideCalculate } from "../business/rideCalculate";

export class UserRide {
    createUser = async (req: Request, res: Response) => {
        try {
            const origin = req.body.origin;
            const destination = req.body.destination;

            const newRide = new RideCalculate();
            const routeResponse = await newRide.calculateRoute(origin, destination)

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