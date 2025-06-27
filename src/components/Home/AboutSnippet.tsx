import Link from "next/link";

export default function AboutSnippet() {
	return (
		<section className="bg-slate-100 py-16 px-6">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-4xl font-bold text-gray-700 mb-6">
					About <span className="text-orange-500">VR Agri Farms</span>
				</h2>
				<p className="text-lg text-gray-700 leading-relaxed mb-8">
					At VR Agri Farms, we combine our love for agriculture with a
					commitment to social responsibility—fostering a deeper connection with
					nature. We specialize in farmland sales and sustainable agricultural
					practices, empowering individuals to invest in a growth-oriented,
					nature-aligned lifestyle.
				</p>
				<Link
					href="/about"
					className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300">
					Learn More
				</Link>
			</div>
		</section>
	);
}
