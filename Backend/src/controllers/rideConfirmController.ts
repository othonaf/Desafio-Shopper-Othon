import { Request, Response } from "express";
import { RideConfirm } from "../business/rideConfirm";
import { RideConfirmInterface } from "../interfaces/rideConfirmInterface";

export class RideConfirmController {
    createRide = async (req: Request, res: Response) => {
        try {
            const request: RideConfirmInterface = req.body;

            const newRideConfirm = new RideConfirm();
            const routeResponse = await newRideConfirm.rideConfirm(request)

            if (routeResponse) {
                res.status(200).send(routeResponse)
            }


        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}