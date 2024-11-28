import { BaseDataBase } from "./baseDataBase";
import { RideConfirmInterface } from "../interfaces/rideConfirmInterface";

export class SaveRide extends BaseDataBase {
    saveRide = async (request: RideConfirmInterface) => {
        await BaseDataBase.connection('rides').insert({
            customer_id: request.customer_id, 
            origin: request.origin, 
            destination: request.destination, 
            distance: request.distance, 
            duration: request.duration, 
            driver_id: request.driver.id, 
            driver_name: request.driver.name, 
            value: request.value
        })
    }
}