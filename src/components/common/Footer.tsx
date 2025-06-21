import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-[#2F855A] text-white mt-12">
			<div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
				{/* Company Info */}
				<div>
					<h3 className="text-lg font-bold mb-2">VR Agri Farms</h3>
					<p className="text-sm">
						Empowering sustainable farming through innovation, nature, and
						community.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h4 className="font-semibold mb-2">Quick Links</h4>
					<ul className="space-y-1 text-sm">
						<li>
							<Link href="/" className="hover:text-[#F6BE00]">
								Home
							</Link>
						</li>
						<li>
							<Link href="/about" className="hover:text-[#F6BE00]">
								About Us
							</Link>
						</li>
						<li>
							<Link href="/projects" className="hover:text-[#F6BE00]">
								Projects
							</Link>
						</li>
						<li>
							<Link href="/contact" className="hover:text-[#F6BE00]">
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Explore */}
				<div>
					<h4 className="font-semibold mb-2">Explore</h4>
					<ul className="space-y-1 text-sm">
						<li>
							<Link href="/blog" className="hover:text-[#F6BE00]">
								Blog
							</Link>
						</li>
						<li>
							<Link href="/gallery" className="hover:text-[#F6BE00]">
								Gallery
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-[#F6BE00]">
								Privacy Policy
							</Link>
						</li>
					</ul>
				</div>

				{/* Contact Info */}
				<div>
					<h4 className="font-semibold mb-2">Contact</h4>
					<p className="text-sm">📍 #101, Dwarakapuri Colony</p>
					<p className="text-sm">Hyderabad, Telangana – 500082</p>
					<p className="text-sm">
						✉️{" "}
						<a
							href="mailto:contact@vrkisanparivaar.com"
							className="hover:text-[#F6BE00]">
							contact@vrkisanparivaar.com
						</a>
					</p>
					<p className="text-sm">
						📞{" "}
						<a href="tel:+919515934289" className="hover:text-[#F6BE00]">
							+91 9515934289
						</a>
					</p>
					<p className="text-sm">
						🌐{" "}
						<a
							href="https://www.vrkisanparivaar.co"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-[#F6BE00]">
							vrkisanparivaar.co
						</a>
					</p>
				</div>
			</div>

			<div className="bg-[#276749] text-sm text-center py-4">
				© {new Date().getFullYear()} VR Agri Farms. All rights reserved.
			</div>
		</footer>
	);
}
