import FaqSection from "@/components/faq-section"
import FooterSection from "@/components/footer-section"
import FormGeneratorResultsSection from "@/components/form-generator-results-section/form-generator-results-section"
import Hero from "@/components/hero"
import InfoSection from "@/components/info-section"
import NewGenerationsSection from "@/components/new-generations-section/new-generations-section"

export default async function HomePage() {
	return (
		<>
			<div className="flex flex-col gap-12">
				<Hero />
				<FormGeneratorResultsSection />
				<InfoSection />
				<NewGenerationsSection />
				<FaqSection />
			</div>
			<FooterSection />
		</>
	)
}
