import { BaseDataBase } from "./baseDataBase";

export class GetDrivers extends BaseDataBase {
    getDrivers = async (): Promise<any> => {
        try {
            const result = await BaseDataBase.connection('motorista').select("*");
            return result;
        } catch (error) {
            console.error("Erro ao buscar motoristas:", error);
            throw new Error("Erro ao buscar motoristas");
        }
    }
}