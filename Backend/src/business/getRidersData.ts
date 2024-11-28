import { GetDrivers } from "../data/getDrivers";

// Classe para lidar com os dados dos motoristas
export class DriversData {
    public getDriversData = async (): Promise<any> => {
        const drivers = new GetDrivers();
        const driversData = await drivers.getDrivers();

        const options = driversData.map((driver: { name: string; vehicle: string; description: string; review_rating: number; review_comment: string; value: number; }, index: number) => ({
            id: index + 1,
            name: driver.name,
            description: driver.description,
            vehicle: driver.vehicle,
            review: {
                rating: driver.review_rating,
                comment: driver.review_comment
            },
            value: driver.value
        }));

        return options; // Retorne os dados mapeados
    }
}
