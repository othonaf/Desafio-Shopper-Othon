import { GetUsersRides } from "../business/getUsersRides";
import { Request, Response } from "express";
import { RideSearchInterface } from "../interfaces/rideSearchInterface";

export class GetUsersRidesController {
    getUserRidesController = async (req: Request, res: Response) => {
        try {
            const { customer_id } = req.params;
            const driver_id = req.query.driver_id as string | undefined;

            const request: RideSearchInterface = { customer_id, driver_id };

            const getUsersRides = new GetUsersRides();
            const result = await getUsersRides.getUsersRides(request);
            
            if (result.status === 200) {
                res.status(200).send(result.body);
            } else {
                res.status(result.status).send(result.body);
            }

        } catch (error) {

        }
    }
}