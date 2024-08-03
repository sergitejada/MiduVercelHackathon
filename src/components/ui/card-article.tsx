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
		<Link href={link}>
			<article className="max-w-sm rounded-xl bg-white p-0 shadow transition-transform hover:scale-105">
				<Image
					src={src}
					alt={title}
					width="420"
					height="420"
					className="aspect-video w-full rounded-t-xl"
					unoptimized
				/>
				<div className="p-5">
					<div className="flex gap-2">
						<h3 className="mb-2 text-center text-sm font-bold tracking-tight text-gray-900">{title}</h3>
					</div>
				</div>
			</article>
		</Link>
	)
}
