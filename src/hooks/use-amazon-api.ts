import amazonPaapi from "paapi5-nodejs-sdk"

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

export const useAmazonApi = () => {
	/** Promise */
	amazonPaapi
		.SearchItems(commonParameters, requestParameters)
		.then((data: any) => {
			// do something with the success response.
			console.log(data)
		})
		.catch((error: any) => {
			// catch an error.
			console.log(error)
		})
	return null
}
