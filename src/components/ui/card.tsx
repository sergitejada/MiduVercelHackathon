import { cn } from "@/utils/cn"

interface Props {
	children: React.ReactNode
	className?: string
}

export default function Card({ children, className }: Props) {
	return (
		<div
			className={cn(
				"min-w-[600px] rounded-[10px] border-[3px] border-black bg-white p-[10px] drop-shadow-[-3px_4px_0_rgba(0,0,0,1)]",
				className
			)}
		>
			{children}
		</div>
	)
}
