import Card from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Props {
	title: string
	icon: string
	iconStyles?: string
	selected?: boolean
	onSelect?: () => void
}

export default function HobbyCard({ title, icon, iconStyles, selected, onSelect }: Props) {
	return (
		<Card
			className={cn("min-h-12 cursor-pointer hover:bg-orange-100", selected ? "bg-orange-100" : "bg-white")}
			onClick={() => (onSelect ? onSelect() : null)}
		>
			<div className="flex h-full items-center gap-6 px-2">
				<Card className="relative flex h-4 w-4 items-center justify-center rounded-full bg-gray-100 drop-shadow-sm">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-2 w-2 text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
					</svg>
					{selected && (
						<div className="absolute -right-0.5 -top-0.5 z-10">
							<svg
								width="24"
								height="24"
								viewBox="0 0 130 127"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="drop-shadow-[2px_1.5px_0_rgba(0,0,0,0.3)]"
							>
								<g clipPath="url(#clip0_13_3236)">
									<path
										d="M62.3649 76.0626C51.1451 86.1072 40.1732 95.8365 29.311 105.687C23.0183 111.394 16.9509 117.348 10.6729 123.069C9.0008 124.632 7.07937 125.903 4.98785 126.828C3.95649 127.261 1.72933 126.828 1.22143 126.035C0.549397 124.982 0.748089 123.114 1.11261 121.74C1.37779 120.738 2.45753 119.908 3.27208 119.104C18.7627 103.852 34.2604 88.6091 49.7649 73.3765C51.5045 71.6681 53.2942 70.0117 55.293 68.1144C48.5175 60.6052 41.7314 53.3593 35.2529 45.844C24.9134 33.8442 14.7813 21.6659 4.56355 9.56215C4.19212 9.12226 3.87261 8.64079 3.49773 8.20091C1.70969 6.08722 0.449103 3.80904 2.48505 1.24507C4.00964 -0.674661 7.65428 -0.387934 10.1921 2.22366C16.5124 8.7258 22.6693 15.3855 28.7745 22.0963C39.9226 34.3429 50.9837 46.6692 62.092 58.9522C62.5675 59.399 63.0731 59.8124 63.6053 60.1895C72.1948 51.9798 80.6892 43.7969 89.2545 35.6841C99.1881 26.2803 109.157 16.9135 119.16 7.58361C122.912 4.07666 125.921 3.44455 128.224 5.49071C130.61 7.61046 130.388 11.1519 126.582 14.9489C116.293 25.2161 105.755 35.2339 95.2268 45.2629C87.2065 52.9054 79.0583 60.4164 70.5224 68.3992C77.4586 75.5733 84.0927 82.724 91.0479 89.5439C97.7284 96.0945 104.782 102.265 111.594 108.681C114.257 111.095 116.751 113.69 119.058 116.449C120.918 118.763 121.193 121.636 118.906 123.919C116.652 126.17 114.043 125.375 111.869 123.67C107.71 120.58 103.724 117.264 99.9275 113.736C88.3069 102.355 76.8913 90.7657 65.4012 79.2517C64.4925 78.3424 63.6243 77.3883 62.3649 76.0626Z"
										fill="black"
										stroke="black"
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
								<defs>
									<clipPath id="clip0_13_3236">
										<rect width="129" height="127" fill="white" transform="translate(0.777344)" />
									</clipPath>
								</defs>
							</svg>
						</div>
					)}
				</Card>
				{icon && (
					<Image
						src={`/assets/${icon}`}
						width="24"
						height="24"
						alt={title}
						className={cn("aspect-square", iconStyles)}
						unoptimized
					/>
				)}
				<span className="tracking-wide">{title}</span>
			</div>
		</Card>
	)
}
