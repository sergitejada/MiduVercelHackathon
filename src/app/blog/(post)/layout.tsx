import SideGiftsFormGenerator from "@/components/side-gifts-form-generator/side-gifts-form-generator"

export default function PostLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="mx-4 mt-8 flex max-w-7xl flex-col justify-between gap-4 text-center lg:mx-auto lg:mt-20 lg:flex-row lg:text-start">
				<div>{children}</div>
				<SideGiftsFormGenerator />
			</div>
		</>
	)
}
