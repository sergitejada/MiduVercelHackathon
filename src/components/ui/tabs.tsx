"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

interface Props {
	items: {
		title: string
		content: JSX.Element
	}[]
}

export default function Tabs({ items }: Props) {
	const [activeTab, setActiveTab] = useState(0)

	function handleTabClick(index: number) {
		setActiveTab(index)
	}

	return (
		<div className="flex w-full flex-col gap-4">
			<div className="w-full py-4">{items[activeTab].content}</div>
			<div className="relative mx-auto flex w-max items-center justify-center gap-4 rounded-[10px] border-2 border-black bg-white px-2 py-1.5 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] transition duration-200">
				{items.map((item, index) => (
					<div
						key={item.title}
						className={cn("cursor-pointer rounded-[10px] border-2 border-white px-4", {
							"border-black": index === activeTab
						})}
						onClick={() => handleTabClick(index)}
					>
						{item.title}
					</div>
				))}
			</div>
		</div>
	)
}
