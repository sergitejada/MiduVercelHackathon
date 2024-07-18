import { cn } from "@/lib/utils"

interface Props {
	value?: string | number
	placeholder?: string
	className?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ placeholder, value, className, onChange }: Props) {
	return (
		<input
			className={cn(
				"relative flex items-center justify-center gap-[10px] rounded-[10px] border-[2px] border-black bg-white p-[10px] drop-shadow-[-2px_2px_0px_rgba(0,0,0,1)] transition duration-200 placeholder:text-neutral-400 focus-visible:outline-none",
				className
			)}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	)
}
