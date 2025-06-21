type SectionHeaderProps = {
	title: string;
	description?: string;
	align?: "center" | "left";
};

export default function AboutBanner
({
	title,
	description,
	align = "center",
}: SectionHeaderProps) {
	const alignment = align === "center" ? "text-center mx-auto" : "text-left";

	return (
		<div className={`max-w-4xl px-4 py-10 ${alignment}`}>
			<h2 className="text-3xl md:text-4xl font-bold text-[#2F855A] mb-4">
				{title}
			</h2>
			{description && (
				<p className="text-lg text-[#2D3748] leading-relaxed">{description}</p>
			)}
		</div>
	);
}
