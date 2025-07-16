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
  synchronize: true,
  logging: true,
  entities: [Users, AccessControl, Appointments],
  subscribers: [],
  migrations: []
});