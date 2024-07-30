import { AmazonProduct } from "@/types/types"
import { NextResponse } from "next/server"
import ProductAdvertisingAPIv1 from "paapi5-nodejs-sdk"

const CLIENT_PARAMETERS = {
	AccessKey: process.env.AMAZON_ACCESS_KEY,
	SecretKey: process.env.AMAZON_SECRET_KEY,
	Host: "webservices.amazon.es",
	Region: "eu-west-1"
}

const SEARCH_PARAMETERS = {
	/** Enter your partner tag (store/tracking id) and partner type */
	PartnerTag: "stpesca-21",
	PartnerType: "Associates",
	/** Specify item count to be returned in search result */
	ItemCount: 1,
	/**
	 * Choose resources you want from SearchItemsResource enum
	 * For more details, refer: https://webservices.amazon.com/paapi5/documentation/search-items.html#resources-parameter OLD PARAMS: "ItemInfo.Title", "Offers.Listings.Price"
	 */
	Resources: ["Images.Primary.Large"]
}

export async function POST(req: Request) {
	const { productName } = await req.json()

	const defaultClient = ProductAdvertisingAPIv1.ApiClient.instance
	defaultClient.accessKey = CLIENT_PARAMETERS.AccessKey
	defaultClient.secretKey = CLIENT_PARAMETERS.SecretKey
	defaultClient.host = CLIENT_PARAMETERS.Host
	defaultClient.region = CLIENT_PARAMETERS.Region

	const searchItemsRequest = new ProductAdvertisingAPIv1.SearchItemsRequest()
	searchItemsRequest.PartnerTag = SEARCH_PARAMETERS.PartnerTag
	searchItemsRequest.PartnerType = SEARCH_PARAMETERS.PartnerType
	searchItemsRequest.ItemCount = SEARCH_PARAMETERS.ItemCount
	searchItemsRequest.Resources = SEARCH_PARAMETERS.Resources
	searchItemsRequest.Keywords = productName

	try {
		const api = new ProductAdvertisingAPIv1.DefaultApi(defaultClient)
		const response = await api.searchItems(searchItemsRequest)
		const result = onSuccess(response)

		return NextResponse.json(result, { status: 200 })
	} catch (e) {
		onError(e)
		return NextResponse.json(`Error: ${e}`, { status: 400 })
	}
}

function onSuccess(data: any): AmazonProduct | null {
	const searchItemsResponse = ProductAdvertisingAPIv1.SearchItemsResponse.constructFromObject(data)

	if (searchItemsResponse["SearchResult"]) {
		const item0 = searchItemsResponse["SearchResult"]["Items"][0]
		if (item0) {
			const image = item0["Images"]["Primary"]["Large"]["URL"]

			return {
				imageUrl: image
			}
		}
	}
	if (searchItemsResponse["Errors"]) {
		console.log("Errors:")
		console.log("Complete Error Response: " + JSON.stringify(searchItemsResponse["Errors"], null, 1))
		console.log("Printing 1st Error:")
		const error0 = searchItemsResponse["Errors"][0]
		console.log("Error Code: " + error0["Code"])
		console.log("Error Message: " + error0["Message"])
	}

	return null
}

function onError(error: any) {
	console.log("Error calling PA-API 5.0!")
	console.log("Printing Full Error Object:\n" + JSON.stringify(error, null, 1))
	console.log("Status Code: " + error["status"])
	if (error["response"] !== undefined && error["response"]["text"] !== undefined) {
		console.log("Error Object: " + JSON.stringify(error["response"]["text"], null, 1))
	}
}
