import { BaseDataBase } from "./baseDataBase";
import { RideSearchInterface } from "../interfaces/rideSearchInterface";

export class RideSearchQuery extends BaseDataBase {
    public rideSearch = async (request: RideSearchInterface): Promise<any> => {
        let query = BaseDataBase.connection('rides')
            .where('customer_id', request.customer_id)
            .orderBy('created_at', 'desc');

        if (request.driver_id) {
            query = query.andWhere('driver_id', request.driver_id);
        }

        const result = await query; 
        console.log('Query Result:', result); 
        return result;    
    }

}