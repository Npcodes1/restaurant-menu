//import drizzle config from drizzle kit
import { defineConfig } from "drizzle-kit";

//export default variable defineConfig - to hold schema/blueprint of the data
    //make sure to make a schema folder in src folder. The path will go into the export default defineConfig code.

export default defineConfig({
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },    
    verbose: true, //tells what is changing
    strict: true, //makes you double check if you're sure on doing something if changing migrations.
});