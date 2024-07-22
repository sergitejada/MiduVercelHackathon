"use client"

import Image from "next/image"
import Link from "next/link"
import Card from "./card"

interface Props {
	src: string
	title: string
	description: string
	link: string
}

export default function CardGift({ src, title, description, link }: Props) {
	return (
		<Card className="max-w-sm p-0">
			<Image src={src} alt={""} width={384} height={254} className="rounded-t-[5px]" />

			<div className="p-5">
				<a href="#">
					<h3 className="mb-2 text-sm font-bold tracking-tight text-gray-900">{title}</h3>
				</a>
				<p className="mb-3 line-clamp-3 text-xs font-normal text-gray-700">{description}</p>
				<Link
					href={link}
					className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Read more
					<svg
						className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</Link>
			</div>
		</Card>
	)
}
