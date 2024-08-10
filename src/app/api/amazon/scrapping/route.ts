import * as cheerio from "cheerio"
import { NextResponse } from "next/server"

const BASE_URL = "https://www.amazon.es/s"

export async function POST(req: Request) {
	console.log("hi2")
	try {
		const { productName } = await req.json()

		const url = new URL(BASE_URL)
		url.searchParams.set("k", productName)

		const response = await fetch(url)
		const rawHtml = await response.text()

		const $ = cheerio.load(rawHtml)
		const elements = $(".s-card-container")

		const products = elements
			.map((_, element) => {
				const title = $(element).find("h2").text()
				if (!title) return null

				const imageUrl = $(element).find("img").attr("src")

				const link = $(element).find("a").attr("href")

				return {
					title,
					imageUrl,
					link
				}
			})
			.get()

		const firstProduct = products[0]

		return NextResponse.json(firstProduct, { status: 200 })
	} catch (e) {
		console.error(e)
		return NextResponse.json(`Error: ${e}`, { status: 400 })
	}
}
