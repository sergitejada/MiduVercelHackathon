import { useEffect } from "react"

export const useAmazonApi = () => {
	useEffect(() => {
		fetch("/api/amazon", {
			headers: {
				"Content-Type": "application/json"
			}
		})
	}, [])

	/** Promise */
	// amazonPaapi
	// 	.SearchItems(commonParameters, requestParameters)
	// 	.then((data: any) => {
	// 		// do something with the success response.
	// 		console.log(data)
	// 	})
	// 	.catch((error: any) => {
	// 		// catch an error.
	// 		console.log(error)
	// 	})
	return {}
}
