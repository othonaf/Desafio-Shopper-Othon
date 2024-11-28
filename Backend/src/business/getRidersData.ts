import { GetDrivers } from "../data/getDrivers";

// Classe para lidar com os dados dos motoristas
export class DriversData {
    public getDriversData = async (): Promise<any> => {
        const drivers = new GetDrivers();
        const driversData = await drivers.getDrivers();

        const options = driversData.map((driver: { nome: string; carro: string; avaliacao: string; taxa: number; }, index: number) => ({
            id: index + 1,
            name: driver.nome,
            description: "Rota padrão calculada",
            vehicle: driver.carro,
            review: {
                rating: driver.avaliacao,
                comment: "Boa rota"
            },
            value: driver.taxa
        }));

        return options; // Retorne os dados mapeados
    }
}
