"use client"

import Image from "next/image"
import Card from "./card"

export default function CardGift() {
	return (
		<Card className="max-w-sm p-0">
			{/* <div>
				<h3 className="font-semibold">Regalos para</h3>
				<Image src="/assets/stock.avif" alt={""} width={180} height={80} className="" />
			</div>

			<div className="flex">
				<Button onClick={() => false}>Google</Button>
				<Button onClick={() => false}>Amazon</Button>
				<Button onClick={() => false}>Etsy</Button>
			</div> */}

			{/* <a href="#">
				<img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
				<Image src="/assets/stock.avif" alt={""} width={180} height={80} className="" />
			</a> */}
			<Image src="/assets/stock.avif" alt={""} width={384} height={254} className="rounded-t-[5px]" />
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Noteworthy technology acquisitions 2021
					</h5>
				</a>
				{/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
				</p> */}

				<div className="flex justify-between">
					<a
						href="#"
						className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Amazon
					</a>
					<a
						href="#"
						className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Google
					</a>
					<a
						href="#"
						className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Etsy
					</a>
				</div>
			</div>
		</Card>
	)
}
