/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: {
		serverComponentsExternalPackages: ["paapi5-nodejs-sdk"]
	}
}

module.exports = nextConfig
