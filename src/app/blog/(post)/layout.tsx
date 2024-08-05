import SideGiftsFormGenerator from "@/components/side-gifts-form-generator/side-gifts-form-generator"

export default function PostLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="mx-4 mt-8 flex max-w-7xl flex-col justify-between gap-8 text-center lg:mt-20 lg:flex-row lg:text-start xl:mx-auto">
				<div>{children}</div>
				<div className="lg:sticky lg:top-5 lg:self-start">
					<SideGiftsFormGenerator />
				</div>
			</div>
		</>
	)
}
