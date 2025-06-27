import { FaSeedling, FaUsers, FaLeaf, FaTree } from "react-icons/fa";

const features = [
	{
		icon: <FaSeedling size={48} />,
		title: "Sustainable Farming",
		description:
			"Experience the joy of natural cultivation and turn your passion into reality on serene, affordable farmlands.",
	},
	{
		icon: <FaUsers size={48} />,
		title: "Community",
		description:
			"Connect with like-minded nature lovers committed to building a greener planet for future generations.",
	},
	{
		icon: <FaLeaf size={48} />,
		title: "Healing the Environment",
		description:
			"Invest in organic farmlands that reduce chemical use and help create a healthier ecosystem.",
	},
	{
		icon: <FaTree size={48} />,
		title: "Reconnecting with Nature",
		description:
			"Immerse in nature’s peace and rediscover joy in a balanced, sustainable lifestyle.",
	},
];

export default function Sustainability() {
	return (
		<section className="bg-[#2F855A] text-white py-16 px-6">
			<div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-center">
				{features.map((feature, index) => (
					<div
						key={index}
						className="group space-y-4   hover:bg-white/5 transition-all duration-300  p-6">
						<div className="flex justify-center text-white group-hover:text-orange-500 transition duration-300">
							{feature.icon}
						</div>
						<h3 className="text-lg font-semibold text-white group-hover:text-orange-500 transition duration-300">
							{feature.title}
						</h3>
						<p className="text-sm leading-relaxed text-white/80 group-hover:text-white">
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
