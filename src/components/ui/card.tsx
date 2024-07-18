import { cn } from "@/lib/utils"

interface Props {
	children: React.ReactNode
	className?: string
	onClick?: () => void
}

export default function Card({ children, className, onClick }: Props) {
	return (
		<div
			className={cn(
				"rounded-[10px] border-[3px] border-black bg-white p-[10px] drop-shadow-[-3px_4px_0_rgba(0,0,0,1)]",
				className
			)}
			onClick={onClick}
		>
			{children}
		</div>
	)
}
