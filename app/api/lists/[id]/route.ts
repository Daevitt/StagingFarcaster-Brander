import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

// Obtener lista por ID
export async function GET(req: Request, context: any) {
  const { id } = context.params;

  try {
    const { rows } = await sql`
      SELECT * FROM lists WHERE id = ${id};
    `;
    if (rows.length === 0) {
      return NextResponse.json({ error: "List not found" }, { status: 404 });
    }
    return NextResponse.json({ list: rows[0] });
  } catch (err) {
    console.error("Error fetching list:", err);
    return NextResponse.json({ error: "Error fetching list" }, { status: 500 });
  }
}

// Eliminar lista
export async function DELETE(req: Request, context: any) {
  const { id } = context.params;

  try {
    await sql`DELETE FROM lists WHERE id = ${id};`;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error deleting list:", err);
    return NextResponse.json({ error: "Error deleting list" }, { status: 500 });
  }
}
