//For Migrations
import "dotenv/config"
import { drizzle } from "drizzle-orm/postgres-js";
import { Client } from "pg";
import * as schema from "./drizzle/schema";


const client = new Client({
    connectionString: process.env.DATABASE_URL,
})

client.connect();

export const db = drizzle(client, { schema });
