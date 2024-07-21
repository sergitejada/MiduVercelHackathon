import { cn } from "@/lib/utils"

interface Props {
	children: React.ReactNode
	className?: string
	disabled?: boolean
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ children, className, disabled, onClick }: Props) {
	return (
		<button
			className={cn(
				"relative flex items-center justify-center gap-[10px] rounded-[10px] border-2 border-black bg-white px-4 py-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] transition duration-200 hover:drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] disabled:cursor-not-allowed disabled:opacity-50 disabled:drop-shadow-none disabled:transition-none disabled:hover:drop-shadow-none",
				className
			)}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
