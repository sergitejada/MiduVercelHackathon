"use client"

import Image from "next/image"
import Card from "./card"

export default function CardGift() {
	return (
		<Card className="max-w-md p-0">
			<Image src="/assets/stock.avif" alt={""} width={384} height={254} className="rounded-t-[5px]" />

			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
						Regalos para Boda Hombre: Las Mejores Ideas para Sorprender al Novio
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
				</p>
				<a
					href="#"
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
				</a>
			</div>
		</Card>
	)
}
