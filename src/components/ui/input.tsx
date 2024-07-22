import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface Props {
	value?: string | number
	defaultValue?: string | number
	placeholder?: string
	className?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = forwardRef(function Input(
	{ placeholder, value, defaultValue, className, onChange }: Props,
	ref: React.Ref<HTMLInputElement>
) {
	return (
		<input
			ref={ref}
			className={cn(
				"relative flex items-center justify-center gap-[10px] rounded-[10px] border-[2px] border-black bg-white p-[10px] drop-shadow-[-2px_2px_0px_rgba(0,0,0,1)] transition duration-200 placeholder:text-neutral-400 focus-visible:outline-none",
				className
			)}
			placeholder={placeholder}
			value={value}
			defaultValue={defaultValue}
			onChange={onChange}
		/>
	)
})

export default Input
