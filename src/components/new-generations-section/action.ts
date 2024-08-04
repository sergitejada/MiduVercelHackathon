"use server"

import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"

export async function getGifts(): Promise<NextResponse> {
	try {
		const { rows } = await sql`SELECT * FROM "Gifts" ORDER BY "createdAt" DESC LIMIT 20;`
		return NextResponse.json(rows, { status: 200 })
	} catch (error) {
		return NextResponse.json(`Error: ${error}`, { status: 400 })
	}
}
