declare module "paapi5-nodejs-sdk" {
	export default class ProductAdvertisingAPIv1 {
		static ApiClient: any
		static DefaultApi: any
		static SearchItemsRequest: {
			new (): {
				PartnerTag: string
				PartnerType: string
				Keywords: string
				ItemCount: number
				Resources: string[]
				SearchIndex?: string
			}
		}
		static SearchItemsResponse: {
			constructFromObject(data: any): any
		}
	}
}
