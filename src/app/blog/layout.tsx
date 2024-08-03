import FooterSection from "@/components/footer-section"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col gap-32">
			<div>{children}</div>
			<FooterSection />
		</div>
	)
}
