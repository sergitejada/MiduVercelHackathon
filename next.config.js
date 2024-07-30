/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: {
		serverComponentsExternalPackages: ["paapi5-nodejs-sdk"]
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "m.media-amazon.com"
			}
		]
	}
}

module.exports = nextConfig
