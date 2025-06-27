import { FaCheckCircle } from "react-icons/fa";

const features = [
	{
		title: "Trusted Farming Experts",
		description:
			"Our experienced team helps you invest in farmland with full confidence. We have supported many happy clients in building secure farm assets.",
	},
	{
		title: "Eco Friendly Organic Practices",
		description:
			"We grow crops naturally without using harmful chemicals. This keeps the soil healthy and supports a better environment.",
	},
	{
		title: "Complete Farmland Management",
		description:
			"We take care of everything from choosing the land to setting up water systems, fencing, and regular maintenance. You do not need any farming background.",
	},
	{
		title: "Support for Every Investor",
		description:
			"Whether you are new or experienced, our team guides you every step of the way and keeps you updated on your farmland progress.",
	},
	{
		title: "Smooth and Transparent Process",
		description:
			"Our team handles all paperwork and provides regular updates so your investment journey is easy and stress free.",
	},
];

export default function Difference() {
	return (
		<section className="bg-slate-100 text-gray-800 py-16 px-6">
			<div className="max-w-6xl mx-auto space-y-8">
				<h2 className="text-4xl font-bold text-gray-900 ">
					How VR Agri Makes a Difference
				</h2>

				<p className="text-lg text-gray-700 max-w-3xl">
					VR Agri makes it simple to own and enjoy farmland. Whether you want a
					peaceful green space or a smart investment, we offer a complete and
					caring service that puts you first.
				</p>

				<div className="grid md:grid-cols-2 gap-10 pt-4">
					{features.map((item, index) => (
						<div key={index} className="flex items-start gap-4">
							<div className="text-green-600 mt-1">
								<FaCheckCircle size={20} />
							</div>
							<div>
								<h4 className="font-semibold text-lg text-gray-900">
									{item.title}
								</h4>
								<p className="text-gray-700 mt-1 text-sm">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
