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
		<div className="max-w-xs rounded rounded-t-xl bg-white p-0 shadow">
			<Image src={src} alt={""} width={320} height={320} className="rounded-xl" />

			<div className="p-5">
				<div className="flex gap-2">
					<a href="#">
						<h3 className="mb-2 text-sm font-bold tracking-tight text-gray-900">{title}</h3>
					</a>
					<Link href={link}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="size-3"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
						</svg>
					</Link>
				</div>

				{/* <p className="mb-3 line-clamp-3 text-xs font-normal text-gray-700">{description}</p> */}
			</div>
		</div>
	)
}
