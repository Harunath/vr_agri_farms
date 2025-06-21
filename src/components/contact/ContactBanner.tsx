type ContactHeaderProps = {
	title: string;
	description?: string;
};

export default function ContactHeader({
	title,
	description,
}: ContactHeaderProps) {
	return (
		<div className="text-center max-w-3xl mx-auto px-4 py-12">
			<h1 className="text-4xl md:text-5xl font-bold text-[#2F855A] mb-4">
				{title}
			</h1>
			{description && <p className="text-lg text-[#2D3748]">{description}</p>}
		</div>
	);
}
