import SideGiftsFormGenerator from "@/components/side-gifts-form-generator/side-gifts-form-generator"

export default function PostLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="mx-auto mt-20 flex max-w-7xl flex-row justify-between gap-4">
				<div>{children}</div>
				<SideGiftsFormGenerator />
			</div>
		</>
	)
}
