import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const menuItems = pgTable("menu_items", {
    id: serial("id").primaryKey(),
    name: text("name" ).notNull(),
    price: integer("price").notNull(),
});