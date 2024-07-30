import { NextResponse } from "next/server"
import ProductAdvertisingAPIv1 from "paapi5-nodejs-sdk"

const HOST = "webservices.amazon.es"
const REGION = "eu-west-1"

const commonParameters = {
	AccessKey: "",
	SecretKey: "",
	PartnerTag: "stpesca-21", // yourtag-20
	PartnerType: "Associates", // Default value is Associates.
	Marketplace: "www.amazon.es" // Default value is US. Note: Host and Region are predetermined based on the marketplace value. There is no need for you to add Host and Region as soon as you specify the correct Marketplace value. If your region is not US or .com, please make sure you add the correct Marketplace value.
}

const requestParameters = {
	Keywords: "Harry Potter",
	SearchIndex: "Books",
	ItemCount: 2,
	Resources: ["Images.Primary.Medium", "ItemInfo.Title", "Offers.Listings.Price"]
}

export async function GET(req: Request) {
	// const {} = await req.json()

	const defaultClient = ProductAdvertisingAPIv1.ApiClient.instance
	defaultClient.accessKey = process.env.AMAZON_ACCESS_KEY
	defaultClient.secretKey = process.env.AMAZON_SECRET_KEY

	defaultClient.host = HOST
	defaultClient.region = REGION

	const api = new ProductAdvertisingAPIv1.DefaultApi(defaultClient)
	const searchItemsRequest = new ProductAdvertisingAPIv1.SearchItemsRequest()

	/** Enter your partner tag (store/tracking id) and partner type */
	searchItemsRequest["PartnerTag"] = "stpesca-21"
	searchItemsRequest["PartnerType"] = "Associates"

	/** Specify Keywords */
	searchItemsRequest["Keywords"] = "Harry Potter"

	/**
	 * Specify the category in which search request is to be made
	 * For more details, refer: https://webservices.amazon.com/paapi5/documentation/use-cases/organization-of-items-on-amazon/search-index.html
	 */
	searchItemsRequest["SearchIndex"] = "Books"

	/** Specify item count to be returned in search result */
	searchItemsRequest["ItemCount"] = 1

	/**
	 * Choose resources you want from SearchItemsResource enum
	 * For more details, refer: https://webservices.amazon.com/paapi5/documentation/search-items.html#resources-parameter
	 */
	searchItemsRequest["Resources"] = ["Images.Primary.Medium", "ItemInfo.Title", "Offers.Listings.Price"]

	// .then(
	// 	function (data) {
	// 		onSuccess(data)
	// 	},
	// 	function (error) {
	// 		onError(error)
	// 	}
	// )

	console.log("hi")

	console.log(searchItemsRequest)

	try {
		console.time("time")
		const response = await api.searchItems(searchItemsRequest)

		console.timeEnd("time")
		console.log("hifinally")

		return NextResponse.json("A", { status: 200 })
	} catch (e) {
		console.log("error")
		console.error(e)
		return NextResponse.json(`Error: ${e}`, { status: 400 })
	}
}

function onSuccess(data: any) {
	console.log("API called successfully.")
	var searchItemsResponse = ProductAdvertisingAPIv1.SearchItemsResponse.constructFromObject(data)
	console.log("Complete Response: \n" + JSON.stringify(searchItemsResponse, null, 1))
	if (searchItemsResponse["SearchResult"] !== undefined) {
		console.log("Printing First Item Information in SearchResult:")
		var item_0 = searchItemsResponse["SearchResult"]["Items"][0]
		if (item_0 !== undefined) {
			if (item_0["ASIN"] !== undefined) {
				console.log("ASIN: " + item_0["ASIN"])
			}
			if (item_0["DetailPageURL"] !== undefined) {
				console.log("DetailPageURL: " + item_0["DetailPageURL"])
			}
			if (
				item_0["ItemInfo"] !== undefined &&
				item_0["ItemInfo"]["Title"] !== undefined &&
				item_0["ItemInfo"]["Title"]["DisplayValue"] !== undefined
			) {
				console.log("Title: " + item_0["ItemInfo"]["Title"]["DisplayValue"])
			}
			if (
				item_0["Offers"] !== undefined &&
				item_0["Offers"]["Listings"] !== undefined &&
				item_0["Offers"]["Listings"][0]["Price"] !== undefined &&
				item_0["Offers"]["Listings"][0]["Price"]["DisplayAmount"] !== undefined
			) {
				console.log("Buying Price: " + item_0["Offers"]["Listings"][0]["Price"]["DisplayAmount"])
			}
		}
	}
	if (searchItemsResponse["Errors"] !== undefined) {
		console.log("Errors:")
		console.log("Complete Error Response: " + JSON.stringify(searchItemsResponse["Errors"], null, 1))
		console.log("Printing 1st Error:")
		var error_0 = searchItemsResponse["Errors"][0]
		console.log("Error Code: " + error_0["Code"])
		console.log("Error Message: " + error_0["Message"])
	}
}

function onError(error: any) {
	console.log("Error calling PA-API 5.0!")
	console.log("Printing Full Error Object:\n" + JSON.stringify(error, null, 1))
	console.log("Status Code: " + error["status"])
	if (error["response"] !== undefined && error["response"]["text"] !== undefined) {
		console.log("Error Object: " + JSON.stringify(error["response"]["text"], null, 1))
	}
}
