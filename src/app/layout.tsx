import "./globals.css"

import BackToTop from "@/components/back-to-top"
import NavSection from "@/components/nav-section"

import { JetBrains_Mono } from "next/font/google"
import { cn } from "../lib/utils"

const inter = JetBrains_Mono({ subsets: ["latin"], weight: "400" })

export const metadata = {
	title: "GiftHunter",
	description: "Generador de regalos con IA"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={cn(inter.className, "overflow-x-hidden")}>
				<div className="h-[500px] bg-orange-200">
					<NavSection />
					{children}
				</div>
				<BackToTop />
			</body>
		</html>
	)
}
