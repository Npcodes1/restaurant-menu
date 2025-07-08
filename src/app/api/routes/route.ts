import { db } from "@/db"
import { menuItems } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

//GET request = to read all menu items

export async function GET() {
    const items = await db.select().from(menuItems);
    return NextResponse.json(items);
}

//POST request = to create new menu items

export async function POST(req:Request) {
    const { name , price } = await req.json();
    const newItem = await db.insert(menuItems).values({ name, price }).returning();
    return NextResponse.json(newItem);
}


//PUT request = to update menu items
export async function PUT(req:Request){
    const { id, name, price } = await req.json();
    const updated = await db.update(menuItems)
        .set({name, price})
        .where(eq(menuItems.id, id))
        .returning();
    return NextResponse.json(updated);
}


//DELETE request = to delete menu items
export async function DELETE(req:Request) {
    const {id} = await req.json();
    const deleted = await db.delete(menuItems).where(eq(menuItems.id, id)).returning();
    return NextResponse.json(deleted);
}