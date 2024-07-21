import { cn } from "@/lib/utils"

interface Props {
	placeholder?: string
	className?: string
	rows?: number
	maxLength?: number
}

export default function Textarea({ placeholder, className, maxLength, rows }: Props) {
	return (
		<textarea
			className={cn(
				"relative flex items-center justify-center gap-[10px] rounded-[10px] border-[2px] border-black bg-white p-[10px] drop-shadow-[-2px_2px_0px_rgba(0,0,0,1)] transition duration-200 placeholder:text-neutral-400 focus-visible:outline-none",
				className
			)}
			maxLength={maxLength ?? 3000}
			placeholder={placeholder}
			rows={rows ?? 5}
		/>
	)
}
