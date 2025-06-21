import {
	FaLeaf,
	FaHandsHelping,
	FaSeedling,
	FaChartLine,
	FaHandshake,
} from "react-icons/fa";

const items = [
	{
		icon: <FaHandsHelping size={28} className="text-[#F6BE00]" />,
		text: "A unique business opportunity in India and internationally.",
	},
	{
		icon: <FaLeaf size={28} className="text-[#F6BE00]" />,
		text: "A hybrid model of land ownership and agriculture that enables coexistence with nature and reconnects us with the roots of our elders.",
	},
	{
		icon: <FaChartLine size={28} className="text-[#F6BE00]" />,
		text: "Best Returns, Best Growth Potential, Wealth Protection, and Portfolio Diversification.",
	},
	{
		icon: <FaSeedling size={28} className="text-[#F6BE00]" />,
		text: "Our Business Model ensures a fixed stream of income and excellent ROI (Return on Investment) for our clients unlike other players in the market.",
	},
	{
		icon: <FaHandshake size={28} className="text-[#F6BE00]" />,
		text: "Our exclusive partnership with an MNC across 9 Indian states ensures steady returns.",
	},
];

export default function WhyChooseUs() {
	return (
		<section className="bg-[#FDFCF5] py-16 px-6">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl font-bold text-[#2F855A] mb-10">
					Why Choose VR Agri Farms
				</h2>
				<div className="grid gap-6 md:grid-cols-2 text-left">
					{items.map((item, index) => (
						<div
							key={index}
							className="flex items-start gap-4 bg-white p-6 rounded-md shadow hover:shadow-md transition border-l-4 border-[#F6BE00]">
							<div>{item.icon}</div>
							<p className="text-[#2D3748] text-base leading-relaxed">
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
