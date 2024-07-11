interface Props {
	children: React.ReactNode
	onClick: () => void
}

export default function Button({ children, onClick }: Props) {
	return (
		<button
			className="relative flex h-[30px] w-[90px] items-center justify-center gap-[10px] rounded-[10px] border-2 border-black bg-white p-[10px] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] transition duration-200 hover:drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]"
			onClick={onClick}
		>
			{children}
		</button>
	)
}
