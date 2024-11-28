import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export class BaseDataBase {
    protected static connection = knex({
        client: 'mysql2',
        connection: {
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            port: 3306,
            multipleStatements: true
        }
    })
}