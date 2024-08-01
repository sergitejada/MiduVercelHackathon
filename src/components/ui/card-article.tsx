"use client"

import Image from "next/image"
import Link from "next/link"

interface Props {
	src: string
	title: string
	description: string
	link: string
}

export default function CardArticle({ src, title, description, link }: Props) {
	return (
		<div className="max-w-xs rounded rounded-t-xl bg-white p-0 shadow transition-transform hover:scale-105">
			<Link href={link} className="transition-transform hover:scale-105">
				<Image src={src} alt={title} width={320} height={320} className="rounded-xl" />

				<div className="p-5">
					<div className="flex gap-2">
						<h3 className="mb-2 text-center text-sm font-bold tracking-tight text-gray-900">{title}</h3>
					</div>
				</div>
			</Link>
		</div>
	)
}
