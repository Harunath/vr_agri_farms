"use client";
import Image from "next/image";

export default function OwnAndGrow() {
	return (
		<section className="bg-gradient-to-b from-white to-gray-100 py-16 px-4 md:px-10">
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
				{/* Left Content */}
				<div>
					<h2 className="text-4xl font-bold text-gray-800 mb-6">
						Own <span className="text-orange-500">&apos;N&apos;</span> Grow
					</h2>
					<ul className="space-y-5 text-gray-700 text-lg leading-relaxed">
						<li className="flex items-start gap-3">
							<span className="text-orange-500 text-xl">🌱</span>
							<span>
								A unique business opportunity with presence in both India and
								international markets.
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-orange-500 text-xl">🌿</span>
							<span>
								A hybrid model of land ownership and agriculture fostering
								sustainability and reconnecting us to our roots.
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-orange-500 text-xl">📈</span>
							<span>
								Best-in-class returns, growth potential, and portfolio
								diversification opportunities.
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-orange-500 text-xl">🤝</span>
							<span>
								Exclusive MNC partnership operating across 9 Indian states
								delivering consistent results.
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-orange-500 text-xl">💰</span>
							<span>
								A business model engineered to ensure fixed income streams and
								excellent ROI-setting us apart from traditional investment
								options.
							</span>
						</li>
					</ul>
				</div>

				{/* Right Image */}
				<div className="w-full">
					<Image
						src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1750923873/1154575_ejfwd4.jpg"
						alt="Growth"
						width={800}
						height={600}
						className="w-full h-auto object-cover shadow-2xl"
					/>
				</div>
			</div>
		</section>
	);
}
