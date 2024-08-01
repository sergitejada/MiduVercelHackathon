"use server"

import { sql } from "@vercel/postgres"
export async function create() {
	const likes = 100
	const { rows } = await sql`SELECT * FROM gifts ;`
	console.log(rows)
}
