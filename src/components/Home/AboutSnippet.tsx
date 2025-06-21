import Link from "next/link";

export default function AboutSnippet() {
	return (
		<section className="bg-white py-16 px-6">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl font-bold text-[#2F855A] mb-4">
					About VR Agri Farms
				</h2>
				<p className="text-lg text-[#2D3748] leading-relaxed mb-6">
					At VR Agri Farms, we combine our love for agriculture with a
					commitment to social responsibility, fostering a deep connection with
					nature. As experts in farmland sales and sustainable farming
					practices, we empower individuals to invest in a fulfilling,
					growth-oriented lifestyle rooted in nature.
				</p>
				<Link
					href="/about"
					className="inline-block bg-[#F6BE00] hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md transition">
					Learn More
				</Link>
			</div>
		</section>
	);
}
