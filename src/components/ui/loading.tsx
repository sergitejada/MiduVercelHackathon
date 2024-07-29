export default function Loading() {
	return (
		<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#000">
			<circle
				cx="50"
				cy="50"
				r="40"
				stroke="#000"
				strokeWidth="5"
				fill="none"
				strokeDasharray="251.2"
				strokeDashoffset="251.2"
			>
				<animate attributeName="stroke-dashoffset" from="251.2" to="0" dur="2s" repeatCount="indefinite" />
			</circle>
			<line x1="50" y1="10" x2="50" y2="20" stroke="#000" strokeWidth="5">
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 50 50"
					to="360 50 50"
					dur="2s"
					repeatCount="indefinite"
				/>
			</line>
			<line x1="50" y1="90" x2="50" y2="80" stroke="#000" strokeWidth="5">
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 50 50"
					to="360 50 50"
					dur="2s"
					repeatCount="indefinite"
				/>
			</line>
			<line x1="10" y1="50" x2="20" y2="50" stroke="#000" strokeWidth="5">
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 50 50"
					to="360 50 50"
					dur="2s"
					repeatCount="indefinite"
				/>
			</line>
			<line x1="90" y1="50" x2="80" y2="50" stroke="#000" strokeWidth="5">
				<animateTransform
					attributeName="transform"
					type="rotate"
					from="0 50 50"
					to="360 50 50"
					dur="2s"
					repeatCount="indefinite"
				/>
			</line>
		</svg>
	)
}
