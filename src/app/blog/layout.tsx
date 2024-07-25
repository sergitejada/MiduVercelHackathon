import FooterSection from "@/components/footer-section"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div>{children}</div>
			<FooterSection />
		</>
	)
}
