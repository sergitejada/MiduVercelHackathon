import NavSection from "@/components/nav-section"
import "./globals.css"

import { JetBrains_Mono } from "next/font/google"

const inter = JetBrains_Mono({ subsets: ["latin"], weight: "400" })

export const metadata = {
	title: "Vercel AI SDK - Next.js OpenAI Examples",
	description: "Examples of using the Vercel AI SDK with Next.js and OpenAI."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={inter.className}>
				<div className="h-[500px] bg-orange-200">
					<NavSection />
					{children}
				</div>
			</body>
		</html>
	)
}
