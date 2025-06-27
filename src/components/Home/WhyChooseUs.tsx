import {
	FaLeaf,
	FaHandsHelping,
	FaSeedling,
	FaChartLine,
	FaHandshake,
} from "react-icons/fa";

const items = [
	{
		icon: <FaHandsHelping size={36} className="text-orange-500 mx-auto" />,
		text: "A unique business opportunity in India and internationally.",
	},
	{
		icon: <FaLeaf size={36} className="text-orange-500 mx-auto" />,
		text: "A hybrid model of land ownership and agriculture that fosters sustainability and connects us to our roots.",
	},
	{
		icon: <FaChartLine size={36} className="text-orange-500 mx-auto" />,
		text: "High returns, strong growth potential, and smart portfolio diversification.",
	},
	{
		icon: <FaSeedling size={36} className="text-orange-500 mx-auto" />,
		text: "Our model offers reliable income streams and excellent ROI unlike traditional methods.",
	},
	{
		icon: <FaHandshake size={36} className="text-orange-500 mx-auto" />,
		text: "We partner with a reputed MNC across 9 Indian states ensuring stable returns.",
	},
];

export default function WhyChooseUs() {
	return (
		<section className="bg-white py-20 px-6">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-4xl font-bold text-gray-700 mb-12">
					Why Choose <span className="text-orange-500">VR Agri Farms</span>
				</h2>

				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
					{items.map((item, index) => (
						<div
							key={index}
							className="bg-gray-50 rounded-xl px-6 py-8 shadow-sm hover:shadow-md transition duration-300 text-center">
							{item.icon}
							<p className="mt-4 text-gray-700 text-base leading-relaxed">
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
