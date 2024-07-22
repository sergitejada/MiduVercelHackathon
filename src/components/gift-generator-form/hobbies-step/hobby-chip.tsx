import { cn } from "@/lib/utils"

interface Props {
	text: string
	className?: string
	onDelete?: () => void
}

export default function HobbyChip({ text, className, onDelete }: Props) {
	return (
		<span
			className={cn(
				"relative flex items-center justify-center gap-[4px] rounded-full border-2 border-black bg-white px-3 py-0.5 text-sm drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]",
				className
			)}
		>
			{text}
			<button onClick={onDelete && onDelete} className="hover:text-red-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4"
					fill="currentColor"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</span>
	)
}
