import { AmazonProduct } from "@/types/types"

export const useAmazonApi = () => {
	async function fetchAmazonProduct(productName: string): Promise<AmazonProduct> {
		const response = await fetch("/api/amazon", {
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST",
			body: JSON.stringify({
				productName
			})
		})
		if (!response.ok) {
			throw new Error("Error fetching Amazon product")
		}

		const data: AmazonProduct = await response.json()
		return data
	}

	async function scrappingAmazonProduct(productName: string): Promise<AmazonProduct> {
		const response = await fetch("/api/amazon/scrapping", {
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST",
			body: JSON.stringify({
				productName
			})
		})
		if (!response.ok) {
			throw new Error("Error fetching Amazon product")
		}

		const data: AmazonProduct = await response.json()
		return data
	}

	return {
		fetchAmazonProduct,
		scrappingAmazonProduct
	}
}
