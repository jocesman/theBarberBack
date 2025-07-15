import { DataSource } from "typeorm";
import { Users } from "../entities/Users";
import { AccessControl } from "../entities/AccessControl";
import { Appointments } from "../entities/Appointments";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT || "5432"),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    //dropSchema: true, //si està en true inicializa las tablas de la base de datos
    synchronize: true, 
    logging: false, //si està en true muestra la consulta en consola
    entities: [Users, AccessControl, Appointments],
    subscribers: [],
    migrations: []
})
