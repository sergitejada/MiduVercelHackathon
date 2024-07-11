import "./globals.css"

import { JetBrains_Mono } from "next/font/google"

const inter = JetBrains_Mono({ subsets: ["latin"], weight: "400" })

export const metadata = {
	title: "Vercel AI SDK - Next.js OpenAI Examples",
	description: "Examples of using the Vercel AI SDK with Next.js and OpenAI."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
